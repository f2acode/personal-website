import '@/styles/custom.css'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider, useMessages } from 'next-intl'
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
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body className={'font-["Arial"] antialiased'}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
