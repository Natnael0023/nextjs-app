'use client'
import React, { useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const testimonials = [
    {
        id: 1,
        text: `${process.env.NEXT_PUBLIC_APP_NAME} transformed our business with their ICT solutions. We've seen a significant improvement in efficiency and productivity, and our team is now able to focus on strategic initiatives. Highly recommended!"`,
        author: 'John Smith, CEO of XYZ Company'
    },
    {
        id: 2,
        text: `Choosing ${process.env.NEXT_PUBLIC_APP_NAME}'s ICT solutions was a game-changer for our organization. Our data is now secure, and we have gained a competitive edge with their advanced technologies. The team was attentive to our unique needs and delivered a tailored solution that perfectly aligned with our business objectives. I highly recommend their services to any business seeking to leverage ICT for growth.`,
        author: 'David Thompson, CTO of XYZ Enterprises'
    },
    {
        id: 3,
        text: `Thanks to ${process.env.NEXT_PUBLIC_APP_NAME}, our business has experienced a remarkable transformation. Their ICT solutions have simplified our workflows, eliminated manual errors, and boosted our overall efficiency. The team's expertise and dedication made the implementation process seamless and hassle-free. We are truly grateful for their partnership."`,
        author: 'Emily Roberts, CFO of LMN Industries'
    }
];

const Testimonials = () => {
    const testimonialSliderRef = useRef(null);
    const interval = 5000;
  
    useEffect(() => {
      const timer = setInterval(() => {
        testimonialSliderRef.current.go('+');
      }, interval);
  
      return () => clearInterval(timer);
    }, [interval]);
  
    return (
      <div className=' mt-16 lg:max-w-[55rem] mx-auto'>
        <h2 className=' text-3xl font-bold text-center mb-5'>Testimonials</h2>
        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            autoplay: false,
            pauseOnHover: true,
            interval,
          }}
          ref={testimonialSliderRef}
        >
          {testimonials.map((testimonial) => (
            <SplideSlide key={testimonial.id}>
              <div className="testimonial-slide">
                <p className=' font-semibold'>{testimonial.text}</p>
                <p className=' text-gray-500 mt-2'>- {testimonial.author}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    );
  };

  export default Testimonials