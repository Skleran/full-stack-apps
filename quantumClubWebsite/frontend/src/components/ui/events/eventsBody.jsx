import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const eventsBody = () => {
  return (
    <>
      <div className="mt-8 flex w-full flex-col gap-4">
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-xl border bg-gradient-to-r from-blue-200 via-violet-200 to-pink-200 shadow-lg dark:from-blue-950 dark:via-violet-950 dark:to-pink-950"
        >
          <AccordionItem value="item-1" className="m-2 last:border-none">
            <AccordionTrigger className="svgFix mx-2 py-2 hover:no-underline">
              <div className="flex w-full flex-row items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-left text-2xl">Club Meeting</h1>
                  <p className="text-left text-neutral-600 dark:text-neutral-400">
                    Lets talk about our projects!
                  </p>
                </div>
                <h2 className="mr-2 text-lg text-neutral-600 dark:text-neutral-400">
                  10/11/2024
                </h2>
              </div>
            </AccordionTrigger>
            <AccordionContent className="rounded-xl bg-neutral-100 p-4 dark:bg-neutral-900">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-baseline gap-1">
                  <p className="text-lg font-medium">Location:</p>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    K Block 2nd Floor Class: K231
                  </p>
                </div>

                <div className="flex flex-row items-baseline gap-1">
                  <p className="text-lg font-medium">Topic:</p>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    General discussion on clubs future projects
                  </p>
                </div>

                <div className="flex flex-row justify-around">
                  <p className="text-base font-semibold">Start: 12:30</p>
                  <p className="text-base font-semibold">End: 14:30</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion
          type="single"
          collapsible
          className="w-full rounded-xl border bg-gradient-to-r from-violet-300 to-gray-200 shadow-lg dark:from-violet-900 dark:to-gray-900"
        >
          <AccordionItem value="item-1" className="m-2 last:border-none">
            <AccordionTrigger className="svgFix mx-2 py-2 hover:no-underline">
              <div className="flex w-full flex-row items-center justify-between">
                <div className="flex flex-col">
                  <h1 className="text-left text-2xl">Presentation</h1>
                  <p className="text-left text-neutral-600 dark:text-neutral-400">
                    Hear our professors speech!
                  </p>
                </div>
                <h2 className="mr-2 text-lg text-neutral-600 dark:text-neutral-400">
                  10/11/2024
                </h2>
              </div>
            </AccordionTrigger>
            <AccordionContent className="rounded-xl bg-neutral-100 p-4 dark:bg-neutral-900">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row items-baseline gap-1">
                  <p className="text-lg font-medium">Location:</p>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    D Block -2nd Floor Orange Room
                  </p>
                </div>

                <div className="flex flex-row items-baseline gap-1">
                  <p className="text-lg font-medium">Topic:</p>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    Quantum muantum these are blank things.
                  </p>
                </div>

                <div className="flex flex-row justify-around">
                  <p className="text-base font-semibold">Start: 12:30</p>
                  <p className="text-base font-semibold">End: 14:30</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

export default eventsBody
