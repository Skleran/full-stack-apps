import React from 'react'
import { Button } from './button'
import { Link } from 'react-router-dom'

const HomeRoadmap = () => {
  return (
    <div className="mb-8 flex flex-col items-center rounded-lg border py-4 shadow lg:gap-6">
      <h1 className="text-center text-2xl font-semibold lg:text-4xl">
        Want To Learn Quantum?
      </h1>
      <div className="flex flex-col items-center">
        <h1 className="py-1 text-center text-neutral-400 lg:text-lg">
          Start your journey with
        </h1>
        <h1 className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text pb-3 text-4xl font-bold text-transparent lg:text-5xl">
          Roadmap!
        </h1>
      </div>

      <Link to={'/full-stack-apps/roadmap'}>
        <Button className="w-[275px] lg:mb-2 lg:h-10 lg:w-[300px] lg:text-base lg:font-bold">
          Take me there!
        </Button>
      </Link>
    </div>
  )
}

export default HomeRoadmap
