import React from 'react'
import Buttons from './Buttons'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto'>
    <div className='flex flex-col gap-5'>
      <h1 className="uppercase text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            bg-clip-text text-transparent">grind zone</h1>
        <h3 className='font-semibold text-1xl sm:text-2xl md:text-3xl lg:text-4xl'>Transform Your <span className='text-blue-400 font-medium'>Body</span> Elevate Your <span className='text-blue-400 font-medium'>Mind</span></h3>
        </div>
        <p className='text-sm md:text-base font-light py-3 sm:text-lg leading leading-relaxed'>Your journey to strength, confidence, and discipline starts here.Track your progress, follow expert routines, and stay motivated—because your best self is waiting to be unlocked.</p>
        
        <Buttons func={()=>{
          window.location.href='#generate'
        }} text={"Accept & Begin"}></Buttons>

      
    </div>
  )
}
