import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'
import Loading from './Loading'

function App() {

  return (
    <>
      <div style={{ position:'absolute', left: 0, alignItems: 'center', width: '100%', margin: '0 auto'}}>
          <h1 style={{ fontSize: '5rem'}}>The Orchard</h1> 
      </div>
      <Canvas
          shadows
          camera={ {
              fov: 45,
              near: 0.1,
              far: 200,
              position: [ - 7, 3, 6 ]
          } }
      >
          <directionalLight intensity={1}/>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          <Suspense fallback={ <Loading /> }> 
            <Experience />
          </Suspense>
      
      </Canvas>
    </>
  )
}

export default App
