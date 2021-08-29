import { useEffect, useRef } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

import { Callback } from 'lib/callback';

export interface NavLinkProps {
  href: string;
  children: string;
  setActive?: Callback<{ x: number; width: number }>;
}

export default function NavLink({
  href,
  children,
  setActive,
}: NavLinkProps): JSX.Element {
  const { pathname } = useRouter();
  const ref = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (pathname === href && ref.current && setActive)
      setActive({ x: ref.current.offsetLeft, width: ref.current.clientWidth });
  }, [pathname, href, setActive]);

  return (
    <li ref={ref}>
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
          display: inline-block;
          margin: 0 0.5rem;
          float: none;
        }

        li:first-of-type {
          margin-left: 0;
        }

        li:last-of-type {
          margin-right: 0;
        }

        a {
          display: block;
          font-size: var(--link-size);
          color: var(--accents-3);
          padding: 0.5rem 0;
        }

        a:hover,
        a.active {
          color: var(--background);
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
