import NavLink from 'components/nav-link';

import { Callback } from 'lib/callback';

export interface NavProps {
  active: { x: number; width: number };
  setActive: Callback<{ x: number; width: number }>;
}

export default function Nav({ active, setActive }: NavProps): JSX.Element {
  return (
    <nav>
      <ul>
        <div className='bar' />
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
          box-shadow: 0 -1px 24px rgba(0, 0, 0, 0.25);
          display: flex;
          align-items: center;
          font-family: var(--font-sans);
          background: var(--on-background);
          position: fixed;
          z-index: 4;
          bottom: 0;
          left: 0;
          right: 0;
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
          background: var(--background);
          position: absolute;
          left: 9px;
          bottom: 0;
          transition: 0.15s ease;
          transition-property: width, transform;
          transition-duration: 150ms;
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
