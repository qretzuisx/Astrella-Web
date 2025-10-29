import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
        <h1 className='text-4xl md:text-5xl font-semibold'>Astrella, your guide to becoming a Cinderella</h1>
        <form action="">

        </form>

        <img src={assets.main_ai} alt="ai" className='max-h-74'/>

    </div>
  )
}

export default Hero