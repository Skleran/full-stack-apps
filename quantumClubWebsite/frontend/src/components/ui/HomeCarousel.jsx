import React, { useRef, useState } from 'react'
import Container from './container'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './customSwiper.css'
import { motion } from 'framer-motion'

const HomeCarousel = () => {
  return (
    <body>
      <Container>
        <div className="w-full">
          <Swiper
            spaceBetween={30}
            // navigation={true}
            lazy={true}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="h-[50vh] rounded-lg border-[1px] lg:h-[60vh] xl:h-[70vh]"
          >
            <SwiperSlide>
              <div
                className="flex h-full w-full items-end overflow-hidden rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://www.popsci.com/wp-content/uploads/2022/09/06/IMG_6219-1-scaled.jpg?quality=10&w=2560)',
                }}
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6 },
                  }}
                  // viewport={{ once: true }}
                  className="mx-4 mb-6 flex w-fit flex-col gap-2 rounded-xl px-2 py-1 shadow backdrop-blur-md backdrop-brightness-75 md:gap-3 md:px-4 md:py-2"
                >
                  <h1 className="text-2xl font-semibold text-white dark:text-white md:text-3xl">
                    Quantum Muantum
                  </h1>
                  <p className="text-neutral-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, consectetur.
                  </p>
                </motion.div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className="flex h-full w-full items-end overflow-hidden rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://quantumai.google/static/site-assets/images/marketing/systems/hero.jpg)',
                }}
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6 },
                  }}
                  className="mx-4 mb-6 flex w-fit flex-col gap-2 rounded-xl px-2 py-1 shadow backdrop-blur-md backdrop-brightness-75 md:gap-3 md:px-4 md:py-2"
                >
                  <h1 className="text-2xl font-semibold text-white dark:text-white">
                    Lorem Ipsum
                  </h1>
                  <p className="text-neutral-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora, consectetur.
                  </p>
                </motion.div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex w-full items-center justify-center">
              <div className="flex">Slide</div>
            </SwiperSlide>
            <SwiperSlide className="flex w-full items-center justify-center">
              <div className="flex">Slide</div>
            </SwiperSlide>
            <SwiperSlide className="flex w-full items-center justify-center">
              <div className="flex">Slide</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </body>
  )
}

export default HomeCarousel
