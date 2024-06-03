import React from 'react'
import { useGLTF } from '@react-three/drei'
import skyScene from "../../assets/3d/sky.glb"
import { useFrame } from 'react-three-fiber';
import { useRef } from 'react';

const Sky = ({isRouting}) => {
  const sky = useGLTF(skyScene) ; 
  const skyRef = useRef() ; 
  useFrame(( _ , delta) => {
    if(isRouting) {
      skyRef.current.rotation.y += delta * 0.15 ; 
    }
  }) 

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} />
     </mesh>
  )
}

export default Sky