import '@/styles/custom.css'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import 'node_modules/flag-icons/css/flag-icons.min.css'

export const metadata: Metadata = {
  title: 'Felipe Augusto de Almeida',
  description:
    'Squad Lead | Tech Lead | Software Engineer | Python | Flutter | JavaScript | Impacting lives through technology',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale}>
      <body className={'font-["Arial"] antialiased'}>{children}</body>
    </html>
  )
}
