import { Head, Html, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta property="og:title" content="前端面試血淚" key="ogtitle" />
        <meta property="og:type" content="website" key="ogtype" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}