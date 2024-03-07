import Image from "next/image";

export default function Footer() {
    return (
      <footer className="w-full bg-darkblue flex flex-col justify-center pt-20 pb-6">
        <div className="mx-auto w-328 text-white">
          <div className="mb-20 flex justify-between gap-10 w-full">
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
        <div className="mx-auto w-328 flex flex-row justify-between pt-8">
          <Image src="../tagline_white.svg" width={100} height={11} alt="Logotipo eTA Hub"/>
          <div>
            <span className="text-zinc-400">Todos os direitos reservados © 2024 eTA Hub. Desenvolvido por Dev Gustavo</span>
          </div>
        </div>
      </footer>
    )
  }