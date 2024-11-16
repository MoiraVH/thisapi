import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Multi API App',
  description: 'Aplicación con NASA, Maps y Pokemon APIs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between">
            <a href="/" className="text-white hover:text-gray-400">
              Home
            </a>
            <div className="space-x-4">
              <a href="/nasa" className="text-white hover:text-gray-400">
                NASA
              </a>
              <a href="/maps" className="text-white hover:text-gray-400">
                Maps
              </a>
              <a href="/pokemon" className="text-white hover:text-gray-400">
                Pokemon
              </a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  )
}