'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import Container from './ui/container'
import { Button } from './ui/button'
import { Menu, Moon, Sun, AtomIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const Header = () => {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center border-b border-black border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:flex sm:justify-between">
      <Container>
        <div className="relative flex w-full items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 md:hidden" />
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 pl-6 pt-5">
                  <a href="">Announcements</a>
                  <a href="">Events</a>
                  <a href="">Team</a>
                  <a href="">About Us</a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <a href="" className="flex flex-row gap-1 md:absolute">
            <AtomIcon className="h-6 w-6" />
            <div className="font-medium">Quantum Club</div>
          </a>
          <nav className="text-g ml-6 hidden flex-row gap-12 md:flex lg:gap-16">
            <a
              href=""
              className="text-sm text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Announcements
            </a>
            <a
              href=""
              className="text-sm text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Events
            </a>
            <a
              href=""
              className="text-sm text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Team
            </a>
            <a
              href=""
              className="text-sm text-foreground/60 transition-colors hover:text-foreground/80"
            >
              About Us
            </a>
          </nav>
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Theme"
              className="h-6 w-6"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
