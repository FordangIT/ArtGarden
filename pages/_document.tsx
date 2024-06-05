import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <script
          defer
          src="https://developers.kakao.com/sdk/js/kakao.min.js"
        ></script> */}
        <link rel="icon" href="/artgarden.png" sizes="any" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
