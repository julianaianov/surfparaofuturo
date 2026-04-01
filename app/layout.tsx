import type { Metadata, Viewport } from 'next'
import { Outfit, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: '--font-outfit'
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Surf para o Futuro | Projeto Social - Recreio, RJ',
  description: 'Projeto social que utiliza o surf como ferramenta de transformação social para crianças e adolescentes de 8 a 17 anos da comunidade do Terreirão e arredores, no Recreio dos Bandeirantes, Rio de Janeiro.',
  keywords: ['surf', 'projeto social', 'terreirão', 'recreio', 'rio de janeiro', 'transformação social', 'inclusão', 'crianças', 'adolescentes'],
  openGraph: {
    title: 'Surf para o Futuro | Projeto Social',
    description: 'Transformando vidas através do surf — Projeto social para crianças e adolescentes do Terreirão, Recreio/RJ',
    locale: 'pt_BR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0087E0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${outfit.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
