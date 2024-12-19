import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FashionMix',
  description: 'Your personal AI stylist',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

