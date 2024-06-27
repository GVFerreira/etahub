import Image from 'next/image'
import {useTranslations} from 'next-intl'
import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'

export default function OurHub() {
  const t = useTranslations('Hub')

  return (
    <main style={{flex: "1 1 0"}}>
      <section className="bg-nosso-hub bg-cover bg-center bg-no-repeat py-16 px-3 hub:py-40 hub:px-0">
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 font-bold sm:text-h1">{t('title')}</h1>
        </div>
      </section>

      {/* Canadense */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../etacanadense.svg" width={300} height={107} alt="eTA Canadense" className='mb-4' />
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">{t('Canadense.title')}</h2>
            <p className="mb-8">{t('Canadense.paragraph')}</p>
            <a href="https://etacanadense.com.br" className="flex flex-row items-center gap-2 justify-center w-6/12 md:w-4/12 px-6 py-2 bg-hub-blue rounded-sm text-white">{t('button')} <ArrowSquareOut /></a>
          </div>
          <div className="hub:w-1/2">
            <Image src="/../canadense.jpg" width={616} height={640} alt="Ponto turístico no Canadá" className="h-full rounded-md mx-auto w-full shadow-lg" />
          </div>
        </div>
      </section>

      {/* Canadiano */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col-reverse gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../canadiano.jpg" width={616} height={640} alt="Ponto turístico no Canadá" className="h-full rounded-md mx-auto w-full shadow-lg" />
          </div>
          <div className="hub:w-1/2">
            <Image src="/../etacanadiano.svg" width={300} height={107} alt="eTA Canadiano" className="mb-4"/>
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">{t('Canadiano.title')}</h2>
            <p className="mb-8">{t('Canadiano.paragraph')}</p>
            <a href="https://etacanadiano.pt" className="flex flex-row items-center gap-2 justify-center w-6/12 md:w-4/12 px-6 py-2 bg-hub-blue rounded-sm text-white">{t('button')} <ArrowSquareOut /></a>
          </div>
        </div>
      </section>

      {/* Canadiense */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../etacanadiense.svg" width={300} height={107} alt="eTA Canadense" className='mb-4' />
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">{t('Canadiense.title')}</h2>
            <p className="mb-8">{t('Canadiense.paragraph')}</p>
            <a className="cursor-not-allowed px-6 py-2 bg-zinc-500 rounded-sm text-white">{t('button-not-allowed')}</a>
          </div>
          <div className="hub:w-1/2">
            <Image src="/../canadiense.jpg" width={616} height={640} alt="Ponto turístico no Canadá" className="h-full rounded-md mx-auto w-full shadow-lg" />
          </div>
        </div>
      </section>

      {/* Nova Zelândia */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col-reverse gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../nova-zelandia.jpg" width={616} height={640} alt="Ponto turístico no Candá" className="h-full rounded-md w-full shadow-lg" />
          </div>
          <div className="hub:w-1/2">
            <Image src="/../etanz.svg" width={300} height={107} alt="eTA Nova Zelândia" className="mb-4"/>
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">{t('Nova-Zelandia.title')}</h2>
            <p className="mb-8">{t('Nova-Zelandia.paragraph')}</p>
            <a className="cursor-not-allowed px-6 py-2 bg-zinc-500 rounded-sm text-white">{t('button-not-allowed')}</a>
          </div>
        </div>
      </section>

      {/* Reino Unido */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../etareinounido.svg" width={300} height={107} alt="eTA Reino Unido" className='mb-4' />
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">{t('Reino-Unido.title')}</h2>
            <p className="mb-8">{t('Reino-Unido.paragraph')}</p>
            <a className="cursor-not-allowed px-6 py-2 bg-zinc-500 rounded-sm text-white">{t('button-not-allowed')}</a>
          </div>
          <div className="hub:w-1/2">
            <Image src="/../reino-unido.jpg" width={616} height={640} alt="Ponto turístico no Canadá" className="h-full rounded-md mx-auto w-full shadow-lg" />
          </div>
        </div>
      </section>

      {/* União Europeia */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col-reverse gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../uniao-europeia.jpg" width={616} height={640} alt="Ponto turístico no Candá" className="h-full rounded-md w-full shadow-lg" />
          </div>
          <div className="hub:w-1/2">
            <Image src="/../etias.svg" width={300} height={107} alt="eTIAS União Europeia" className="mb-4"/>
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">{t('Uniao-Europeia.title')}</h2>
            <p className="mb-8">{t('Uniao-Europeia.paragraph')}</p>
            <a className="cursor-not-allowed px-6 py-2 bg-zinc-500 rounded-sm text-white">{t('button-not-allowed')}</a>
          </div>
        </div>
      </section>
    </main>
  )
}
