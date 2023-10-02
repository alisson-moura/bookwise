import '../../app/globals.css'
import SideMenu from '@/components/side-menu'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookWise',
  description: 'Plataforma para leitores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SideMenu />
        {children}
      </body>
    </html>
  )
}
