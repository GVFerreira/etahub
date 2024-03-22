import Image from "next/image";

export default function Footer() {
    return (
      <footer className="w-full bg-darkblue flex flex-col justify-center pt-20 pb-6">
        <div className="w-full mx-auto px-3 text-white hub:w-328 hub:px-0">
          <div className="mb-20 flex flex-col justify-between gap-10 w-full hub:flex-row">
            <div>
              <h4 className="text-lg font-semibold mb-4">Navegue</h4>
              <ul>
                <li className="mb-4"><a href="">Início</a></li>
                <li className="mb-4"><a href="">Sobre nós</a></li>
                <li className="mb-4"><a href="">Nosso hub</a></li>
                <li><a href="">Contato</a></li>
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
          <Image src="../tagline_white.svg" width={100} height={11} alt="Logotipo eTA Hub"/>
          <div className="mt-6 hub:mt-0">
            <span className="text-zinc-400 text-xs ">Todos os direitos reservados © 2024 eTA Hub. Desenvolvido por Dev Gustavo</span>
          </div>
        </div>
      </footer>
    )
  }