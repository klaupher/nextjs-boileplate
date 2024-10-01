import GlobalStyle from '@/styles/global';
import type { AppProps } from 'next/app'
import Head from 'next/head';
 
function App({ Component, pageProps }: AppProps) {
  return (<>
  <Head>
    <title> React Avançado - Boileplate</title>
    <link rel="shortcut icon" href="/img/icon-512.png" type="image/x-icon" />
    <link rel="apple-touch-icon" href="/img/icon-512.png" />
    <meta name="description" content="A simple project started to work with Typescript, React, NextJS and Styled Components" />
  </Head>
  <GlobalStyle />
  <Component {...pageProps} />
  </>)
}

export default App;