import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const BlogItem = ({id,title, content, image}) => {
  return (
    <Link href={`/blog/${id}`}>
        <div className=' flex items-center border border-red-400'>
            <div className=''>
                <div className=' relative w-44 h-44'>
                    <Image
                    src={image}
                    fill
                    alt='blog'/>
                </div>
            </div>
            <div className='  p-2'>
                <h1 className=' text-4xl font-bold'>{title}</h1>
                <div>
                    {content}
                </div>
            </div>
        </div>
    </Link>
  )
}

export default BlogItem