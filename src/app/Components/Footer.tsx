'use client'

import Image from "next/image"

export default function Footer() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <footer className="w-full bg-darkblue flex flex-col justify-center pt-20 pb-4">
      <div className="w-full mx-auto px-3 text-white hub:w-328 hub:px-0">
        <div className="mb-14 grid grid-cols-4 space-x-40 w-full hub:flex-row">
          <div>
            <Image src="/../tagline_white.svg" width={200} height={22} alt="Logotipo eTA Hub" className="mb-8" />
            <p className="text-sm text-justify">A eTA Hub foi pensada para facilitar as suas viagens internacionais, empregando uma equipe dedicada, que se esforça para tornar o processo de obtenção de autorizações eletrônicas de viagem (eTAs) o mais simples e tranquilo possível para os nossos clientes.</p>
          </div>
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
            <h4 className="text-lg font-semibold mb-4">Nosso Hub</h4>
            <ul>
              <li className="mb-4"><a href="https://etacanadense.com.br">eTA Canadense</a></li>
              <li className="mb-4"><a href="https://etacanadiano.pt">eTA Canadiano</a></li>
              <li className="mb-4"><a href="" className="cursor-not-allowed">eTA Nova Zelândia</a></li>
              <li className="mb-4"><a href="" className="cursor-not-allowed">eTA Reino Unido</a></li>
              <li><a href="" className="cursor-not-allowed">eTIAS União Europeia</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Selo Cadastur</h4>
            <Image src="/../cadastur.png" width={200} height={22} alt="Selo Cadastur" className="w-full mb-8" />
          </div>
        </div>
      </div>
      <hr className="border-t-zinc-700"/>
      <div className="w-full mx-auto flex flex-col justify-between pt-4 px-3 hub:w-328 hub:px-0 md:flex-row">
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