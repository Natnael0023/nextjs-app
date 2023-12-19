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
  return notFound()
}

const category =  ({params}) => {
  const cards =   getData(params.category)
  console.log(cards) 
  return (
    <div className=''>
      <h1 className=' mb-5 text-center'>{params.category}</h1>
      <div className=' border flex flex-col gap-16'>
        {
          cards.map((card)=>(
            <div key={card.id} className={` border border-red-400 flex flex-col sm:flex-row gap-5 w-full overflow-x-scroll ${card.id % 2 == 0? ' flex-row-reverse':''}`}> 
              <div className=' space-y-5  flex-1 flex flex-col items-start justify-center'>
                <h1 className=' text-2xl font-bold'>{card.title}</h1>
                <div className=' break-words'>{card.desc}</div>
                <Button url={'/'} text={'View'}/>
              </div>
              <div className=' flex-1 relative w-[20rem] h-[20rem]'>
                <Image src={card.img} fill/>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default category