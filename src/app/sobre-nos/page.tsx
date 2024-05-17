import { Crosshair, Eye, SketchLogo } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <main style={{flex: "1 1 0"}}>
      <section className="bg-about-us-main bg-cover bg-center bg-no-repeat py-16 px-3 hub:py-40 hub:px-0">
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 sm:text-h1 font-bold">Quem somos?</h1>
          <p className="text-lg">A eTA Hub é especialista em simplificar suas viagens internacionais. Nosso foco é tornar a obtenção de Autorizações Eletrônicas de Viagem (eTAs) uma experiência fácil e segura. Combinamos experiência em viagens e tecnologia para oferecer um serviço de alta qualidade, centrado no cliente e sem complicações.</p>
        </div>
      </section>

      <section className="bg-hub-blue text-white py-16 px-3 hub:py-20">
        <div className="hub:w-328 hub:mx-auto hub:flex">
          <div className="hub:w-1/2">
            <span className="font-bold">Sobre nós</span>
            <h2 className="text-4xl font-bold mb-20 hub:text-5xl">Como surgiu o eTa Hub.</h2>
          </div>
          <div className="text-justify hub:w-1/2">
            <p className="mb-4">A história da eTA Hub é uma narrativa de inovação e a necessidade de simplificar o processo de viagens internacionais.</p>
            <p className="mb-4">Tornar as viagens ao redor do mundo mais acessíveis e livres de complicações sempre foi e sempre será a nossa grande aspiração. Diante das, nossa equipe fundadora decidiu agir.</p>
            <p className="mb-4">Movidos pela experiência pessoal de enfrentar os desafios burocráticos ao planejar viagens ao exterior, especialmente em relação às complexidades muitas vezes associadas à obtenção de documentos de viagem, como a Autorização Eletrônica de Viagem (eTA), reconhecemos a necessidade de uma solução mais eficiente e centrada no cliente. Assim, empreendemos o desafio de criar uma plataforma que simplificasse o processo de obtenção de eTAs, inicialmente focando em destinos populares como o Canadá e a Nova Zelândia.</p>
            <p className="mb-4">Para isso, reunimos uma equipe dedicada de profissionais experientes no setor de viagens e tecnologia. Combinando conhecimento especializado com uma abordagem inovadora, desenvolvemos uma plataforma intuitiva e eficaz que coloca a experiência do cliente em primeiro lugar.</p>
            <p className="mb-4">Desde então, temos trabalhado incansavelmente para expandir nossa oferta e aprimorar nossos serviços, sempre com o objetivo de proporcionar uma experiência de solicitação de eTA sem complicações para viajantes de todo o mundo.</p>
            <p>Hoje, a eTA Hub orgulha-se de ser um hub confiável para a obtenção de eTAs, continuando a crescer e evoluir para atender às necessidades em constante mudança dos nossos clientes. Nossa jornada está apenas começando, e estamos ansiosos para continuar simplificando o caminho para as aventuras que aguardam além das fronteiras.</p>
          </div>
        </div>
      </section>

      <section className="w-full h-[450px] bg-about-us bg-cover bg-bottom bg-no-repeat" />
      
      <section className="py-16 px-3 hub:py-20">
        <div className="hub:w-328 hub:mx-auto">
          <div className="mb-10">
            <span className="font-bold">Nosso core</span>
            <h2 className="text-4xl font-bold my-4 hub:text-5xl">O que é importante para nós.</h2>
            <div className="text-justify">
              <p className="mb-4">Na eTA Hub, objetivamos simplificar o processo de obtenção de Autorizações Eletrônicas de Viagem (eTAs) para viajantes que desejam explorar o mundo. Nosso compromisso é garantir que cada etapa, desde a solicitação até a aprovação, seja uma experiência sem complicações e satisfatória para nossos clientes.</p>
              <p className="mb-4">Valorizamos a facilidade e a conveniência, projetando nossa plataforma para oferecer um processo de solicitação intuitivo e acessível. A transparência é fundamental em tudo o que fazemos, fornecendo informações claras sobre requisitos, taxas e prazos de processamento, para que os clientes possam tomar decisões informadas.</p>
              <p className="mb-4">Nosso foco no atendimento ao cliente de qualidade se reflete em nossa equipe dedicada, pronta para oferecer suporte personalizado e resolver qualquer dúvida ou preocupação que os clientes possam ter. Além disso, priorizamos a segurança e a confiabilidade, garantindo que os dados dos clientes sejam tratados com o mais alto nível de proteção.</p>
              <p className="mb-4">Estamos comprometidos com a atualização constante e a adaptação às mudanças regulatórias e de mercado, garantindo que nossos processos estejam sempre em conformidade e nossa plataforma esteja pronta para atender às necessidades de novos destinos. Investimos em inovação tecnológica para aprimorar ainda mais a experiência do cliente, incorporando recursos avançados para garantir eficiência e precisão em cada interação.</p>
              <p>Na eTA Hub, estamos preparados para ser seu parceiro confiável em suas viagens internacionais, oferecendo uma jornada tranquila e sem complicações para as aventuras que esperam do outro lado das fronteiras.</p>
            </div>
          </div>
          <div className="text-justify w-full hub:flex hub:gap-12">
            <div className="w-1/3 my-10">
              <Crosshair width={40} height={40} />
              <h3 className="text-2xl font-bold my-4">Missão</h3>
              <p>Nossa missão é simplificar o processo de obtenção de Autorizações Eletrônicas de Viagem (eTAs), proporcionando aos viajantes uma experiência tranquila e sem complicações. Estamos comprometidos em oferecer um serviço de alta qualidade, com foco na facilidade, transparência e segurança, para que nossos clientes possam desfrutar de suas aventuras internacionais com confiança e tranquilidade.</p>
            </div>
            <div className="w-1/3 my-10">
              <Eye width={40} height={40} />
              <h3 className="text-2xl font-bold my-4">Visão</h3>
              <p>Nossa visão é sermos reconhecidos como líderes no fornecimento de soluções inovadoras e eficientes para a obtenção de eTAs em todo o mundo. Buscamos constantemente aprimorar nossos serviços e expandir nossa oferta para novos destinos, mantendo sempre nosso compromisso com a excelência e a satisfação do cliente.</p>
            </div>
            <div className="w-1/3 my-10"
            >
              <SketchLogo width={40} height={40} />
              <h3 className="text-2xl font-bold my-4">Valores</h3>
              <p>Na eTA Hub, nossos valores são o norte dos nossos processos e da nossa atuação. Buscamos a excelência, transparência e confiança, sempre inovando para oferecer o melhor serviço aos nossos clientes. Colocamos os clientes em primeiro lugar, agindo com responsabilidade e adaptabilidade em todas as situações. Esses valores fundamentais são a base do nosso compromisso em fornecer uma experiência excepcional e ser uma solução eficiente para os nossos clientes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-hub-blue text-white text-center hub:py-20">
        <h2 className="text-4xl font-bold mt-4 mb-6 hub:text-5xl">Conheça o nosso hub de sites.</h2>
        <a href="/nosso-hub" className="px-6 py-2 bg-white rounded-sm"><span className="leading-8 text-darkblue">Ver sites</span></a>
      </section>
    </main>
  )
}
