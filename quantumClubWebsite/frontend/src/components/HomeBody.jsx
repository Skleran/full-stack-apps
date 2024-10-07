import React from 'react'
import VerticalCarousel from './ui/body/verticalCarousel'
import Container from './ui/container'
import { Target } from 'lucide-react'
import JoinUs from './ui/body/JoinUs'
import HomeRoadmap from './ui/HomeRoadmap'

const HomeBody = () => {
  return (
    <Container>
      <div className="w-full py-8">
        <div className="rounded-lg border px-2 py-4 shadow">
          <div className="flex flex-row items-baseline gap-2 pb-6 pl-2">
            <Target className="h-8 w-8" />
            <h1 className="text-5xl font-semibold">Objective</h1>
          </div>

          <div className="flex flex-col gap-6 px-4">
            <p className="">
              &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Doloremque possimus aspernatur.
            </p>
            <p className="">
              &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi, illum.
            </p>
            <p className="">
              &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Officiis excepturi fugiat et in quasi?
            </p>
          </div>
        </div>
      </div>
      <HomeRoadmap />
      <VerticalCarousel />
      <JoinUs />
    </Container>
  )
}

export default HomeBody
