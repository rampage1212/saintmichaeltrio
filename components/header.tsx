import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

import NavLink from 'components/nav-link';

export default function Header(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <header>
      <Link href='/'>
        <a className={cn('header', { active: pathname === '/' })}><h1>Saint Michael Trio</h1></a>
      </Link>
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
      <style jsx>{`
        header {
          width: 100%;
          max-width: calc(var(--page-width) + 2 * 1rem);
          margin: 2rem auto 1.5rem;
          line-height: 1;
        }

        a.header {
          text-decoration: none;
          color: var(--on-background);
        }

        a.header > h1 {
          font-size: 2.5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.05rem;
          text-align: center;
          margin: 1rem 0;
        }

        nav {
          display: flex;
          align-items: center;
          padding: 0 1rem;
          justify-content: center;
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
    </header>
  );
}
