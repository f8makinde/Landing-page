import React from 'react'
import { Cards } from '../data'
const Card = () => {
  return (
    <div className='w-full bg-white py-32'>
        <div className='max-w-[1240px] grid md:grid-cols-3 mx-auto items-center gap-8 md:px-0 px-10'>
        {Cards.map((card) => {
            const {id, image, name, price, list, btn} = card
            return(
                <div key={id} className='bg-white shadow-2xl py-12 hover:scale-105 duration-300'>
                    <div className='flex flex-col mx-auto justify-center items-center'>
                    <img src={image} alt={name} className='w-24'/>
                      <h2 className='md:text-2xl text-1xl font-bold py-2'>{name}</h2>
                      <h1 className='font-bold md:text-3xl sm:text-2xl text-xl py-2'>${price}</h1>
                     

                      {list.map((lists) => {
                        return <p className='font-medium border-b border-gray-300 py-2'>{lists}</p>
                      })}
                       <button className='md:w-44 w-32 bg-[#00df9a] p-3 rounded-lg'>{btn}</button>
                     </div>
                    </div>
                   
            )
        })}
      </div>
    </div>
  )
}

export default Card
