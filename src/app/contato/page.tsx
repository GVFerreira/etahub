import { Envelope, PaperPlaneTilt, User } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import ContactForm from "./_components/ContactForm";

export default function Contact() {
  return (
    <main style={{flex: "1 1 0"}}>
      <section className="bg-contato bg-cover bg-center bg-no-repeat py-16 px-3 hub:py-40 hub:px-0">
        <div className="text-white text-center hub:w-328 hub:px-72 hub:mx-auto">
          <h1 className="text-5xl mb-6 font-bold sm:text-h1">Contato</h1>
        </div>
      </section>
      <section className="py-16 px-3 hub:py-40 hub:px-0 md:flex md:flex-col md:gap-20">
        <div className="hub:w-328 hub:mx-auto hub:flex hub:flex-row hub:gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-4 hub:text-5xl">Entre em contato conosco.</h2>
            <p>Caso tenha dúvidas, sugestões ou reclamações, preencha o formulário abaixo.</p>
            <ContactForm />
          </div>
          <div>
            <Image src="/../contact-form.jpg" width={616} height={679} alt="Homem andando com uma mala de mão no aeroporto" className="hidden rounded-md transition-all duration-200 ease-in shadow-md hover:shadow-lg md:block md:w-full" />
          </div>
        </div>
      </section>
    </main>
  )
}
