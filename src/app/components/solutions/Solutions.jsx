import Image from 'next/image';
import React from 'react'
import { LuNetwork } from "react-icons/lu";
import { BsCloudFill } from "react-icons/bs";
import { FaShield } from "react-icons/fa6";
import { HiCodeBracketSquare } from "react-icons/hi2";
import { FaDirections } from "react-icons/fa";

const ourSolutions = [
    {
      id: 1,
      title: 'Network Infrastructure',
      description: 'Our company specializes in designing and implementing robust network infrastructures tailored to your business needs. We provide end-to-end solutions, including network planning, installation, configuration, and ongoing monitoring. Whether you require a wired or wireless network, we ensure high performance, scalability, and security.',
      icon: <LuNetwork/>,
      image:'https://img.freepik.com/free-vector/online-database-cloud-disk-data-storage-information-base-computer-application-pc-user-operator-cartoon-character-information-monitor-screen-vector-isolated-concept-metaphor-illustration_335657-2833.jpg?w=740&t=st=1704433267~exp=1704433867~hmac=8fb91a71459281cd5341df8d37b9ab512fb76ad2a3c01b1ed35ac35ba1d784e7'
    },
    {
      id: 2,
      title: 'Cloud Services',
      description: 'Embrace the power of the cloud with our comprehensive cloud services. We offer cloud migration, deployment, and management solutions to help you optimize your business operations. From infrastructure as a service (IaaS) to software as a service (SaaS), we leverage industry-leading platforms to ensure secure data storage, seamless collaboration, and flexible scalability.',
      icon: <BsCloudFill/>,
      image:'https://img.freepik.com/free-vector/big-data-storage-abstract-concept-illustration_335657-3838.jpg?w=740&t=st=1704434383~exp=1704434983~hmac=4c29ddb08df5289cda16e4c3b0ba18ff5501b8b5d4879f9e3f66c036ca414241'
    },
    {
      id: 3,
      title: 'Cybersecurity',
      description: 'Protect your sensitive data and digital assets with our robust cybersecurity solutions. We offer a range of services, including vulnerability assessments, penetration testing, firewall implementation, intrusion detection, and security awareness training. Our experts employ the latest techniques and tools to safeguard your business from evolving threats.',
      icon: <FaShield/>,
      image:'https://img.freepik.com/free-vector/data-privacy-abstract-concept-illustration_335657-3828.jpg?w=740&t=st=1704702716~exp=1704703316~hmac=8dc5cf448ecd3382d56484f20b4e17e1477c2ab241aac6cb23f6ca5f65ca5d25'
    },
    {
      id: 4,
      title: 'Software Development',
      description: 'Leverage our expertise in software development to create customized solutions that meet your unique business requirements. Whether you need web applications, mobile apps, or enterprise software, our team of skilled developers follows industry best practices to deliver scalable, reliable, and user-friendly software solutions.',
      icon: <HiCodeBracketSquare/>,
      image:'https://img.freepik.com/free-vector/online-database-cloud-disk-data-storage-information-base-computer-application-pc-user-operator-cartoon-character-information-monitor-screen-vector-isolated-concept-metaphor-illustration_335657-2833.jpg?w=740&t=st=1704433267~exp=1704433867~hmac=8fb91a71459281cd5341df8d37b9ab512fb76ad2a3c01b1ed35ac35ba1d784e7'
    },
    {
      id: 5,
      title: 'IT Consulting',
      description: 'Benefit from our IT consulting services to optimize your technology infrastructure and strategic planning. Our experienced consultants work closely with your team to assess your current IT environment, identify opportunities for improvement, develop IT roadmaps, and provide recommendations on technology investments. We help align your IT strategy with your business goals.',
      icon: <FaDirections/>,
      image:'https://img.freepik.com/free-vector/profitable-pricing-strategy-price-formation-promo-action-clearance-shopping-idea-design-element-cheap-products-advertisement-customers-attraction_335657-3554.jpg?w=740&t=st=1704434593~exp=1704435193~hmac=ec7f30d52f6349075daa02e8b65decd7f1cf9247ad65a8cfc35e186db724672e'
    },
  ];

const Solutions = () => {
  return (
    <div className=' mt-28  lg:max-w-[70rem] mx-auto'>
        <h1 className=' text-3xl font-semibold text-center'>Our Solutions</h1>
        <div>
            <div className=' flex  flex-col gap-4'>
            {ourSolutions.map(solution=>(
                <div key={solution.id} className={`flex gap-4  ${solution.id %2 ===0? 'flex-row-reverse':''}`}>
                    <div className=' flex flex-col justify-center gap-5'>
                        <div className=' flex items-center gap-2'>
                            <span className=' bg-primary p-2 text-2xl text-white'>{solution.icon}</span>
                            <h1 className=' text-3xl font-semibold text-primary'>{solution.title}</h1>
                        </div>
                        <div className=' lg:w-[35rem]'>
                            <h3 className=''>{solution.description}</h3>
                        </div>
                    </div>
                    <div className='  relative lg:w-[35rem] lg:h-[35rem] bg-gray-200 rounded-lg'>
                        <Image
                            src={solution.image}
                            fill
                            alt=''
                            className=' rounded-lg'
                        />
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Solutions