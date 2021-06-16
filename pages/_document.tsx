import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

// Prevent FOUC on Firefox due to an age-old script processing bug.
// @see {@link https://nextjs.org/docs/advanced-features/custom-document}
// @see {@link https://github.com/vercel/next.js/issues/22465}

// Also, address the Next.js ESLint warning about custom fonts not here.
// @see {@link https://nextjs.org/docs/messages/no-page-custom-font}
export default class Document extends NextDocument {
  public render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet='UTF-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1.0' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=optional'
            rel='stylesheet'
          />
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
