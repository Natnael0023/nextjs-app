import React from 'react'

const layout = ({children}) => {
  return (
    <div className=' flex flex-col justify-center items-center'>
        <h1 className=' text-2xl'>
            Our Portfolio</h1>
        
        {children}
    </div>
  )
}

export default layout