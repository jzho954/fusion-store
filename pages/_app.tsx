import '@/app/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
    </>
  )
}