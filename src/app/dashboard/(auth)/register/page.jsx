import Link from 'next/link'
import React from 'react'

const handleSubmit = async (e) => {
    const data = {
        username: username,
        email: email,
        password: password
    }
    try{
       await axios.post('/auth/register',data)
        .then(res => {
            console.log(res)
            
        })
        .catch(error=>{
            console.log(error.response.data.message)
        })
    }catch(error){
        console.log(error)
    }
}

const register = () => {
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center   px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
  <div>
  <h1 className=' text-center text-3xl font-bold bg-gradient-to-r from-secondary to-primary text-transparent bg-clip-text'>
    storyAI
  </h1>
  </div>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Sign up</h2>
  </div>
    
  <div className="mt-10 space-y-3 sm:mx-auto sm:w-full sm:max-w-sm">
    <div>
        <label for="" class="block  font-medium leading-6 ">Username</label>
        <div class="mt-2">
          <input id="email" name="email" type="email"  placeholder='Abebe' required 
          class="block w-full bg-transparent  rounded-md border-0 py-2 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary outline-none  sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="" className="block  font-medium leading-6 ">Email address</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" placeholder='email@example.com' required 
          className="block w-full  bg-transparent rounded-md border-0 py-2 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary outline-none  sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label for="" className="block font-medium leading-6 ">Password</label>
        </div>
        <div className="mt-2">
          <input id="password" name="password" type="password"  placeholder='password' required 
          className="block w-full bg-transparent rounded-md border-0 py-2 px-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary outline-none sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="button"  className="flex w-full justify-center rounded-md bg-primary text-white px-3 py-2 text-sm font-semibold leading-6 shadow-sm hover:bg-opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
            Sign up</button>
      </div>

    <p className="mt-10 text-center text-gray-500">
      Already have an account?
      <Link href={'/login'}
      className=' font-semibold'> Login</Link>
    </p>
  </div>
</div>
    </div>
  )
}

export default register