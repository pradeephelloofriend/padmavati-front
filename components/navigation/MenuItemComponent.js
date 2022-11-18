import React, { useRef } from 'react'
import Image from 'next/image';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {setTabKey} from '../../redux/menu/menuAction'
import {selectMenuRef} from '../../redux/menu/menuSelector'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Button } from 'antd';
import img1 from '../../public/images/background/leaflet.jpg'
import img2 from '../../public/images/background/foil.jpg'
import { useRouter } from 'next/router'



const MenuItemComponent = ({ setTabKey,ref1 }) => {
    const router = useRouter()
    const[ref,setRef]=React.useState() //about/history page
    
    
	function routeWithScroll(ref,tKey){
		setTabKey(tKey)
        router.push({
          pathname:'/about-us',
          query:{ref:ref}
        })
	}
	
    React.useEffect(() => {
        setRef(ref1)
		if (router.query.ref=='tab'){
			window.scrollTo(0, ref)
			
		  }
      }, [ref1,router])
      
    
    return (
        <>
		
            <ul className="nav navbar-nav">	
							<li onClick={()=>router.push('/')} className={router.pathname=='/'?"active":""}>
								<a >Home</a>
								
							</li>
							<li  className={router.pathname=='/about-us'?"active":""}>
								<a onClick={()=>router.push('/about-us')} >About Us</a>
								{/*<ul className="sub-menu">
									<li><a onClick={()=>router.push('/certificate')} >Certification and Awards</a></li>
									<li><a onClick={() =>routeWithScroll('tab','1')}>Our History</a></li>
									<li><a onClick={() =>routeWithScroll('tab','3')}>Our Team</a></li>
									<li><a onClick={() =>routeWithScroll('tab','2')}>Our Success Story</a></li>
								</ul>*/}
							</li>
							<li  className={router.pathname=='/solution'?"active":""}> <a href='#' >Packaging Solutions<i className="fa fa-chevron-down"></i></a>
								<ul className="sub-menu">
									<li><a  href='#'>Braille Cartons</a></li>
									<li><a href='#'>Foiling Packaging Carton</a></li>
									<li><a href='#'>Pharma insert & leaflets, boxes</a></li>
									<li><a href='#'>Pharma Packaging & Printing products</a></li>
									<li><a href='#'>Pharma cartons</a></li>
									<li><a href='#'>Security enhanced cartons</a></li>
									<li><a href='#'>Commercial printer and packaging & printing</a></li>
								</ul>
								{/*<ul className="mega-menu">
									<li> 
										<div className='img-menu'>
											<Image src={img1} height={100} width={100} alt=''/>
										</div>
										<a onClick={()=>router.push('/pl')} className='w-title'>Braille Cartons<i class="fa fa-angle-right arrow-animation"></i></a>
									</li>
								</ul>*/}
								
							</li>
							
							<li className={router.pathname=='/infrastructure'?"active":""} 
							onClick={()=>router.push('/infrastructure')} 
							> <a >Infrastructure</a>
								{/* <ul className="mega-menu">
									<li><a >Product e-Brochure</a>
										<ul>
											<li><a href="shortcode-buttons.html"><i className="ti-mouse"></i> Buttons</a></li>
											<li><a href="shortcode-icon-box-styles.html"><i className="ti-layout-grid2"></i> Icon box styles</a></li>
											<li><a href="shortcode-pricing-table.html"><i className="ti-layout-grid2-thumb"></i> Pricing table</a></li>
											<li><a href="shortcode-toggles.html"><i className="ti-layout-accordion-separated"></i> Toggles</a></li>
											<li><a href="shortcode-team.html"><i className="ti-user"></i> Team</a></li>
											<li><a href="shortcode-animation-effects.html"><i className="ti-layers-alt"></i> Animation Effects</a></li>
										</ul>
									</li>
									<li> <a >Media Articles</a>
										<ul>
											<li><a href="shortcode-carousel-sliders.html"><i className="ti-layout-slider"></i> Carousel sliders</a></li>
											<li><a href="shortcode-image-box-content.html"><i className="ti-image"></i> Image box content</a></li>
											<li><a href="shortcode-tabs.html"><i className="ti-layout-tab-window"></i> Tabs</a></li>
											<li><a href="shortcode-counters.html"><i className="ti-timer"></i> Counters</a></li>
											<li><a href="shortcode-shop-widgets.html"><i className="ti-shopping-cart"></i> Shop Widgets</a></li>
											<li><a href="shortcode-filters.html"><i className="ti-check-box"></i> Gallery Filters</a></li>
										</ul>
									</li>
									<li> <a >Stories</a>
										<ul>
											<li><a href="shortcode-accordians.html"><i className="ti-layout-accordion-list"></i> Accordians</a></li>
											<li><a href="shortcode-dividers.html"><i className="ti-layout-list-post"></i> Dividers</a></li>
											<li><a href="shortcode-images-effects.html"><i className="ti-layout-media-overlay"></i> Images effects</a></li>
											<li><a href="shortcode-testimonials.html"><i className="ti-comments"></i> Testimonials</a></li>
											<li><a href="shortcode-pagination.html"><i className="ti-more"></i> Pagination</a></li>
											<li><a href="shortcode-alert-box.html"><i className="ti-alert"></i> Alert box</a></li>
										</ul>
									</li>
									<li> <a >White papers </a>
										<ul>
											<li><a href="shortcode-icon-box.html"><i className="ti-layout-media-left-alt"></i> Icon Box</a></li>
											<li><a href="shortcode-list-group.html"><i className="ti-list"></i> List group</a></li>
											<li><a href="shortcode-title-separators.html"><i className="ti-layout-line-solid"></i> Title Separators</a></li>
											<li><a href="shortcode-all-widgets.html"><i className="ti-widgetized"></i> Widgets</a></li>
											<li><a href="shortcode-carousel-sliders.html"><i className="ti-layout-slider"></i> Carousel sliders</a></li>
											<li><a href="shortcode-image-box-content.html"><i className="ti-image"></i> Image box content</a></li>
										</ul>
									</li>
								</ul> */}
							</li>
							
							
						</ul>
        </>
    )
}
const mapStateToProps=createStructuredSelector({
	ref1:selectMenuRef,
	
  })
  const mapDispatchToProps=dispatch=>({
	setTabKey:data=>dispatch(setTabKey(data))
  })

export default connect(mapStateToProps,mapDispatchToProps) (MenuItemComponent)
