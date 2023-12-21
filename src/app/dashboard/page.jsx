'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import useSWR from 'swr'

async function generateMetadata(){
   return {
    title: process.env.NEXT_PUBLIC_APP_NAME +' | dashboard',
    description: 'dashboard' 
   }
}
const dashboard = () => {
  const {data: session} = useSession()

  const fetcher = (...args)=> fetch(...args).then(res => res.json())
  const { data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  return (
    <div>
      <h1>Dashboard</h1>
      <span>
        {
          session &&
        <p>signedIn as {session.user?.email}</p>
        }
      </span>
    </div>
  )
}

export default dashboard