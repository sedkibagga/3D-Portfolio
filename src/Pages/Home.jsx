import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader } from '../components'
import { Island } from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import { Bird } from '../models/Bird'
import { useState } from 'react'
import { useLoading } from './Context'
import { HomeInfo } from '../components'
import sakura from '../../assets/sakura.mp3'
import { useEffect , useRef } from 'react'
import { soundoff, soundon } from "../../assets/icons";

function Home() { 
  const audioRef = useRef(new Audio(sakura)) ;
  audioRef.current.loop = true ;
  audioRef.current.volume = 0.4 ;
  const [isPlayingMusic , setIsPlayingMusic] = useState(false) ;
  useEffect(()=>{
    if(isPlayingMusic){
      audioRef.current.play() ;
    } 
   return ()=>{
  audioRef.current.pause() ;
   }

  },[isPlayingMusic])
  
  const {isRouting , setIsRouting , currentStage} = useLoading() ; 
  
  const adjustIslandForScreenSize = () => {
   let screenScale = null ; 
    let screenPosition =[0 , -6.5 , -43]  ; 
    let rotation = [0.1 , 4.7 , 0] ; 
   if (window.innerWidth <768) {
    screenScale = [0.9 , 0.9 , 0.9] ; 
    
   } else {
    screenScale = [1 , 1 , 1] ; 
    
   } 

   return [screenScale , screenPosition , rotation] ; 
  } 
  const adjustPlaneForScreenSize = () => {
    let screenScale , screenPosition ;  
      
    if (window.innerWidth <768) {
     screenScale = [1.5 , 1.5 , 1.5] ; 
     screenPosition = [0 , -1.5 , 0] ; 
    } else {
     screenScale = [3, 3 , 3] ; 
     screenPosition = [0 , -4 , -4] ; 
     
    } 
 
    return [screenScale , screenPosition ] ; 
   } 

  const [islandScale , islandPosition , islandRotation] = adjustIslandForScreenSize() ;  
  const [planeScale , planePosition] = adjustPlaneForScreenSize() ; 
  return (
    <section className='w-full h-screen relative'> 
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage?<HomeInfo currentStage={currentStage}/>:null}
        </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRouting ? 'cursor-grabbing' : 'cursor-grap'}`}  camera={{ near : 0.1 , far :1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1 , 1 , 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
          <Bird/>
          <Sky isRouting={isRouting}/>
          <Island position = {islandPosition} scale = {islandScale} rotation = {islandRotation} />
          <Plane scale={planeScale} position={planePosition} isRouting={isRouting} rotation = {[0,20,0]}/>
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Home