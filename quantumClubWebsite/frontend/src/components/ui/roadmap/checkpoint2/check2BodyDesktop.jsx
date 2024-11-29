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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
  DialogImage,
  DialogSubtitle,
  DialogDescription,
  DialogContainer,
} from '@/components/ui/dialogAlt'
import booksContent from './booksContent.json'
import videosContent from './videosContent.json'
import articlesContent from './articlesContent.json'
import { Button } from '../../button'

const bookContent = booksContent
const videoContent = videosContent
const articleContent = articlesContent

const check2BodyDesktop = () => {
  return (
    <>
      <motion.div
        initial={{ y: -178 }}
        animate={{ y: -30 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
        className="hidden rounded-2xl border bg-neutral-100 shadow-lg dark:bg-neutral-900 lg:block"
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
                <Dialog
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  }}
                >
                  <DialogTrigger>
                    <div className="flex aspect-[16/11] h-52 flex-col justify-between overflow-hidden rounded-lg bg-neutral-200 font-semibold dark:bg-neutral-800">
                      <DialogImage
                        src={content.image}
                        alt=""
                        className="aspect-[16/9] overflow-hidden object-cover"
                      />
                      <DialogTitle className="text-md mb-2 overflow-hidden truncate px-3 text-center">
                        {content.title}
                      </DialogTitle>
                      <DialogSubtitle className="text-zinc-700 dark:text-zinc-400"></DialogSubtitle>
                    </div>
                  </DialogTrigger>
                  <DialogContainer className="z-20">
                    <DialogContent className="pointer-events-auto relative flex max-h-[750px] w-[500px] flex-col overflow-hidden rounded-[24px] border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 xl:w-[550px] 2xl:w-[600px]">
                      <div className="w-fit flex-shrink-0">
                        <DialogImage
                          src={content.image}
                          alt=""
                          className="aspect-[16/9] h-full w-full overflow-hidden object-cover"
                        />
                      </div>

                      <div className="scrollable-container scroll-x w-auto overflow-y-scroll p-4">
                        <DialogTitle className="pb-2 text-2xl font-bold 2xl:pb-2">
                          {content.title}
                        </DialogTitle>
                        <DialogSubtitle className="text-zinc-700 dark:text-zinc-400"></DialogSubtitle>
                        <DialogDescription
                          disableLayoutAnimation
                          variants={{
                            initial: { opacity: 0, scale: 0.8, y: 100 },
                            animate: { opacity: 1, scale: 1, y: 0 },
                            exit: { opacity: 0, scale: 0.8, y: 100 },
                          }}
                          className="text-zinc-700 dark:text-zinc-300"
                        >
                          <h1 className="my-2 text-lg font-semibold text-neutral-500 dark:text-neutral-400">
                            Video Icerigi:
                          </h1>
                          {content.videoTopics.length > 0 && (
                            <ul className="mt-2 list-inside list-disc">
                              {content.videoTopics.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                          <a
                            href={content.link}
                            className="flex items-center justify-center"
                          >
                            <Button className="mt-6 w-[80%] px-16 py-2 font-semibold">
                              Videoya Git
                            </Button>
                          </a>
                        </DialogDescription>
                      </div>
                      <DialogClose className="rounded-lg bg-zinc-700/50 p-[2px] text-zinc-50 dark:bg-zinc-50/70 dark:text-zinc-800" />
                    </DialogContent>
                  </DialogContainer>
                </Dialog>
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
                          {content.description}
                        </DrawerDescription>
                        <h1 className="mt-4 text-base font-semibold text-neutral-500 dark:text-neutral-400">
                          {/* Neden Okunmalı? */}
                        </h1>
                        <DrawerDescription>
                          {content.whyToRead}
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

export default check2BodyDesktop
