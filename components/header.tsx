import NextLink from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

interface LinkProps {
  href: string;
  children: string;
}

function Link({ href, children }: LinkProps): JSX.Element {
  const { pathname } = useRouter();

  return (
    <li>
      <NextLink href={href}>
        <a 
          rel={!href.startsWith('/') ? 'noopener noreferrer' : undefined}
          target={!href.startsWith('/') ? '_blank' : undefined}
          className={cn({ active: pathname === href })}
        >
          {children}
        </a>
      </NextLink>
      <style jsx>{`
        li {
          display: inline;
          float: none;
          margin: 0 0.5rem;
        }

        a {
          font-size: var(--link-size);
        }

        a.active {
          color: var(--on-background);
        }

        @media (max-width: 800px) {
          li {
            white-space: nowrap;
          }

          li:first-of-type {
            margin-left: 0;
          }

          li:last-of-type {
            margin-right: 1rem;
          }
        }
      `}</style>
    </li>
  );
}

export default function Header(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <header>
      <NextLink href='/'>
        <a className={cn('header', { active: pathname === '/' })}><h1>Saint Michael Trio</h1></a>
      </NextLink>
      <nav>
        <ul>
          <Link href='/'>Home</Link>
          <Link href='/concerts'>Concerts</Link>
          <Link href='/press'>Press</Link>
          <Link href='/about'>About</Link>
          <Link href='mailto:boxoffice@saintmichaeltrio.com'>Contact</Link>
          <Link href='/albums'>Albums</Link>
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
          font-size: 2rem;
          font-weight: 400;
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
