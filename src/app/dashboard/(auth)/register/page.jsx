'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'


const Register = () => {

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value
    }
    try{
       await fetch('/api/auth/register',{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify(data)
       })
        .then(res => {
            console.log(res)
            router?.push('/dashboard/login?success=Account has been created')
        })
        .catch(error=>{
            console.log(error.response.data.message)
        })
    }catch(error){
        console.log(error)
    }
}

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center   px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <div>
  <h1 className=' text-center text-3xl font-bold bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text'>
    {process.env.NEXT_PUBLIC_APP_NAME}
  </h1>
  </div>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Sign up</h2>
  </div>
    
  <div className="mt-10 space-y-3 sm:mx-auto sm:w-full sm:max-w-sm">
    
    <form action="" onSubmit={handleSubmit}
    className=' space-y-3'>
      <div>
      <label for="" class="block  font-medium leading-6 ">Name</label>
        <div class="">
          <input id="username" name="username" type="text"  placeholder='Iron Man' required 
          class="block w-full bg-transparent  rounded-md border-0 py-2 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary outline-none  sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="" className="block  font-medium leading-6 ">Email address</label>
        <div class="">
          <input id="email" name="email" type="email" placeholder='ironman@marvel.com' required 
          className="block w-full  bg-transparent rounded-md border-0 py-2 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary outline-none  sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="" className="block font-medium leading-6 ">Password</label>
        </div>
        <div className="">
          <input id="password" name="password" type="password"  placeholder='password' required 
          className="block w-full bg-transparent rounded-md border-0 py-2 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary outline-none sm:leading-6"/>
        </div>
      </div>
      <div className=' mt-4'>
        <button type="submit"  className="flex w-full justify-center rounded-md bg-primary text-white px-3 py-2 text-sm font-semibold leading-6 shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Sign up</button>
      </div>
    </form>

    <p className="mt-10 text-center text-gray-500">
      Already have an account?
      <Link href={'/dashboard/login'}
      className=' font-semibold'> Login</Link>
    </p>
  </div>
</div>
    </div>
  )
}

export default Register