import {useTranslations} from 'next-intl'
import { EnvelopeOpen, MapPinSimpleArea, Network } from "@phosphor-icons/react/dist/ssr"
import ContactForm from "./_components/ContactForm"

export default function Contact() {
  const t = useTranslations('Contact')

  return (
    <main style={{flex: "1 1 0"}}>
      <section className="bg-contato bg-cover bg-center bg-no-repeat py-16 px-3 hub:py-40 hub:px-0">
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 font-bold sm:text-h1">{t('title')}</h1>
        </div>
      </section>
      <section className="py-16 px-3 hub:py-40 hub:px-0 md:flex md:flex-col md:gap-20">
        <div className="hub:w-328 hub:mx-auto hub:grid hub:grid-cols-2 hub:gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-4 hub:text-5xl">{t('contact.title')}</h2>
            <p className="text-lg text-gray-600">{t('contact.heading')}</p>
            <div className="my-8 space-y-8">
              <div className="flex flex-row items-center gap-x-4">
                <EnvelopeOpen className="size-9" />
                <div>
                  <p className="text-lg font-bold mb-0">E-mail:</p>
                  <p className="text-gray-600">contato@etahub.com.br</p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <Network className="size-9" />
                <div>
                  <p className="text-lg font-bold mb-0">Hub:</p>
                  <p><span className="font-semibold">eTA Canadense: </span><span className="text-gray-600">contato@etacanadense.com.br</span></p>
                  <p><span className="font-semibold">eTA Canadiano: </span><span className="text-gray-600">contacto@etacanadiano.pt</span></p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-x-4">
                <MapPinSimpleArea className="size-9" />
                <div>
                  <p className="text-lg font-bold mb-0">{t('contact.localization')}:</p>
                  <p className="text-gray-600">Rio Grande do Sul, {t('contact.brasil')}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="p-10 bg-hub-gray/50 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 hub:text-3xl">{t('form.title')}</h2>
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
