'use client'

import Image from "next/image"
import { Link, usePathname, useRouter } from "@/navigation"

export default function SwitchLanguage() {
  const pathname = usePathname()
  return (
    <div className="fixed bottom-2 right-2 md:right-4 flex flex-row gap-4 bg-hub-blue p-2 rounded-lg z-50 shadow-md border border-white/25">
      <Link href={pathname} locale="pt">
        <Image src="../brasil.svg" width={30} height={30} alt="Portguês" className="rounded-sm size-[30px]"/>
      </Link>
      <Link href={pathname} locale="en">
        <Image src="../united-states.svg" width={30} height={30} alt="Inglês" className="rounded-sm size-[30px]"/>
      </Link>
    </div>
  )
}