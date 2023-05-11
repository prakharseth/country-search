import './globals.css'
import { Nunito_Sans } from 'next/font/google'

const nunito = Nunito_Sans({
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Country Search',
  description: 'Search Any Country',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
