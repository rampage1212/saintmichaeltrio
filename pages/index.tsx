import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

import Page from 'components/page';

import GalaExplaining from 'assets/gala-9-explaining.jpg';

const banner = [
  <span key='trio'>Robin Sharp, violin<br /></span>,
  <span key='valley'>Russell Hancock, piano<br /></span>,
  <span key='music'>Michel Flexer, cello</span>,
];

// TODO: Replace this `any` with the actual `FadeProps` type.
// @see {@link https://github.com/morellodev/react-awesome-reveal/issues/79}
const Fade = dynamic<any>(
  () => import('react-awesome-reveal').then((m) => m.Fade),
  { loading: () => <>{banner}</> }
);

export default function Home(): JSX.Element {
  return (
    <Page name='Home' header={false}>
      <main>
        <section className='hero dark'>
          <Image 
            src={GalaExplaining} 
            alt='A Saint Michael Trio Performance'
            placeholder='blur'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            priority
          />
          <div className='scrim' />
          <header>
            <h1>Saint<br />Michael<br />Trio</h1>
            <h2>Silicon Valley’s update to<br />the classical music scene.</h2>
          </header>
        </section>
        <section className='banner'>
          <h1><Fade cascade>{banner}</Fade></h1>
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
        section.hero {
          position: relative;
          background-color: var(--background);
          padding: 0;
          margin: 0;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      
        .scrim {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }

        section.hero header {
          position: relative;
          max-width: calc(var(--page-width) + 2 * 24px);
          width: 100%;
          padding: 0 24px;
          margin: 0 auto;
        }

        section.hero h1 {
          font-size: 8rem;
          font-weight: 400;
          line-height: 1;
          margin: 1.5rem 0;
          color: var(--on-background);
        }
        
        section.hero h2 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 1.5rem 0;
          color: var(--on-background);
          font-family: var(--font-sans);
        }

        section.banner {
          background: var(--primary);
          margin: 0;
        }

        section.banner h1 {
          font-size: 2.5rem;
          font-weight: 400;
          color: var(--on-primary);
          max-width: calc(var(--page-width) + 2 * 24px);
          padding: 2.5rem 24px;
          margin: auto;
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
      `}</style>
    </Page>
  );
}
