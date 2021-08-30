import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';

import NavLink from 'components/nav-link';

import { Callback } from 'lib/callback';

export interface NavProps {
  active: { x: number; width: number };
  setActive: Callback<{ x: number; width: number }>;
}

export default function Nav({ active, setActive }: NavProps): JSX.Element {
  const [visible, setVisible] = useState<boolean>(true);
  const lastScrollPosition = useRef<number>(0);

  useEffect(() => {
    function handleScroll(): void {
      const currentScrollPosition = window.pageYOffset;
      const prevScrollPosition = lastScrollPosition.current;
      lastScrollPosition.current = currentScrollPosition;
      setVisible(() => {
        const scrolledUp = currentScrollPosition < prevScrollPosition;
        const scrolledToTop = currentScrollPosition < 10;
        return scrolledUp || scrolledToTop;
      });
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn({ visible })}>
      <div className='scrim' />
      <ul>
        {!!active.width && <div className='bar' />}
        <NavLink href='/' setActive={setActive}>
          Home
        </NavLink>
        <NavLink href='/concerts' setActive={setActive}>
          Concerts
        </NavLink>
        <NavLink href='/press' setActive={setActive}>
          Press
        </NavLink>
        <NavLink href='/about' setActive={setActive}>
          About
        </NavLink>
        <NavLink
          href='mailto:boxoffice@saintmichaeltrio.com'
          setActive={setActive}
        >
          Contact
        </NavLink>
        <NavLink href='/albums' setActive={setActive}>
          Albums
        </NavLink>
      </ul>
      <style jsx>{`
        nav {
          box-shadow: inset 0 -1px var(--accents-2);
          backdrop-filter: saturate(180%) blur(2px);
          display: flex;
          align-items: center;
          font-family: var(--font-sans);
          position: fixed;
          z-index: 4;
          top: -20px;
          left: 0;
          right: 0;
          opacity: 0;
          transition: top 0.2s ease 0s, opacity 0.2s ease 0s;
        }

        nav.visible {
          opacity: 1;
          top: 0;
        }

        .scrim {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 1px;
          width: 100%;
          background: var(--background);
          opacity: 0.85;
        }

        ul {
          list-style: none;
          max-width: calc(var(--page-width) + 2 * 24px);
          padding: 0 24px;
          margin: 0 auto;
          position: relative;
          width: 100%;
        }

        .bar {
          height: 2px;
          background: var(--on-background);
          position: absolute;
          left: 9px;
          bottom: 0;
          transition: 150ms ease;
          transition-property: width, transform;
          transform: translateX(${active.x - 8}px);
          width: ${active.width}px;
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
    </nav>
  );
}
