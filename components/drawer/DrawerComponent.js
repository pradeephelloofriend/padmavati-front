import React from 'react'
import { Drawer,Button } from 'antd';
const DrawerComponent = () => {
    const [open, setOpen] = React.useState(false);
    const showDrawer = () => {
        //alert('heloo')
        setOpen(true);
      };
      const onClose = () => {
        setOpen(false);
      };
      const onChange = (e) => {
        setPlacement(e.target.value);
      };
  return (
    <>
    <div className="extra-nav">
          <div className="extra-cell">
              <button onClick={showDrawer}  id="quik-search-btn" type="button" className="site-button-link"><i className="fa fa-bars" aria-hidden="true"></i></button>

          </div>
      </div>
    <Drawer  placement="right" onClose={onClose} visible={open}>
      <div className='drawer-logo'>
        <a><img className="footer-logo" src='https://res.cloudinary.com/depg2aab2/image/upload/v1668688102/padmavathi/padmavati-3_ff0xkd.gif'  alt=""/></a>
      </div>
       <p>Padmavathi Art Printery originally known as Vimal Art Printery was established in the year 1974 and is a trusted name in printing and packaging. </p>
        <Button style={{backgroundColor:'transparent'}} className='bg-moving' size="large" >REQEST A QUOTE</Button>
                      <div className='bg-moving'>
                      <div className='head-block mt-5'>
                            <h4 className="w-title ">CALL US TODAY</h4>
                            <p className='w-title1'><i className="fa fa-mobile arrow-animation " aria-hidden="true"></i> 0832 239 5291</p>
                        </div>
                      </div>
                        

                        <div className='head-block mt-5'>
                            {/*<h4 className="w-title">CALL US TODAY</h4>*/}
                            <p className='w-title1'>Our Office</p>
                        </div>
                        <div className="widget  widget_getintuch ">
                                  
                        <ul><li><i class="ti-location-pin"></i><strong>address</strong> Plot No. 267, GIDC,Kundaim Ind Estate,Kundaim,Ponda,Goa-403115, India </li><li><i class="ti-mobile"></i><strong>phone</strong>0832 239 5291 (24/7 Support Line)</li><li><i class="ti-email"></i><strong>email</strong>info@example.com</li></ul>
                                </div>
      </Drawer>
    </>
      
  )
}

export default DrawerComponent