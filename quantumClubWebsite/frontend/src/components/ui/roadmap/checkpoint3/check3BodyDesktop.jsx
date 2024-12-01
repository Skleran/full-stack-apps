import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { MonitorPlay, Clapperboard, BookText, FileText } from 'lucide-react'
import 'swiper/css'
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
import booksContent from './booksContent.json'
import videosContent from './videosContent.json'
import articlesContent from './articlesContent.json'
import { Button } from '../../button'

const bookContent = booksContent
const videoContent = videosContent
const articleContent = articlesContent

const check3BodyDesktop = () => {
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
            navigation={true}
            modules={[Navigation]}
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
                    <div className="flex aspect-[16/11] h-52 flex-col justify-between overflow-hidden rounded-lg bg-neutral-200 font-semibold transition-colors hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700">
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

                      <div className="scrollable-container scroll-x w-auto overflow-y-scroll p-4 px-6">
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
                          <div className="mt-6 flex w-full items-center justify-center">
                            <a href={content.link} className="w-[50%]">
                              <Button className="w-full px-16 py-2 font-semibold">
                                Videoya Git
                              </Button>
                            </a>
                          </div>
                        </DialogDescription>
                      </div>
                      <DialogClose className="rounded-lg bg-zinc-900/80 p-[2px] text-zinc-50 transition-colors hover:bg-zinc-800/80 dark:bg-zinc-50/80 dark:text-zinc-800 dark:hover:bg-zinc-200/80" />
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
            navigation={true}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={'auto'}
            className="my-2 px-2"
          >
            {articleContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Dialog
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 24,
                  }}
                >
                  <DialogTrigger className="flex h-20 w-60 flex-col justify-evenly overflow-hidden rounded-md bg-neutral-200 px-1 py-1 transition-colors hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700">
                    <DialogTitle className="line-clamp-2 text-center text-lg font-semibold leading-6 text-zinc-950 dark:text-zinc-50">
                      {content.title}
                    </DialogTitle>
                    <DialogSubtitle className="text-center font-semibold text-neutral-500 dark:text-neutral-400">
                      {content.author}
                    </DialogSubtitle>
                  </DialogTrigger>
                  <DialogContainer className="z-20">
                    <DialogContent className="pointer-events-auto relative flex max-h-[500px] w-[450px] flex-col overflow-hidden rounded-[24px] border border-zinc-950/10 bg-white px-6 py-4 dark:border-zinc-50/10 dark:bg-zinc-900 xl:w-[500px]">
                      <DialogTitle className="text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
                        {content.title}
                      </DialogTitle>
                      <DialogSubtitle className="text-lg font-semibold text-zinc-700 dark:text-zinc-400">
                        {content.author}
                      </DialogSubtitle>
                      <DialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: 100 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: 100 },
                        }}
                        className="relative mt-3 flex w-full flex-col items-center gap-6 leading-7"
                      >
                        {content.preface}
                        <a href={content.link}>
                          <Button className="px-16 py-2">Makaleye Git</Button>
                        </a>
                      </DialogDescription>
                      <DialogClose className="rounded-lg text-zinc-800 dark:text-zinc-50" />
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

                      <div className="w-auto p-4">
                        <DialogTitle className="mr-4 pb-2 text-2xl font-bold 2xl:pb-4">
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
                          className="flex h-[80%] flex-shrink-0 flex-col items-center justify-center"
                        >
                          <div className="custom-scrollbar scroll-x mb-4 h-full overflow-hidden overflow-y-scroll leading-7 text-zinc-700 dark:text-zinc-300">
                            {content.description}
                            {content.description}
                          </div>

                          <a href={content.link} className="w-[70%]">
                            <Button className="w-full px-16 py-2">
                              Kitaba Git
                            </Button>
                          </a>
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

export default check3BodyDesktop
