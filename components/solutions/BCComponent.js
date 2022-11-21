import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftCircleOutlined,RightCircleOutlined } from '@ant-design/icons';
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {Pagination,Navigation} from 'swiper';
SwiperCore.use([Pagination,Navigation]);
import bc1 from '../../public/images/solution/bc/bc1-min.jpg'
import bc2 from '../../public/images/solution/bc/bc2-min.jpg'
import bc3 from '../../public/images/solution/bc/bc3-min.jpg'
import bc4 from '../../public/images/solution/bc/bc4-min.jpg'
import bc5 from '../../public/images/solution/bc/bc5-min.jpg'
import bc6 from '../../public/images/solution/bc/bc6-min.jpg'
const BCComponent = () => {
  return (
      <>
          <div className='head-block'>
              <h4 className="w-title">Braille Cartons</h4>
              <p className='w-title1'>supply high quality Braille cartons for domestic products and also for international markets.</p>
          </div>
          <p>Braille cartons are especially designed cartons that are embossed with braille characters. Braille cartons are predominantly used in pharmaceutical industry. Embossing with braille characters makes the carton a source of information for the blind customers.</p>

          <div className='bc-portfoio'>
              <div class="head-block mb-5 mt-5"><h4 class="w-title">Product Portfolios</h4></div>
              <div className='slide-btn'>
                  <LeftCircleOutlined className='review-swiper-button-prev' />
                  <RightCircleOutlined className='review-swiper-button-next' />
              </div>
              <div className="testimonial-num-count owl-num-count owl-carousel owl-btn-center-lr owl-btn-3 owl-theme">
                  <Swiper slidesPerView={3} spaceBetween={30}
                      navigation={{
                          nextEl: '.review-swiper-button-next',
                          prevEl: '.review-swiper-button-prev',
                      }} className="service-swiper">
                      <SwiperSlide>
                          <div className="testimonial-12 text-white ">
                              <div className="s-slider">
                                  <Image src={bc1} alt="t1" height={400} width={400} />
                              </div>


                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="testimonial-12 text-white ">
                              <div className="s-slider">
                                  <Image src={bc2} alt="t1" height={400} width={400} />
                              </div>

                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="testimonial-12 text-white ">
                              <div className="s-slider">
                                  <Image src={bc3} alt="t1" height={400} width={400} />
                              </div>

                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="testimonial-12 text-white ">
                              <div className="s-slider">
                                  <Image src={bc4} alt="t1" height={400} width={400} />
                              </div>

                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="testimonial-12 text-white ">
                              <div className="s-slider">
                                  <Image src={bc5} alt="t1" height={400} width={400} />
                              </div>

                          </div>
                      </SwiperSlide>
                      <SwiperSlide>
                          <div className="testimonial-12 text-white ">
                              <div className="s-slider">
                                  <Image src={bc6} alt="t1" height={400} width={400} />
                              </div>

                          </div>
                      </SwiperSlide>
                  </Swiper>
              </div>


          </div>
      </>
  )
}

export default BCComponent