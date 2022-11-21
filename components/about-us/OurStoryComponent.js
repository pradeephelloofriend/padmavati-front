import React from 'react'
import { Card,Typography,Tabs } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftCircleFilled  ,RightCircleFilled  } from '@ant-design/icons';
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {Pagination,Navigation} from 'swiper';
import Image from 'next/image'
import t1 from '../../public/images/story/team1.jpg'
SwiperCore.use([Pagination,Navigation]);
const {Title,Text}=Typography
const OurStoryComponent = () => {
  return (
    
      <>

          <div className="section-head text-center">
              <Title className='block-title-1 t-red text-uppercase' level={2}>Our Stories</Title>
              <Text className='block-desc t-black'>In addition to unparalleled business growth, BNI Members develop lasting relationships that allow them to grow personally and professionally.</Text>
          </div>
          <div className='position-realtive '>
              <div className='story-slider'>
                  <Swiper slidesPerView={3} pagination={true} spaceBetween={30}
                      navigation={{
                          nextEl: '.review-swiper-button-next',
                          prevEl: '.review-swiper-button-prev',
                      }} className="story-swiper">
                      <SwiperSlide>
                            <div class="testimonial-2">
                                <div class="testimonial-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                                </div>
                                <div class="testimonial-detail clearfix">
                                    <div class="testimonial-pic quote-left radius shadow"><Image src={t1} width="100" height="100" alt="" /></div>
                                    <strong class="testimonial-name">Santosh Korgawkar</strong> <span class="testimonial-position">Director - Kamsoft</span> 
                                </div>
                            </div>
                      </SwiperSlide>
                      <SwiperSlide>
                            <div class="testimonial-2">
                                <div class="testimonial-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                                </div>
                                <div class="testimonial-detail clearfix">
                                    <div class="testimonial-pic quote-left radius shadow"><img src="images/testimonials/pic1.jpg" width="100" height="100" alt="" /></div>
                                    <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> 
                                </div>
                            </div>
                      </SwiperSlide>
                      <SwiperSlide>
                            <div class="testimonial-2">
                                <div class="testimonial-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                                </div>
                                <div class="testimonial-detail clearfix">
                                    <div class="testimonial-pic quote-left radius shadow"><Image src={t1} width="100" height="100" alt="" /></div>
                                    <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> 
                                </div>
                            </div>
                      </SwiperSlide>
                      <SwiperSlide>
                            <div class="testimonial-2">
                                <div class="testimonial-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                                </div>
                                <div class="testimonial-detail clearfix">
                                    <div class="testimonial-pic quote-left radius shadow"><Image src={t1} width="100" height="100" alt="" /></div>
                                    <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> 
                                </div>
                            </div>
                      </SwiperSlide>
                      <SwiperSlide>
                            <div class="testimonial-2">
                                <div class="testimonial-text">
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an printer took a galley of type and scrambled it to make [...]</p>
                                </div>
                                <div class="testimonial-detail clearfix">
                                    <div class="testimonial-pic quote-left radius shadow"><Image src={t1} width="100" height="100" alt="" /></div>
                                    <strong class="testimonial-name">David Matin</strong> <span class="testimonial-position">Student</span> 
                                </div>
                            </div>
                      </SwiperSlide>
                  </Swiper>
              </div>
              <div className='slide-btn'>
                  <LeftCircleFilled className='review-swiper-button-prev' />
                  <RightCircleFilled className='review-swiper-button-next' />
              </div>
          </div>

      </>
    
  )
}

export default OurStoryComponent