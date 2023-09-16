import { CartProvider } from "@/context/cartContext";
import "@/globals.css"
import { Layout } from "@/layout"
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </QueryClientProvider>
  )
}