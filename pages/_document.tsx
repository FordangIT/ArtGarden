import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script"; // Import Next.js Script component
import { CSSProperties } from "react"; // Import CSSProperties typeㄴ
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/artgarden.png" sizes="any" />
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WLK35VFZ');
          `
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6499853936822237"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WLK35VFZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" } as CSSProperties}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
}
