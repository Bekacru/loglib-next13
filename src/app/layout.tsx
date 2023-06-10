import './globals.css'
import { Inter } from 'next/font/google'
import Loglib from '@loglib/tracker/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Loglib />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
