import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <Canvas
        shadows
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ - 4, 3, 6 ]
        } }
    >
      <directionalLight intensity={1}/>
      <ambientLight intensity={0.5} />
        <OrbitControls />
        <Experience />

    </Canvas>
  )
}

export default App
