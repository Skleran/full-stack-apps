import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Users, Code } from 'lucide-react'

const verticalCarousel = () => {
  return (
    <div className="rounded-lg border py-2 shadow">
      <div className="flex flex-row items-baseline gap-2 py-2 pl-4">
        <Users />
        <h1 className="text-3xl font-semibold">Core Team Members</h1>
      </div>

      <div className="flex w-full items-center justify-center">
        <Carousel
          opts={{
            align: 'start',
          }}
          orientation="vertical"
          className="w-full max-w-sm"
        >
          <CarouselContent className="-mt-1 h-[100px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center px-4 py-2">
                      <span className="flex w-full flex-row items-center justify-between gap-4">
                        <Avatar>
                          <AvatarImage src="./src/assets/images/pp.png" />
                          <AvatarFallback>EK</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <div className="flex flex-row items-center gap-4">
                            <p>Erdem Koyuncu</p>
                            <div className="flex flex-row items-center gap-1">
                              <Code className="h-5 w-5 stroke-[#afafaf99]" />
                              <p className="text-sm text-[#ffffff88]">
                                Programmer
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-[#fafafa]">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </div>
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default verticalCarousel
