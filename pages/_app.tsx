import CartProvider from "@/context/cartContext";
import "@/globals.css"
import { Layout } from "@/layout"
import type { AppProps } from 'next/app'
import Head from "next/head";
import NextjsProgressbar from "nextjs-progressbar";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/infruit.png" type="image/x-icon" />
        <meta title='Infruit' />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />

        <meta name="keywords" content="" />
        <meta name="author" content="Infruit" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>

      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <NextjsProgressbar />
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </CartProvider>
    </>
  )
}