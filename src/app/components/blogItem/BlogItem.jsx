'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import blog from '../../blog/page'
import moment from 'moment/moment'
import { useSession } from 'next-auth/react'

export const BlogItem = ({id,title, content,email, image, createdAt}) => {
    const session = useSession()

    const handleDelete = async()=>{
        const res = await fetch(`http://localhost:3000/api/blogs/${id}`,{
            method:'DELETE',
            headers:{
                "Content-Type":"application/json",
              },
        })
        console.log(res)
    }
  return (
    <div className='  lg:max-w-[15rem] border border-gray-700 border-opacity-20 bg-white bg-opacity-10 rounded  items-center'>
        {
        session?.data?.user?.email === email &&
        <button onClick={()=>handleDelete()} className=' bg-red-400 w-6 h-6 rounded-full'>X</button>
    }
    <Link href={`/blog/${id}`}>
        <div className={``}>
            <div className='  p-2 min-h-[7rem] max-h-[7rem]'>
                <h1 className=' text-2xl font-bold'>{title.substring(0,15)}{title.length>15?'...':''}</h1>
                <div className=' '>
                  <h3 className=' text-primary '>by  {email}</h3>
                  <span className=' text-gray-500'>
                    {moment(createdAt).fromNow()}</span>
                </div>
            </div>
            {
                image && 
                <div className=''>
                <div className=' relative w-full h-14 lg:h-42 md:h-32 '>
                    <Image
                    src={image}
                    fill
                    alt='blog'
                    className=' rounded-xl'/>
                </div>
            </div>
            }
        </div>
        
    </Link>
    </div>
  )
}

export default BlogItem