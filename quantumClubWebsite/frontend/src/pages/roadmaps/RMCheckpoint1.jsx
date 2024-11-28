import React from 'react'
import Container from '@/components/ui/container'
import Check1Header from '@/components/ui/roadmap/checkpoint1/check1Header'
import Check1Body from '@/components/ui/roadmap/checkpoint1/check1Body'
import Check1BodyDesktop from '@/components/ui/roadmap/checkpoint1/check1BodyDesktop'

const RMCheckpoint1 = () => {
  return (
    <Container>
      <Check1Header />
      <Check1Body />
      <Check1BodyDesktop />
    </Container>
  )
}

export default RMCheckpoint1
