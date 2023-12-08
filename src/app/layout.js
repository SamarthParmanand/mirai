import './globals.css'
import NavBar from '@/components/NavBar'

export const metadata = {
  title: 'Mirai Design Studio',
  description: 'Where Design Becomes Destiny',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-seasons`} suppressHydrationWarning={true}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}