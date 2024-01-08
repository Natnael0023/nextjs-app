import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const categories = [
  {
    id: 1,
    name: 'Web Development',
    image:'https://img.freepik.com/premium-vector/technology-background_1302-15115.jpg?w=740'
  },
  {
    id: 2,
    name: 'Mobile App Development',
    image:'https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149065783.jpg?w=740&t=st=1704459699~exp=1704460299~hmac=0ee4d60bab00e42c603ef57be0e1c5798433685c0086be73dae5d571f62da18f'
  },
  {
    id: 3,
    name: 'Cloud Solutions',
    image:'https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-big-cloud-computing-infrastructure-elements-connected-with-dashed-lines-vector-illustration_1284-30495.jpg?w=740&t=st=1704459760~exp=1704460360~hmac=6b1a171065f8bac8a8c1b660d61d9075a0fb6fd486685dcec5ebb5a1ffec5607'
  },
  {
    id: 4,
    name: 'E-commerce Solutions',
    image:'https://img.freepik.com/free-vector/gradient-sales-representative-illustration_52683-82971.jpg?w=740&t=st=1704459807~exp=1704460407~hmac=ab39b460ca5646f26fe59a3092ec6e7f3e4166a4c92f6e5b2e722a62ea9beb79'
  },
  {
    id: 5,
    name: 'Cybersecurity',
    image:'https://img.freepik.com/free-vector/cyber-security-concept_23-2148543851.jpg?t=st=1704459891~exp=1704460491~hmac=f4b5d3ce42a6bcf74f6ecb4bd33a23d84c3fe93dc1ecc782daa925167775c63b'
  },
];

const portfolio = () => {
  return (
    <div className=''>
        <h1>Choose</h1>
       <div className='  grid grid-cols-3 justify-center items-center gap-6'>
        {
          categories.map((category)=>(
            <Link className=' relative lg:w-[20rem]  flex hover:scale-105 transition duration-500 sm:flex-col rounded' href={`portfolio/${category.name}`}>
              <div className=' relative lg:w-[20rem] h-[16rem]'>
                <Image 
                src={category.image} 
                fill
                className=' rounded'/>
              </div>
              <span className=' absolute h-full w-full rounded flex items-center justify-center text-2xl font-semibold hover:bg-black hover:bg-opacity-30 hover:text-white'>{category.name}</span>
            </Link>
          ))
        }
       </div>
    </div>
  )
}

export default portfolio