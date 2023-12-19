'use client'
import Image from 'next/image'
import React from 'react'
import {Button} from '../components/button/Button.jsx'


const page = () => {
  return (
    <div className=' flex flex-col space-y-10'>
      <div className=' relative w-full h-[13rem]'>
        <Image 
        src={"https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg?w=900&t=st=1702890196~exp=1702890796~hmac=cac84587bf47e38247efc038ff214b0e70057a9e11c4f58fab0aa7a7f66e4e64"}
        fill={true}
        className=' object-cover rounded-md'
        />
        <span className=' absolute text-3xl bottom-5 left-5 bg-bg-dark p-2'>Digital Storytellers</span>
      </div>

      <div className=' flex flex-col sm:flex-row sm:space-x-16 space-y-5 sm:space-y-0'>
        <div className=' flex-1 space-y-3'>
          <h1 className=' text-xl font-semibold'>Who Are We?</h1>
          <div className=' text-justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Perspiciatis earum expedita possimus commodi fuga quae 
            dolorum voluptatem vitae reiciendis? Eum, a ipsum magni,
            asperiores dolore veniam 
            placeat autem voluptates odit expedita soluta minus qui
            velit quo eaque eligendi, delectus veritatis id? Eveniet esse, 
            explicabo velit iure quasi neque provident quia.
          </div>
        </div>

        <div className=' flex-1 flex flex-col space-y-5'>
          <h1 className=' text-xl font-semibold'>What We Do?</h1>
          <div className=' text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Qui corrupti asperiores eius maiores quis voluptatum
            deserunt tempore, cum voluptates nam, provident dolor culpa
            illum adipisci architecto aspernatur vero reiciendis
            laboriosam! Excepturi architecto hic iusto consectetur
            itaque dolores cumque deleniti voluptate rem, atque
            perspiciatis ullam magnam eaque! A dolorem quasi est
            fuga suscipit necessitatibus labore? Unde fugit,
            quaerat quos ratione explicabo beatae ad est veritatis
            accusantium fuga, consectetur voluptates molestias architecto
            tenetur repudiandae, expedita repellat? Consectetur impedit rem quisquam praesentium velit?
          </div>
          <Button text={'Contact'} url={'/'}/>
        </div>
      </div>
    </div>
  )
}

export default page