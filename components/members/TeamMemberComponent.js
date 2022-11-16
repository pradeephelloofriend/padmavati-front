import React from 'react'
import { Card,Typography,Tabs } from 'antd';
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import t1 from '../../public/images/team/Dario.jpg'
const {Title,Text}=Typography
const TeamMemberComponent = () => {
  return (
    <>
        <div className="section-full content-inner">
              <div className="container ">
                    <div className="section-head text-center">
                        <Title className='block-title-1 t-red text-uppercase' level={2}>Meet Our Team</Title>
                      <Text className='block-desc t-black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
					</div>
                    <div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block">
                                <div className="team-image">
                                    <Image className="lazy" src={t1} alt="" height={100} width={100}/>
                                </div>
                                <div className="team-content">
                                    <p className="darkGrey">
                                    Mr. Sandesh Dhareshwar</p>
                                    <p className="grey">
                                    Director  </p>
                                </div>
                            </div>
						</div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block">
                                <div className="team-image">
                                    <Image className="lazy" src={t1} alt="" height={100} width={100}/>
                                </div>
                                <div className="team-content">
                                    <p className="darkGrey">
                                       Mr. Akshay Naik                                  </p>
                                    <p className="grey">
                                        Plant Manager                                    </p>
                                </div>
                            </div>
						</div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block">
                                <div className="team-image">
                                    <Image className="lazy" src={t1} alt="" height={100} width={100}/>
                                </div>
                                <div className="team-content">
                                    <p className="darkGrey">
                                    Mr. Suresh Sawant                                    </p>
                                    <p className="grey">
                                    Production In charge                                   </p>
                                </div>
                            </div>
						</div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block">
                                <div className="team-image">
                                    <Image className="lazy" src={t1} alt="" height={100} width={100}/>
                                </div>
                                <div className="team-content">
                                    <p className="darkGrey">
                                    M/s Shabina Shaikh                                    </p>
                                    <p className="grey">
                                    Q.A In charge                                    </p>
                                </div>
                            </div>
						</div>
                        {/* <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block">
                                <div className="team-image">
                                    <Image className="lazy" src={t1} alt="" height={100} width={100}/>
                                </div>
                                <div className="team-content">
                                    <p className="darkGrey">
                                    Mrs. Suvidha Naik                                    </p>
                                    <p className="grey">
                                    Store In charge                                    </p>
                                </div>
                            </div>
						</div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="team-block">
                                <div className="team-image">
                                    <Image className="lazy" src={t1} alt="" height={100} width={100}/>
                                </div>
                                <div className="team-content">
                                    <p className="darkGrey">
                                    Mrs. Manjusha Naik                                    </p>
                                    <p className="grey">
                                    Account In charge                                    </p>
                                </div>
                            </div>
						</div> */}
					</div>
              </div>
        </div>
    </>
  )
}

export default TeamMemberComponent