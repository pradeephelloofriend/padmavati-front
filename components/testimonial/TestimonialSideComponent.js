import React from 'react'
import { Typography,Card } from 'antd';
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {Pagination,Navigation} from 'swiper';
import t1 from '../../public/images/testimonial/testimonial.jpg'
SwiperCore.use([Pagination,Navigation]);
const { Title ,Text} = Typography;
const { Meta } = Card;
const TestimonialSideComponent = () => {
  return (
      <>
          <div className='testi-sidebar m-t20'>
              <h5 className="dlab-tilte w-title text-uppercase">Clients Testimonial</h5>
              <div className="position-relative testi-block mt-13">
                  <Swiper slidesPerView={1} pagination={{
                      "clickable": true
                  }}
                      navigation={{
                          nextEl: '.review-swiper-button-next',
                          prevEl: '.review-swiper-button-prev',
                      }} className="service-swiper"


                     



                  >

                      <SwiperSlide className='hover-zoom-effect '>
                          <Card
                              hoverable
                              style={{
                                  width: 300,
                              }}
                              cover={<Image alt="example" src={t1}   />}
                          >
                              <div className='testi-content m-t10'>
                              <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                              </div>
                          </Card>
                      </SwiperSlide>




                  </Swiper>
              </div>

          </div>
      </>
  )
}

export default TestimonialSideComponent