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
            className="h-[50vh] rounded-lg border-[1px]"
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
                  className="mx-4 mb-6 flex w-fit flex-col rounded-xl p-1 shadow backdrop-blur-sm backdrop-brightness-50"
                >
                  <h1 className="text-xl">Quantum Muantum</h1>
                  <p className="text-[#afafaff1]">
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
                  className="mx-4 mb-6 flex w-fit flex-col rounded-xl p-1 shadow backdrop-blur-sm backdrop-brightness-50"
                >
                  <h1 className="text-xl">Lorem Ipsum</h1>
                  <p className="text-[#afafaff1]">
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
