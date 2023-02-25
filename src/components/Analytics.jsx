import React from 'react'
import laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className='text-black bg-white w-full'>
        <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto justify-center py-8'>
         <img src={laptop} alt='' className='w-[500px] mx-auto my-4'/>
         <div className='flex flex-col justify-center md:px-0 px-8 py-4'>
            <p className='uppercase font-bold text-[#00df9a] text-sm'>Data analytics dashboard</p>
            <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold'>Manage Data Analytics Centrally</h1>
            <p className='text-[0.95rem] font-medium py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-[#00df9a] w-[150px] p-2 rounded-lg'>Get started</button>
         </div>
         </div>
    </div>
  )
}

export default Analytics
