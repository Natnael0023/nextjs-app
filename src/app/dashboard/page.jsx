'use client'
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';
import BlogItem from '../components/blogItem/BlogItem';

//  export const  generateMetadata=() =>{
//   return {
//     title: process.env.NEXT_PUBLIC_APP_NAME + ' | dashboard',
//     description: 'dashboard'
//   };
// }

const Dashboard = () => {
  const session = useSession()
  const router = useRouter()
  
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }
  
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR(`/api/blogs?email=${session?.data?.user?.email}`, fetcher)
  console.log(data)
  if (isLoading) {
    return (
      <div role="status" className=' h-screen flex items-center justify-center'>
         <svg aria-hidden="true" class="w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
           <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
         </svg>
      </div>
    )
  }
  
  if (error) {
    return <div>Error: {console.log('error @')}</div>;
  }
  
  if (!data) {
    return <div>No data available</div>;
  }

  const handleSubmit = async(e)=>{
    const blogData = {
       title: e.target[0].value,
       body:e.target[1].value,
       email: session?.data?.user?.email
    }
    console.log(title)
    try{
      await fetch('http://localhost:3000/api/blogs',{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(blogData)
      })
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div>
      <h1 className='text-4xl font-bold'>Dashboard</h1>
      {
        session.status === 'loading' ?
        
        (
          <div role="status" className=' h-screen flex items-center justify-center'>
          <svg aria-hidden="true" class="w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
           <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
        </div>
        ):
      (
        <div>
          <span>
        {session && <p>signed In as {session?.data?.user?.email}</p>}
        <p>Name: {session?.data?.user?.name}</p>
      </span>
      <div>
        <div className=' flex flex-col items-center rounded-md py-3 border border-gray-700 border-opacity-10 bg-white bg-opacity-10'>
          <h1 className=' text-3xl font-bold'>{data.blogs.length}</h1>
          <h1>Total posts</h1>
        </div>
      </div>
      <div className=' mt-5'>
        <div className=' grid lg:grid-cols-4 md:grid-cols-3 gap-3'>
          {
            data.blogs.map(blog=>(
              <BlogItem id={blog._id} title={blog.title} image={blog.image} email={session?.data?.user?.email}/>
            ))
          }
        </div>
        <div className=' w-full mt-5 '>
          <form action="" onSubmit={handleSubmit}
          className=' flex flex-col gap-2'>
            <h1 className=' text-2xl font-bold'>Publish new blog</h1>
            <input type="text" placeholder='title' id='title' className='text-3xl font-bold p-2 w-full bg-transparent border rounded' />
            <textarea name="" placeholder='body' className=' w-full p-2 rounded  bg-transparent border' id="" cols="30" rows="5"></textarea>
            <input type="file" name="" id="" />
            <button type='submit' 
            className=' font-semibold text-txt-light bg-primary rounded-lg p-3 max-w-[10rem] '>Publish</button>
          </form>
        </div>
      </div>
        </div>
      )
}
    </div>
  )
}

export default Dashboard;