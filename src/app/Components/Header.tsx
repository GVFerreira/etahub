'use client'

import { List, X } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  let [open, setOpen] = useState(false)

  const Links = [
    { name: 'Início', link: "/"},
    { name: 'Sobre nós', link: "/sobre-nos"},
    { name: 'Nosso Hub', link: "/nosso-hub"}
  ]

  
  return (
    <header className='bg-darkblue shadow-sm shadow-slate-500 w-full'>
      <div className='flex items-center justify-between px-3 py-4 md:px-10 hub:w-328 hub:mx-auto hub:px-0'>
        <a href="/" className="w-auto">
          <Image src="../tagline_white.svg" width={150} height={32} alt="Logotipo eTA Hub" className="w-40 md:w-36"/>
        </a>

        <div onClick={()=>setOpen(!open)} className="cursor-pointer md:hidden text-white">
            {
                open ? <X className="size-8"/> : <List className="size-8"/>
            }
        </div>
        
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-darkblue md:bg-transparent md:z-auto z-10 left-0 w-full md:w-auto md:pl-0 pl-9 top-16 transition-all duration-500 ease-in ${open ? '' : 'opacity-0 md:opacity-100'}`}>
            {
                Links.map(({name, link}) => (
                <li className='md:ml-8 md:my-0 my-7 font-semibold' key={link}>
                    <a href={link} className='text-white uppercase hover:text-hub-blue duration-500'>{name}</a>
                </li>))
            }
            <a href="/contato" className='btn uppercase text-white md:text-black md:bg-white font-semibold md:px-3 md:py-1 rounded duration-500 md:static md:ml-8 hover:bg-zinc-200'>Contato</a>
        </ul>
      </div>
    </header>
  )
}