import React from 'react'
import { useTheme } from 'next-themes'
import Container from './ui/container'
import { Button } from './ui/button'
import { Menu, Moon, Sun, AtomIcon } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-10 flex h-14 items-center border-b border-black border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:flex sm:justify-between">
      <Container>
        <div className="relative flex w-full items-center justify-between">
          <div className="flex items-center justify-between gap-3">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 w-6 md:hidden" />
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col gap-4 pl-6 pt-5">
                  <Link to="/full-stack-apps/roadmap">Roadmap</Link>
                  <Link to="/full-stack-apps/events">Events</Link>
                  <Link to="/full-stack-apps/team">Team</Link>
                  <a href="">About Us</a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <Link
            to="/full-stack-apps/"
            className="flex flex-row gap-1 md:absolute"
          >
            <AtomIcon className="h-6 w-6" />
            <div className="font-medium">Quantum Club</div>
          </Link>
          <nav className="text-g ml-6 hidden flex-row gap-12 md:flex lg:gap-16">
            <Link
              to="/full-stack-apps/roadmap"
              className="text-sm text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Roadmap
            </Link>
            <Link
              to="/full-stack-apps/events"
              className="text-sm text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Events
            </Link>
            <Link
              to="/full-stack-apps/team"
              className="text-sm text-foreground/60 transition-colors hover:text-foreground/80"
            >
              Team
            </Link>
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
    </nav>
  )
}

export default Navbar
