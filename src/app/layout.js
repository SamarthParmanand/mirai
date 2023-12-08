import './globals.css'
import NavBar from '@/components/NavBar'
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <SpeedInsights />
      </body>
    </html>
  )
}