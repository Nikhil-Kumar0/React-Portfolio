import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Phill',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut magnam optio nostrum voluptatem. Dolorem minima expedita dicta dignissimos est nam perspiciatis quas ut!'
  },
  {
    avatar: AVTR2,
    name: 'Mark John',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut magnam optio nostrum voluptatem. Dolorem minima expedita dicta dignissimos est nam perspiciatis quas ut!'
  },
  {
    avatar: AVTR3,
    name: 'George Alexander',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut magnam optio nostrum voluptatem. Dolorem minima expedita dicta dignissimos est nam perspiciatis quas ut!'
  },
  {
    avatar: AVTR4,
    name: 'Emma Henery',
    review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut magnam optio nostrum voluptatem. Dolorem minima expedita dicta dignissimos est nam perspiciatis quas ut!'
  },
]

function testimonials() {
  return (
    <section id="testimonials">
      <h5> Review from clients </h5>
      <h2> Testimonials </h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="AVTR 1" />
                </div>
                <h5 className='client__name'>{name} </h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials