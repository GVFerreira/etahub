import Image from "next/image"
import {useTranslations} from 'next-intl'
import { Link } from "../../../navigation"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const t = useTranslations('Footer')

  return (
    <footer className="w-full bg-darkblue flex flex-col justify-center pt-20 pb-4">
      <div className="w-full mx-auto px-3 text-white hub:w-328 hub:px-0">
        <div className="mb-14 grid grid-cols-1 gap-x-40 gap-y-14 w-full md:grid-cols-3 md:gap-x-14 md:gap-y-10 hub:grid-cols-4">
          <div>
            <Image src="/../tagline_white.svg" width={200} height={22} alt="Logotipo eTA Hub" className="mb-8" />
            <p className="text-sm text-justify">{t('paragraph')}</p>
          </div>
          <div className="md:text-center">
            <h4 className="text-lg font-semibold mb-4">{t('nav.title')}</h4>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link href="/">{t('nav.inicio')}</Link>
                </li>
                <li>
                  <Link href="/sobre-nos">{t('nav.sobre')}</Link>
                </li>
                <li>
                  <Link href="/nosso-hub">{t('nav.hub')}</Link>
                </li>
                <li>
                  <Link href="/contato">{t('nav.contato')}</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="md:text-center">
            <h4 className="text-lg font-semibold mb-4">{t('hub')}</h4>
            <nav>
              <ul className="space-y-4">
                <li><a href="https://etacanadense.com.br">eTA Canadense</a></li>
                <li><a href="https://etacanadiano.pt">eTA Canadiano</a></li>
                <li><p className="cursor-not-allowed">eTA Nova Zelândia</p></li>
                <li><p className="cursor-not-allowed">eTA Reino Unido</p></li>
                <li><p className="cursor-not-allowed">eTIAS União Europeia</p></li>
              </ul>
            </nav>
          </div>
          <div>
            <Image src="/../cadastur.png" width={200} height={22} alt="Selo Cadastur" className="w-8/12 mx-auto" />
          </div>
        </div>
      </div>
      <hr className="border-t-zinc-700"/>
      <div className="w-full mx-auto flex flex-col justify-between pt-4 px-3 hub:w-328 hub:px-0 md:flex-row">
        <div className="mt-6 text-center text-zinc-400 text-xs hub:mt-0">
          <p className="mb-1">{t('company')} © {currentYear}.<span className="mb-1 text-zinc-200"> eTA Hub Negócios Digitais Ltda. CNPJ: 53.053.965/0001-09</span></p>
          <p className="mb-1">Av. Ipiranga, 40 – Sala 905 – bairro Praia de Belas - CEP 90.160-090 - Porto Alegre/RS</p>
        </div>
        <div className="flex justify-center items-center mt-6 text-center text-zinc-400 text-xs hub:mt-0">
          <p>
            <a href="https://instagram.com/eudevgustavo" className="transition-all duration-200 ease-in hover:text-lime-500">
            {t('developed')} <Image src="../gvf.svg" width={100} height={100} alt="GVF" className="inline h-3 w-auto"/>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
  }