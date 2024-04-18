import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useMemo } from "react";
import Layout from "@/components/basic/Layout";
import { Provider } from "react-redux";
import store from "@/redux/store";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useMemo(() => new QueryClient(), []); //컴포넌트가 렌더링될 때마다 다시 생성되지 않고 한번만 생성되어 성능 향상!
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Head>
            <title>Artgarden</title>
            <meta
              name="description"
              content="공연, 전시, 팝업스토어 정보 제공 사이트입니다."
            ></meta>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            ></meta>
          </Head>
          <Component {...pageProps} />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  );
}
