'use client'

import Image from 'next/image'
import React from 'react'
import Button from '../../components/button/Button'
import {items} from './data'
import { notFound } from 'next/navigation'


const getData =  (cat) => {
  const data = items.filter(item=>item.cat === cat)
  
  if(data.length > 0){
    return data
  }
  // return notFound()
}

const category =  ({params}) => {
  const cat = decodeURIComponent(params.category)
  const cards =   getData(cat)

  return (
    <div className=' lg:w-[70rem]'>
      <h1 className=' mb-5 text-center'>{cat}</h1>
      <div className='  flex flex-col gap-16'>
        {cards ? (
          
            cards.map((card)=>(
              <div key={card.id} className={` flex flex-col sm:flex-row gap-5 w-full border-b pb-5  ${card.id % 2 == 0? ' flex-row-reverse':''}`}> 
                <div className=' space-y-5  flex-1 flex flex-col items-start justify-center'>
                  <h1 className=' text-2xl font-bold'>{card.title}</h1>
                  <div className=' break-words'>{card.desc}</div>
                  <div className='  flex items-center justify-between w-full'>
                    <Button url={card.url} text={'View'}/>
                    <div className=' flex gap-3'>
                      {card.techStack.map((tech,index)=>(
                        <h1 key={index} className=' text-secondary'>#{tech},</h1>
                      ))}
                    </div>
                  </div>
                </div>
                <div className=' flex-1 relative w-[20rem] h-[20rem]'>
                  <Image src={card.img} 
                  fill
                  className=' object-cover'/>
                </div>
              </div>
            ))
          
        ):(
          <div className='mt-20 flex flex-col  items-center'>
            <div className=' relative lg:w-[15rem] lg:h-[15rem]'>
              <Image
              src={'https://img.freepik.com/free-vector/chemistry-online-lessons-biochemist-presentation-science-class-e-learning-laboratory-worker-cartoon-character-explaining-pharmaceutical-researches_335657-3442.jpg?w=740&t=st=1704702342~exp=1704702942~hmac=4b21d5bebd9006dd72d6e362c08e7901db5c6bd963415f96eadc479c3b4f1127'}
              fill
              alt='image'
              className=' object-cover '
              />
            </div>
            <h1 className='   text-center text-2xl font-semibold'>No data</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default category