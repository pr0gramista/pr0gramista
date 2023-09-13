import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Fira_Sans, Roboto_Mono } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-fira',
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto-mono',
})

export const metadata: Metadata = {
  title: 'pr0gramista',
  description: 'Bartosz Wiśniewski',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${robotoMono.variable} ${firaSans.variable} font-sans`}>
        <Navbar />
        <Layout>{children}</Layout>
        <Footer />
      </body>
    </html>
  )
}
