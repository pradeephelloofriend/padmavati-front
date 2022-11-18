import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import Image from 'next/image'
import { DownOutlined } from '@ant-design/icons'
import s1 from '../../public/images/equipments/equip3.jpg'
import s2 from '../../public/images/equipments/equip4.jpg'
import s3 from '../../public/images/equipments/bob900.jpg'
import s4 from '../../public/images/equipments/bobs1080.jpg'
import s5 from '../../public/images/equipments/equip4main.jpg'
const EquipBlock2Component = () => {
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
                <div className='col-md-6 col-6'>
                    <div onClick={() =>openMenu(1) } class={id==1 && open?"kam-box kam-img-box img-hvr-content-style-1 e-active":"kam-box kam-img-box img-hvr-content-style-1"}>
                        <div class="kam-media kam-img-overlay2 kam-img-effect zoom ">
                            <Image src={s1} alt='' />
                            <div class="kam-info-has p-a20">
                                <div class="kam-info-has-text">Coating machine</div>
                                <DownOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-6'>
                    <div onClick={() => openMenu(2)} class={id==2 && open1?"kam-box kam-img-box img-hvr-content-style-1 e-active":"kam-box kam-img-box img-hvr-content-style-1"}>
                        <div class="kam-media kam-img-overlay2 kam-img-effect zoom ">
                            <Image src={s2} alt='' />
                            <div class="kam-info-has p-a20">
                                <div class="kam-info-has-text">Die Cutting:</div>
                                <DownOutlined />
                            </div>
                        </div>
                    </div>
                </div>
                <Collapse className='eq-block1-col mt-5 ' in={open}>
                    <div id="eq-block1-content1" className='eq-block1-content'>
                        
                        <div className='eq-block1-box'>
                        <div className='head-block mb-4'>
                            <h4 className="w-title">UV & Aqua dryer</h4>
                            {/*<p className='w-title1'>Cutting Machine</p>*/}

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
                </Collapse>
                <Collapse className='eq-block1-col mt-5 ' in={open1}>
                    <div id="eq-block1-content" className='eq-block1-content'>
                        
                        <div className='eq-block1-box'>
                                <div className='head-block mb-4'>
                                    <h4 className="w-title">Bobst 900</h4>
                                    {/*<p className='w-title1'>Colour with coating</p>*/}
                                </div>
                            <div className='row'>
                                
                                <div className='col-md-6'>
                                    <div className='e-box-lr'>
                                        <p>Model has put revolutionary BOBST digital printing solution into operation</p>
                                        <p>Compared with flexo printing, Stream Inkjet Technology has the advantage in that it is a contactless form of printing – the grammage of the linerboard no longer matters or which corrugated profile is used. The quality of the printed image is always 1A since pressure is no longer exerted on the carrier medium, resulting in a uniformly beautiful image quality.</p>
                                        <p className='f-25'>Processed materials:</p>
                                        <ul class="intro-ul">
                                            <li>Paper</li>
                                            <li>Carton board</li>
                                            <li>Corrugated board</li>
                                            <li>Heavy solid board</li>
                                            <li>Semi-rigid plastics</li>
                                            <li>Laminates</li>
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
                                    <h4 className="w-title">Bobst 1080</h4>
                                    {/*<p className='w-title1'>Colour</p>*/}
                                </div>
                            <div className='row'>
                                
                                <div className='col-md-6'>
                                    <div class="kam-media-box">
                                        <Image src={s4} alt='' />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='e-box-lr text-right '>
                                       <p className='f-25'>Processed materials:</p>
                                       <p>BOBST equipment for the production of corrugated board packaging can process the following categories of materials:</p>
                                        <ul class="intro-ul">
                                            <li>Paper</li>
                                            <li>Carton board</li>
                                            <li>Corrugated board</li>
                                            <li>Linerboard</li>
                                            <li>Heavy solid board</li>
                                            <li>Laminates</li>
                                        </ul>
                                       <p className='f-25'>End-use sectors</p>
                                       <p>BOBST opens the way to an infinite number of corrugated board packaging applications, serving end-use sectors such as:</p>
                                        <ul class="intro-ul">
                                            <li>Juices & soft drinks</li>
                                            <li>Beers, wine & spirit</li>
                                            <li>Fresh food</li>
                                            <li>Healthcare</li>
                                            <li>Toys & games</li>
                                            <li>Household & laundry</li>
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

export default EquipBlock2Component