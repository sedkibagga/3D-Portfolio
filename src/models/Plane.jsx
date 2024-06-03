import React from 'react'
import { useGLTF } from '@react-three/drei'
import planeScene from '../../assets/3d/plane.glb'
import { useRef } from 'react'
import { useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

const Plane = ({isRouting , ...props}) => {
  const ref = useRef();
  const {scene , animations} = useGLTF(planeScene) ; 
  const {actions} = useAnimations(animations , ref) ; 
  // console.log("actions" , actions) ; 
  useEffect(() => {
    //  console.log("actions" , actions) ; 
    if (actions['Take 001']) { 
      if (isRouting) {
        actions['Take 001'].play();
      } else {
        actions['Take 001'].stop();
      }
    }
  }, [isRouting, actions]);
  return (
  <mesh ref={ref} {...props}>
   <primitive object={scene}/>
  </mesh>
    )
}

export default Plane