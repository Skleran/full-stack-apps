import React from 'react'
import { motion } from 'framer-motion'

const check1Header = () => {
  return (
    <>
      <div className="mt-4 overflow-hidden rounded-2xl border bg-sky-100 pb-4 shadow-lg dark:bg-sky-950">
        <motion.div
          initial={{ opacity: 0.5, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 flex flex-col gap-4 px-3 py-2"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 1</h1>
          <p className="text-sm">
            Kuantum fiziğini anlamaya yönelik ilk basamağınız. Bu aşamada,
            sadece kuantum fiziğine değinen popüler dizi, film ve kitaplara yer
            veriyoruz.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: -158 }}
        animate={{ y: -30 }}
        transition={{ ease: 'easeOut', duration: 0.7 }}
        className="rounded-2xl border bg-neutral-100 shadow-lg dark:bg-neutral-900"
      >
        <div className="h-52"></div>
      </motion.div>
    </>
  )
}

export default check1Header
