import React from 'react'
import HomeCarousel from '@/components/ui/HomeCarousel'
import HomeGreeting from '@/components/ui/HomeGreeting'
import Footer from '@/components/Footer'
import HomeBody from '@/components/HomeBody'

const HomePage = () => {
  return (
    <>
      <HomeGreeting />
      <HomeCarousel />
      <HomeBody />
      <Footer />
    </>
  )
}

export default HomePage
