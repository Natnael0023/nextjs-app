'use client'
import Image from 'next/image'
import React from 'react'
import Button from '../components/button/Button'
// import useSWR from 'swr'

// export const metadata = {
//   title: 'contact',
//   description: 'contact page',
// }

const page = () => {

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const mailData = {
       email: e.target[0].value,
       subject:e.target[1].value,
       message: e.target[2].value
    }
    try{
      // const fetcher = (...args) => fetch(...args).then(res => res.json())
      // const { data, error, isLoading } = useSWR(`/api/sendMail`, fetcher)
      await fetch('/api/sendMail',{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(mailData)
      })
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='  flex flex-col lg:w-[70rem] mx-auto'>
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center  ">Contact Us</h2>
      <p class=" font-light text-center sm:text-xl">Have an amazing idea? Got a technical issue? Need details about our Business plan? Let us know.</p>
        <div className=' flex '>
          <section class=" flex-1">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

              <form action="#" class="space-y-8" onSubmit={handleSubmit}>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium  ">Your email</label>
                    <input type="email" id="email" class="shadow-sm  border   text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  bg-transparent    dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required/>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium  ">Subject</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm   rounded-lg border  shadow-sm focus:ring-primary-500 focus:border-primary-500  bg-transparent    dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium  ">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm   rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500  bg-transparent    dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center  rounded-lg hover:shadow-md shadow-primary bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
              </form>
            </div>
          </section>

          <div className=' relative lg:w-[30rem] lg:h-[40rem] '>
            <Image
             src={'https://img.freepik.com/free-vector/sales-plan-business-abstract-concept-vector-illustration-marketing-plan-presentation-business-strategy-profit-forecast-commercial-goal-sales-management-target-group-abstract-metaphor_335657-2889.jpg?w=740&t=st=1704626461~exp=1704627061~hmac=0c0ea54c67d543691e9a876b9ff6b8922439aea1a7df0046232171087656847a'}
             fill
             alt=''
             className=' object-cover'/>
          </div>
        </div>
    </div>
  )
}

export default page

// 
