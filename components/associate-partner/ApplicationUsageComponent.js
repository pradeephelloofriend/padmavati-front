import React from 'react'
import { Typography } from 'antd'
import Image from 'next/image'
//import map from '../../public'
import a1 from '../../public/images/a-partner/a1.png'
import a2 from '../../public/images/a-partner/a2.png'
import a3 from '../../public/images/a-partner/a3.png'
import a4 from '../../public/images/a-partner/a4.png'

const {Title,Text}=Typography
const ApplicationUsageComponent = () => {
  return (
    <>
          <div className="widget widget_gallery mt-5 ">
              
              <ul id="lightgallery" className="lightgallery">
                  <li className='ml-3'>
                      <div className="kam-post-thum kam-img-effect">
                          <span  className="check-km" title="Image 1 Title will come here">
                              <Image src={a1} alt="a1" width={512} height={512} />
                          </span>
                          
                      </div>
                  </li>
                  <li>
                      <div className="kam-post-thum kam-img-effect">
                          <span  className="check-km" title="Image 2 Title will come here">
                            <Image src={a2} alt="a2" width={512} height={512} />
                          </span>
                      </div>
                  </li>
                  <li>
                      <div className="kam-post-thum kam-img-effect">
                          <span  className="check-km" title="Image 3 Title will come here">
                            <Image src={a3} alt="a3" width={512} height={512} />
                          </span>
                      </div>
                  </li>
                  <li>
                      <div className="kam-post-thum kam-img-effect">
                          <span  className="check-km" title="Image 4 Title will come here">
                            <Image src={a4} alt="a4" width={512} height={512} />
                          </span>
                      </div>
                  </li>
                  
                  
              </ul>
          </div>
      </>
  )
}

export default ApplicationUsageComponent