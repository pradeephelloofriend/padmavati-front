import React from 'react'
import { Typography } from 'antd'
import Image from 'next/image'
//import map from '../../public'
import a1 from '../../public/images/a-partner/pic1.png'
import a2 from '../../public/images/a-partner/pic2.png'
import a3 from '../../public/images/a-partner/pic3.png'
import a4 from '../../public/images/a-partner/pic4.png'
import a5 from '../../public/images/a-partner/pic5.png'
import a6 from '../../public/images/a-partner/pic6.png'
const {Title,Text}=Typography
const AssociatePartnerComponent = () => {
  return (
      <>
          <div className="widget widget_gallery ">
              
              <ul id="lightgallery" className="lightgallery">
                  <li>
                      <div className="kam-post-thum kam-img-effect">
                          <span  className="check-km" title="Image 1 Title will come here">
                              <Image src={a1} alt="a1" width={480} height={430} />
                          </span>
                      </div>
                  </li>
                  <li>
                      <div className="kam-post-thum kam-img-effect">
                          <span  className="check-km" title="Image 2 Title will come here">
                            <Image src={a2} alt="a2" width={480} height={430} />
                          </span>
                      </div>
                  </li>
                  <li>
                      <div className="kam-post-thum kam-img-effect">
                          <span  className="check-km" title="Image 3 Title will come here">
                            <Image src={a3} alt="a3" width={480} height={430} />
                          </span>
                      </div>
                  </li>
                  <li>
                      <div className="kam-post-thum kam-img-effect">
                          <span  className="check-km" title="Image 4 Title will come here">
                            <Image src={a4} alt="a4" width={480} height={430} />
                          </span>
                      </div>
                  </li>
                  <li>
                      <div className="kam-post-thum kam-img-effect">
                          <span  className="check-km" title="Image 5 Title will come here">
                            <Image src={a5} alt="a5" width={480} height={430} />
                          </span>
                      </div>
                  </li>
                  <li>
                      <div className="kam-post-thum kam-img-effect">
                          <span  className="check-km" title="Image 6 Title will come here">
                          <Image src={a6} alt="a5" width={480} height={430} />
                          </span>
                      </div>
                  </li>
                  
              </ul>
          </div>
      </>
  )
}

export default AssociatePartnerComponent