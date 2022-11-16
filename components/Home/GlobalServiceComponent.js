import React from 'react'
import {Card} from 'antd'
const GlobalServiceComponent = () => {
  return (
    <>
    <div className="section-full bg-gray content-inner global-section">
		  <div className="container-fluid">
            <div className='row'>
                <div className='col-md-4'>
                    <p className='w-title1 fs-50 p-relative'> Our presence and facilitates</p>
                        
                </div>
                <div className='col-md-8'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Card hoverable className='g-sec-right text-center'>
                                <p className='g-sec-title'>2900</p>
                                <p className='g-sec-desc '>Employess</p>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card hoverable className='g-sec-right text-center'>
                                <p className='g-sec-title '>21</p>
                                <p className='g-sec-desc '>Locations</p>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card hoverable className='g-sec-right text-center'>
                                <p className='g-sec-title '>12</p>
                                <p className='g-sec-desc '>Countries</p>
                            </Card>
                        </div>
                        <div className='col-md-3'>
                            <Card hoverable className='g-sec-right text-center'>
                                <p className='g-sec-title '>25 Yr</p>
                                <p className='g-sec-desc '>Experience</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default GlobalServiceComponent