import React from 'react'
//import i1 from '../../public/images/banner/pic5.jpg'
import { Typography,Tabs,Card  } from 'antd'
import Image from 'next/image'
const {Title,Text}=Typography
const { TabPane } = Tabs;
const InfrastructureComponent = () => {
  return (
    <>
          <div className="section-full  content-inner-2 bg-light-white-5 about-page wow fadeIn" >
              <div className="container ">
                  <div className='row '>
                      <div className='col-12 '>
                        {/*<div className='head-block'>
                            <h4 className="w-title">Infrastructure</h4>
                            <p className='w-title1'>The robust and reliable infrastructure</p>
                        </div>*/}
                          <div className='vim-about-content'>
                            <div className='vim-about-block'>
                                <p>Our ultra modern facility is equipped with advanced technologies, processes, and equipments complying with international standards.While cutting-edge technologies from the backbone of our infrastructure, stringent quality system ensure high levels of precision. </p>
                                <p></p>
                                <p>The robust and reliable infrastructure can be customized and scaled up within a short period of time as per the requirements of a project. 
                                </p>
                            </div>
                            <div className='vim-anim-box bg-moving quality-box'>
                                 <h3 className='text-white fw-100'>We provide a fully digitalized and automated production line, from printing to embellishment and cutting.</h3>
                                    
                                <div className='vm-img-box'>
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

export default InfrastructureComponent