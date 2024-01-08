'use client'
import Link from 'next/link'
import React from 'react'

export const Button = ({text, url}) => {
  return (
    <Link href={url} className=''>
        <span className=' bg-primary  rounded-full p-3 px-5'>
            {text}
        </span>
    </Link>
  )
}

export default Button