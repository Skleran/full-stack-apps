'use client'

import React, { useState } from 'react'
import { Calendar } from '@/components/ui/calendar'
import './style.css'

const EventsHeader = () => {
  const events = [
    { date: new Date(2024, 10, 15) },
    { date: new Date(2024, 10, 20) },
    { date: new Date(2024, 10, 25) },
  ]

  const initialSelectedDates = events.map((event) => event.date)

  const [selectedDates, setSelectedDates] = useState(initialSelectedDates)

  return (
    <>
      <header className="mt-4 flex flex-col items-center justify-center">
        <h1 className="flex w-min bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-5xl font-bold text-transparent">
          Events
        </h1>
        {/* <Calendar
          mode="multiple"
          weekStartsOn={1}
          selected={selectedDates}
          onSelect={setSelectedDates}
          className="rounded-md border shadow"
        /> */}
      </header>
    </>
  )
}

export default EventsHeader
