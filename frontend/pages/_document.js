import React from 'react'

// Next
import { Html, Head as DocumentHead, Main, NextScript } from 'next/document'

const MyDocument = () => (
  <Html lang="fa" dir="rtl">
    <DocumentHead>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#36DBAD" />
      <link rel="manifest" href="/manifest.json" />
    </DocumentHead>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default MyDocument
