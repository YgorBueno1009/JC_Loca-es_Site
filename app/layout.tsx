import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'JC Locações de Munck e Transportes | Iturama-MG',
  description:
    'Locação de munck, transporte de cargas pesadas e produtos perigosos, pá carregadeira e perfuração de solo em Iturama-MG e região. Força e precisão para o seu trabalho pesado.',
  generator: 'v0.app',
  keywords: [
    'munck Iturama',
    'locação de munck',
    'transporte de cargas pesadas',
    'içamento',
    'pá carregadeira Iturama',
    'perfuração de solo',
  ],
  openGraph: {
    title: 'JC Locações de Munck e Transportes',
    description:
      'Força e precisão para o seu trabalho pesado. Iturama-MG e região.',
    locale: 'pt_BR',
    type: 'website',
    images: ['/images/hero-poster.png'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1b1c1f',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`bg-background ${inter.variable} ${oswald.variable}`}
    >
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
