import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Verde Dashboard',
  description: 'View your financial transactions and balance overview in one place.',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="View your financial transactions and balance overview in one place." />
        <title>Verde Dashboard</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} text-gray-900`}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout