import { useEffect, useState } from 'react';
import Image from 'next/image';

import NavLink from 'components/nav-link';
import Page from 'components/page';

import AcknowledgingApplause from 'assets/acknowledging-applause.jpg';
import ApprehendingMendelssohn from 'assets/apprehending-mendelssohn.jpg';
import GalaExplaining from 'assets/gala-9-explaining.jpg';
import GalaPointingUp from 'assets/gala-10-pointing-up.jpg';

export default function Home(): JSX.Element {
  const [image, setImage] = useState(GalaPointingUp);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage((prev) => {
        const images = [
          GalaPointingUp,
          GalaExplaining,
          AcknowledgingApplause,
          ApprehendingMendelssohn,
        ];
        const idx = images.indexOf(prev);
        return idx < images.length - 1 ? images[idx + 1] : images[0];
      });
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Page name='Home' header={false}>
      <main>
        <section className='hero dark'>
          <Image 
            src={image} 
            alt=''
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
        <nav>
          <ul>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/concerts'>Concerts</NavLink>
            <NavLink href='/press'>Press</NavLink>
            <NavLink href='/about'>About</NavLink>
            <NavLink href='mailto:boxoffice@saintmichaeltrio.com'>Contact</NavLink>
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
          min-height: calc(100vh - 96px);
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
          animation-duration: 1s;
          animation-name: fade;
          animation-fill-mode: both;
        }
        
        section.hero h2 {
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.2;
          margin: 1.5rem 0;
          color: var(--on-background);
          font-family: var(--font-sans);
          animation-delay: 0.45s;
          animation-duration: 1s;
          animation-name: fade;
          animation-fill-mode: both;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: translate(-0.5rem, 0);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
          height: 96px;
          margin-bottom: -2rem;
          border-top: 1px solid var(--accents-2);
          font-family: var(--font-sans);
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 0;
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
