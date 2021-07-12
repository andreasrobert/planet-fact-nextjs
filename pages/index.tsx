import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Content from '../components/content'
import Footer from '../components/footer'
import { useState } from 'react'


export default function Home() {

  const [rocket, setRocket] = useState("MERCURY")
  console.log(rocket);

  return (
    <div className={styles.container}>
      <Header setRocket={(planet) => setRocket(planet)} rocket={rocket}></Header>
      <Content rocket={rocket}></Content>
      <Footer rocket={rocket}></Footer>
    </div>
  )
}
