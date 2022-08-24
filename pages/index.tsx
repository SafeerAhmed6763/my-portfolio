import React from 'react'
import styles from '../styles/Home.module.css'
import Header from '../components/header/index.tsx'

export default function Home() {
  return (
    <div className={styles.container}>
       <Header></Header>
    </div>
  )
}
