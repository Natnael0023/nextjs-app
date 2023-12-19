import React from 'react'

const socialMedias = [
  {
    id:1,
    name: 'Dribbble',
    icon: '',
    link:''
  },
  {
    id:1,
    name: 'X',
    icon: '',
    link:''
  },
  {
    id:1,
    name: 'Github',
    icon: '',
    link:''
  },
]
const Footer = () => {
  return (
    <footer className=' border-t-2 flex flex-col items-center justify-center'>
        <div>
          {
            socialMedias.map((sm)=>(
              <span className=''>{sm.name}</span>
            ))
          }
        </div>
        <div> 2023 Natnael Legesse | All rights reserved </div>
    </footer>
  )
}

export default Footer