import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { MonitorPlay, Clapperboard } from 'lucide-react'
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
import moviesContent from './moviesContent.json'

const movieContent = moviesContent

const seriesContent = [
  {
    image: 'https://tr.web.img4.acsta.net/pictures/17/11/09/13/41/0101371.jpg',
    title: 'Dark',
    description:
      "Almanya'nın küçük bir kasabasında geçen dizi, dört farklı ailenin zaman yolculuğu ve paralel evrenler yüzünden iç içe geçen karmaşık hikâyesini anlatır. Zamanın döngüsel doğası ve kuantum teorileri üzerine kurulu olan bu yapım, geçmiş, şimdi ve geleceğin bir arada nasıl var olabileceğini sorgular.",
    quantumRelevence: [
      'Çoklu evren teorisi ve kuantum dolaşıklık üzerine kuruludur.',
      'Zamanın göreceliği ve döngüsel doğası, kuantum mekaniğinin temel ilkelerine dayandırılmıştır.',
    ],
  },
  {
    image:
      'https://m.media-amazon.com/images/M/MV5BNTk1ZTlkMDMtMWNiMC00MjNhLWE2ZjEtYmZjYTY3NmViNDk3XkEyXkFqcGc@._V1_.jpg',
    title: 'Devs',
    description:
      'Bir teknoloji şirketinin gizli projesi olan kuantum hesaplama sistemi, evrenin geçmişini ve geleceğini eksiksiz şekilde görmeyi mümkün kılacak bir makine üzerinde çalışmaktadır. Bir yazılımcının bu projeye olan şüpheleri ve araştırmaları, kader ve özgür irade gibi derin felsefi soruları gündeme getirir.',
    quantumRelevence: [
      'Kuantum bilgisayarların potansiyel gücü ve bunların gerçekliğe etkileri üzerine odaklanır.',
      'Determinizm ve olasılıklar kuantum mekaniği perspektifinden incelenir.',
    ],
  },
  {
    image: 'https://imgrosetta.mynet.com.tr/file/12217495/728xauto.jpg',
    title: 'Fringe',
    description:
      'Bir FBI ekibi, dünyadaki gizemli ve paranormal olayları araştırmaktadır. Bu olaylar genellikle bilimsel anomalilerle ilgilidir ve paralel evrenler, kuantum fiziği, zihin kontrolü gibi temalar üzerine kuruludur.',
    quantumRelevence: [
      'Paralel evrenler ve çoklu evren teorisi önemli bir rol oynar.',
      'Bilinç aktarımı ve kuantum seviyesindeki bilimsel olaylar anlatının merkezindedir.',
    ],
  },
  {
    image:
      'https://m.media-amazon.com/images/M/MV5BYjFiYWZjZTctZWUxOS00YTA5LTg1ZjctNzYyMzYxODhjOWZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    title: 'Quantum Leap',
    description:
      'Dr. Sam Beckett, bir deney sonucu zaman içinde "kuantum sıçramalar" yaparak, geçmişte farklı insanların hayatlarına girer ve onların sorunlarını çözmeye çalışır. Aynı zamanda kendi zamanına geri dönmenin yollarını arar.',
    quantumRelevence: [
      'Zaman yolculuğu ve kuantum sıçramaları kavramı üzerine kuruludur.',
      'Her sıçramada farklı bir kişiyle yer değiştirme, kuantum mekaniğindeki süperpozisyon ve olasılıklarla ilişkilendirilir.',
    ],
  },
  {
    image:
      'https://m.media-amazon.com/images/M/MV5BOGQyOWQ3YmUtYmU1MC00ZGZlLThhYTEtMTNiNWNhZjQwMGU3XkEyXkFqcGc@._V1_.jpg',
    title: 'The Man in the High Castle',
    description:
      "II. Dünya Savaşı'nı Nazi Almanyası ve Japonya’nın kazandığı alternatif bir gerçeklikte geçen dizi, bu yeni dünya düzenine karşı direnişi konu alır. Direnişçiler, farklı bir gerçekliği gösteren filmleri keşfeder ve çoklu evrenlerin varlığıyla yüzleşirler.",
    quantumRelevence: [
      'Çoklu evren teorisini temel alır ve farklı gerçeklikler arasındaki geçişleri konu edinir.',
      'Alternatif tarihler ve evrenlerin birbiriyle etkileşimleri kuantum fiziği perspektifinden ele alınır.',
    ],
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
          <Swiper spaceBetween={10} slidesPerView={'auto'} className="my-2">
            {seriesContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Drawer>
                  <DrawerTrigger>
                    <div className="h-36 w-24 overflow-hidden rounded-md bg-neutral-700">
                      <img
                        src={content.image}
                        alt=""
                        className="h-full w-full overflow-hidden rounded-md object-cover"
                      />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto h-[400px] w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>{content.title}</DrawerTitle>
                        <DrawerDescription>
                          {content.description}
                          <h1 className="my-2 mt-4 text-base text-neutral-50">
                            Kuantumla Alakası:
                          </h1>
                          {content.quantumRelevence.length > 0 && (
                            <ul className="mt-2 list-inside list-disc">
                              {content.quantumRelevence.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </DrawerDescription>
                      </DrawerHeader>
                    </div>
                  </DrawerContent>
                </Drawer>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-row items-center gap-2 pb-1 pt-4">
            <Clapperboard />
            <h1 className="text-xl font-semibold">Film önerileri</h1>
          </div>
          <p className="text-sm text-neutral-400">
            Not: Daha iyi bir öğrenme için aşağıdaki önerilerden en az birini
            izlemeniz gerekmektedir.
          </p>
          <Swiper spaceBetween={10} slidesPerView={'auto'} className="my-2">
            {movieContent.map((content, index) => (
              <SwiperSlide key={index} className="w-auto rounded-lg">
                <Drawer>
                  <DrawerTrigger>
                    <div className="h-36 w-24 overflow-hidden rounded-md bg-neutral-700">
                      <img
                        src={content.image}
                        alt=""
                        className="h-full w-full overflow-hidden rounded-md object-cover"
                      />
                    </div>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto h-[400px] w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>{content.title}</DrawerTitle>
                        <DrawerDescription>
                          {content.description}
                          <h1 className="my-2 mt-4 text-base text-neutral-50">
                            Neden İzlenmeli?
                          </h1>
                          <p>{content.whyToWatch}</p>
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
