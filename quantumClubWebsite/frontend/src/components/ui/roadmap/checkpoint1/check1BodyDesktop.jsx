import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { MonitorPlay, Clapperboard, BookText } from 'lucide-react'
import 'swiper/css'
import '../custom.css'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
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
import moviesContent from './moviesContent.json'
import seriesContent from './seriesContent.json'
import booksContent from './booksContent.json'

const movieContent = moviesContent
const serieContent = seriesContent
const bookContent = booksContent

const check1BodyDesktop = () => {
  return (
    <>
      <motion.div
        initial={{ y: -178 }}
        animate={{ y: -30 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
        className="hidden rounded-2xl border bg-neutral-100 shadow-lg dark:bg-neutral-900 lg:block"
      >
        <div className="py-3">
          {/* Recommended series */}
          <div className="px-4">
            <Accordion collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-3">
                  <h1 className="flex flex-row items-center gap-2 text-left text-xl font-semibold">
                    <MonitorPlay />
                    Dizi önerileri
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
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={'auto'}
            className="my-2 px-2"
          >
            {serieContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Dialog
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  }}
                >
                  <DialogTrigger className="h-60 w-[10.125rem] overflow-hidden rounded-md bg-neutral-700">
                    <DialogImage
                      src={content.image}
                      alt=""
                      className="h-full w-full overflow-hidden rounded-md object-cover"
                    />
                    <div className="flex flex-grow flex-row items-end justify-between p-2">
                      <div>
                        <DialogTitle className="text-zinc-950 dark:text-zinc-50"></DialogTitle>
                        <DialogSubtitle className="text-zinc-700 dark:text-zinc-400"></DialogSubtitle>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContainer className="z-20">
                    <DialogContent className="pointer-events-auto relative flex max-h-[400px] w-[650px] overflow-hidden rounded-[24px] border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 xl:w-[720px] 2xl:w-[800px]">
                      <div className="h-[400px] w-fit flex-shrink-0">
                        <DialogImage
                          src={content.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="scrollable-container scroll-x w-auto overflow-y-scroll p-4">
                        <DialogTitle className="pb-2 text-2xl font-bold 2xl:pb-4">
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
                          className="relative max-w-full"
                        >
                          {content.description}
                          <h1 className="my-2 mt-4 text-lg font-semibold text-neutral-500 dark:text-neutral-400">
                            Kuantumla Alakası:
                          </h1>
                          {content.quantumRelevence.length > 0 && (
                            <ul className="mt-2 list-inside list-disc">
                              {content.quantumRelevence.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </DialogDescription>
                      </div>
                      <DialogClose className="text-zinc-800 dark:text-zinc-50" />
                    </DialogContent>
                  </DialogContainer>
                </Dialog>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Recommended movies */}
          <div className="px-4">
            <Accordion collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="py-3">
                  <h1 className="flex flex-row items-center gap-2 text-left text-xl font-semibold">
                    <Clapperboard />
                    Film önerileri
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
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={'auto'}
            className="my-2 px-2"
          >
            {movieContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Dialog
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  }}
                >
                  <DialogTrigger className="h-60 w-[10.125rem] overflow-hidden rounded-md bg-neutral-700">
                    <DialogImage
                      src={content.image}
                      alt=""
                      className="h-full w-full overflow-hidden rounded-md object-cover"
                    />
                    <div className="flex flex-grow flex-row items-end justify-between p-2">
                      <div>
                        <DialogTitle className="text-zinc-950 dark:text-zinc-50"></DialogTitle>
                        <DialogSubtitle className="text-zinc-700 dark:text-zinc-400"></DialogSubtitle>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContainer className="z-20">
                    <DialogContent className="pointer-events-auto relative flex max-h-[400px] w-[650px] overflow-hidden rounded-[24px] border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 xl:w-[720px] 2xl:w-[800px]">
                      <div className="h-[400px] w-fit flex-shrink-0">
                        <DialogImage
                          src={content.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="scrollable-container scroll-x w-auto overflow-y-scroll p-4">
                        <DialogTitle className="pb-2 text-2xl font-bold 2xl:pb-4">
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
                          {content.description}
                          <h1 className="my-2 mt-4 text-lg font-semibold text-neutral-500 dark:text-neutral-400">
                            Neden İzlenmeli?
                          </h1>
                          <p>{content.whyToWatch}</p>
                        </DialogDescription>
                      </div>
                      <DialogClose className="text-zinc-800 dark:text-zinc-50" />
                    </DialogContent>
                  </DialogContainer>
                </Dialog>
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
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={'auto'}
            className="my-2 px-2"
          >
            {bookContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Dialog
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  }}
                >
                  <DialogTrigger className="h-60 w-[10.125rem] overflow-hidden rounded-md bg-neutral-700">
                    <DialogImage
                      src={content.image}
                      alt=""
                      className="h-full w-full overflow-hidden rounded-md object-cover"
                    />
                    <div className="flex flex-grow flex-row items-end justify-between p-2">
                      <div>
                        <DialogTitle className="text-zinc-950 dark:text-zinc-50"></DialogTitle>
                        <DialogSubtitle className="text-zinc-700 dark:text-zinc-400"></DialogSubtitle>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContainer className="z-20">
                    <DialogContent className="pointer-events-auto relative flex max-h-[400px] w-[650px] overflow-hidden rounded-[24px] border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 xl:w-[720px] 2xl:w-[800px]">
                      <div className="h-[400px] w-fit flex-shrink-0">
                        <DialogImage
                          src={content.image}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="scrollable-container scroll-x w-auto overflow-y-scroll p-4">
                        <DialogTitle className="pb-2 text-2xl font-bold 2xl:pb-4">
                          {content.title}
                          <p className="text-xl text-neutral-500 dark:text-neutral-400">
                            {content.author}
                          </p>
                        </DialogTitle>
                        {/* <DialogTitle className="text-neutral-500 dark:text-neutral-400">
                          {content.author}
                        </DialogTitle> */}

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
                          {content.description}
                          <h1 className="my-2 mt-4 text-lg font-semibold text-neutral-500 dark:text-neutral-400">
                            Neden Okunmalı?
                          </h1>
                          <p>{content.whyToWatch}</p>
                        </DialogDescription>
                      </div>
                      <DialogClose className="text-zinc-800 dark:text-zinc-50" />
                    </DialogContent>
                  </DialogContainer>
                </Dialog>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </>
  )
}

export default check1BodyDesktop
