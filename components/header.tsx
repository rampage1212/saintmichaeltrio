import Link from 'components/link';

import PageId from 'lib/page';

export interface HeaderProps {
  page: PageId;
}

export default function Header({ page }: HeaderProps): JSX.Element {
  return (
    <header>
      <h1>Saint Michael Trio</h1>
      <nav>
        <ul>
          <Link href='/'>Home</Link>
          <Link href='/concerts'>Concerts</Link>
          <Link href='/video'>Video</Link>
          <Link href='/press'>Press</Link>
          <Link href='/about'>About</Link>
          <Link href='mailto:boxoffice@saintmichaeltrio.com'>Contact</Link>
          <Link href='/albums'>Albums</Link>
        </ul>
      </nav>
      <style jsx>{`
        header {
          width: 100%;
          max-width: calc(var(--page-width) + 2 * 24px);
          margin: 0 auto;
        }

        h1 {
          font-size: 48px;
          text-align: center;
          padding: 48px 24px 24px;
          margin: 0;
        }

        nav {
          display: flex;
          align-items: center;
          padding: 0 24px;
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