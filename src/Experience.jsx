import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { useGLTF } from '@react-three/drei'

const Experience = () => {

  // const model1 = useLoader(GLTFLoader, './orchard_final.glb')
  // console.log(model)


  const model = useGLTF('./orchard.glb')
  console.log(model)

  return (
    <>
      {/* <mesh>
          <boxGeometry />
          <meshBasicMaterial color="red" />
      </mesh> */}
      <primitive object={model.scene} scale={0.3} />
    </>
  )
}

export default Experience