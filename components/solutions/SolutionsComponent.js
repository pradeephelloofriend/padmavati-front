import React from 'react'
import { Tabs } from 'antd';
import BCComponent from './BCComponent';
const { TabPane } = Tabs;
const SolutionsComponent = () => {
    const onChange = (key) => {
        console.log(key);
      };
    const extraData=<div>
                <div className='head-block'>
                            <h4 className="w-title">Explorer Packaging Solutions</h4>
                            
                        </div>
            </div>
  return (
      <div className="section-full  content-inner-2 bg-light-white-5 solution-page wow fadeIn" >
          <div className="container ">
              <div className='row '>
                  <div className='col-12 pl-tab'>
                      <Tabs tabBarExtraContent={extraData} tabPosition='right' defaultActiveKey="1" onChange={onChange}>

                          <TabPane tab={<a>Braille Cartons</a>} key="1">
                              <BCComponent/>
                          </TabPane>
                          <TabPane tab={<a>Pharma insert & leaflets, boxes </a>} key="2">
                              lkk
                          </TabPane>
                          <TabPane tab={<a>Pharma Packaging & Printing products </a>} key="3">
                              lkk
                          </TabPane>
                          <TabPane tab={<a>Pharma cartons</a>} key="4">
                              lkk
                          </TabPane>
                      </Tabs>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default SolutionsComponent