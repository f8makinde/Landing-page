import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare, FaGithub} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full bg-black text-white'>
         <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
         <h1 className='w-full uppercase text-[#00df9a] font-bold text-3xl'>React.</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, eum! Natus consequatur, ratione asperiores ipsam itaque, libero aut facilis dignissimos velit alias et error voluptates labore sit autem id quisquam!</p>
         <div className='flex justify-between'>
            <FaFacebookSquare size={25}/>
            <FaInstagram size={25}/>
            <FaTwitterSquare size={25}/>
            <FaGithub size={25}/>
         </div>
         </div>
         <div className='lg:col-span-2 flex justify-between items-center'>
            <div>
                <h6>Solutions</h6>
             <ul>  
            <li>Analytics</li>
            <li>Marketing</li>
            <li>Commerce</li>
            <li>Projects</li> 
          </ul>
            </div>
   <div>
       <h6>Support</h6>
           <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>Api Status</li> 
          </ul>
   </div>
        <div>
        <h6>Company</h6>
        <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Partners</li> 
          </ul>
        </div>

         </div>
     </div>
         </div>
  )
}

export default Footer
