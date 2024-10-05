import React from 'react'
import Container from '@/components/ui/container'
import RoadmapHeader from '@/components/ui/roadmap/roadmapHeader'
import RoadmapBody from '@/components/ui/roadmap/roadmapBody'

const RoadmapMainPage = () => {
  return (
    <>
      <Container>
        <RoadmapHeader />
        <RoadmapBody />
      </Container>
    </>
  )
}

export default RoadmapMainPage
