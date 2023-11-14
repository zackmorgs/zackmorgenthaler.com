import { Html, Head, Main, NextScript } from 'next/document'
import Link from 'next/link'
import React, { Component, StrictMode } from 'react'



export default function Document() {
  return (
    <StrictMode>
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" display="optional" />
        </Head>
        <body>
          <div className="bg">
            <div className="wave" id="wave-1"></div>
            <div className="wave" id="wave-2"></div>
            <div className="wave" id="wave-3"></div>
            <div className="wave" id="wave-4"></div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    </StrictMode>
  )
}