import Image from "next/image";

export default function Header() {
    return (
      <header className="w-full bg-darkblue flex justify-center py-4">
        <div className="w-328 flex justify-between">
          <a href="/">
            <Image src="../tagline_white.svg" width={150} height={32} alt="Logotipo eTA Hub"/>
          </a>
          <nav className="flex items-center">
            <ul className="flex gap-8">
              <li><a href="/" className="text-white">Início</a></li>
              <li><a href="/sobre-nos" className="text-white">Sobre nós</a></li>
              <li><a href="/nosso-hub" className="text-white">Nosso hub</a></li>
              <li><a href="/contato" className="px-6 py-2 bg-white rounded-sm">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }