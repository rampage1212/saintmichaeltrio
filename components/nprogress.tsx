import NProgress from 'nprogress';
import Router from 'next/router';

let timeout: ReturnType<typeof setTimeout>;

Router.events.on('routeChangeStart', (url, { shallow }) => {
  if (shallow) return;
  timeout = setTimeout(() => NProgress.start(), 150);
});
Router.events.on('routeChangeComplete', (url, { shallow }) => {
  if (shallow) return;
  clearTimeout(timeout);
  NProgress.done();
});
Router.events.on('routeChangeError', (err, url, { shallow }) => {
  if (shallow) return;
  clearTimeout(timeout);
  NProgress.done();
});

export default function Progress(): JSX.Element {
  return (
    <style jsx global>{`
      #nprogress {
        pointer-events: none;
      }

      #nprogress .bar {
        background: var(--on-background);
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }

      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px var(--on-background), 0 0 5px var(--on-background);
        opacity: 1;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}</style>
  );
}
