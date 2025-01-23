import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth/next'
import SessionProvider from '../components/SessionProvider'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
} 