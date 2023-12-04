import { Inter } from 'next/font/google'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })
const josefin = Josefin_Sans({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Mirai Design Studio',
  description: 'Where Design Becomes Destiny',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
