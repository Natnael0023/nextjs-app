import React from 'react'

const faqs = [
    {
        id:1,
        que: 'Can your ICT solutions be integrated with our existing software?',
        ans: 'Absolutely! Our solutions are designed to seamlessly integrate with a wide range of software applications, ensuring compatibility and a smooth transition.'
    },
    {   id:2,
        que: 'Can you customize ICT solutions to fit our specific business needs?',
        ans: 'Absolutely! We understand that every business is unique. Our team will work closely with you to understand your requirements and tailor the ICT solutions to align with your specific business needs.',
    },
    {
      id:3,
      que: 'How long does it take to implement your ICT solutions?',
      ans: 'The implementation timeline depends on the complexity and scope of the project. We strive to deliver efficient and timely solutions. Our team will provide you with a detailed timeline during the consultation phase.',
    },
    {
      id:4,
      que: 'Do you provide ongoing technical support after the implementation?',
      ans: 'Yes, we offer ongoing technical support to ensure the smooth operation of the implemented ICT solutions. Our support team is available to assist you with any technical issues or questions you may have.',
    },
]

const Faqs = () => {
  return (
    <div className=' mt-16  lg:w-[70rem] mx-auto'>
        <h1 className=' text-2xl font-bold text-center'>FAQs</h1>
        <div className=' mt-4 grid grid-cols-2 gap-4'>
            {faqs.map(faq=>(
                <div className=''>
                    <div className=' flex items-center gap-2'>
                        <div className=' p-2 bg-primary rounded-full text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                        <h1 className=' font-semibold'>{faq.que}</h1>
                    </div>
                    <h3 className=' lg:ml-12'>{faq.ans}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Faqs