import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useMemo } from "react";
import Layout from "@/components/basic/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useMemo(() => new QueryClient(), []); //컴포넌트가 렌더링될 때마다 다시 생성되지 않고 한번만 생성되어 성능 향상!
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Layout>
    </QueryClientProvider>
  );
}
