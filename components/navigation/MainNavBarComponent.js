import React from 'react'
import Image from 'next/image';
import {withRouter} from 'next/router'
import logo from '../../public/images/padmavati-3.gif'
import img1 from '../../public/images/background/leaflet.jpg'
import img2 from '../../public/images/background/foil.jpg'
import MenuItemComponent from './MenuItemComponent';
import TopNavBarComponent from './TopNavBarComponent';
import TopExtraNavComponent from './TopExtraNavComponent';
import DrawerComponent from '../drawer/DrawerComponent';


class MainNavBarComponent extends React.Component{
    constructor(){
        super()
        this.state={
            btnClick:false,
            isFixed: null,
        }
    }
	listener = null;
    handleScroll = () => {
        var scroll = window.pageYOffset

        //console.log('scrollValue',window.scrollTop())
        if (scroll > 100) {
           // console.log('scorll=', false)
            this.setState({ isFixed: 'is-fixed' })
        } else {
            
			//console.log('scorll=', true)
            this.setState({ isFixed: null })
        }

    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);

    }
    render(){
        const{btnClick,isFixed}=this.state
		const {router}=this.props
  return (
    <>
    <header className="site-header mo-left header">
		<div className={`sticky-header main-bar-wraper navbar-expand-lg ${isFixed}`}>
            <div className="main-bar clearfix">
                <div className="container clearfix">
                    {/*<!-- website logo -->*/}
                    <TopExtraNavComponent/>
                    <div className="logo-header mostion logo-dark">
						<a href="index.html"><img src='https://res.cloudinary.com/depg2aab2/image/upload/v1668688102/padmavathi/padmavati-3_ff0xkd.gif' alt="logo"/></a>
					</div>
                    {/*<!-- nav toggle button -->*/}
                    <button onClick={()=>this.setState({btnClick:!this.state.btnClick})} 
                    className={btnClick?"navbar-toggler open navicon justify-content-end":"navbar-toggler collapsed navicon justify-content-end"} 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded={btnClick?"true":"false"} 
                    aria-label="Toggle navigation">
						<span></span>
						<span></span>
						<span></span>
					</button>
                    {/*<!-- extra nav -->*/}
                    {/*<div className="extra-nav">
                        <div className="extra-cell">
                            <button id="quik-search-btn" type="button" className="site-button-link"><i className="la la-search"></i></button>
							<a  className="site-button btnhover13">Apply Now</a>
						</div>
                    </div>*/}
                    <DrawerComponent/>
                    
                    {/*<!-- Quik search -->*/}
                    {/*<div className="dlab-quik-search ">
                        <form action="#">
                            <input name="search" value="" type="text" className="form-control" placeholder="Type to search">
                            <span id="quik-search-remove"><i className="ti-close"></i></span>
                        </form>
                    </div>*/}
                    {/*<!-- main nav -->*/}
                    <div className={btnClick?`header-nav navbar-collapse show collapse`:`header-nav navbar-collapse collapse ${isFixed==null?`justify-content-end`:'justify-content-end'} `} id="navbarNavDropdown">
						<div className="logo-header d-md-block d-lg-none">
							<a href="#"><Image src={logo} height={50} width={254} alt="logo"/></a>
						</div>
                        
                        <MenuItemComponent/>
						<div className="kam-social-icon">
							<ul>
								<li><a className="site-button circle fa fa-facebook" ></a></li>
								<li><a className="site-button  circle fa fa-twitter" ></a></li>
								<li><a className="site-button circle fa fa-linkedin" ></a></li>
								<li><a className="site-button circle fa fa-instagram" ></a></li>
							</ul>
						</div>		
                    </div>
                </div>
            </div>
        </div>
        
    </header>
    </>
  )
    }
}

export default withRouter (MainNavBarComponent)