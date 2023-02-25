import React from 'react'

const NewLetter = () => {
  return (
    <div className='text-white w-full py-16 lg:px-0 px-8'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className='md:text-3xl sm:text-2xl text-lg font-bold'>Want tips & tricks to optimize your flow? </h1>
            <p className='text-sm lg:py-0 py-2'>Sign up to our newsLetter and stay up to data</p>
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col gap-4 sm:flex-row py-2'>
            <input type='email' placeholder='Enter your email' className='py-3 px-3 rounded-lg indent-8'/>
            <button className='py-3 px-4 rounded-lg bg-[#00df9a] text-black font-bold'>Notify me</button>
            </div>
                <span className='py-2'>
                <p>We care about the protection of your data.Read our 
             <a href='' className='text-[#00df9a] underline' > Privacy policy</a>
            </p>
                </span>
        </div>
     
        </div>
    </div>
  )
}

export default NewLetter
