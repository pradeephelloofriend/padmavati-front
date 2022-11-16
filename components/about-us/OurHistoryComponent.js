import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { Card,Typography,Tabs } from 'antd';
import { Swiper, SwiperSlide } from "swiper/react";
import { LeftCircleFilled  ,RightCircleFilled  } from '@ant-design/icons';
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {Pagination,Navigation} from 'swiper';
import Image from 'next/image'
import { useRouter } from 'next/router';
import { setTabKey, setMenuRef } from '../../redux/menu/menuAction';
import { selectTabKey } from '../../redux/menu/menuSelector';
import TeamMemberComponent from '../members/TeamMemberComponent';
import OurStoryComponent from './OurStoryComponent';
SwiperCore.use([Pagination,Navigation]);
const {Title,Text}=Typography
const { TabPane } = Tabs;
const OurHistoryComponent = ({tabKey,setMenuRef,setTabKey}) => {
    const router=useRouter()
    const historyRef = React.useRef(); 
    const [tabKey1,setTabKey1]=React.useState(1)
    React.useEffect(() => {
      //setAbtMenuRef(about.current.offsetTop)
      setMenuRef(historyRef.current.offsetTop-170)
      if (router.query.ref=='tab'){
        window.scrollTo(0, historyRef.current.offsetTop-170)
        
      }
      setTabKey1(tabKey)
      //setMenuRef(historyRef)
      //console.log('ref',historyRef)
  }, [historyRef,tabKey])
    const onChange = (key) => {
        //console.log(key);
        setTabKey(key)
      };
  return (
      <>
          <div className="section-full history-area" ref={historyRef}>
              <div className="container ">
                  <Tabs className='history-tab' activeKey={tabKey1} onChange={onChange} type="card">
                      <TabPane tab={<Title className='no-mb' level={4}>Our History</Title>} key="1">
                      <div className="section-head m-t20 mb-10">
                      
                      <Title className='block-title-2 t-gray ' level={1}>Our Work Journey</Title>

                  </div>
                  <div className=' history-slider '>
                      <Swiper slidesPerView={3} spaceBetween={20}
                          navigation={{
                              nextEl: '.review-swiper-button-next',
                              prevEl: '.review-swiper-button-prev',
                          }} className="history-swiper">
                          <SwiperSlide>
                              <div className='slide-year-up '>
                                  <div className="year">
                                      <span>2018</span>
                                  </div>
                                  <div className="year-text text-center bg-moving position-realtive">
                                      <p>We deliver more then
                                          1M+ products</p>
                                  </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className='slide-year-down'>

                                  <div className="year-text text-center position-realtive">
                                      <p>We deliver more then
                                          1M+ products</p>
                                  </div>
                                  <div className="year">
                                      <span>2018</span>
                                  </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className='slide-year-up '>
                                  <div className="year">
                                      <span>2018</span>
                                  </div>
                                  <div className="year-text text-center bg-moving position-realtive">
                                      <p>We deliver more then
                                          1M+ products</p>
                                  </div>
                              </div>
                          </SwiperSlide>
                          <SwiperSlide>
                              <div className='slide-year-down'>

                                  <div className="year-text text-center position-realtive">
                                      <p>We deliver more then
                                          1M+ products</p>
                                  </div>
                                  <div className="year">
                                      <span>2018</span>
                                  </div>
                              </div>
                          </SwiperSlide>
                      </Swiper>
                  </div>
                  <div className='slide-btn'>
                      <LeftCircleFilled className='review-swiper-button-prev' />
                      <RightCircleFilled className='review-swiper-button-next' />
                  </div>
                      </TabPane>
                      <TabPane tab={<Title className='no-mb' level={4}>Our Story</Title>} key="2">
                          <OurStoryComponent/>
                      </TabPane>
                      <TabPane tab={<Title className='no-mb' level={4}>Our Team Membrs</Title>} key="3">
                            <TeamMemberComponent/>
                      </TabPane>
                  </Tabs>
                  
              </div>
              <div className="lines">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
              </div>
          </div>
      </>
  )
}
const mapStateToProps=createStructuredSelector({
    tabKey:selectTabKey,
})
const mapDispatchToProps=dispatch=>({
    setMenuRef:(data)=>dispatch(setMenuRef(data)),
    setTabKey:(data)=>dispatch(setTabKey(data))
})
export default connect(mapStateToProps,mapDispatchToProps) (OurHistoryComponent)