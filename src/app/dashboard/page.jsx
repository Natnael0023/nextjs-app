'use client'
import React from 'react'
import useSWR from 'swr'

// export async function generateMetadata(){
//    return {
//     title: process.env.NEXT_PUBLIC_APP_NAME +' | dashboard',
//     description: 'dashboard' 
//    }
// }
const dashboard = () => {
  const fetcher = (...args)=> fetch(...args).then(res => res.json())
  const { data, error, isLoading} = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  return (
    <div>dashboard</div>
  )
}

export default dashboard