import type { Metadata } from 'next'
import '@/styles/globals.scss'
import SiteHeader from '@/components/organisms/SiteHeader'
import { LenisProvider } from '@/components/providers/LenisProvider'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Aquest test',
  description: 'Aquest test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <LenisProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
        </LenisProvider>
      </body>
    </html>
  )
}
