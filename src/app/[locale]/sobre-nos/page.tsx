import {useTranslations} from 'next-intl'
import { Link } from '@/navigation'

import { Crosshair, Eye, SketchLogo } from "@phosphor-icons/react/dist/ssr"

export default function About() {
  const t = useTranslations('About')

  return (
    <main style={{flex: "1 1 0"}}>
      {/* Seção 1 */}
      <section className="bg-about-us-main bg-cover bg-center bg-no-repeat py-16 px-3 hub:py-40 hub:px-0">
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 sm:text-h1 font-bold">{t('section-1.title')}</h1>
          <p className="text-lg">{t('section-1.heading')}</p>
        </div>
      </section>

      {/* Seção 2 */}
      <section className="relative bg-hub-blue text-white py-16 px-3 hub:py-20">
        <div className="absolute z-0 inset-0 bg-pattern bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 hub:w-328 hub:mx-auto hub:flex">
          <div className="hub:w-1/2">
            <span className="font-bold">{t('section-2.subtitle')}</span>
            <h2 className="text-4xl font-bold mb-20 hub:text-5xl">{t('section-2.title')}</h2>
          </div>
          <div className="text-justify space-y-4 hub:w-1/2">
            <p>{t('section-2.paragraph-1')}</p>
            <p>{t('section-2.paragraph-2')}</p>
            <p>{t('section-2.paragraph-3')}</p>
            <p>{t('section-2.paragraph-4')}</p>
            <p>{t('section-2.paragraph-5')}</p>
            <p>{t('section-2.paragraph-6')}</p>
          </div>
        </div>
      </section>

      <div className="w-full h-[450px] bg-about-us bg-cover bg-bottom bg-no-repeat" />
      
      {/* Seção 3 */}
      <section className="py-16 px-3 hub:py-20">
        <div className="hub:w-328 hub:mx-auto">
          <div className="mb-10">
            <span className="font-bold">{t('section-3.subtitle')}</span>
            <h2 className="text-4xl font-bold my-4 hub:text-5xl">{t('section-3.title')}</h2>
            <div className="text-justify grid grid-cols-1 hub:grid-cols-2 hub:gap-x-20">
              <div className="space-y-4">
                <p>{t('section-3.paragraph-1')}</p>
                <p>{t('section-3.paragraph-2')}</p>
                <p>{t('section-3.paragraph-3')}</p>
              </div>
              <div className="space-y-4">
                <p>{t('section-3.paragraph-4')}</p>
                <p>{t('section-3.paragraph-5')}</p>
              </div>
            </div>
          </div>
          <div className="text-justify w-full hub:flex hub:gap-12">
            <div className="w-full md:w-1/3 my-10">
              <Crosshair width={40} height={40} />
              <h3 className="text-2xl font-bold my-4">{t('section-3.cores.mission.title')}</h3>
              <p>{t('section-3.cores.mission.paragraph')}</p>
            </div>
            <div className="w-full md:w-1/3 my-10">
              <Eye width={40} height={40} />
              <h3 className="text-2xl font-bold my-4">{t('section-3.cores.view.title')}</h3>
              <p>{t('section-3.cores.view.paragraph')}</p>
            </div>
            <div className="w-full md:w-1/3 my-10">
              <SketchLogo width={40} height={40} />
              <h3 className="text-2xl font-bold my-4">{t('section-3.cores.value.title')}</h3>
              <p>{t('section-3.cores.value.paragraph')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4 */}
      <section className="py-16 bg-hub-blue text-white text-center hub:py-20">
        <h2 className="text-4xl font-bold mt-4 mb-6 hub:text-5xl">{t('section-4.title-h2')}</h2>
        <Link href="/nosso-hub" className="px-6 py-2 bg-white rounded-sm">
          <span className="leading-8 text-darkblue">{t('section-4.button')}</span>
        </Link>
      </section>
    </main>
  )
}
