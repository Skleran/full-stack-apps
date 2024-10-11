import React from 'react'
import Container from './ui/container'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <Container>
      <footer className="mb-4 mt-10 flex h-12 w-full flex-row items-end justify-center border-t text-neutral-500 dark:text-neutral-400">
        <h1>built by</h1>
        <HoverCard>
          <HoverCardTrigger>
            <Button variant="link" className="h-6 px-1 py-0">
              @skleran
            </Button>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="flex flex-col">
              <h1 className="font-semibold">Erdem Koyuncu</h1>
              <p className="text-neutral-500 dark:text-neutral-400">
                software engineering std.
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
        <h1 className="pr-1">with</h1>
        <motion.div whileTap={{ scale: 1.25 }}>
          <Heart className="text-purple-600" />
        </motion.div>
      </footer>
    </Container>
  )
}

export default Footer
