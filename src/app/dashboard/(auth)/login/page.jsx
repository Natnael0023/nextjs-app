'use client'
import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

const login = () => {
  const {data: session} = useSession()

  if(session) {
    return (
      <>
        signed In as {session.user.email} <br />
        <button onClick={()=>signOut()}>signOut</button>
      </>
    )
  }
  return (
    <div>
      <button onClick={()=>signIn()}>signIn</button>
    </div>
  )
}

export default login