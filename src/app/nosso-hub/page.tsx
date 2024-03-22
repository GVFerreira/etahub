import Image from 'next/image'

export default function OurHub() {
  return (
    <main style={{flex: "1 1 0"}}>
      <section className="bg-nosso-hub bg-cover bg-center bg-no-repeat py-20 px-3 hub:py-40 hub:px-0">
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 font-bold sm:text-h1">Nosso Hub</h1>
        </div>
      </section>
      <section className="py-20 px-3 hub:py-28">
        <div className="flex flex-col gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <h2 className="text-4xl font-bold mb-4 hub:text-5xl"><Image src="/../etacanadense.svg" width={300} height={107} alt="eTA Canadense" /></h2>
            <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae nisi inventore aperiam iure dignissimos placeat culpa, quo ex esse accusantium, sapiente aut, nesciunt est?</p>
            <a href="https://etacanadense.com.br" className="px-6 py-2 bg-hub-blue rounded-sm text-white">Ir para o site</a>
          </div>
          <div className="hub:w-1/2">
            <Image src="/../canadense.jpg" width={616} height={640} alt="Ponto turístico no Canadá" className="h-full rounded-md mx-auto w-full" />
          </div>
        </div>
      </section>

      <section className="py-20 px-3 hub:py-28">
        <div className="flex flex-col-reverse gap-10 hub:w-328 hub:mx-auto hub:flex-row hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <Image src="/../canadiano.jpg" width={616} height={640} alt="Ponto turístico no Canadá" className="h-full rounded-md mx-auto w-full" />
          </div>
          <div className="hub:w-1/2">
            <h2 className="text-4xl font-bold mb-4 hub:text-5xl"><Image src="/../etacanadiano.svg" width={300} height={107} alt="eTA Canadiano" /></h2>
            <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae nisi inventore aperiam iure dignissimos placeat culpa, quo ex esse accusantium, sapiente aut, nesciunt est?</p>
            <a href="https://etacanadiano.pt" className="px-6 py-2 bg-hub-blue rounded-sm text-white">Ir para o site</a>
          </div>
        </div>
      </section>

      <section className="py-20 px-3 hub:py-28">
        <div className="flex flex-col gap-10 hub:w-328 hub:flex-row hub:mx-auto hub:items-center hub:gap-20">
          <div className="hub:w-1/2">
            <h2 className="text-4xl font-bold mb-4 hub:text-5xl">eTA Nova Zelândia</h2>
            <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita recusandae nisi inventore aperiam iure dignissimos placeat culpa, quo ex esse accusantium, sapiente aut, nesciunt est?</p>
            <a href="https://etanz.com.br" className="px-6 py-2 bg-hub-blue rounded-sm text-white">Ir para o site</a>
          </div>
          <div className="hub:w-1/2">
            <Image src="/../nova-zelandia.jpg" width={616} height={640} alt="Ponto turístico no Candá" className="h-full rounded-md w-full" />
          </div>
        </div>
      </section>
    </main>
  )
}
