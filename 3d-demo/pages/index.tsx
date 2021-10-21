import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainScene from './scene/main'

const Home: NextPage = () => {
  return (
      <MainScene/>
  )
}

export default Home
