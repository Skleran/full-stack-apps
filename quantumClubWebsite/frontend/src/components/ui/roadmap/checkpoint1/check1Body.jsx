import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MonitorPlay } from 'lucide-react'
import 'swiper/css'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
const drawerContent = [
  {
    title: 'Dark',
    description:
      "Almanya'nın küçük bir kasabasında geçen dizi, dört farklı ailenin zaman yolculuğu ve paralel evrenler yüzünden iç içe geçen karmaşık hikâyesini anlatır. Zamanın döngüsel doğası ve kuantum teorileri üzerine kurulu olan bu yapım, geçmiş, şimdi ve geleceğin bir arada nasıl var olabileceğini sorgular.",
  },
  {
    title: 'Devs',
    description:
      'Bir teknoloji şirketinin gizli projesi olan kuantum hesaplama sistemi, evrenin geçmişini ve geleceğini eksiksiz şekilde görmeyi mümkün kılacak bir makine üzerinde çalışmaktadır. Bir yazılımcının bu projeye olan şüpheleri ve araştırmaları, kader ve özgür irade gibi derin felsefi soruları gündeme getirir.',
  },
  {
    title: 'Fringe',
    description:
      'Bir FBI ekibi, dünyadaki gizemli ve paranormal olayları araştırmaktadır. Bu olaylar genellikle bilimsel anomalilerle ilgilidir ve paralel evrenler, kuantum fiziği, zihin kontrolü gibi temalar üzerine kuruludur.',
  },
  {
    title: 'Quantum Leap',
    description:
      'Dr. Sam Beckett, bir deney sonucu zaman içinde "kuantum sıçramalar" yaparak, geçmişte farklı insanların hayatlarına girer ve onların sorunlarını çözmeye çalışır. Aynı zamanda kendi zamanına geri dönmenin yollarını arar.',
  },
  {
    title: 'The Man in the High Castle',
    description:
      "II. Dünya Savaşı'nı Nazi Almanyası ve Japonya’nın kazandığı alternatif bir gerçeklikte geçen dizi, bu yeni dünya düzenine karşı direnişi konu alır. Direnişçiler, farklı bir gerçekliği gösteren filmleri keşfeder ve çoklu evrenlerin varlığıyla yüzleşirler.",
  },
]

const check1Body = () => {
  return (
    <>
      <motion.div
        initial={{ y: -178 }}
        animate={{ y: -30 }}
        transition={{ ease: 'easeOut', duration: 0.6 }}
        className="rounded-2xl border bg-neutral-100 shadow-lg dark:bg-neutral-900"
      >
        <div className="px-4 py-3">
          <div className="flex flex-row items-center gap-2 pb-1">
            <MonitorPlay />
            <h1 className="text-xl font-semibold">Dizi önerileri</h1>
          </div>
          <p className="text-sm text-neutral-400">
            Not: Daha iyi bir öğrenme için aşağıdaki önerilerden en az birini
            izlemeniz gerekmektedir.
          </p>
          <Swiper spaceBetween={20} slidesPerView={'auto'} className="py-2">
            {drawerContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto">
                <Drawer>
                  <DrawerTrigger>
                    <div className="h-32 w-24 bg-neutral-700"></div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto h-[500px] w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>{content.title}</DrawerTitle>
                        <DrawerDescription>
                          {content.description}
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </>
  )
}

export default check1Body
