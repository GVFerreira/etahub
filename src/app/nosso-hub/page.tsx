import Image from 'next/image'

export default function OurHub() {
  return (
    <main style={{flex: "1 1 0"}}>
      <section className="bg-nosso-hub bg-cover bg-center bg-no-repeat py-16 px-3 hub:py-40 hub:px-0">
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 font-bold sm:text-h1">Nosso Hub</h1>
        </div>
      </section>

      {/* Canadense */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../etacanadense.svg" width={300} height={107} alt="eTA Canadense" className='mb-4' />
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">Nosso site de solicitações de viagem para o Canadá em português-BR</h2>
            <p className="mb-8">O eTA (Autorização Eletrônica de Viagem) é uma exigência do governo canadense para viajantes que estão isentos de visto e desejam entrar no Canadá por via aérea. Ele é uma medida de segurança que permite às autoridades canadenses avaliar os viajantes antes de sua chegada, ajudando a garantir a segurança do país e a facilitar o controle de fronteiras. O eTA é necessário mesmo para trânsitos ou escalas no Canadá e é válido por cinco anos ou até a data de expiração do passaporte, o que ocorrer primeiro. Portanto, é essencial para qualquer viajante que planeje visitar o Canadá por via aérea estar ciente dessa exigência e garantir que sua autorização esteja em ordem antes da viagem.</p>
            <a href="https://etacanadense.com.br" className="px-6 py-2 bg-hub-blue rounded-sm text-white">Ir para o site</a>
          </div>
          <div className="hub:w-1/2">
            <Image src="/../canadense.jpg" width={616} height={640} alt="Ponto turístico no Canadá" className="h-full rounded-md mx-auto w-full" />
          </div>
        </div>
      </section>

      {/* Canadiano */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col-reverse gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../canadiano.jpg" width={616} height={640} alt="Ponto turístico no Canadá" className="h-full rounded-md mx-auto w-full" />
          </div>
          <div className="hub:w-1/2">
            <Image src="/../etacanadiano.svg" width={300} height={107} alt="eTA Canadiano" className="mb-4"/>
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">Nosso site de solicitações de viagem para o Canadá em português-PT.</h2>
            <p className="mb-8">O eTA (Autorização Eletrônica de Viagem) é uma exigência do governo canadense para viajantes que estão isentos de visto e desejam entrar no Canadá por via aérea. Ele é uma medida de segurança que permite às autoridades canadenses avaliar os viajantes antes de sua chegada, ajudando a garantir a segurança do país e a facilitar o controle de fronteiras. O eTA é necessário mesmo para trânsitos ou escalas no Canadá e é válido por cinco anos ou até a data de expiração do passaporte, o que ocorrer primeiro. Portanto, é essencial para qualquer viajante que planeje visitar o Canadá por via aérea estar ciente dessa exigência e garantir que sua autorização esteja em ordem antes da viagem.</p>
            <a href="https://etacanadiano.pt" className="px-6 py-2 bg-hub-blue rounded-sm text-white">Ir para o site</a>
          </div>
        </div>
      </section>

      {/* Canadiense */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            {/* <Image src="/../etacanadense.svg" width={300} height={107} alt="eTA Canadense" className='mb-4' /> */}
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">Nosso site de solicitações de viagem para o Canadá em espanhol.</h2>
            <p className="mb-8">O eTA (Autorização Eletrônica de Viagem) é uma exigência do governo canadense para viajantes que estão isentos de visto e desejam entrar no Canadá por via aérea. Ele é uma medida de segurança que permite às autoridades canadenses avaliar os viajantes antes de sua chegada, ajudando a garantir a segurança do país e a facilitar o controle de fronteiras. O eTA é necessário mesmo para trânsitos ou escalas no Canadá e é válido por cinco anos ou até a data de expiração do passaporte, o que ocorrer primeiro. Portanto, é essencial para qualquer viajante que planeje visitar o Canadá por via aérea estar ciente dessa exigência e garantir que sua autorização esteja em ordem antes da viagem.</p>
            <a className="cursor-not-allowed px-6 py-2 bg-zinc-500 rounded-sm text-white">Ir para o site</a>
          </div>
          <div className="hub:w-1/2">
            <Image src="/../canadiense.jpg" width={616} height={640} alt="Ponto turístico no Canadá" className="h-full rounded-md mx-auto w-full" />
          </div>
        </div>
      </section>

      {/* Nova Zelândia */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col gap-10 hub:w-328 hub:flex-row hub:mx-auto hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../nova-zelandia.jpg" width={616} height={640} alt="Ponto turístico no Candá" className="h-full rounded-md w-full" />
          </div>
          <div className="hub:w-1/2">
            {/* <Image src="/../etacanadiano.svg" width={300} height={107} alt="eTA Canadiano" className="mb-4"/> */}
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">Nosso site de solicitações de viagem para a Nova Zelândia</h2>
            <p className="mb-8">A Autorização Eletrônica de Viagem (eTA) para a Nova Zelândia é um requisito online para visitantes de países que têm isenção de visto. A eTA agiliza o processo de entrada, fornecendo informações antecipadas sobre os viajantes e melhorando a segurança das fronteiras.</p>
            <a className="cursor-not-allowed px-6 py-2 bg-zinc-500 rounded-sm text-white">Ir para o site</a>
          </div>
        </div>
      </section>

      {/* Reino Unido */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            {/* <Image src="/../etacanadense.svg" width={300} height={107} alt="eTA Canadense" className='mb-4' /> */}
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">EM BREVE... eTA Reino Unido</h2>
            <p className="mb-8">O Reino Unido está implementado um sistema de Autorização Eletrônica de Viagem (eTA) para visitantes isentos de visto. Isso significa que será necessária uma permissao digital obrigatória para cidadãos de países que podem visitar a Inglaterra, o País de Gales, a Escócia e a Irlanda do Norte sem visto para viagens curtas. Isso inclui os cidadãos do Brasil.</p>
            <a className="cursor-not-allowed px-6 py-2 bg-zinc-500 rounded-sm text-white">Ir para o site</a>
          </div>
          <div className="hub:w-1/2">
            <Image src="/../reino-unido.jpg" width={616} height={640} alt="Ponto turístico no Canadá" className="h-full rounded-md mx-auto w-full" />
          </div>
        </div>
      </section>

      {/* União Europeia */}
      <section className="py-16 px-3 hub:py-20">
        <div className="flex flex-col gap-10 hub:w-328 hub:flex-row hub:mx-auto hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../uniao-europeia.jpg" width={616} height={640} alt="Ponto turístico no Candá" className="h-full rounded-md w-full" />
          </div>
          <div className="hub:w-1/2">
            {/* <Image src="/../etacanadiano.svg" width={300} height={107} alt="eTA Canadiano" className="mb-4"/> */}
            <h2 className="text-xl font-bold mb-2 hub:text-2xl">EM BREVE... eTIAS União Europeia</h2>
            <p className="mb-8">O Sistema Europeu de Informação e Autorização de Viagem (ETIAS) é um sistema de autorização prévia que está sendo implementado pela União Europeia para permitir a entrada de viajantes de países isentos de visto em viagens de curta duração para os países do Espaço Schengen. O ETIAS foi projetado para reforçar a segurança das fronteiras da UE, pré-aprovando viajantes elegíveis antes de sua chegada.</p>
            <a className="cursor-not-allowed px-6 py-2 bg-zinc-500 rounded-sm text-white">Ir para o site</a>
          </div>
        </div>
      </section>
    </main>
  )
}
