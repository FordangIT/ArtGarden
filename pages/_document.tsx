import { Html, Head, Main, NextScript } from "next/document";
export const metadata = {
  title: "artgarden",
  description: "공연/전시/팝업스토어 정보 공유 웹사이트",
};
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
