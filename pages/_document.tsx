import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"; // Import Next.js Script component

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/artgarden.png" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
