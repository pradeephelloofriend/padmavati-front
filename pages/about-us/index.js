import React from 'react'
import AboutBreadCumbComponent from '../../components/about-us/AboutBreadCumbComponent'
import { AboutCompanyComponent } from '../../components/about-us/AboutCompanyComponent'
import OurHistoryComponent from '../../components/about-us/OurHistoryComponent'
import OurStoryComponent from '../../components/about-us/OurStoryComponent'
import ClientsComponent from '../../components/clients/ClientsComponent'
import TeamMemberComponent from '../../components/members/TeamMemberComponent'
import { Radio, Tabs } from 'antd';
import ClientTestimonialComponent from '../../components/Home/ClientTestimonialComponent'
import ProudToWorkComponent from '../../components/about-us/ProudToWorkComponent'
import MisionVisionComponent from '../../components/about-us/MisionVisionComponent'
const { TabPane } = Tabs;
const index = () => {
 
  return (
    <>
   
    <AboutBreadCumbComponent/>
    <AboutCompanyComponent/>
    <ProudToWorkComponent/>
    <MisionVisionComponent/>
    <ClientTestimonialComponent/>
    
    <ClientsComponent/>
    
    
    </>
    
  )
}

export default index