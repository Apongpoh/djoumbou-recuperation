import { i18n } from '../../i18n-config'
import { Metadata } from 'next'
import './globals.css'
import { Providers } from './components/providers'


export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  icons: {
    icon: {url: '/public/DjoumbouRecuperationLogo.ico'}
  },
  title: 'Djoumbou Recuperation',
  description: 'Achat et Vente de Fers et Métaux',
}
