'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RotateCw } from 'lucide-react'

const JoinUs = () => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()
      if (response.ok) {
        console.log('Success:', data)
        setOpen(false)
      } else {
        console.error('Error:', data)
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Request failed', err)
      setError('Could not connect to the server.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 rounded-lg border py-8 shadow lg:gap-8">
      <div className="flex flex-col text-center">
        <h1 className="text-center text-2xl font-semibold lg:text-3xl">
          Become a member
        </h1>
        <h1 className="text-center text-2xl font-semibold lg:text-3xl">
          of our club!
        </h1>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="px-24 lg:h-10 lg:w-[300px] lg:text-base lg:font-bold">
            Count me in!
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Join Us</DialogTitle>
            <DialogDescription>
              We will send you an email to complete your membership.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name Surname"
                  className="col-span-3"
                  required
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="quantum@mail.com"
                  className="col-span-3"
                  required
                />
              </div>
            </div>
            <DialogFooter>
              {error && <p className="text-red-500">{error}</p>}
              <Button
                type="submit"
                disabled={loading}
                className={loading ? 'hidden' : ''}
              >
                Send
              </Button>
              <Button disabled className={loading ? '' : 'hidden'}>
                <RotateCw className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default JoinUs
