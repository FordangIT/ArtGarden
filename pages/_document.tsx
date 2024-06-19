// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { CSSProperties } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/artgarden.png" sizes="any" />

        {/* Google Tag Manager */}
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

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6499853936822237"
          crossOrigin="anonymous"
        />

        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-D6G0W6C3RZ"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-D6G0W6C3RZ');
            `
          }}
        />
        <meta
          property="og:image"
          content="https://agimage.s3.ap-northeast-2.amazonaws.com/pubao/447547966_2114396732275845_3278566807781733724.jpg"
        />
        <meta
          property="og:title"
          content="Artgarden의 멋진 공연, 전시, 팝업스토어를 확인해보세요!"
        />
        <meta
          property="og:description"
          content="여러분의 여가생활을 풍부하게 만들어줄 다양한 정보들이 기다리고 있습니다."
        />
        <meta property="og:url" content="https://artgarden.co.kr/" />

        {/* 예시: 카카오 SDK 스크립트를 추가합니다 */}
        <script
          src="https://developers.kakao.com/sdk/js/kakao.js"
          async
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
