import React from 'react'

const layout = ({children}) => {
  return (
    <div className=' mt-5 flex flex-col justify-center items-center'>
        <h1 className=' text-3xl font-semibold'>
            Our Portfolio</h1>
        
        {children}
    </div>
  )
}

export default layout