import React, { useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Sidebar = ({selectedUser,setSelectedUser}) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${selectedUser? "max-md:hidden" : ''}`}>
        <div className='pb-5'>
            <div className='flex justify-between items-center'>
                <img src={assets.logo} alt="logo" className='max-w-40' />
                <div className="relative py-2 group inline-block">
                <img
                  src={assets.menu_icon}
                  alt="Menu"
                  className='max-h-5 cursor-pointer'
                  onClick={() => setMenuOpen(prev => !prev)}
                />
                <div className={`absolute right-0 top-full mt-2 w-44 bg-white shadow-md rounded-md p-2 ${menuOpen ? 'block' : 'hidden'} group-hover:block text-gray-800 z-10`}>
                  <p onClick={() => { setMenuOpen(false); navigate('/profile') }} className='cursor-pointer text-sm py-1 hover:bg-gray-100'>Edit Profile</p>
                  <hr className="my-2 border-t border-gray-200" />
                  <p onClick={() => { setMenuOpen(false); navigate('/login') }} className='cursor-pointer text-sm py-1 hover:bg-gray-100'>Logout</p>
                </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Sidebar