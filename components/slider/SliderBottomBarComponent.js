import React from 'react'
import Image from 'next/image'
import { NotificationOutlined,CalendarOutlined,PushpinOutlined ,BankOutlined,TranslationOutlined,ReadOutlined    } from '@ant-design/icons';

import nac from '../../public/images/nac.png' 
import i1 from '../../public/images/icon/ci1.png' 
import i2 from '../../public/images/icon/ci2.png' 
import i3 from '../../public/images/icon/ci3.png' 
import i4 from '../../public/images/icon/ci4.png'
import i5 from '../../public/images/icon/ci5.png'  
const SliderBottomBarComponent = () => {
  return (
      <>
      <section className='slider-bottom-bar'>
          <div className='container-fluid'>
              <div className='row'>
                  <div className='col-md-5'>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="kam-topbar-left">
                            <ul className='sm-btm-left'>
                                <li><Image src={nac}alt="nac"/></li>
                                <li>
                                    <span className='s-btn-btm'>
                                    <Image src={i1}alt="i1"/>
                                    </span>
                                    <a>Innovation</a>
                                </li>
                                <li>
                                    <span className='s-btn-btm'>
                                    <Image src={i2}alt="i1"/>
                                    </span>
                                    <a>Online Calss</a>
                                </li>
                                <li>
                                    <span className='s-btn-btm'>
                                    <Image src={i3}alt="i1"/>
                                    </span>
                                    <a>Time Table</a>
                                </li>
                                <li>
                                    <span className='s-btn-btm'>
                                    <Image src={i4}alt="i1"/>
                                    </span>
                                    <a>Library</a>
                                </li>
                                
                                
                            </ul>
                        </div>
                        
                    </div>    
                  </div>
                  <div className='col-md-7'>
                    <div className="kam-topbar-left">
                    <ul className='sm-btm-right'>
                                
                                <li>
                                    <span>
                                    <NotificationOutlined />
                                    </span>
                                    <a>Announcements</a>
                                </li>
                                <li>
                                    <span>
                                    <CalendarOutlined/>
                                    </span>
                                    <a>Events & Activites</a>
                                </li>
                                <li>
                                    <span>
                                    <PushpinOutlined />
                                    </span>
                                    <a>Notices</a>
                                </li>
                                <li>
                                    <span>
                                    <BankOutlined  />
                                    </span>
                                    <a>Autonomy</a>
                                </li>
                                <li>
                                    <span>
                                    <TranslationOutlined  />
                                    </span>
                                    <a>Accolades</a>
                                </li>
                                <li>
                                    <span>
                                    <ReadOutlined  />
                                    </span>
                                    <a>Placement & Internship</a>
                                </li>
                            </ul>
                    </div>
                  </div>
              </div>
          </div>
      </section>
      </>
    
  )
}

export default SliderBottomBarComponent