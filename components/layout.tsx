import React from 'react'
import Header from './header'
import Footer from './footer'

export default function layout({ children }): JSX.Element {
  return (
    <div>
      <Header />
      <main>{ children }</main>
      <Footer />
    </div>
  )
}
