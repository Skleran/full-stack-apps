import React from 'react'
import { Button } from './button'
import { Link } from 'react-router-dom'

const HomeRoadmap = () => {
  return (
    <div className="mb-8 flex flex-col items-center rounded-lg border py-4 shadow-xl">
      <h1 className="text-center text-2xl font-semibold">
        Want To Learn Quantum?
      </h1>
      <div className="flex flex-col items-center">
        <h1 className="py-1 text-center text-neutral-400">
          Start your journey with
        </h1>
        <h1 className="mb-3 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-4xl font-bold text-transparent">
          Roadmap!
        </h1>
      </div>

      <Link to={'/full-stack-apps/roadmap'}>
        <Button className="w-[275px]">Take me there!</Button>
      </Link>
    </div>
  )
}

export default HomeRoadmap
