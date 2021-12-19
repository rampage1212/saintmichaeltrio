import Image from 'next/image';

import Page from 'components/page';

import Debut from 'photos/albums/debut.jpg';
import FrenchFusion from 'photos/albums/french-fusion.jpg';
import MusicOfAmericas from 'photos/albums/music-of-americas.jpg';
import Warning from 'photos/albums/warning.jpg';

interface AlbumLinkProps {
  href: string;
  children: string;
}

function AlbumLink({ href, children }: AlbumLinkProps): JSX.Element {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {children}
      <style jsx>{`
        a {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 700;
          display: inline-block;
          padding: 0.25rem 0.5rem;
          color: var(--background);
          background: var(--on-background);
          transition: transform 350ms ease;
          border-radius: 0.25rem;
          margin-top: 8px;
        }

        a:not(:first-child):not(:last-child) {
          margin-right: 8px;
        }

        a:hover {
          color: var(--background);
          transform: scale(0.97);
        }
      `}</style>
    </a>
  );
}

interface Review {
  qoute: string;
  cite: string;
}

interface AlbumProps {
  cover: { src: string; height: number; width: number };
  priority?: boolean;
  title: string;
  amazon?: string;
  itunes?: string;
  spotify?: string;
  youtube?: string;
  reviews: Review[];
  description: string;
}

function Album({
  cover,
  priority,
  title,
  amazon,
  itunes,
  spotify,
  youtube,
  reviews,
  description,
}: AlbumProps): JSX.Element {
  return (
    <li>
      <div className='wrapper'>
        <div className='album'>
          <Image
            src={cover}
            alt={`${title} Cover`}
            priority={priority}
            placeholder='blur'
            height={360}
            width={360}
          />
        </div>
        <article>
          <h2>{title}</h2>
          <p>{description}</p>
          {reviews.map(({ qoute, cite }) => (
            <figure key={cite.toLowerCase().split(' ').join('-')}>
              <blockquote>{qoute}</blockquote>
              <figcaption>
                —<cite>{cite}</cite>
              </figcaption>
            </figure>
          ))}
          {spotify && <AlbumLink href={spotify}>Spotify</AlbumLink>}
          {youtube && <AlbumLink href={youtube}>YouTube</AlbumLink>}
          {amazon && <AlbumLink href={amazon}>Amazon</AlbumLink>}
          {itunes && <AlbumLink href={itunes}>Apple Music</AlbumLink>}
        </article>
      </div>
      <style jsx>{`
        li {
          padding: 2rem 0;
          margin: 0;
        }

        li:last-child {
          padding-bottom: 0;
        }

        .wrapper {
          display: flex;
          font-size: 16px;
        }

        .album {
          flex: none;
          width: 360px;
          margin-right: 1.25rem;
        }

        .album > :global(div:first-child) {
          border: 1px solid var(--accents-2);
          background: var(--accents-1);
        }

        figure {
          margin: 0.5rem 0;
          color: var(--accents-5);
        }

        blockquote {
          margin: 0;
        }

        blockquote::before {
          content: '“';
        }

        blockquote::after {
          content: '”';
        }

        h2 {
          font-size: 1rem;
          margin: 0;
        }

        p {
          margin: 0.5rem 0;
        }
      `}</style>
    </li>
  );
}

export default function Albums(): JSX.Element {
  return (
    <Page name='Albums'>
      <main>
        <ul>
          <Album
            priority
            cover={MusicOfAmericas}
            title='Music of Americas'
            spotify='https://open.spotify.com/album/2wkoBMw29tsLF0k74BWxJc'
            youtube='https://www.youtube.com/watch?v=FR68x8QaPpA&list=OLAK5uy_nRL-7OZy7HPqsRd--ECOsmK-uHOBM3oF4'
            amazon='https://www.amazon.com/gp/product/B073W1RVGS/ref=dm_ws_sp_ps_dp'
            description='Saint Mike’s 4th album celebrates music of the western hemisphere: Argentinian tangos! Brazilian jazz! Canadian panache and more! David Rokeach (drums), Pat Klobas (bass) and Gene Burkert (saxophone) add zest on select tracks.'
            reviews={[
              {
                qoute:
                  "They're a disruptively hip combo with an old-school name. Only a very few trios out there can undertake music such as this, but Saint Mike has swallowed it whole.",
                cite: 'Glen Roven, Emmy-winning composer',
              },
            ]}
          />
          <Album
            priority
            cover={FrenchFusion}
            title='French Fusion'
            spotify='https://open.spotify.com/album/3Mvb5INYiWcxLKigH7BdzM'
            youtube='https://www.youtube.com/watch?v=xfrsgq7ZYZs&list=OLAK5uy_nFKz4HFhXtn4KLdulWxisb8KmSpRUiTgk'
            amazon='http://www.amazon.com/gp/product/B00761PGGY/ref=dm_dp_cdp?ie=UTF8&s=music&qid=1335846168&sr=1-1'
            itunes='http://itunes.apple.com/us/album/french-fusion-crossover-jazz/id493987652'
            description='In their third album, the Saint Michael Trio are joined by David Rokeach (drums) and Pat Klobas (bass) for a romp through the fusion jazz of French legend Claude Bolling.'
            reviews={[
              {
                qoute:
                  "It's a frenchified style of California cooking that's fabulous. It's lyricism and verve delivered by a boy band that has become the musical embodiment of Silicon Valley.",
                cite: 'David Benoit, Jazz great',
              },
              {
                qoute:
                  'The Saint Michael Trio has brought a wonderful new dimension to my music.',
                cite: 'Claude Bolling',
              },
            ]}
          />
          <Album
            cover={Warning}
            title='Warning: May Cause Mood Swings'
            spotify='https://open.spotify.com/album/6sg6B5Cnou4e2GI5EpTRT4'
            youtube='https://www.youtube.com/watch?v=f71eP5jv8JA&list=OLAK5uy_npNb-O-MBd0YzMho6446Kuq_c6Akn0thI'
            amazon='http://www.amazon.com/Warning-May-Cause-Mood-Swings/dp/B005ZNCK64/ref=sr_1_1?ie=UTF8&qid=1321804927&sr=8-1'
            itunes='http://itunes.apple.com/us/album/warning-may-cause-mood-swings/id477677533'
            description='In their second album Saint Mike messes with your moods, alternating spunky, witty repertoire with music that is poignant or plaintive.'
            reviews={[
              {
                qoute:
                  'This is music that grabs you by the throat. Saint Mike will make you laugh, and then do something so deep or profound it will have you staring into the distance, shaking off shivers.',
                cite: 'Angela McConnell, Montalvo',
              },
              {
                qoute: 'This is not your regular trio.',
                cite: 'Audiophile',
              },
              {
                qoute: 'These guys are good. Very good.',
                cite: 'Fanfare Magazine',
              },
            ]}
          />
          <Album
            cover={Debut}
            title='Debut'
            spotify='https://open.spotify.com/album/3JcANJHr9rTHAMgLE4IBYe'
            youtube='https://www.youtube.com/watch?v=NPcohg09Fg0&list=OLAK5uy_loNmti7596AuRuhUfdyYfXmoW62ThJqao'
            amazon='http://www.amazon.com/Daniel-violin-violoncello-Russell-Hancock/dp/B001KT34XK/ref=sr_1_1?ie=UTF8&qid=1298010318&sr=8-1'
            itunes='http://itunes.apple.com/us/album/debut/id295959810'
            description='Saint Mike’s debut album is a tour de force of the classical repertoire—Mendelssohn, Brahms, Debussy and more.'
            reviews={[
              {
                qoute:
                  'There’s a new sound coming out of Silicon Valley. Call them Silicon Valley’s hot new sensation—if these guys were a company I’d buy stock.',
                cite: 'Sal Pizarro, San Jose Mercury News',
              },
              {
                qoute:
                  'This new trio is a top-flight professional ensemble, with playing that is equal to—and in some cases surpasses—the celebrated piano trio ensembles.',
                cite: 'Fanfare Magazine',
              },
            ]}
          />
        </ul>
      </main>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        ul > :global(li:nth-child(odd)) {
          background: var(--accents-1);
          border-top: 1px solid var(--accents-2);
          border-bottom: 1px solid var(--accents-2);
        }
      `}</style>
    </Page>
  );
}
