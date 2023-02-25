import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
const Navbar = () => {
 const [nav, setNav] = useState(false)
   const handleNav = () => {
       setNav(!nav)
   }
  return (
    <div className='text-white flex px-4 justify-between mx-auto items-center max-w-[1240px] h-24'>
        <h1 className='w-full uppercase text-[#00df9a] font-bold text-3xl'>React.</h1>
        <ul className='md:flex hidden'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
         <div onClick={handleNav}>
              {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} className='md:hidden'/>}
         </div>
           <ul className={nav ? 'fixed top-0 left-0 h-full pt-24 w-[60%] border-r border-r-gray-700 md:hidden' : 'fixed hidden'}>
            <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
           </ul>
    
    </div>
  )
}

export default Navbar
