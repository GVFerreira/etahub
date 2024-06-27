import type { Metadata } from "next"
import "./globals.css"

import Header from "./Components/Header"
import Footer from "./Components/Footer"
import SwitchLanguage from "./Components/SwitchLanguage"

import {NextIntlClientProvider} from 'next-intl'
import {getMessages} from 'next-intl/server'

import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: "eTA Hub",
  description: "O melhor hub de autorização de viagens",
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode,
  params: {locale: string}
}>) {
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className="relative flex flex-col min-h-screen">
        <Toaster position="top-center" reverseOrder={true} />
        <SwitchLanguage />
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
