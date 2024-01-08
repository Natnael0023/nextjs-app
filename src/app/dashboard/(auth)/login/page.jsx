'use client'
import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Login = () => {
  const  session = useSession()
  const router = useRouter()
  if(session.status === 'loading'){
    return (
      <div role="status" className=' h-screen flex items-center justify-center'>
        <svg aria-hidden="true" class="w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
      </div>
    )
  }
  if(session.status === 'authenticated') {
    return (
    //   <>
    //     signed In as {session.user.email} <br />
    //     <button onClick={()=>signOut()}>signOut</button>
    //   </>
    router.push('/dashboard')
    )
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    // const credentials = {
     let email=e.target[0].value
     let password=e.target[1].value
    // }
    try{
    //  await fetch('http://localhost:3000/api/auth/login',{
    //   method:'POST',
    //   headers:{
    //     "Content-Type":"application/json",
    //   },
    //   body: JSON.stringify(credentials)
    //  })
    //  .then(res=>{
    //   console.log(res)
    //  }).catch(err=>{console.log(err)})
    signIn('credentials',{email,password})
    }catch(err){
      console.log(err)
    }
  }
  
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center   px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <div>
  {/* <h1 className=' text-center text-3xl font-bold bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text'>
  {process.env.NEXT_PUBLIC_APP_NAME}
  </h1> */}
  </div>
    {/* <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Sign In</h2> */}
  </div>
    
  <div className="mt-10 space-y-3 sm:mx-auto sm:w-full sm:max-w-sm">
    
    <form action="" onSubmit={handleSubmit}
    className=' space-y-3'>
      <div>
      <label for="" class="block  font-medium leading-6 ">Email</label>
        <div class="">
          <input id="email" name="email" type="email" placeholder='ironman@marvel.com' required 
          class="block w-full bg-transparent  rounded-md border-0 py-2 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary outline-none  sm:leading-6"/>
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
        <button type="submit"  className="flex w-full justify-center rounded-md  text-white px-3 py-2 text-sm font-semibold leading-6 shadow-sm hover:bg-opacity-90 focus:ring-2 ring-white ">
            Sign In</button>
      </div>
    </form>
    
    <p className="mt-10 text-center text-gray-500">
      Dont have an account?
      <Link href={'/dashboard/register'}
      className=' font-semibold'> SignUp</Link>
    </p>

    <div className=' flex flex-col items-center'>
      <span>Or</span>
      
      <button onClick={()=>signIn('google')}
      className=' flex items-center gap-5 border p-2 px-4 rounded-xl focus:ring-2'>
      <span>sign in with Google</span>
      <svg width="30px" height="30px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"/>
        <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"/>
        <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"/>
        <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"/>
      </svg>
      </button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login