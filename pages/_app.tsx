import React from 'react'
import '../styles/globals.css'
import Head from "next/head"
import Layout from '../components/layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta name='theme-color' content='red' />
      </Head>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}
