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
          margin: 0 12px;
        }

        a {
          font-size: 14px;
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
