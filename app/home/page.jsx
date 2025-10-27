import React from 'react'
import CarouselSection from './Carousel'
import JobCategories from './jobCategory'
import Accelerate_job from './accelarateJob'
import {Engage} from './engage'
import Banner_section from './Banner'
import { HiringCompaniesWrapperSection } from './topHiringCompanies'
import {DiscoverJobCategories} from './discoverJobCategories'
import {FaqSection} from './faq'

export default function page() {
  return (
    <div >
      <Banner_section />
      <CarouselSection />
      <Engage />
      <HiringCompaniesWrapperSection />
      <DiscoverJobCategories />
      <JobCategories />
      <Accelerate_job />
      <FaqSection />
    </div>
  )
}