import React from 'react'
import Container from '@/components/ui/container'
import EventsHeader from '@/components/ui/events/eventsHeader'
import EventsBody from '@/components/ui/events/eventsBody'

const EventsPage = () => {
  return (
    <>
      <Container>
        <EventsHeader />
        <EventsBody />
      </Container>
    </>
  )
}

export default EventsPage
