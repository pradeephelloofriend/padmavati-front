import React from 'react'
import EquipBlock1Component from './EquipBlock1Component'
import EquipBlock2Component from './EquipBlock2Component'
import EquipBlock3Component from './EquipBlock3Component'

const EquipmentComponent = () => {
    
    
  return (
      <>
          <div className="section-full  content-inner bg-light " >
              <div className="container ">
                  <div className='row '>
                      <div className='col-12 '>
                          <div className='head-block-center text-center'>
                              <h4 className="w-title">Equipments We Used</h4>
                              <p className='w-title1'>Cutting-Edge Technology</p>
                          </div>
                          {/*eqipblock1*/}
                        <EquipBlock1Component/>
                        <EquipBlock2Component/>
                        <EquipBlock3Component/>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}

export default EquipmentComponent