import { Crosshair, Eye, SketchLogo } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <main style={{flex: "1 1 0"}}>
      <section className="bg-about-us-main bg-cover bg-center bg-no-repeat py-20 px-3 hub:py-40 hub:px-0">
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 sm:text-h1 font-bold">Quem somos?</h1>
          <p className="text-lg">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem, labore incidunt. Voluptas explicabo nisi culpa officia velit quam, cumque tenetur, laboriosam eligendi, sed repellat iure.</p>
        </div>
      </section>

      <section className="bg-hub-blue text-white py-20 px-3 hub:py-28">
        <div className="hub:w-328 hub:mx-auto hub:flex">
          <div className="hub:w-1/2">
            <span className="font-bold">Sobre nós</span>
            <h2 className="text-4xl font-bold mb-20 hub:text-5xl">Como surgiu o eTa Hub.</h2>
          </div>
          <div className="hub:w-1/2">
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad eligendi, repellendus ipsa inventore dolorum voluptatum modi ex cum repudiandae, molestias enim eaque. Maxime ex explicabo veniam rem ipsum, eum doloribus sint tempora! Fuga suscipit fugiat eum ad maiores maxime accusantium quisquam repellendus labore nostrum ab accusamus corporis nesciunt tenetur ratione minus aut dolor hic quasi, neque quibusdam esse? Hic.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ad eligendi, repellendus ipsa inventore dolorum voluptatum modi ex cum repudiandae, molestias enim eaque. Maxime ex explicabo veniam rem ipsum, eum doloribus sint tempora! Fuga suscipit fugiat eum ad maiores maxime accusantium quisquam repellendus labore nostrum ab accusamus corporis nesciunt tenetur ratione minus aut dolor hic quasi, neque quibusdam esse? Hic.</p>
          </div>
        </div>
      </section>

      <section className="w-full h-80 bg-about-us bg-cover bg-center bg-no-repeat" />
      
      <section className="py-20 px-3 hub:py-28">
        <div className="hub:w-328 hub:mx-auto">
          <div className="mb-10">
            <span className="font-bold">Nosso core</span>
            <h2 className="text-4xl font-bold my-4 hub:text-5xl">O que é importante para nós.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda debitis velit cumque rerum fugiat est!</p>
          </div>
          <div className="w-full hub:flex hub:gap-12">
            <div className="my-10">
              <Crosshair width={40} height={40} />
              <h3 className="text-2xl font-bold my-4">Missão</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsum recusandae ducimus natus pariatur dolorem earum deleniti voluptates sapiente assumenda architecto ea minus, praesentium ratione.</p>
            </div>
            <div className="my-10">
              <Eye width={40} height={40} />
              <h3 className="text-2xl font-bold my-4">Visão</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsum recusandae ducimus natus pariatur dolorem earum deleniti voluptates sapiente assumenda architecto ea minus, praesentium ratione.</p>
            </div>
            <div className="my-10"
            >
              <SketchLogo width={40} height={40} />
              <h3 className="text-2xl font-bold my-4">Valores</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ipsum recusandae ducimus natus pariatur dolorem earum deleniti voluptates sapiente assumenda architecto ea minus, praesentium ratione.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-hub-blue text-white text-center hub:py-28">
        <h2 className="text-4xl font-bold mt-4 mb-6 hub:text-5xl">Conheça os nosso hub de sites.</h2>
        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <a href="/nosso-hub" className="px-6 py-2 bg-white rounded-sm"><span className="leading-8 text-darkblue">Ver sites</span></a>
      </section>
    </main>
  )
}
