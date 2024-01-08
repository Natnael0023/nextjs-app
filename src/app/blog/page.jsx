

import React from 'react'
import BlogItem from '../components/blogItem/BlogItem.jsx'
import useSWR from 'swr'

const getBlogs = async()=>{
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/blogs`, fetcher)
  // const res = await fetch('/api/blogs',{
  //         method:'GET',
  //         headers:{
  //           "Content-Type":"application/json",
  //         },
  //       })
  //      const data = await res.json()

    return data.blogs
}
 

const blog = async () => {
  let blogs = await getBlogs()
  return (
    <div className='  mx-auto lg:max-w-[65rem]'>
        <div className=' grid lg:grid-cols-4 md:grid-cols-3 gap-5'>
          {
          blogs.map((blog)=>(
            <BlogItem key={blog._id} id={blog._id} title={blog.title} content={blog.body} email={blog.email} image={blog.image} createdAt={blog.createdAt} />
            
          ))
          }
        </div>
    </div>
  )
}

export default blog