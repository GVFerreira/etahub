import { Envelope, PaperPlaneTilt, User } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Contact() {
  return (
    <main style={{flex: "1 1 0"}}>
      <section className="bg-contato bg-cover bg-center bg-no-repeat py-20 px-3 hub:py-40 hub:px-0">
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 font-bold sm:text-h1">Contato</h1>
        </div>
      </section>
      <section className="py-20 px-3 hub:py-40 hub:px-0 md:flex md:flex-col md:gap-20">
        <div className="hub:w-328 hub:mx-auto hub:flex hub:flex-row hub:gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-4 hub:text-5xl">Entre em contato conosco.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos placeat officia incidunt.</p>
            <form action="/contato" method="POST">
              <div className="relative my-4">
                <input type="text" id="nome" name="nome" className="py-3 px-4 ps-11 block w-full border border-gray-500 shadow-sm rounded-md text-sm text-gray-500 md:w-2/3 disabled:opacity-50 disabled:pointer-events-none " placeholder="Ex: João Silva" />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <User className="flex-shrink-0 size-5 text-gray-500"/>
                </div>
              </div>

              <div className="relative my-4">
                <input type="email" id="email" name="email" className="py-3 px-4 ps-11 block w-full border border-gray-500 shadow-sm rounded-md text-sm text-gray-500 md:w-2/3 disabled:opacity-50 disabled:pointer-events-none " placeholder="seunome@seuemail.com" />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <Envelope className="flex-shrink-0 size-5 text-gray-500"/>
                </div>
              </div>

              <textarea className="py-3 px-4 block w-full border border-gray-500 rounded-lg text-sm md:w-2/3 disabled:opacity-50 disabled:pointer-events-none" placeholder="Digite a sua mensagem..." />

              <div className="relative my-4">
                <input type="submit" className="py-3 px-4 ps-11 block shadow-sm rounded-md text-sm text-white bg-hub-blue disabled:opacity-50 disabled:pointer-events-none " placeholder="seunome@seuemail.com" />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                  <PaperPlaneTilt className="flex-shrink-0 size-5 text-white"/>
                </div>
              </div>
            </form>
          </div>
          <div>
            <Image src="/../contact-form.jpg" width={616} height={679} alt="Homem andando com uma mala de mão no aeroporto" className="hidden rounded-sm md:block md:w-full" />
          </div>
        </div>
      </section>
    </main>
  )
}
