import Image from 'next/image';

import Page from 'components/page';

import Applause from 'assets/acknowledging-applause.jpg';
import Gala13 from 'assets/gala-13-setting-show-from-far-away.jpg';
import Gala14 from 'assets/gala-14.jpg';
import Gala9 from 'assets/gala-9-robin-and-michael.jpg';
import GalaPointingUp from 'assets/gala-10-pointing-up.jpg';

const duration = 4;
const images = [Gala13, Gala14, Gala9, GalaPointingUp, Applause];

export default function Home(): JSX.Element {
  return (
    <Page name='Home' header={false}>
      <main>
        <section className='hero dark'>
          <div className='images'>
            {images.map((img) => (
              <Image
                alt=''
                src={img}
                key={img.src}
                placeholder='blur'
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                priority
              />
            ))}
          </div>
          <div className='scrim' />
          <header>
            <h1>
              <span>Saint</span>
              <br />
              <span>Michael</span>
              <br />
              <span>Trio</span>
            </h1>
            <h2>
              Silicon Valley’s update to
              <br />
              the classical music scene
            </h2>
            <h3>
              Robin Sharp, violin; Russell Hancock, piano; Michel Flexer, cello
            </h3>
          </header>
        </section>
      </main>
      <style jsx>{`
        section.hero {
          position: relative;
          background-color: var(--background);
          padding: 0;
          margin: 0;
          min-height: 100vh;
          margin-bottom: -2rem;
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
          background: rgba(0, 0, 0, 0.25);
        }

        section.hero header {
          position: relative;
          max-width: calc(var(--page-width) + 2 * 24px);
          width: 100%;
          padding: 0 24px;
          margin: 2rem auto;
        }

        section.hero header * {
          animation-name: fade;
          animation-duration: 1s;
          animation-fill-mode: both;
          animation-timing-function: ease;
        }

        section.hero h1 {
          font-size: 6rem;
          font-weight: 900;
          letter-spacing: -0.25rem;
          text-transform: uppercase;
          line-height: 0.85;
          margin: 3rem 0;
          font-family: var(--font-sans);
          color: var(--on-background);
        }

        section.hero h1 span:nth-of-type(1) {
          animation-delay: 0;
        }

        section.hero h1 span:nth-of-type(2) {
          animation-delay: 0.5s;
        }

        section.hero h1 span:nth-of-type(3) {
          animation-delay: 1s;
        }

        section.hero h2 {
          font-size: 2rem;
          letter-spacing: -0.05rem;
          margin: 3rem 0 1rem;
        }

        section.hero h3 {
          font-size: 0.8rem;
          margin: 1rem 0 3rem;
        }

        section.hero h2,
        section.hero h3 {
          font-weight: 700;
          line-height: 1.2;
          color: var(--on-background);
          font-family: var(--font-sans);
          animation-delay: 1.5s;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: scale(0.99);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .images {
          position: absolute;
          overflow: hidden;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .images > :global(div) {
          animation-name: fadeinout;
          animation-duration: ${images.length * duration}s;
          animation-timing-function: ease;
          animation-iteration-count: infinite;
          opacity: 0;
        }

        .images > :global(div:nth-child(1)) {
          animation-delay: ${0 * images.length * duration}s;
        }

        .images > :global(div:nth-child(2)) {
          animation-delay: ${0.2 * images.length * duration}s;
        }

        .images > :global(div:nth-child(3)) {
          animation-delay: ${0.4 * images.length * duration}s;
        }

        .images > :global(div:nth-child(4)) {
          animation-delay: ${0.6 * images.length * duration}s;
        }

        .images > :global(div:nth-child(5)) {
          animation-delay: ${0.8 * images.length * duration}s;
        }

        @keyframes fadeinout {
          0% {
            opacity: 0;
            transform: scale(0.98);
          }
          2%,
          20% {
            opacity: 1;
            transform: scale(1);
          }
          22%,
          100% {
            opacity: 0;
            transform: scale(1.02);
          }
        }
      `}</style>
    </Page>
  );
}
