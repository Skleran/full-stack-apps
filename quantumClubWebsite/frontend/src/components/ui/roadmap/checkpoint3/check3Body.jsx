import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MonitorPlay, Clapperboard, BookText, FileText } from 'lucide-react'
import 'swiper/css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import booksContent from './booksContent.json'
import videosContent from './videosContent.json'
import articlesContent from './articlesContent.json'
import { Button } from '../../button'

const bookContent = booksContent
const videoContent = videosContent
const articleContent = articlesContent

const check3Body = () => {
  return (
    <>
      <motion.div
        initial={{ y: -178 }}
        animate={{ y: -30 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
        className="rounded-2xl border bg-neutral-100 shadow-lg dark:bg-neutral-900"
      >
        <div className="py-3">
          {/* Recommended videos */}
          <div className="px-4">
            <Accordion collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-3">
                  <h1 className="flex flex-row items-center gap-2 text-left text-xl font-semibold">
                    <MonitorPlay />
                    Video önerileri
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Not: Daha iyi bir öğrenme için aşağıdaki önerilerden en az
                    birini izlemeniz gerekmektedir.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            className="my-2 px-2"
          >
            {videoContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Drawer>
                  <DrawerTrigger>
                    <div className="flex aspect-[16/11] h-52 flex-col justify-between overflow-hidden rounded-lg bg-neutral-200 font-semibold dark:bg-neutral-800">
                      <img
                        src={content.image}
                        alt=""
                        className="aspect-[16/9] overflow-hidden object-cover"
                      />
                      <h1 className="text-md mb-2 overflow-hidden truncate px-3">
                        {content.title}
                      </h1>
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto h-[400px]">
                      <DrawerHeader>
                        <DrawerTitle>{content.title}</DrawerTitle>
                        <DrawerDescription>
                          <h1 className="my-2 mt-4 text-base font-semibold text-neutral-500 dark:text-neutral-400">
                            Video İçeriği:
                          </h1>
                          {content.videoTopics.length > 0 && (
                            <ul className="mt-2 list-inside list-disc">
                              {content.videoTopics.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                          <a href={content.link}>
                            <Button className="mt-8 w-[80vw] px-16 py-2">
                              Videoya Git
                            </Button>
                          </a>
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Recommended articles */}
          <div className="px-4">
            <Accordion collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-3">
                  <h1 className="flex flex-row items-center gap-2 text-left text-xl font-semibold">
                    <FileText />
                    Makale önerileri
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Not: Daha iyi bir öğrenme için aşağıdaki önerilerden en az
                    üç tanesini okumanız gerekmektedir.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            className="my-2 px-2"
          >
            {articleContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Drawer>
                  <DrawerTrigger>
                    <div className="flex h-20 w-60 flex-col justify-evenly overflow-hidden rounded-md bg-neutral-300 px-1 py-1 dark:bg-neutral-700">
                      <h1 className="line-clamp-2 text-lg font-semibold leading-6">
                        {content.title}
                      </h1>
                      <h2 className="text-neutral-500 dark:text-neutral-400">
                        {content.author}
                      </h2>
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto h-[400px] w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>{content.title}</DrawerTitle>
                        <h1 className="mt-4 text-base font-semibold text-neutral-500 dark:text-neutral-400"></h1>
                        <DrawerDescription>
                          {content.preface}
                          <a href={content.link}>
                            <Button className="mt-8 w-[80vw] px-16 py-2">
                              Makaleye Git
                            </Button>
                          </a>
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Recommended Books */}
          <div className="px-4">
            <Accordion collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-3">
                  <h1 className="flex flex-row items-center gap-2 text-left text-xl font-semibold">
                    <BookText />
                    Kitap önerileri
                  </h1>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Not: Daha iyi bir öğrenme için aşağıdaki önerilerden en az
                    birini okumanız gerekmektedir.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={'auto'}
            className="my-2 px-2"
          >
            {bookContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Drawer>
                  <DrawerTrigger>
                    <div className="h-40 w-[6.75rem] overflow-hidden rounded-md bg-neutral-700">
                      <img
                        src={content.image}
                        alt=""
                        className="h-full w-full overflow-hidden rounded-md object-cover"
                      />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto h-[400px] w-full max-w-sm">
                      <DrawerHeader>
                        <div className="flex flex-col gap-2">
                          <DrawerTitle>{content.title}</DrawerTitle>
                          <DrawerTitle className="text-neutral-400">
                            {content.author}
                          </DrawerTitle>
                        </div>
                        <DrawerDescription>
                          <a href={content.link}>
                            <Button className="mt-8 w-[80vw] px-16 py-2">
                              Kitaba Git
                            </Button>
                          </a>
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </>
  )
}

export default check3Body
