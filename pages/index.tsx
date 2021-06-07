import Link from 'next/link';

import Figure from 'components/figure';
import Page from 'components/page';

export default function Home(): JSX.Element {
  return (
    <Page name='Home'>
      <main>
        <Figure
          alt='A Saint Michael Trio Performance'
          src='/imgs/gala-9-explaining.jpg'
          height={563}
          width={870}
          priority
        >
          Robin Sharp, violin; Russell Hancock, piano; Michel Flexer, cello
        </Figure>
        <section className='banner'>
          <h1>The Saint Michael Trio<br />is Silicon Valley’s update<br />to the classical music scene.</h1>
        </section>
        <section className='about'>
          <p>The Saint Michael Trio is hailed as Silicon Valley’s update to the classical music scene. Established in 2007, they are considered California’s premiere piano trio, and their recordings inspire ongoing accolades in the national press. They receive special praise for making their concerts interesting, accessible, and often funny.</p>
          <p>
            <Link href='/about'>
              <a>Read more about our story</a>
            </Link>
          </p>
        </section>
      </main>
      <style jsx>{`
        main > :global(figure) {
          max-width: calc(var(--page-width) + 2 * 24px);
          margin: 24px auto 48px;
          padding: 0 24px;
        }
        
        section.about {
          max-width: calc(var(--page-width) + 2 * 24px);
          padding: 24px;
          margin: auto;
        }

        p {
          margin: 24px 0;
        }

        a::after {
          content: '→';
          display: inline-block;
          transform: translate(4px);
          transition: transform 0.2s ease 0s;
        }

        a:hover::after {
          transform: translate(8px);
        }

        section.banner {
          background: var(--primary);
        }

        section.banner h1 {
          font-size: 48px;
          font-weight: 400;
          line-height: 72px;
          color: var(--on-primary);
          max-width: calc(var(--page-width) + 2 * 24px);
          padding: 48px 24px;
          margin: auto;
        }
      `}</style>
    </Page>
  );
}
