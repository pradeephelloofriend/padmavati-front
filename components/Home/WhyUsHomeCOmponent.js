import React from 'react'
import { Typography } from 'antd'
import Image from 'next/image'
import i1 from '../../public/images/why-us/why-choose-us.jpg'
const {Title,Text}=Typography
const WhyUsHomeCOmponent = () => {
  return (
      <>
          <div className="section-full  content-inner bg-light-white-5 why-us wow fadeIn" >
              <div className="container">
                <div className='row'>
                    <div className='col-12 col-md-4'>
                    <div className="kam-post-media kam-img-effect zoom-slow"> 
						<a href="blog-single.html"><Image src={i1} alt="why-us" height={321} width={350} /></a> 
					</div>
                    </div>
                    <div className='col-12 col-md-5'>
                        <div className='w-us-content'>
                        <Title className='block-title-1 t-red text-uppercase'  level={2}>Why Choose Us?</Title>
                            <div className="kam-separator-outer ">
                                    <div className="kam-separator bg-primary style-skew"></div>
                                </div>
                            </div>
                        <p className='why-tag-p m-t10'>With extensive control systems throughout the manufacturing process, Compliance’s of SOP's and  GMP; and ISO 9001:2015 certified; Teamwork commitment to continuously 
                        review and enhance quality service is the leading core values  this differentiates us from our competition.</p>
                        <p className='why-tag-p txt-color'>Connected to Goa’s NH4 at a route distance from</p>
                        <div className="col-md-3 col-lg-8 col-sm-6 txt-color">
										<ul className="list-arrow txt-color">
											<li>Capital Panajim – 20KMS</li>
											<li>Ponda City – 12 KMS</li>
											<li>Railway Station Karmali – 7 KMS</li>
                                            <li>Airport Dabolim, Goa – 40 KMS</li>
										</ul>
									</div>
                        
                        
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className="why-choose-us wow fadeInRight">
                            <div className="why-choose-us-icon"> <i className=" fa fa-handshake-o"></i><span>We Are Trusted</span>  </div>
                            <div className="why-choose-us-icon"> <i className="fa fa-unlock-alt"></i><span>ISO Certified</span>  </div>
                            <div className="why-choose-us-icon"> <i className="fa fa-thumbs-o-up"></i> <span>Extensive Control</span> </div>
                            <div className="why-choose-us-icon"> <i className="fa fa-map-marker"></i> <span>Easy Access </span> </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </>
  )
}

export default WhyUsHomeCOmponent