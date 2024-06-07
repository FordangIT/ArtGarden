import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"; // Import Next.js Script component

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add the Google AdSense script using Next.js Script component */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6499853936822237"
          crossOrigin="anonymous" // Correct attribute name
        />
        <link rel="icon" href="/artgarden.png" sizes="any" />
        <meta
          name="google-adsense-account"
          content="ca-pub-6499853936822237"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
