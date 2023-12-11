import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Components/Header/Header'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={[inter.className, 'min-h-screen bg-gradient-main dark:bg-dark-gradient-main'].join(' ')}>
          <Header />
          <main>
            <div>
              {children}
            </div>
          </main>
          <footer></footer>
        </body>
      </html>
    </Providers>
  )
}
