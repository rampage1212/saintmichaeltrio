import NextLink from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

export interface LinkProps {
  href: string;
  children: string;
}

export default function Link({ href, children }: LinkProps): JSX.Element {
  const { pathname } = useRouter();

  return (
    <li>
      <NextLink href={href}>
        <a className={cn({ active: pathname === href })}>{children}</a>
      </NextLink>
      <style jsx>{`
        li {
          display: inline;
          float: none;
          margin: 0 12px;
        }

        a {
          cursor: pointer;
          font-size: 14px;
          text-decoration: none;
          color: var(--accents-5);
          transition: color 0.2s ease 0s;
        }

        a:hover {
          color: var(--foreground);
        }

        a.active {
          color: var(--foreground);
          cursor: not-allowed;
        }

        @media (max-width: 800px) {
          li {
            white-space: nowrap;
          }

          li:first-of-type {
            margin-left: 0;
          }

          li:last-of-type {
            margin-right: 24px;
          }
        }
      `}</style>
    </li>
  );
}
