import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
//import { VideoCameraAddOutlined } from '@ant-design/icons';
import Image from 'next/image'
import s1 from '../../public/images/slider/1.jpg'
import s2 from '../../public/images/slider/slider2-min.jpg'
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
                <img src={'https://res.cloudinary.com/depg2aab2/image/upload/v1669122912/padmavathi/1_h6x5wk.jpg'} alt="s1"  />
                <div className="swiper_content ">
                  <div class="some-facts "></div>
                    <div class="text-white text-uppercase sf-content">
                      <p className='arrow-animation'>Are you looking for</p>
                      <h3>Pharma packaging Solutions ?</h3>
                    </div>
                  
                  {/*<p>Agnel group a goan native a diversified business.</p>
                  <a href="#" className="site-button radius-xl btnhover13  mt-10">Learn More</a>*/} 
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img 
               src={'https://res.cloudinary.com/depg2aab2/image/upload/v1669122650/padmavathi/slider2_2_um0pwj.jpg'} alt="s1"  />
                <div className="swiper_content ">
                  <div class="some-facts "></div>
                    <div class="text-white text-uppercase sf-content">
                      <p className='arrow-animation'>One point Solutions</p>
                      <h3> For all your pharma packaging’s</h3>
                    </div>
                  
                  {/*<p>Agnel group a goan native a diversified business.</p>
                  <a href="#" className="site-button radius-xl btnhover13  mt-10">Learn More</a>*/} 
                  
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <img 
               src={'https://res.cloudinary.com/depg2aab2/image/upload/v1669130742/padmavathi/slider3-min_vy5vto.jpg'} alt="s1"  />
                <div className="swiper_content ">
                  <div class="some-facts "></div>
                    <div class="text-white text-uppercase sf-content">
                      <p className='arrow-animation'>Best Quality</p>
                      <h3> Eco-friendly packaging products</h3>
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