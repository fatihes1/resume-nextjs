import './globals.css'
import 'animate.css'
import type { Metadata } from 'next'
import { Inter, Quicksand } from 'next/font/google'
import Navbar from './components/Navbar'
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fatih Es',
  description: 'Fatih Es is a software engineer based in Ankara, Turkey.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className={quicksand.className}>
        <Navbar />
        {children}</body>
    </html>
  )
}
