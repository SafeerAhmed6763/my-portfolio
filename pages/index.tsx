import React from 'react'
import styles from '../styles/Home.module.css'
// @ts-ignore
import Header from '../components/header/index.tsx'
// @ts-ignore
import Main from '../components/main/index.tsx'
import Footer from '../components/footer/index'
import { Container } from '../node_modules/@mui/material/index'

export default function Home() {
  return (
    <Container maxWidth="lg" disableGutters={true}
    style={{ minHeight: "100vh" }} 
    >
       <Header></Header>
       <Main></Main>
       <Footer></Footer>
    </Container>
  )
}
