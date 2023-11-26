import { absoluteUrl } from '@/lib/utils'
import '../styles/index.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
   metadataBase: new URL('https://localhost:3000'),
   title: {
      default: 'Outstatic',
      template: '%s | Outstatic',
   },
   description: 'Blog.',
   openGraph: {
      title: 'Blog',
      description: 'Blog.',
      url: absoluteUrl('/'),
      siteName: 'Blog',
      images: [
         {
            url: absoluteUrl('/images/og-image.png'),
            width: 1800,
            height: 1600,
         },
      ],
      locale: 'pt_BR',
      type: 'website',
   },
   icons: {
      icon: [{ url: '/favicon/favicon-32x32.png' }],
      apple: [{ url: '/favicon/apple-touch-icon.png' }],
   },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="pt-BR">
         <body>{children}</body>
      </html>
   )
}
