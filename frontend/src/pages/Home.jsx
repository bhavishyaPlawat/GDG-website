import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Highlights from '../components/home/Highlights'
import UpcomingEvents from '../components/home/UpcomingEvents'
import CommunityDashboard from '../components/home/CommunityDashboard'
import PageWrapper from '../components/layout/PageWrapper'

export default function Home(){
  return (
    <PageWrapper>
      <HeroSection />
      <Highlights />
      <UpcomingEvents />
      <CommunityDashboard /> 
    </PageWrapper>
  )
}
