'use client'
import Image from 'next/image'
import React from 'react'
import {Button} from '../components/button/Button.jsx'
import nat from '../../../public/nat.png'

const page = () => {
  return (
    <div>
      <div className=' flex items-center'>
        <div className=' flex-1'>
          <h1 className=' font-bold text-6xl'>Help your business succeed through power of tech</h1>
        </div>
        <div className=' relative flex-1 h-[23rem] border  rounded-lg'>
          <Image 
          src={nat}
          fill={true}
          alt='image'
          className=' object-contain  rounded-lg'
          />
        </div>
      </div>

      <div className=' flex mt-10 gap-14'>
      <div className=' flex-1 space-y-3 '>
         <h1 className=' text-xl font-bold text-secondary'>Who We Are</h1>
         <div className=' text-justify leading-8 text-xl'>
         At {process.env.NEXT_PUBLIC_APP_NAME} Solutions, we are a leading ICT (Information and Communications Technology) company founded by Natnael Legesse dedicated to providing innovative and tailored solutions to meet the technology needs of businesses. With a team of experienced professionals and a customer-centric approach, we strive to deliver exceptional services and drive digital transformation for our clients. We believe in building long-term partnerships based on trust, reliability, and technical expertise.
         </div>
      </div>

      <div className=' flex-1 flex flex-col space-y-5'>
       <h1 className=' text-xl font-bold text-primary'>What We Do</h1>
       <div className=' text-justify text-xl leading-8'>
       At {process.env.NEXT_PUBLIC_APP_NAME} Solutions, we offer a comprehensive range of ICT solutions designed to empower businesses and streamline their operations. Our expertise spans across various domains, including network infrastructure, cloud services, cybersecurity, software development, and IT consulting. Whether you need to establish a robust network infrastructure, migrate to the cloud, safeguard your digital assets, develop custom software, or align your technology strategy with your business goals, we have the knowledge and experience to deliver tailored solutions that drive success.

We combine cutting-edge technologies, industry best practices, and a deep understanding of our clients business requirements to deliver scalable, secure, and cost-effective solutions. Our team of skilled professionals works closely with clients to understand their unique challenges and goals, and then designs and implements solutions that address their specific needs. With a commitment to excellence and a passion for innovation, we help businesses harness the power of technology to navigate the digital landscape and achieve sustainable growth.

Please note that the content provided is a general example, and you can customize it based on your company specific values, services, and achievements.
       </div>
        <Button text={'Contact'} url={'/'}/>
        </div>
      </div>

    </div>
  )
}

export default page