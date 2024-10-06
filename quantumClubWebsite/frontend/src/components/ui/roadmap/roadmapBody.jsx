import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'

const roadmapBody = () => {
  return (
    <div className="mb-4">
      <div className="mt-8 flex flex-col gap-4 rounded-md border p-3 shadow-lg">
        <h1 className="text-2xl font-semibold">What is a Roadmap?</h1>
        <p>
          Quantum Yol Haritası, karmaşık kuantum fiziğini basit, anlaşılır ve
          adım adım öğrenilebilir hale getirmek için tasarlandı. Dört checkpoint
          ile, bu öğrenme süreci kullanıcıları temel bilgiden ileri düzeye kadar
          taşıyacak.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col gap-4 rounded-lg border bg-sky-100 p-3 shadow-lg dark:bg-sky-950">
          <h1 className="text-2xl font-semibold">Checkpoint 1</h1>
          <p className="text-sm">
            Kuantum fiziğini anlamaya yönelik ilk basamağınız. Bu aşamada,
            sadece kuantum fiziğine değinen popüler dizi, film ve kitaplara yer
            veriyoruz.
          </p>
          <Link to={'/full-stack-apps/checkpoint-1'}>
            <Button className="w-full font-bold">Take me there!</Button>
          </Link>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border bg-blue-200 p-3 shadow-lg dark:bg-blue-950">
          <h1 className="text-2xl font-semibold">Checkpoint 2</h1>
          <p className="text-sm">
            Kuantum fiziğini anlamaya yönelik ilk basamağınız. Bu aşamada,
            sadece kuantum fiziğine değinen popüler dizi, film ve kitaplara yer
            veriyoruz.
          </p>
          <Button className="font-bold">Take me there!</Button>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border bg-indigo-300 p-3 shadow-lg dark:bg-indigo-950">
          <h1 className="text-2xl font-semibold">Checkpoint 3</h1>
          <p className="text-sm">
            Kuantum fiziğini anlamaya yönelik ilk basamağınız. Bu aşamada,
            sadece kuantum fiziğine değinen popüler dizi, film ve kitaplara yer
            veriyoruz.
          </p>
          <Button className="font-bold">Take me there!</Button>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border bg-violet-300 p-3 shadow-lg dark:bg-violet-950">
          <h1 className="text-2xl font-semibold">Checkpoint 4</h1>
          <p className="text-sm">
            Kuantum fiziğini anlamaya yönelik ilk basamağınız. Bu aşamada,
            sadece kuantum fiziğine değinen popüler dizi, film ve kitaplara yer
            veriyoruz.
          </p>
          <Button className="font-bold">Take me there!</Button>
        </div>

        <div className="flex flex-col gap-4 rounded-lg border bg-purple-300 p-3 shadow-lg dark:bg-purple-950">
          <h1 className="text-2xl font-semibold">Checkpoint 5</h1>
          <p className="text-sm">
            Kuantum fiziğini anlamaya yönelik ilk basamağınız. Bu aşamada,
            sadece kuantum fiziğine değinen popüler dizi, film ve kitaplara yer
            veriyoruz.
          </p>
          <Button className="font-bold">Take me there!</Button>
        </div>
      </div>
    </div>
  )
}

export default roadmapBody
