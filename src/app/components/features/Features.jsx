import Image from 'next/image'
import React from 'react'
import { TbInfinity } from "react-icons/tb";
import { BiCustomize } from "react-icons/bi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineAutoGraph } from "react-icons/md";
import { TbResize } from "react-icons/tb";

const features = [
    {   id: 1,
        title: 'Seamless Integration',
        desc: ' Our ICT solutions seamlessly integrate with your existing systems, ensuring a smooth transition and minimal disruption to your business operations.',
        icon:<TbInfinity/>
    },
    {   id: 2,
        title: 'Tailored Solutions',
        desc: ' We understand that every business is unique. Our team of experts will work closely with you to develop customized ICT solutions that address your specific challenges and objectives.',
        icon:<BiCustomize/>
    },
    {   id: 3,
        title: 'Scalable and Flexible',
        desc: ' Our solutions are designed to grow and adapt with your business. Whether you\'re a small startup or a large enterprise, we have the expertise to scale our solutions to meet your evolving needs.',
        icon: <TbResize/>
    },
    {   id: 4,
        title: 'Enhanced Security',
        desc: ' Protect your sensitive data and ensure the privacy of your customers with our robust security measures and advanced encryption technologies.',
        icon: <IoShieldCheckmarkOutline/>
    },
    {   id: 5,
        title: 'Increased Productivity',
        desc: ' Our ICT solutions optimize workflows, automate repetitive tasks, and provide real-time access to critical information, enabling your team to work smarter and more efficiently.',
        icon:<MdOutlineAutoGraph/>
    },
]

const Features = () => {
  return (
    <div className='  mt-16  mx-auto'>
        <h1 className=' text-center text-3xl font-bold'>Our Features</h1>

        <div className=' grid grid-cols-3 gap-10  mt-16'>
            {features.map(feature=>(
                <div key={feature.id} className=' flex flex-col items-center gap-4 p-4  cursor-pointer hover:shadow-xl rounded '>
                    <div className=' text-secondary text-6xl'>
                        {feature.icon}
                    </div>
                    <div className=''>
                        <h1 className=' text-2xl text-center'>{feature.title}</h1>
                        <h3 className=' mt-5 text-center'>{feature.desc}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features