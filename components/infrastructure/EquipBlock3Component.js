import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons'

import s2 from '../../public/images/equipments/gluer.jpg'
import s3 from '../../public/images/equipments/patek750.jpg'
import s4 from '../../public/images/equipments/bobst-45.jpg'

const EquipBlock3Component = () => {
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const[id,setId]=React.useState('')
    //const[active,setActive]=React.useState()
   const openMenu=(id)=>{
    setId(id)
    if(id==1){
        setOpen(!open)
        setOpen1(false)
    }else{
        setOpen(false)
        setOpen1(!open1)
    }
   }
    React.useEffect(()=>{
        //alert(id)
        
       

    },[id])
    return (
        <div className='equip-block mt-3'>
            <div className='row'>
                {/*<div className='col-md-6'>
                    <div onClick={() =>openMenu(1) } class={id==1 && open?"kam-box kam-img-box img-hvr-content-style-1 e-active":"kam-box kam-img-box img-hvr-content-style-1"}>
                        <div class="kam-media kam-img-overlay2 kam-img-effect zoom ">
                            <Image src={s1} alt='' />
                            <div class="kam-info-has p-a20">
                                <div class="kam-info-has-text">Folder Gluer</div>
                                <DownOutlined />
                            </div>
                        </div>
                    </div>
                </div>*/}
                <div className='col-12'>
                    <div onClick={() => openMenu(2)} class={id==2 && open1?"kam-box kam-img-box img-hvr-content-style-1 e-active":"kam-box kam-img-box img-hvr-content-style-1"}>
                        <div class="kam-media kam-img-overlay2 kam-img-effect zoom ">
                            <Image src={s2} alt='' />
                            <div class="kam-info-has p-a20">
                                <div class="kam-info-has-text">Folder Gluer</div>
                                <DownOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                {/*<Collapse className='eq-block1-col mt-5 ' in={open}>
                    <div id="eq-block1-content1" className='eq-block1-content'>
                        
                        <div className='eq-block1-box'>
                        <div className='head-block mb-4'>
                            <h4 className="w-title">UV & Aqua dryer</h4>
                            {/*<p className='w-title1'>Cutting Machine</p>

                        </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='e-box-lr'>
                                        <p>Dizario Low Pile UV Curing Machine is the latest state of UV Technology. </p>
                                        <p className='f-25'>Features:</p>
                                        <ul class="intro-ul">
                                            <li>Main Drive Motor make Rotomotive CE certified)</li>
                                            <li>IR Module for Aqua Coating</li>
                                            <li>High quality 2 UV Lamp (300 W/inch- Quartz Type, make- Western Quartz)</li>
                                            <li>Easy to operate zero make ready time</li>
                                            <li>Multi-Mode (70%, 100%) Running for power saving in UV lamp</li>
                                            <li>High-Quality Copper Transformer for long-term running</li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className='col-md-6'>
                                    <div class="kam-media-box">

                                        <Image src={s1} alt='' />


                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </Collapse>*/}
                <Collapse className='eq-block1-col mt-5 ' in={open1}>
                    <div id="eq-block1-content" className='eq-block1-content'>
                        
                        <div className='eq-block1-box'>
                                <div className='head-block mb-4'>
                                    <h4 className="w-title">Paktek -750-1</h4>
                                    {/*<p className='w-title1'>Colour with coating</p>*/}
                                </div>
                            <div className='row'>
                                
                                <div className='col-md-6'>
                                    <div className='e-box-lr'>
                                        <p>Folder Gluer are mainly designed for the production of color boxes. They offer stable and high output production. Especially for complex design of boxes, efficient operation and fast change-over time can be achieved. </p>
                                        <p>With the high technology of automatic PLC positioning system, through the memory function, it can save the previous working data to shorten the setup time. The PLC positioning system provides a great help for wide diversity of works and meet the broad request of packing industry. Each component is designed for quick and easy operation to improve operators’ efficiency greatly.</p>
                                        <p className='f-25'>
Main Features</p>
                                        <ul class="intro-ul">
                                            <li>Quick Adjustment on Feeder Belt</li>
                                            <li>Self-Drive Upper Belt Carrier</li>
                                            <li>Air type of Lifting Hook Base</li>
                                            <li>PLC Positioning System with Memory Function</li>
                                            <li>Glue-Tank Adjustment by PLC</li>
                                            
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className='col-md-6'>
                                    <div class="kam-media-box">
                                        <Image src={s3} alt='' />
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                        <div className='eq-block1-box'>
                            <div className='head-block-right mb-4'>
                                    <h4 className="w-title">Bobst media 45</h4>
                                    <p className='w-title1'>Folding-Gluing machine for straight line</p>
                                </div>
                            <div className='row'>
                                
                                <div className='col-md-6'>
                                    <div class="kam-media-box">
                                        <Image src={s4} alt='' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='e-box-lr text-right '>
                                       <p className='f-25'>Description:</p>
                                       
                                        <ul class="intro-ul">
                                            <li>Width: maxi 48 cm - mini 8,6 cm</li>
                                            <li>Length: maxi 50 cm - mini 6 cm</li>
                                            <li>Maxi Thickness of folded box: 8 mm</li>
                                            <li>Solid board: from 100 to 600 g/m²</li>
                                                                                    </ul>
                                       <p className='f-25'>Equipped with:</p>
                                       
                                        <ul class="intro-ul">
                                            <li>Control panel CUBE</li>
                                            <li>Glue system HHS C-1100 with 4 Guns Krefred</li>
                                            <li>1 Disc of Glue 4 mm. Rotary Ejector</li>
                                            
                                        </ul>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            

                        </div>
                        
                    </div>
                    
                </Collapse>
            </div>
        </div>
    )
}

export default EquipBlock3Component