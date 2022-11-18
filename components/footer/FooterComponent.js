import React from 'react'
import Image from 'next/image'
import { BackTop,Button } from 'antd';
import { UpOutlined } from '@ant-design/icons';
import logo from '../../public/images/padmavati-3.gif'

const FooterComponent = () => {
  return (
      <>
          <footer className="site-footer">
              <div className="footer-top footer-area">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-4  footer-col-4">
                              <div className="widget widget_services border-0">
                          
                                  <img className="footer-logo" src='https://res.cloudinary.com/depg2aab2/image/upload/v1668688102/padmavathi/padmavati-3_ff0xkd.gif'  alt=""/>
                                  <p>Over the last 25 years, we have partnered the pharma industry in our journey adopting cutting-edge technology and having innovation and R&D initiatives as our culture.</p>
                                  <div className="footer-social">
                                        <ul>
                                            <li><a href="#"><i className="fa fa-rss"></i></a></li>
                                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                        </ul>
						            </div>
                              </div>
                          </div>
                          <div className="col-md-4  footer-col-4">
                              <div className="widget widget_services border-0 pl-100">
                                  <h5 className="w-title text-black">Solutions</h5>
                                  <ul>
                                      <li><a >Create Account</a></li>
                                      <li><a >Company Philosophy </a></li>
                                      <li><a >Corporate Culture</a></li>
                                      <li><a >Portfolio</a></li>
                                      <li><a >Client Management</a></li>
                                  </ul>
                              </div>
                          </div>
                          
                          <div className="col-md-4 footer-col-4 ">
                              <div className="widget  widget_getintuch ">
                                  <h5 className="w-title text-black">Working Hours</h5>
                                  <ul>
                                            <li><i className="ti-location-pin"></i><strong>address</strong> demo address #8901 Marmora Road Chi Minh City, Vietnam </li>
                                            <li><i className="ti-mobile"></i><strong>phone</strong>0800-123456 (24/7 Support Line)</li>
                                            <li><i className="ti-email"></i><strong>email</strong>info@example.com</li>
                                        </ul>
                                </div>
                          </div>
                      </div>
                  </div>
              </div>
              
              <div className="footer-bottom bg-red-c">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-6 col-sm-6 text-left "> <span>Copyright © 2022 Padmavathi</span> </div>
                          <div className="col-md-6 col-sm-6 text-right ">
                              <div className="widget-link ">
                                  <ul>
                                      <li><a > About</a></li>
                                      <li><a > Help Desk</a></li>
                                      <li><a > Privacy Policy</a></li>
                                  </ul>
                              </div>
                          </div>
                          <BackTop>
                          <Button  icon={<UpOutlined />} size="large" />
                            
                        </BackTop>
                         
                      </div>
                  </div>
              </div>
          </footer>
          
      </>
  )
}

export default FooterComponent