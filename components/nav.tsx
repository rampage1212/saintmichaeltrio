import NavLink from 'components/nav-link';

export default function Nav(): JSX.Element {
  return (
    <nav>
      <ul>
        <NavLink href='/'>Home</NavLink>
        <NavLink href='/concerts'>Concerts</NavLink>
        <NavLink href='/press'>Press</NavLink>
        <NavLink href='/about'>About</NavLink>
        <NavLink href='mailto:boxoffice@saintmichaeltrio.com'>Contact</NavLink>
        <NavLink href='/albums'>Albums</NavLink>
      </ul>
      <style jsx>{`
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
    </nav>
  );
}
