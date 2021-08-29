import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

export default function Header(): JSX.Element {
  const { pathname } = useRouter();

  return (
    <header>
      <Link href='/'>
        <a className={cn({ active: pathname === '/' })}>
          <h1>Saint Michael Trio</h1>
        </a>
      </Link>
      <style jsx>{`
        header {
          width: 100%;
          max-width: calc(var(--page-width) + 2 * 1rem);
          margin: 2rem auto;
          line-height: 1;
        }

        a {
          text-decoration: none;
          color: var(--on-background);
        }

        h1 {
          font-size: 2.5rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -0.05rem;
          text-align: center;
          margin: 0;
        }
      `}</style>
    </header>
  );
}
