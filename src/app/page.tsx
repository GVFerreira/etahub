import Image from "next/image"
import { HandPointing, Wallet, Envelope, Globe, HourglassSimpleMedium, ShieldCheck } from "@phosphor-icons/react/dist/ssr"
import Testemonials from "./Components/Testemonials"
import AccordionItem from "./Components/AccordionItem"

export default function Home() {
  return (
    <main style={{flex: "1 1 0"}}>
      <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-16 px-3 hub:py-40 hub:px-0">
        <video className="absolute w-full min-h-full z-[-10] inset-0 scale-[3] md:scale-[1] sm:scale-[0.5]" loop autoPlay preload="true" muted>
          <source src="/video/travelling-corridor.mp4" type="video/mp4" />
        </video>
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 font-bold sm:text-h1">Emita sua eTA de forma fácil e conveniente.</h1>
          <p className="text-lg mt-6 mb-10">Simplificamos o processo de solicitação de eTA para que você possa se concentrar no que realmente importa: a sua viagem.</p>
          <a href="/nosso-hub" className="px-6 py-2 border bg-hub-blue rounded-sm"><span className="leading-8">Saiba mais sobre a eTA Hub</span></a>
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

      <section className="py-16 px-3 hub:px-0 md:py-20">
        <h2 className="text-4xl text-center font-bold mb-20 hub:text-5xl">Como funciona?</h2>
        <div className="mx-auto w-full flex flex-col gap-12 hub:flex-row hub:w-328">
          <div className="px-8 flex flex-col w-full items-center hub:w-1/3">
            <HandPointing width={48} height={48}/>
            <h3 className="text-2xl font-bold my-6">Preencha o formulário</h3>
            <p className="text-justify">Informe seus dados de viagem para solicitar a Autorização.</p>
          </div>
          <div className="px-8 flex flex-col w-full items-center hub:w-1/3">
            <Wallet width={48} height={48} />
            <h3 className="text-2xl font-bold my-6">Realize o pagamento</h3>
            <p className="text-justify">Faça o pagamento da taxa em um ambiente totalmente SEGURO para finalizar a solicitação.</p>
          </div>
          <div className="px-8 flex flex-col w-full items-center hub:w-1/3">
            <Envelope width={48} height={48} />
            <h3 className="text-2xl font-bold my-6">Receba sua eTA</h3>
            <p className="text-justify">Após aprovado, receba seu documento de viagem no e-mail informado no formulário, em até 24 horas.</p>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center py-16 bg-darkblue text-white md:py-20">
        <div className="flex flex-col items-center w-full text-center px-3 hub:w-192 hub:px-0">
          <span className="font-semibold mb-4">Quem somos?</span>
          <h2 className="text-4xl mb-6 hub:text-5xl">Criada por viajantes, para viajantes. Assim nasceu a eTA Hub.</h2>
          <p className="mb-6">A eTA Hub foi pensada para facilitar as suas viagens internacionais, empregando uma equipe dedicada, que se esforça para tornar o processo de obtenção de autorizações eletrônicas de viagem (eTAs) o mais simples e tranquilo possível para os nossos clientes.</p>
          <a href="/sobre-nos" className="bg-hub-blue px-6 py-2 border rounded-sm"><span className="leading-8">Saiba mais sobre nós</span></a>
        </div>
        <Image src="/airplane-aboutus.jpg" className="w-full mt-20 overflow-clip" width={1448} height={483} quality={100} priority alt="A girl in front of the airplane" />
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto w-full flex flex-col justify-between items-center px-3 hub:w-328 hub:flex-row hub:px-0">
          <Image src="/airplane-window.png" className="hidden hub:mr-20 md:block md:mb-10" width={487} height={608} alt="Airplane window seeing a blue sky" />
          <div className="flex flex-col gap-16">
            <div className="flex justify-start items-center">
              <div className="w-14 mr-6">
                <Globe width={48} height={48}/>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Totalmente online</h3>
                <p>Nosso processo de solicitação é totalmente online, permitindo que você solicite sua eTA a partir do conforto da sua casa, escritório ou onde você estiver.</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-14 mr-6">
                <HourglassSimpleMedium width={48} height={48}/>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Preencha sua aplicação em poucos minutos</h3>
                <p>Nossa interface amigável guia você passo a passo no processo de solicitação da sua eTA, permitindo que você finalize sua aplicação em poucos minutos.</p>
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-14 mr-6">
                <ShieldCheck width={48} height={48}/>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">99% de aprovação</h3>
                <p>Nossa taxa de aprovação de 99% traz a segurança que você precisa. Embora a decisão final da concessão da eTA seja do governo, nossa equipe especializada revisa cuidadosamente cada solicitação para garantir precisão e conformidade, evitando erros que poderiam gerar problemas na sua aprovação.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-3 bg-hub-gray hub:py-20 hub:px-0">
        <div className="mx-auto w-full flex flex-col justify-between items-center hub:w-328 hub:flex-row ">
          <div>
            <span className="font-bold">Estátisticas</span>
            <h2 className="text-4xl font-bold mt-4 mb-6 hub:text-5xl">Veja em números, o que carregamos em nossa mala.</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col mb-8">
                <span className="text-5xl mb-2 font-bold">4h</span>
                <p>Tempo médio de aprovação</p>
              </div>
              <div className="flex flex-col mb-8">
                <span className="text-5xl mb-2 font-bold">99%</span>
                <p>Taxa de aprovação</p>
              </div>
              <div className="flex flex-col mb-8">
                <span className="text-5xl mb-2 font-bold">1.3k+</span>
                <p>Clientes atendidos</p>
              </div>
            </div>
          </div>
          <Image src="/preparations-packing.png" width={589} height={651} alt="Preparations packing" className="h-1/2" />
        </div>
      </section>

      <section className="py-16 px-3 hub:py-20 hub:px-0">
        <div className="mx-auto w-full hub:w-328">
          <Testemonials />
        </div>
      </section>

      <section className="py-16 bg-hub-blue text-white text-center hub:py-20">
        <h2 className="text-4xl font-bold mt-4 mb-6 hub:text-5xl">Conheça os nosso hub de sites.</h2>
        <a href="/nosso-hub" className="px-6 py-2 bg-white rounded-sm"><span className="leading-8 text-darkblue">Ver sites</span></a>
      </section>

      <section className="py-16 text-center hub:py-20">
        <div className="mx-auto px-3 w-full hub:w-192 hub:px-0">
          <h2 className="text-4xl font-bold mb-20 hub:text-5xl">Dúvidas frequentes.</h2>
          <AccordionItem
            question="O que é uma eTA?"
            answer="A eTA (Autorização Eletrônica de Viagem) é um documento eletrônico necessário para viajar para certos países que exigem autorização prévia. Geralmente é aplicável a visitantes que viajam a lazer, turismo ou negócios por um curto período de tempo."
            open={true}
          />
          <AccordionItem
            question="Quais países exigem uma eTA?"
            answer="Países como o Canadá e a Austrália são exemplos de destinos que requerem uma eTA para entrada de visitantes de determinadas nacionalidades. Recomendamos verificar os requisitos específicos do país de destino antes de viajar."
            open={false}
          />
          <AccordionItem
            question="Quem precisa de uma eTA?"
            answer="A necessidade de uma eTA varia de acordo com a nacionalidade do viajante e o país de destino. Geralmente, cidadãos de países que têm acordos de isenção de visto com o país de destino podem precisar de uma eTA. Consulte as regulamentações locais para obter informações precisas sobre quem precisa de uma eTA."
            open={false}
          />
          <AccordionItem
            question="Como solicito uma eTA?"
            answer="O processo de solicitação de eTA pode ser feito por meio de um dos sites de emissão de eTA da eTA Hub . Preencha o formulário online, pague a respectiva taxa e receba a resposta do governo."
            open={false}
          />
          <AccordionItem
            question="Quanto tempo leva para processar uma eTA?"
            answer="O tempo de processamento pode variar dependendo do país de destino e do volume de solicitações. Em geral, muitas eTAs são processadas em questão de minutos a alguns dias úteis. É aconselhável solicitar a eTA com antecedência suficiente antes da data de viagem planejada."
            open={false}
          />
          <AccordionItem
            question="Como solicito uma eTA?"
            answer="O processo de solicitação de eTA pode ser feito por meio de um dos sites de emissão de eTA da eTA Hub . Preencha o formulário online, pague a respectiva taxa e receba a resposta do governo."
            open={false}
          />
          <AccordionItem
            question="Por quanto tempo é válida uma eTA?"
            answer="A validade de uma eTA também pode variar dependendo do país de destino. Em muitos casos, uma eTA é válida por vários anos a partir da data de emissão ou até que o passaporte do viajante expire, o que ocorrer primeiro. Consulte os detalhes da sua eTA para obter informações específicas sobre sua validade."
            open={false}
          />
          <AccordionItem
            question="Posso viajar com uma eTA mais de uma vez?"
            answer="Geralmente, sim. Desde que sua eTA esteja dentro do período de validade e seja associada ao mesmo passaporte utilizado na solicitação inicial, você pode viajar múltiplas vezes para o país de destino conforme permitido pelas regulamentações de imigração."
            open={false}
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
