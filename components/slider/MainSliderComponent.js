import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
//import { VideoCameraAddOutlined } from '@ant-design/icons';
import Image from 'next/image'
import s1 from '../../public/images/slider/1.jpg'

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const MainSliderComponent = () => {
 
  return (
    <>
      <section className="section-full bg-white slider-area">
        <div className="container-fluid no-padding">
          <div className='slider-right'>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Image src={s1} alt="s1"  />
                <div className="swiper_content ">
                  <div class="some-facts "></div>
                    <div class="text-white text-uppercase sf-content">
                      <p className='arrow-animation'>Are You Ready For</p>
                      <h3>THE SOLUTION PERFORMER ?</h3>
                    </div>
                  
                  {/*<p>Agnel group a goan native a diversified business.</p>
                  <a href="#" className="site-button radius-xl btnhover13  mt-10">Learn More</a>*/} 
                  
                </div>
              </SwiperSlide>
              
              
              
              
            </Swiper>
          </div>

        </div>
      </section>

    </>
    
  )
}

export default MainSliderComponent