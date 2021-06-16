import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

export interface NavLinkProps {
  href: string;
  children: string;
}

export default function NavLink({ href, children }: NavLinkProps): JSX.Element {
  const { pathname } = useRouter();

  return (
    <li>
      <Link href={href}>
        <a 
          rel={!href.startsWith('/') ? 'noopener noreferrer' : undefined}
          target={!href.startsWith('/') ? '_blank' : undefined}
          className={cn({ active: pathname === href })}
        >
          {children}
        </a>
      </Link>
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
