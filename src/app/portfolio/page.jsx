import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const cards = [
  {
    id: 1,
    title: 'websites',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, delectus.',
    img: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg?w=900&t=st=1702890196~exp=1702890796~hmac=cac84587bf47e38247efc038ff214b0e70057a9e11c4f58fab0aa7a7f66e4e64'
  },
  {
    id: 2,
    title: 'apps',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, delectus.',
    img: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg?w=900&t=st=1702890196~exp=1702890796~hmac=cac84587bf47e38247efc038ff214b0e70057a9e11c4f58fab0aa7a7f66e4e64'
  },
  {
    id: 3,
    title: 'systems',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, delectus.',
    img: 'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg?w=900&t=st=1702890196~exp=1702890796~hmac=cac84587bf47e38247efc038ff214b0e70057a9e11c4f58fab0aa7a7f66e4e64'
  }
]

const portfolio = () => {
  return (
    <div className=''>
        <h1>Choose</h1>
       <div className=' border flex justify-center items-center gap-6'>
        {
          cards.map((card)=>(
            <Link className=' lg:w-[16rem] border border-red-400 flex sm:flex-col' href={`portfolio/${card.title}`}>
              <div className=' relative lg:w-[16rem] h-[10rem]'>
                <Image src={card.img} fill/>
              </div>
              <span>{card.title}</span>
              <span className=' break-words'>{card.desc}</span>
            </Link>
          ))
        }
       </div>
    </div>
  )
}

export default portfolio