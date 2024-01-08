'use client'
import Link from 'next/link'
import { useState } from 'react'
import DarkModeToggle from '../../components/darkModeToggle/DarkModeToggle'
import { signOut } from 'next-auth/react'
import {useRouter} from 'next/navigation'
import { useSession } from 'next-auth/react'

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio'
  },
  {
    id: 3,
    title: 'Contact',
    url: '/contact'
  },
  {
    id: 4,
    title: 'About',
    url: '/about'
  },
  {
    id: 5,
    title: 'Blog',
    url: '/blog'
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard'
  },
]

const Navbar = () => {
  const [dropDownClicked, setDropDownClicked] = useState(false)
  const router = useRouter()
  const session = useSession()

  return (
    <nav className=' flex sticky top-0 z-50 backdrop-blur-lg  justify-between py-3.5 space-x-4 items-center transition duration-500'>
        <Link href={'/'}
        className=' text-2xl flex items-center gap-1 font-bold'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
          </svg>
          {process.env.NEXT_PUBLIC_APP_NAME}
        </Link>
        <div className=' hidden sm:flex items-center space-x-10'>
          <div className='  flex md:space-x-5 lg:space-x-10 space-x-2 font-semibold'>
            {
                links.map((link)=>(
                <Link href={link.url} key={link.id}>{link.title}</Link>
              ))
            }
          </div>
        </div>
        <div className=' flex gap-5 items-center'>
        <DarkModeToggle/>
        {
            session.status === 'authenticated' && <button onClick={()=>{signOut(); router('/dashboard/login')}}
            className=' bg-bg-light text-txt-dark font-semibold px-5 py-2 rounded-md'>Logout</button>
        }
        </div>

        {/* mobile nav */}
        <div className=' sm:hidden'>
          <button onClick={()=>setDropDownClicked((prev)=>!prev)}>{dropDownClicked?
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>        
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
          }</button>
            {
              dropDownClicked && (
                <div className='border  z-50 border-red-500 bg-bg-dark text-white  p-2 items-center min-w-full absolute left-0 right-0 flex flex-col space-y-2'>
                  {
                  links.map((link)=>(
                  <Link onClick={()=>setDropDownClicked((prev)=>!prev)} href={link.url} key={link.id}>{link.title}</Link>
                  ))
                  }
                  {
                    session.status === 'authenticated' && <button onClick={()=>signOut()}
                    className=' border px-4 py-1 rounded-md'>Logout</button>
                  }
                </div>
              )
            }
        </div>
    </nav>
  )
}

export default Navbar