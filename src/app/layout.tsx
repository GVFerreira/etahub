import type { Metadata } from "next"
import "./globals.css"
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "eTA Hub",
  description: "O melhor hub de autorização de viagens",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
