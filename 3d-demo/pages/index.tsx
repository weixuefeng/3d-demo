/*
 * @Author: pony@diynova.com
 * @Date: 2021-10-21 15:59:54
 * @LastEditors: pony@diynova.com
 * @LastEditTime: 2021-12-14 16:18:41
 * @FilePath: /3d-demo-start/3d-demo/pages/index.tsx
 * @Description: 
 */
import type { NextPage } from 'next'
import React, { useState, useEffect, PointerEventHandler } from 'react'
import Loading from '../components/loading/Loading'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainScene from '../scene/main'

const Home: NextPage = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const handleLockchange = () => {
      if (document.pointerLockElement === null) {
        setReady(false)
      } else {
        setReady(true)
      }
    }

    document.addEventListener('pointerlockchange', handleLockchange)
    return () => {
      document.removeEventListener('pointerlockchange', handleLockchange)
    }
  })

  return (
    <>
      <MainScene />
      <div className={ready ? '' : 'overlay'}>
        <div className={'start'}>Click to Explore</div>
        <img
          className={ready ? '' : 'controlsL'}
          src="./assets/Images/ControlsL.png"
          alt="Move: WASD	Jump: SPACE Run: SHIFT"
        ></img>
        <img className={ready ? '' : 'controlsR'} src="./assets/Images/ControlsR.png" alt="Look: MOUSE"></img>
        <img
          className={ready ? '' : 'controlsTR'}
          src="./assets/Images/ControlsTR.png"
          alt="Toggle Performance: P Toggle Night Mode: N"
        ></img>
      </div>
      <div className="dot" style={{ pointerEvents: ready ? 'none' : 'all' }} />
      <Loading />
    </>
  )
}

export default Home
