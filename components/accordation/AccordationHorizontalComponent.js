import React from 'react'
import i1 from '../../public/images/background/1.jpg'
import Image from 'next/image'
const AccordationHorizontalComponent = () => {
    const lazyRoot = React.useRef(null)
    const [id,setId]=React.useState('bu-3')
    function onMouseOverHandle(id){
        
        setId(id)
    }
  return (
      <><div className="section-full accordation-home bg-white content-inner">
      <div className="container ">
      <div className="acco-container" ref={lazyRoot}>
              

              <ul className="accordion-group" >
                  <li className={`lazy bu-1 ${id=='bu-1'?'out':''} `} onMouseOver={()=>onMouseOverHandle('bu-1')}>
                  {/*<Image lazyRoot={lazyRoot} src={i1} layout='fill' alt='' />*/}
                      <div className="accordion-overlay"></div>
                      <h3>Your Business Grows <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
                      <section>
                          <article>
                              <h4>Your Business Grows</h4>
                              <p>A BNI Membership is referral networking that works! Our proven business referral system, coupled with BNI Online™ , is designed to help businesses work together to pass referral business and explore new opportunities.
                                  <br/> <br/>
                                      Visiting a meeting is free and a great way to see an online BNI Chapter meeting in action.</p>
                            </article>
                        </section>
                    </li>
                    <li className={`lazy bu-2 ${id=='bu-2'?'out':''} `} onMouseOver={()=>onMouseOverHandle('bu-2')}>
                        <div className="accordion-overlay"></div>
                        <h3>Your Business Grows <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
                        <section>
                            <article>
                                <h4>Your Business Grows</h4>
                                <p>A BNI Membership is referral networking that works! Our proven business referral system, coupled with BNI Online™ , is designed to help businesses work together to pass referral business and explore new opportunities.
                                  <br/> <br/>
                                      Visiting a meeting is free and a great way to see an online BNI Chapter meeting in action.</p>
                            </article>
                        </section>
                    </li>
                    <li className={`lazy bu-3 ${id=='bu-3'?'out':''} `} onMouseOver={()=>onMouseOverHandle('bu-3')}>
                        <div className="accordion-overlay"></div>
                        <h3>Your Business Grows <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
                        <section>
                            <article>
                                <h4>Your Business Grows</h4>
                                <p>A BNI Membership is referral networking that works! Our proven business referral system, coupled with BNI Online™ , is designed to help businesses work together to pass referral business and explore new opportunities.
                                  <br/> <br/>
                                      Visiting a meeting is free and a great way to see an online BNI Chapter meeting in action.</p>
                            </article>
                        </section>
                    </li>
                    <li className={`lazy bu-4 ${id=='bu-4'?'out':''} `} onMouseOver={()=>onMouseOverHandle('bu-4')}>
                        <div className="accordion-overlay"></div>
                        <h3>Your Business Grows <i className="fa fa-long-arrow-right" aria-hidden="true"></i></h3>
                        <section>
                            <article>
                                <h4>Your Business Grows</h4>
                                <p>A BNI Membership is referral networking that works! Our proven business referral system, coupled with BNI Online™ , is designed to help businesses work together to pass referral business and explore new opportunities.
                                  <br/> <br/>
                                      Visiting a meeting is free and a great way to see an online BNI Chapter meeting in action.</p>
                            </article>
                        </section>
                    </li>
                </ul>
            </div>
        </div></div>
          
              </>
  )
}

export default AccordationHorizontalComponent