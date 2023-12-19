import Image from 'next/image'
import React from 'react'
import Button from '../components/button/Button'

export const metadata = {
  title: 'contact',
  description: 'contact page',
}

const page = () => {
  return (
    <div className=' border border-red-400 flex flex-col items-center space-y-10'>
        <h1 className=' text-2xl'>Have an amazing idea? let's talk</h1>
        <div className=' flex space-x-8'>
          <div className=' relative w-[20rem] h-[20rem]'>
            <Image
            src={'https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg?w=900&t=st=1702890196~exp=1702890796~hmac=cac84587bf47e38247efc038ff214b0e70057a9e11c4f58fab0aa7a7f66e4e64'}
            fill
            className=' hover:animate-pulse object-cover'/>
          </div>
          <div className=' flex flex-col space-y-10'>
            <div className=' flex flex-col space-y-3'>
              <input className=' p-2 rounded' type="text" placeholder='name' />
              <input className=' p-2 rounded' type="text" placeholder='name' />
              <textarea className=' p-2 rounded' placeholder=' message' name="" id="" cols="30" rows="4"></textarea>
            </div>
            <Button url={'/'} text={'Send'}/>
          </div>
        </div>
    </div>
  )
}

export default page