import React from 'react'
import i1 from '../../public/images/banner/img2-min.png'
import i2 from '../../public/images/banner/Signature.png'
import Image from 'next/image'
import { Typography,Tabs,Card  } from 'antd'

const {Title,Text}=Typography
const { TabPane } = Tabs;
export const AboutCompanyComponent = () => {
    const onChange = (key) => {
        console.log(key);
      };
  return (
      <>
          <div className="section-full  content-inner-2 bg-light-white-5 about-page wow fadeIn" >
              <div className="container ">
                  <div className='row '>
                      <div className='col-12 '>
                        <div className='head-block'>
                            <h4 className="w-title">Padmavathi since 1974</h4>
                            <p className='w-title1'>Excel in Pharma Printing and packaging products”</p>
                        </div>
                          <div className='vim-about-content'>
                            <div className='vim-about-block'>
                                <p>Padmavathi Art Printery originally known as Vimal Art Printery was established in the year 1974.We are manufacturers, exporter and service provider of Braille Cartons, Foiling Packaging Carton, Pharma insert & leaflets, boxes, Pharma Packaging, Pharma Printing products, Pharma cartons, Security enhanced cartons, Commercial printer and packaging & printing.</p>
                                <p>Padmavathi Art Printery is a trusted name in printing and packaging. With its head office and main printing unit spread over 2000sq.ft. in Goa, we ensure that our facilities are state of the art, and a step ahead of the rest. Together they fulfill the domestic and export packaging needs of our Pharmaceutical and FMCG clients.  </p>
                            </div>
                            <div className='vim-anim-box bg-moving'>
                                 <p className='text-white'>Our dedication to technology and standards has helped us excel , and give the best, to the best. Our repertoire of clients includes the who’s who of Indian industry including Ranbaxy, Cipla, Glenmark Pharmaceuticals ltd, Marksons Pharmaceuticals ltd, Centaur Pharmaceutical pvt ltd, Geno Pharma and Famy Care ltd. </p>
                                    <p className='text-white'>We have earned a reputation as specialty carton printers, and have many other advanced technology and concepts to offer.
                                    </p>
                                <div className='vm-img-box'>
                                        <Image src={i1} alt='' height={250} width={320}/>
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
