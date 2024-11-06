import React from 'react'
import Container from './container'
import { motion } from 'framer-motion'

const HomeGreeting = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col py-6 pb-8 md:flex-row">
          <h1 className="text-6xl font-bold">Welcome!</h1>
          <h1 className="flex items-center px-4 text-5xl font-bold md:h-[60px] md:items-end">
            to
          </h1>

          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
            className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold text-transparent"
          >
            Quantum Club
          </motion.h1>
          {/* <h1 className="bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-right text-6xl font-bold text-transparent">
            Club
          </h1> */}
        </div>
      </Container>
    </>
  )
}

export default HomeGreeting
