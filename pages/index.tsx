import { Fade } from 'react-awesome-reveal';
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
          <h1>
            <Fade cascade triggerOnce>
              <span>
                The Saint Michael Trio
                <br />
              </span>
              <span>
                is Silicon Valley’s update
                <br />
              </span>
              <span>to the classical music scene.</span>
            </Fade>
          </h1>
        </section>
        <section className='about'>
          <p>
            The Saint Michael Trio is hailed as Silicon Valley’s update to the
            classical music scene. Established in 2007, they are considered
            California’s premiere piano trio, and their recordings inspire
            ongoing accolades in the national press. They receive special praise
            for making their concerts interesting, accessible, and often funny.
          </p>
          <p>
            <Link href='/about'>
              <a>Read more about us and our story</a>
            </Link>
          </p>
        </section>
      </main>
      <style jsx>{`
        main > :global(figure:first-child) {
          max-width: calc(var(--page-width) + 2 * 24px);
          padding: 0 24px;
          margin-top: 0;
        }

        section.about {
          max-width: calc(var(--page-width) + 2 * 24px);
          margin: 2.5rem auto;
          padding: 0 24px;
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
          margin: 2.5rem 0;
        }

        section.banner h1 {
          font-size: 2.5rem;
          font-weight: 400;
          color: var(--on-primary);
          max-width: calc(var(--page-width) + 2 * 24px);
          padding: 2.5rem 24px;
          margin: auto;
        }
      `}</style>
    </Page>
  );
}
