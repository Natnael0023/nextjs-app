import React from 'react'
import BlogItem from '../components/blogItem/BlogItem.jsx'

const getBlogs = async ()=>{
  const res = await fetch('http://localhost:3000/api/blogs')
  return await res.json()
}

const blog = async () => {
  const blogs = await  getBlogs()
  console.log(blogs.length)
  return (
    <div className=' flex flex-col gap-3'>
        {
          blogs.map((blog)=>(
            <BlogItem key={blog._id} id={blog._id} title={blog.title} content={blog.body} image={blog.img} />
          ))
        }
    </div>
  )
}

export default blog