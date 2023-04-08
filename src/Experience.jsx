import React from 'react'
import { useGLTF } from '@react-three/drei'

const Experience = () => {

  const model = useGLTF('./orchard.glb')

  return (
    <>
      <primitive object={model.scene} scale={0.3} />
    </>
  )
}

export default Experience