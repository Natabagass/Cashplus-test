import "@/globals.css"
import { Layout } from "@/layout"
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}