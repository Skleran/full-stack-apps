import React from 'react'
import { Button } from '../button'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

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

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-4 rounded-lg border justify-between bg-sky-100 p-3 shadow-lg dark:bg-sky-950"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 1</h1>
          <p className="text-sm">
            Kuantum fiziğini anlamaya yönelik ilk basamağınız. Bu aşamada,
            sadece kuantum fiziğine değinen popüler dizi, film ve kitaplara yer
            veriyoruz.
          </p>
          <Link to={'/full-stack-apps/checkpoint-1'}>
            <Button className="w-full font-bold">Take me there!</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className=" justify-between flex flex-col gap-4 rounded-lg border bg-blue-200 p-3 shadow-lg dark:bg-blue-950"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 2</h1>
          <p className="text-sm">
            Checkpoint 2, kuantum fiziğinin temel kavramlarıyla tanışmayı
            sağlayan makaleler, filmler ve giriş seviyesi kitaplardan oluşur. Bu
            aşama, kuantum dünyasının kapılarını aralayan kavramları basit ve
            eğlenceli yollarla öğrenmeyi hedefler.
          </p>
          <Link to={'/full-stack-apps/checkpoint-2'}>
            <Button className="w-full font-bold">Take me there!</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex justify-between flex-col gap-4 rounded-lg border bg-indigo-300 p-3 shadow-lg dark:bg-indigo-950"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 3</h1>
          <p className="text-sm">
            Checkpoint 3, artık kuantum mekaniğinin matematiğine ve karmaşık
            teorilere giriş yapılmasını sağlar. Bu aşamada, daha teknik
            kitaplar, araştırma makaleleri ve ileri düzey videolar yer alır.
          </p>
          <Link to={'/full-stack-apps/checkpoint-3'}>
            <Button className="w-full font-bold">Take me there!</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-between gap-4 rounded-lg border bg-violet-300 p-3 shadow-lg dark:bg-violet-950"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 4</h1>
          <p className="text-sm">
            Checkpoint 4, kuantum fiziğinde uzmanlaşmayı hedefleyenler için
            hazırlanmıştır. Bu aşamada, ileri düzey ders kitapları, akademik
            makaleler bulunur.
          </p>
          <Link to={'/full-stack-apps/checkpoint-4'}>
            <Button className="w-full font-bold">Take me there!</Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.3, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="flex flex-col justify-between gap-4 rounded-lg border bg-purple-300 p-3 shadow-lg dark:bg-purple-950"
        >
          <h1 className="text-2xl font-semibold">Checkpoint 5</h1>
          <p className="text-sm">
            Kuantum fiziğini anlamaya yönelik ilk basamağınız. Bu aşamada,
            sadece kuantum fiziğine değinen popüler dizi, film ve kitaplara yer
            veriyoruz.
          </p>
          <Link to={'/full-stack-apps/checkpoint-5'}>
            <Button className="w-full font-bold">Take me there!</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default roadmapBody
