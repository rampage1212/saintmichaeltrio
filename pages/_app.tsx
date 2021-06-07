import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';

import NProgress from 'components/nprogress';

import { Theme, ThemeContext } from 'lib/theme';

import 'styles/fonts.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light');
  useEffect(() => {
    let dark = theme === 'dark';
    if (theme === 'system') {
      const mq = matchMedia('(prefers-color-scheme: dark)');
      if (mq.matches) dark = true;
    }
    if (dark) return document.documentElement.classList.add('dark');
    return document.documentElement.classList.remove('dark');
  }, [theme]);
  useEffect(() => {
    setTheme((prev) => (localStorage.getItem('theme') as Theme) || prev);
  }, []);
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NProgress />
      <Component {...pageProps} />
      <style jsx global>{`
        ::selection {
          background-color: var(--selection);
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        html {
          height: 100%;
          box-sizing: border-box;
          touch-action: manipulation;
          font-feature-settings: 'kern';
        }

        body {
          position: relative;
          min-height: 100%;
          margin: 0;
        }

        html,
        body {
          font-size: 20px;
          line-height: 35px;
          font-family: var(--font-serif);
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: subpixel-antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: var(--background);
          color: var(--on-background);
        }

        button.reset {
          border: unset;
          background: unset;
          padding: unset;
          margin: unset;
          font: unset;
          text-align: unset;
          appearance: unset;
          cursor: pointer;
        }

        a {
          cursor: pointer;
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

        .nowrap {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .loading {
          background-image: linear-gradient(
            270deg,
            var(--accents-1),
            var(--accents-2),
            var(--accents-2),
            var(--accents-1)
          );
          background-size: 400% 100%;
          -webkit-animation: loadingAnimation 8s ease-in-out infinite;
          animation: loadingAnimation 8s ease-in-out infinite;
        }

        @keyframes loadingAnimation {
          0% {
            background-position: 200% 0;
          }
          to {
            background-position: -200% 0;
          }
        }
      `}</style>
      <style jsx global>{`
        :root {
          --font-serif: valkyrie_a, 'Georgia', 'Times New Roman', serif;
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
            'Droid Sans', 'Helvetica Neue', sans-serif;
          --font-mono: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;

          --page-width: 800px;

          --primary: #c84702;
          --on-primary: #fff;
          --background: #fff;
          --on-background: #000;
          --error: #b00020;
          --on-error: #fff;

          --accents-1: #fafafa;
          --accents-2: #eaeaea;
          --accents-3: #999;
          --accents-4: #888;
          --accents-5: #666;
          --accents-6: #444;

          --shadow-small: 0 5px 10px rgba(0, 0, 0, 0.12);
          --shadow-medium: 0 8px 30px rgba(0, 0, 0, 0.12);
          --shadow-large: 0 30px 60px rgba(0, 0, 0, 0.12);

          --selection: #faf3dd;
        }

        .dark {
          --primary: #c84702;
          --on-primary: #fff;
          --background: #000;
          --on-background: #fff;
          --error: #cf6679;
          --on-error: #000;

          --accents-1: #111;
          --accents-2: #333;
          --accents-3: #444;
          --accents-4: #666;
          --accents-5: #888;
          --accents-6: #999;

          --shadow-small: 0 0 0 1px var(--accents-2);
          --shadow-medium: 0 0 0 1px var(--accents-2);
          --shadow-large: 0 0 0 1px var(--accents-2);

          --selection: #c84702;
        }
      `}</style>
    </ThemeContext.Provider>
  );
}
