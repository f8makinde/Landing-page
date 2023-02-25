import React from 'react'
import Typed from 'react-typed';
const Hero = () => {
  return (
    <div className='text-white flex flex-col w-full py-16 md:mt-24'>
        <div className='max-w-[800px] mx-auto text-center'>
        <h4 className='text-sm text-[#00df9a] font-bold uppercase'>Growing with data analytics</h4>
         <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4 capitalize'>Grow with data.</h1>
         <div className='flex gap-2 items-center justify-center'>
            <p className='font-bold md:text-4xl sm:text-3xl text-2xl'>Fas, flexible financing for </p>
            <Typed
                strings={[
                    'BTB',
                    'BTC',
                    'SASS']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop className='font-bold md:text-4xl sm:text-3xl text-2xl'/>
         </div>
         <p className='p-2 text-lg text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms</p>
         <button className='capitalize bg-[#00df9a] w-[150px] py-2 rounded-md text-black'>Get started</button>
        </div>
    </div>
  )
}

export default Hero
