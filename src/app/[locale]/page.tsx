import Image from "next/image"

import {useTranslations} from 'next-intl'
import { Link } from '@/navigation'

import { HandPointing, Wallet, Envelope, Globe, HourglassSimpleMedium, ShieldCheck } from "@phosphor-icons/react/dist/ssr"

import Testemonials from "./Components/Testemonials"
import Accordion from "./Components/Accordion"
import HeroVideo from "./Components/HeroVideo"

export default function Home() {
  const t = useTranslations('Home')

  return (
    <main style={{flex: "1 1 0"}}>
      {/* Seção 1 */}
      <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-16 px-3 hub:py-40 hub:px-0">
        <HeroVideo />
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 font-bold sm:text-h1">{t('section-1.title-h1')}</h1>
          <p className="text-lg mt-6 mb-10">{t('section-1.subtitle')}</p>
          <Link href="/sobre-nos" className="bg-hub-blue px-6 py-2 rounded-md hover:bg-lightblue transition-all ease-in duration-300">
            <span className="leading-8">{t('section-1.button')}</span>
          </Link>
        </div>
      </section>

      {/* Seção 2 */}
      <section className="flex flex-col items-center py-12 border-y border-y-hub-gray">
        <h2 className="text-lg text-center font-bold mb-6 px-2">{t('section-2.title-h2')}</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 justify-center items-center gap-12 md:flex-row">
          <div>
            <a href="https://etacanadense.com.br" target="_blank">
              <Image src="/etacanadense.svg" width={150} height={53} alt="Logotipo eTA Canadense" />
            </a>
          </div>
          <div>
            <Image src="/etanz.svg" width={120} height={53} alt="Logotipo eTA Nova Zelândia" />
            
          </div>
          <div>
            <a href="https://etacanadiano.pt" target="_blank">
              <Image src="/etacanadiano.svg" width={150} height={53} alt="Logotipo eTA Canadiano" />
            </a>
          </div>
          <div>
            <Image src="/etareinounido.svg" width={120} height={53} alt="Logotipo eTA Reino Unido" />
          </div>
          <div>
            <Image src="/etacanadiense.svg" width={150} height={53} alt="Logotipo eTA Canadiense" />
          </div>
          <div>
            <Image src="/etias.svg" width={150} height={53} alt="Logotipo eTIAS União Europeia" />
          </div>
        </div>
      </section>

      {/* Seção 3 */}
      <section className="py-16 px-3 hub:px-0 md:py-20">
        <h2 className="text-4xl text-center font-bold mb-20 hub:text-5xl">{t('section-3.title-h2')}</h2>
        <div className="mx-auto w-full flex flex-col gap-12 hub:flex-row hub:w-328">
          <div className="px-8 flex flex-col w-full items-center hub:w-1/3">
            <HandPointing width={48} height={48}/>
            <h3 className="text-2xl font-bold my-6">{t('section-3.div1-title')}</h3>
            <p className="text-justify">{t('section-3.div1-paragraph')}</p>
          </div>
          <div className="px-8 flex flex-col w-full items-center hub:w-1/3">
            <Wallet width={48} height={48} />
            <h3 className="text-2xl font-bold my-6">{t('section-3.div2-title')}</h3>
            <p className="text-justify">{t('section-3.div2-paragraph')}</p>
          </div>
          <div className="px-8 flex flex-col w-full items-center hub:w-1/3">
            <Envelope width={48} height={48} />
            <h3 className="text-2xl font-bold my-6">{t('section-3.div3-title')}</h3>
            <p className="text-justify">{t('section-3.div3-paragraph')}</p>
          </div>
        </div>
      </section>

      {/* Seção 4 */}
      <section className="flex flex-col items-center py-16 bg-darkblue text-white md:py-20">
        <div className="flex flex-col items-center w-full text-center px-3 hub:w-192 hub:px-0">
          <span className="font-semibold mb-4">{t('section-4.subtitle')}</span>
          <h2 className="text-4xl mb-6 hub:text-5xl">{t('section-4.title-h2')}</h2>
          <p className="mb-6">{t('section-4.paragraph')}</p>
          <Link href="/sobre-nos" className="bg-hub-blue px-6 py-2 rounded-md hover:bg-lightblue transition-all ease-in duration-300">
            <span className="leading-8">{t('section-4.button')}</span>
          </Link>
        </div>
        <Image src="/airplane-aboutus.jpg" className="w-full mt-20 overflow-clip" width={1448} height={483} quality={100} priority alt={t('section-4.image-alt')} />
      </section>

      {/* Seção 5 */}
      <section className="py-16 px-3 bg-hub-gray hub:py-20 hub:px-0">
        <div className="mx-auto w-full grid grid-cols-1 hub:w-328 hub:grid-cols-2 ">
          <div></div>
          <div>
            <span className="font-bold">{t('section-5.subtitle')}</span>
            <h2 className="text-4xl font-bold mt-4 mb-6 hub:text-5xl">{t('section-5.title-h2')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col mb-8">
                <span className="text-5xl mb-2 font-bold">4h</span>
                <p>{t('section-5.div1-paragraph')}</p>
              </div>
              <div className="flex flex-col mb-8">
                <span className="text-5xl mb-2 font-bold">99%</span>
                <p>{t('section-5.div2-paragraph')}</p>
              </div>
              <div className="flex flex-col mb-8">
                <span className="text-5xl mb-2 font-bold">2.4k+</span>
                <p>{t('section-5.div3-paragraph')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  Seção 6 */}
      <section className="bg-info bg-no-repeat bg-cover bg-right py-16 hub:py-20">
        <div className="mx-auto w-full grid grid-cols-1 justify-between items-center px-3 hub:w-328 md:grid-cols-2 hub:px-0">
          <div className="bg-white/60 backdrop-blur-lg rounded-2xl flex flex-col p-5 gap-16">
            <div className="flex justify-start items-center">
              <div className="w-14 mr-6">
                <Globe width={48} height={48}/>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('section-6.div1-title')}</h3>
                <p>{t('section-6.div1-paragraph')}</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-14 mr-6">
                <HourglassSimpleMedium width={48} height={48}/>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('section-6.div2-title')}</h3>
                <p>{t('section-6.div2-paragraph')}</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-14 mr-6">
                <ShieldCheck width={48} height={48}/>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{t('section-6.div3-title')}</h3>
                <p>{t('section-6.div3-paragraph')}</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* Seção 7 */}
      <section className="py-16 px-3 hub:py-20 hub:px-0">
        <div className="mx-auto w-full hub:w-328">
          <Testemonials />
        </div>
      </section>

      {/* Seção 8 */}
      <section className="py-16 bg-hub-blue text-white text-center hub:py-20">
        <h2 className="text-4xl font-bold mt-4 mb-6 hub:text-5xl">{t('section-8.title-h2')}</h2>
        <Link href="/nosso-hub" className="px-6 py-2 bg-white rounded-sm">
          <span className="leading-8 text-darkblue">{t('section-8.button')}</span>
        </Link>
      </section>

      {/* Seção 9 */}
      <section className="py-16 text-center hub:py-20">
        <div className="mx-auto px-3 w-full hub:w-192 hub:px-0">
          <h2 className="text-4xl font-bold mb-20 hub:text-5xl">{t('section-9.title-h2')}</h2>
          <Accordion />
          <div className="text-center mt-20">
            <h3 className="text-3xl font-bold mb-4">{t('section-9.title-h3')}</h3>
            <p className="mb-6">{t('section-9.paragraph')}</p>
            <Link href="/contato" className="text-white bg-hub-blue px-6 py-2 rounded-md hover:bg-lightblue transition-all ease-in duration-300">
              <span className="leading-8">{t('section-9.button')}</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
