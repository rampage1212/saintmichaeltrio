import NextLink from 'next/link';

import DarkIcon from 'components/icons/dark';
import LightIcon from 'components/icons/light';
import SystemIcon from 'components/icons/system';

import Select from 'components/select';

import { useTheme } from 'lib/theme';

interface LinkProps {
  href: string;
  children: string;
}

function Link({ href, children }: LinkProps): JSX.Element {
  return (
    <li>
      <NextLink href={href}>
        <a>{children}</a>
      </NextLink>
      <style jsx>{`
        li {
          padding: 8px 0;
        }

        a {
          cursor: pointer;
          font-size: 14px;
          text-decoration: none;
          color: var(--accents-5);
          transition: color 0.2s ease 0s;
        }

        a:hover {
          color: var(--on-background);
        }
      `}</style>
    </li>
  );
}

interface GroupProps {
  label: string;
  children: JSX.Element[];
}

function Group({ label, children }: GroupProps): JSX.Element {
  const id = label.toLowerCase().split(' ').join('-');

  return (
    <div>
      <input id={id} type='checkbox' aria-label={label} />
      <label htmlFor={id}>
        <h2>{label}</h2>
      </label>
      <ul>{children}</ul>
      <style jsx>{`
        input {
          border: 0;
          padding: 0;
          clip: rect(0 0 0 0);
          clip-path: inset(100%);
          height: 1px;
          width: 1px;
          margin: -1px;
          overflow: hidden;
          position: absolute;
          appearance: none;
          white-space: nowrap;
          word-wrap: normal;
        }

        div:not(:last-of-type) {
          margin-right: 24px;
        }

        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        h2 {
          font-weight: 400;
          font-size: 14px;
          margin: 8px 0;
        }

        @media (max-width: 960px) {
          div {
            margin-right: 0 !important;
            border-bottom: 1px solid var(--accents-2);
          }

          ul {
            padding-left: 12px;
            padding-bottom: 12px;
            display: none;
          }

          input:checked ~ ul {
            display: block;
          }

          h2 {
            cursor: pointer;
          }

          h2::after {
            content: '+';
            float: right;
            transition: transform 0.15s ease;
          }

          input:checked ~ label h2::after {
            transform: rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
}

export default function Footer(): JSX.Element {
  const { theme, setTheme } = useTheme();

  return (
    <footer>
      <nav role='navigation'>
        <Group label='Socials'>
          <Link href='https://facebook.com/saintmichaeltrio'>Facebook</Link>
          <Link href='https://youtube.com/watch?v=XiFeG3_ZLAI&list=PLTDzG3mNIQ5JfGnczTADFc9kpHDGPSjc4'>YouTube</Link>
        </Group>
        <Group label='Listen'>
          <Link href='https://open.spotify.com/artist/1z1XyquAZf9KoCk9GTUMIF'>Spotify</Link>
          <Link href='https://itunes.apple.com/us/artist/saint-michael-trio/477677579'>Apple Music</Link>
          <Link href='https://music.youtube.com/channel/UCB-XygzAOUOCaUo43gMZC4A'>YouTube Music</Link>
          <Link href='https://iheart.com/artist/saint-michael-trio-31431075/?autoplay=true'>iHeart Radio</Link>
          <Link href='https://deezer.com/us/artist/12730889?autoplay=true'>Deezer</Link>
        </Group>
        <Group label='Read'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/press'>Press</Link>
        </Group>
        <Group label='Useful Links'>
          <Link href='mailto:boxoffice@saintmichaeltrio.com'>Contact</Link>
          <Link href='https://github.com/nicholaschiang/st-michael-trio'>Source</Link>
        </Group>
      </nav>
      <section>
        <span>Copyright &copy; 2021 Saint Michael Trio. All rights reserved.</span>
        <Select
          small
          value={theme}
          onChange={setTheme}
          label='Change color theme'
          options={[
            {
              value: 'system',
              label: 'System',
              icon: <SystemIcon />,
            },
            {
              value: 'dark',
              label: 'Dark',
              icon: <DarkIcon />,
            },
            {
              value: 'light',
              label: 'Light',
              icon: <LightIcon />,
            },
          ]}
        />
      </section>
      <style jsx>{`
        footer {
          background: var(--accents-1);
          border-top: 1px solid var(--accents-2);
          font-family: var(--font-sans);
          padding: 36px 24px 24px;
          line-height: 1;
        }

        nav {
          max-width: var(--page-width);
          margin: 0 auto;
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
        }

        section {
          max-width: var(--page-width);
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0;
        }

        span {
          color: var(--accents-5);
          font-size: 14px;
        }

        @media (max-width: 960px) {
          nav {
            flex-direction: column;
          }

          section {
            flex-direction: column;
            justify-content: center;
          }

          span {
            margin-bottom: 24px;
          }
        }
      `}</style>
    </footer>
  );
}
