import Image from 'next/image'
import React from 'react'

const getBlog = async (id)=>{
  const res = await fetch(`http://localhost:3000/api/blogs/${id}`)
  return res.json()
}

export async function generateMetadata({ params }) {
  const blog = await getBlog(params.id)
  return {
    title: process.env.NEXT_PUBLIC_APP_NAME+' | blogs | '+blog.title,
    description: blog.body
  }
}

const post = async ({params}) => {
  const blog = await getBlog(params.id)

  return (
    <div>
      <div className=' relative w-full h-60'>
        <Image
        src={blog.image}
        fill
        className=' object-cover rounded'
        />
      </div>

      <div className=' mt-3'>
        <div className=' flex items-center gap-3'>
          <div className='relative w-12 h-12'>
            <Image 
            src={blog.image}
            fill
            className=' rounded-full'/>
          </div>
          <div>
            <p>{blog.email}</p>
            <span className=' text-sm'>posted 2 days ago</span>
          </div>
        </div>
        <div>
        <h1 className=' text-4xl font-bold mt-3'>{blog.title}</h1>
        </div>
        <div className=' mt-5'>
          {blog.body}
        </div>
      </div>
    </div>
  )
}

export default post