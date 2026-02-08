import React from 'react'
import assets from '../assets/assets'

const HomePage = () => {
  return (
    <div 
      className='border w-full h-screen sm:px-[15%] sm:py-[5%]'
      style={{
        backgroundImage: `url(${assets.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
        
    </div>
  )
}

export default HomePage