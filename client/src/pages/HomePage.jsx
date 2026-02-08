import React, { useState } from 'react'
import assets from '../assets/assets'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSidebar from '../components/RightSidebar'

const HomePage = () => {

  const [selectedUser, setSelectedUser] = useState(false)



  return (
    <div 
      className='w-full h-screen'
      style={{
        backgroundImage: `url(${assets.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className='w-full h-full sm:px-[15%] sm:py-[5%] flex items-center justify-center'>
        <div className={`backdrop-blur-xl border-gray-600 rounded-2xl overflow-hidden w-full h-full grid grid-cols-1 relative ${selectedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' : 'md:grid-cols-2'}`}>
          <Sidebar/>
          <ChatContainer/>
          <RightSidebar/>
        </div>
      </div>
    </div>
  )
}

export default HomePage