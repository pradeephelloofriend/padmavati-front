import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import {Card} from 'antd'
import { ArrowLeftOutlined ,ArrowRightOutlined,LeftCircleOutlined,RightCircleOutlined  } from '@ant-design/icons';
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {Pagination,Navigation} from 'swiper';
import t1 from '../../public/images/testimonial/testi1.jpg'
import t2 from '../../public/images/testimonial/testi2.jpg'
import t3 from '../../public/images/testimonial/testi3.jpg'
SwiperCore.use([Pagination,Navigation]);
const ClientTestimonialComponent = () => {
  return (
      <>
          <div className="section-full content-inner bg-light testi-area" >
              <div className="container">
                  <div className='row'>
                      <div className='col-12'>
                          <div className='head-block mb-5'>
                              <h4 className="w-title">Client Testimonials</h4>
                              
                          </div>
                          <div className='intro1-block'>
                            <div className='row'>
                                <div className='col-md-9'>
                                
                                <div className="section-content">
                                <div className='slide-btn'>
                                    <LeftCircleOutlined className='review-swiper-button-prev'/>
                                    <RightCircleOutlined className='review-swiper-button-next'/>
                                </div>
                      <div className="testimonial-num-count owl-num-count owl-carousel owl-btn-center-lr owl-btn-3 owl-theme">
                          <Swiper slidesPerView={1} spaceBetween={30} 
                              navigation={{
                                  nextEl: '.review-swiper-button-next',
                                  prevEl: '.review-swiper-button-prev',
                              }} className="service-swiper">
                              <SwiperSlide>
                                  <div className="testimonial-12 ">
                                      <div className="testimonial-pic">
                                          <Image src={t3} alt="t1" height={200} width={200} />
                                      </div>

                                      <div className="testimonial-detail">
                                          <div className='quote-left'>
                                              <h4 className="testimonial-name m-t0 m-b5">David Matin</h4>
                                              <span className="testimonial-position">Student</span>
                                              <div className="testimonial-text">
                                                  <p>At Vimal Printery, I was so impressed with their factory setup, Innovative and scientific approach to solution that enable to have them at the top of my list.</p>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                  <div className="testimonial-12  ">
                                      <div className="testimonial-pic">
                                          <Image src={t1} alt="t1" height={200} width={200} />
                                      </div>

                                      <div className="testimonial-detail">
                                          <div className='quote-left'>
                                              <h4 className="testimonial-name m-t0 m-b5">Devina Rogas</h4>
                                              <span className="testimonial-position">Student</span>
                                              <div className="testimonial-text">
                                                  <p>Staff at Vimal are very responsive to customer specific. They offer all alternative to meet the service objectives that saves time and money</p>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                  <div className="testimonial-12  ">
                                      <div className="testimonial-pic">
                                          <Image src={t2} alt="t1" height={200} width={200} />
                                      </div>

                                      <div className="testimonial-detail">
                                          <div className='quote-left'>
                                              <h4 className="testimonial-name m-t0 m-b5">Rohan Munki</h4>
                                              <span className="testimonial-position">Student</span>
                                              <div className="testimonial-text">
                                                  <p>Extensive classified data or information make it a powerful and optimal tool for anyone to easily readable. It contains a detailed information search and many of its specification reports personally customised, which makes  user-friendly. Vimal Printery is a solutions to this</p>
                                              </div>
                                          </div>

                                      </div>
                                  </div>
                              </SwiperSlide>
                          </Swiper>
                      </div>
                    
                  </div>
                                </div>
                                <div className='col-md-3'>
                                    <Card hoverable className='testi-card-right' >
                                        <h4 className='text-white'>WE ARE PASSIONATE ABOUT PACKAGING</h4>
                                    <p className='text-white'>Specializing in the printing of consumer packaging, high quality books, & commercial printing, Global Printing & Packaging provides the solution that you are looking for!</p>
                                    </Card>
                                </div>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default ClientTestimonialComponent