import Image from "next/image"
import { HandPointing, ClockCountdown, Envelope, Globe, HourglassSimpleMedium, ShieldCheck } from "@phosphor-icons/react/dist/ssr"
import Testemonials from "./Components/Testemonials"
import AccordionItem from "./Components/AccordionItem"

export default function Home() {
  return (
    <main style={{flex: "1 1 0"}}>
      <section className="flex flex-col items-center">
        <div className="w-full flex flex-col justify-between items-center gap-20 py-20 px-3 hub:w-328 hub:flex-row hub:py-28 md:w-192 md:gap-40 md:px-0">
          <div className="p-0 md:pr-20">
            <h1 className="text-5xl sm:text-h1 font-bold">O melhor Hub de Autorizações de Viagem.</h1>
            <p className="text-lg mt-6 mb-10">Describe exactly what your product or service does to solve this problem. Avoid using verbose words or phrases.</p>
            <a href="/nosso-hub" className="px-6 py-2 border rounded-sm"><span className="leading-8">Saiba mais sobre eTA</span></a>
          </div>
          <Image src="/family-header.jpg" width={492} height={512} quality={95} priority={true} alt="Family at airport"/>
        </div>
      </section>

      <section className="flex flex-col items-center py-12 border-y-2 border-y-hub-gray">
        <h2 className="text-lg text-center font-bold mb-6">Os melhores sites para você fazer sua solicitação de Autorização Eletrônica de Viagem.</h2>
        <div className="flex flex-col justify-center items-center gap-12 md:flex-row">
          <div>
            <a href="https://etacanadense.com.br" target="_blank">
              <Image src="/etacanadense.svg" width={150} height={53} alt="Logotipo eTA Canadense" />
            </a>
          </div>
          <div>
            <p>eTA Nova Zelândia</p>
            <p className="text-xs text-center">Em breve</p>
          </div>
          <div>
            <a href="https://etacanadiano.pt" target="_blank">
              <Image src="/etacanadiano.svg" width={150} height={53} alt="Logotipo eTA Canadiano" />
            </a>
          </div>
          <div>
            <p>eTA Reino unido</p>
            <p className="text-xs text-center">Em breve</p>
          </div>
          <div>
            <p>ETIAS União Europeia</p>
            <p className="text-xs text-center">Em breve</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-3 hub:px-0 md:py-28">
        <h2 className="text-4xl text-center font-bold mb-20 hub:text-5xl">Como funciona?</h2>
        <div className="mx-auto w-full flex flex-col gap-12 hub:flex-row hub:w-328">
          <div className="flex flex-col items-center">
            <HandPointing width={48} height={48}/>
            <h3 className="text-2xl font-bold my-6">Preencha o formulário</h3>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
          <div className="flex flex-col items-center">
            <ClockCountdown width={48} height={48} />
            <h3 className="text-2xl font-bold my-6">Aguarde o Governo</h3>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
          <div className="flex flex-col items-center">
            <Envelope width={48} height={48} />
            <h3 className="text-2xl font-bold my-6">Receba sua eTA</h3>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-20 bg-darkblue text-white md:py-28">
        <div className="flex flex-col items-center w-full text-center px-3 hub:w-192 hub:px-0">
          <span className="font-semibold mb-4">Quem somos?</span>
          <h2 className="text-4xl mb-6 hub:text-5xl">O eTA Hub é o lorem ipsum dolor sit amet.</h2>
          <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
          <a href="/sobre-nos" className="px-6 py-2 border rounded-sm"><span className="leading-8">Saiba mais sobre nós</span></a>
        </div>
        <Image src="/airplane-aboutus.jpg" className="w-full mt-20 overflow-clip" width={1448} height={483} quality={100} priority alt="A girl in front of the airplane" />
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto w-full flex flex-col justify-between items-center px-3 hub:w-328 hub:flex-row hub:px-0">
          <Image src="/airplane-window.png" className="hidden hub:mr-20 md:block md:mb-10" width={487} height={608} alt="Airplane window seeing a blue sky" />
          <div className="flex flex-col gap-16">
            <div className="flex justify-start items-center">
              <div className="w-14 mr-6">
                <Globe width={48} height={48}/>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Totalmente online</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. </p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-14 mr-6">
                <HourglassSimpleMedium width={48} height={48}/>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Faça em 10 minutos</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. </p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-14 mr-6">
                <ShieldCheck width={48} height={48}/>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">99% de aprovações</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-3 bg-hub-gray hub:py-28 hub:px-0">
        <div className="mx-auto w-full flex flex-col justify-between items-center hub:w-328 hub:flex-row ">
          <div>
            <span className="font-bold">Estátisticas</span>
            <h2 className="text-4xl font-bold mt-4 mb-6 hub:text-5xl">Veja em números, o que carregamos em nossa mala.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col mb-8">
                <span className="text-5xl mb-2 font-bold">8h</span>
                <p>Tempo médio de aprovação</p>
              </div>
              <div className="flex flex-col mb-8">
                <span className="text-5xl mb-2 font-bold">99%</span>
                <p>Taxa de aprovação</p>
              </div>
              <div className="flex flex-col mb-8">
                <span className="text-5xl mb-2 font-bold">1.2k+</span>
                <p>Clientes atendidos</p>
              </div>
              <div className="flex flex-col mb-8">
                <span className="text-5xl mb-2 font-bold">100+</span>
                <p>Avaliações 5 estrelas</p>
              </div>
            </div>
          </div>
          <Image src="/preparations-packing.png" width={589} height={651} alt="Preparations packing" />
        </div>
      </section>

      <section className="py-20 px-3 hub:py-28 hub:px-0">
        <div className="mx-auto w-full hub:w-328">
          <Testemonials />
        </div>
      </section>

      <section className="py-20 bg-hub-blue text-white text-center hub:py-28">
        <h2 className="text-4xl font-bold mt-4 mb-6 hub:text-5xl">Conheça os nosso hub de sites.</h2>
        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <a href="/nosso-hub" className="px-6 py-2 bg-white rounded-sm"><span className="leading-8 text-darkblue">Ver sites</span></a>
      </section>

      <section className="py-20 text-center hub:py-28">
        <div className="mx-auto px-3 w-full hub:w-192 hub:px-0">
          <h2 className="text-4xl font-bold mb-20 hub:text-5xl">Dúvidas frequentes.</h2>
          <AccordionItem
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?"
          />
          <AccordionItem
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?"
          />
          <AccordionItem
            question="Lorem ipsum dolor sit amet?"
            answer="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?"
          />
          <div className="text-center mt-20">
            <h3 className="text-3xl font-bold mb-4">Ainda ficou com dúvidas?</h3>
            <p className="mb-6">O nosso suporte funciona através dos e-mails.<br />Clique no botão abaixo para entrar em contato conosco</p>
            <a href="/contato" className="px-6 py-2 border border-hub-gray rounded-sm"><span className="leading-8">Contato</span></a>
          </div>
        </div>
      </section>
    </main>
  )
}
