import React from 'react'
import { Card,Typography,Tabs } from 'antd';
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import c1 from '../../public/images/clients/cipla.png'
import c2 from '../../public/images/clients/m-son.png'
import c3 from '../../public/images/clients/g-mark.png'
import c4 from '../../public/images/clients/plus.png'
import c5 from '../../public/images/clients/centary.png'
import c6 from '../../public/images/clients/uni.png'
import c7 from '../../public/images/clients/geno.png'
import c8 from '../../public/images/clients/mayer.png'
import c9 from '../../public/images/clients/wall.png'
import c10 from '../../public/images/clients/zydu.png'
const {Title,Text}=Typography
const ClientsComponent = () => {
  return (
    <>
        <div className="section-full bg-white content-inner-35">
              <div className="container ">
                    
                    <div className='position-realtive '>
                    <Marquee speed={50}>
                        <Image  width={145} height={80} src={c1} alt=""/>
                        <Image  width={145} height={80} src={c2} alt=""/>
                        <Image  width={145} height={80} src={c3} alt=""/>
                        <Image  width={145} height={80} src={c4} alt=""/>
                        <Image  width={145} height={80} src={c5} alt=""/>
                        <Image  width={145} height={80} src={c6} alt=""/>
                        <Image  width={145} height={80} src={c7} alt=""/>
                        <Image  width={145} height={80} src={c8} alt=""/>
                        <Image  width={145} height={80} src={c9} alt=""/>
                        <Image  width={145} height={80} src={c10} alt=""/>
                    </Marquee>
                </div>
              </div>
        </div>
    </>
  )
}

export default ClientsComponent