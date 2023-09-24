import React from 'react'

// Next
import Head from 'next/head'

// Styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <title>حال خوب</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
