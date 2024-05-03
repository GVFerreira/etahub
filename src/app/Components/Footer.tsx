'use client'

import Image from "next/image";

export default function Footer() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <footer className="w-full bg-darkblue flex flex-col justify-center pt-20 pb-6">
      <div className="w-full mx-auto px-3 text-white hub:w-328 hub:px-0">
        <div className="mb-20 flex flex-col justify-between gap-10 w-full hub:flex-row">
          <div>
            <h4 className="text-lg font-semibold mb-4">Navegue</h4>
            <ul>
              <li className="mb-4"><a href="/">Início</a></li>
              <li className="mb-4"><a href="/sobre-nos">Sobre nós</a></li>
              <li className="mb-4"><a href="/nosso-hub">Nosso hub</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">eTA Canadense</h4>
            <ul>
              <li className="mb-4"><a href="">Início</a></li>
              <li className="mb-4"><a href="">Solicitar autorização</a></li>
              <li><a href="">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">eTA Canadiano</h4>
            <ul>
              <li className="mb-4"><a href="">Início</a></li>
              <li className="mb-4"><a href="">Solicitar autorização</a></li>
              <li><a href="">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">eTA Canadiense</h4>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">eTA Nova Zelândia</h4>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">eTA Reino Unido</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full mx-auto h-auto flex flex-col justify-between pt-8 px-3 hub:w-328 hub:px-0 md:flex-row">
        <div className="flex items-center">
          <Image src="../tagline_white.svg" width={100} height={11} alt="Logotipo eTA Hub" className="mx-auto"/>
        </div>
        <div className="mt-6 text-center text-zinc-400 text-xs hub:mt-0">
          <p className="mb-1">Todos os direitos reservados © {currentYear}<span className="mb-1 text-zinc-200"> eTA Hub Negócios Digitais Ltda. CNPJ: 53.053.965/0001-09</span></p>
          <p className="mb-1">Av. Ipiranga, 40 – Sala 905 – bairro Praia de Belas - CEP 90.160-090 - Porto Alegre/RS</p>
        </div>
        <div className="flex justify-center items-center mt-6 text-center text-zinc-400 text-xs hub:mt-0">
          <p>
            <a href="https://instagram.com/eudevgustavo" className="transition-all duration-200 ease-in hover:text-lime-500">
            Desenvolvido por <Image src="../gvf.svg" width={100} height={100} alt="GVF" className="inline h-3 w-auto"/>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
  }