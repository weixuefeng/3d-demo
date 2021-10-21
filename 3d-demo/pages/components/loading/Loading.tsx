import React, { useState, useEffect } from 'react'
import * as THREE from 'three'
import { useTransition, animated } from 'react-spring'

function Loading(): JSX.Element {
  const [finished, set] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    THREE.DefaultLoadingManager.onLoad = () => set(true)
    THREE.DefaultLoadingManager.onProgress = (url, itemsLoaded, itemsTotal) =>
      setWidth((itemsLoaded / itemsTotal) * 200)
  }, [])

  const transProps = useTransition(finished, null, {
    from: { opacity: 1, width: 0 },
    leave: { opacity: 0 },
    update: { width }
  })

  return (
    <>
      {transProps.map(({ item: finished, key, props: { opacity, width } }) => {
        if (!finished) {
          return (
            <animated.div className="loading" key={key} style={{ opacity }}>
              <h1 className="welcome">BitPenguin Gallery</h1>
              <div className="loading-bar-container">
                <animated.div className="loading-bar" style={{ width }} />
              </div>
            </animated.div>
          )
        } else {
          return <div key={key}></div>
        }
      })}
    </>
  )
}

export default Loading
