import React from 'react'
import HomeCarousel from '@/components/ui/HomeCarousel'
import HomeGreeting from '@/components/ui/HomeGreeting'
import HomeBody from '@/components/HomeBody'

const HomePage = () => {
  return (
    <>
      <HomeGreeting />
      <HomeCarousel />
      <HomeBody />
    </>
  )
}

export default HomePage
