import Image from 'next/image';

import NavLink from 'components/nav-link';
import Page from 'components/page';

import AcknowledgingApplause from 'assets/acknowledging-applause.jpg';
import GalaExplaining from 'assets/gala-9-explaining.jpg';
import GalaPointingUp from 'assets/gala-10-pointing-up.jpg';

export default function Home(): JSX.Element {
  return (
    <Page name='Home' header={false}>
      <main>
        <section className='hero dark'>
          <div className='images'>
            {[GalaPointingUp, GalaExplaining, AcknowledgingApplause].map(
              (img) => (
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
              )
            )}
          </div>
          <div className='scrim' />
          <header>
            <h1>
              Saint
              <br />
              Michael
              <br />
              Trio
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
        <nav>
          <ul>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/concerts'>Concerts</NavLink>
            <NavLink href='/press'>Press</NavLink>
            <NavLink href='/about'>About</NavLink>
            <NavLink href='mailto:boxoffice@saintmichaeltrio.com'>
              Contact
            </NavLink>
            <NavLink href='/albums'>Albums</NavLink>
          </ul>
        </nav>
      </main>
      <style jsx>{`
        section.hero {
          position: relative;
          background-color: var(--background);
          padding: 0;
          margin: 0;
          min-height: calc(100vh - 36px);
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
          margin: 2rem auto;
        }

        section.hero h1 {
          font-size: 8rem;
          font-weight: 900;
          letter-spacing: -0.35rem;
          text-transform: uppercase;
          line-height: 0.85;
          margin: 3rem 0;
          font-family: var(--font-sans);
          color: var(--on-background);
          animation-duration: 1s;
          animation-name: fade;
          animation-fill-mode: both;
        }

        section.hero h2 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.05rem;
          margin: 3rem 0 1rem;
          color: var(--on-background);
          font-family: var(--font-sans);
          animation-delay: 0.2s;
          animation-duration: 1s;
          animation-name: fade;
          animation-fill-mode: both;
        }

        section.hero h3 {
          font-size: 0.8rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 1rem 0 3rem;
          color: var(--on-background);
          font-family: var(--font-sans);
          animation-delay: 0.2s;
          animation-duration: 1s;
          animation-name: fade;
          animation-fill-mode: both;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: translate(0, 0.85rem);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }

        .images {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .images > :global(div) {
          animation-name: img-fade;
          animation-iteration-count: infinite;
          animation-duration: 12s;
        }

        .images > :global(div:nth-child(2)) {
          animation-delay: -8s;
        }

        .images > :global(div:nth-child(3)) {
          animation-delay: -4s;
        }

        @keyframes img-fade {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          33% {
            opacity: 1;
          }
          53% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        nav {
          display: flex;
          align-items: center;
          height: 36px;
          margin-bottom: -2rem;
          font-family: var(--font-sans);
          background: var(--primary);
        }

        nav :global(a) {
          color: var(--on-primary);
        }

        nav :global(a:hover),
        nav :global(a.active) {
          color: var(--on-primary);
        }

        ul {
          list-style: none;
          width: 100%;
          max-width: calc(var(--page-width) + 2 * 24px);
          padding: 0 24px;
          margin: 0 auto;
        }

        @media (max-width: 800px) {
          nav {
            max-width: 100%;
            margin: auto;
            align-items: flex-end;
            overflow: auto;
            scrollbar-width: none;
            justify-content: flex-start;
          }

          ul {
            display: flex;
            flex-grow: 1;
            transform: translateZ(0);
            margin-right: 0;
            align-items: center;
            justify-content: center;
          }
        }
      `}</style>
    </Page>
  );
}
