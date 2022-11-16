import React from 'react'


import MainSliderComponent from '../components/slider/MainSliderComponent'
import ClientsComponent from '../components/clients/ClientsComponent'
import Intro1Component from '../components/Home/Intro1Component'
import SolutionsComponent from '../components/Home/SolutionsComponent'
import QualitySectionComponent from '../components/Home/QualitySectionComponent'

import ClientTestimonialComponent from '../components/Home/ClientTestimonialComponent'
import GlobalServiceComponent from '../components/Home/GlobalServiceComponent'
const index = () => {
  return (
    <>
      <MainSliderComponent/>
      <ClientsComponent/>
      <Intro1Component/>
      <SolutionsComponent/>
      <QualitySectionComponent/>
      <ClientTestimonialComponent/>
      <GlobalServiceComponent/>
    </>
  )
}

export default index