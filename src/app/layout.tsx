import enResume from '@/data/resume-en.json'
import '@/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: enResume['basics']['name'],
  description: enResume['basics']['label'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={'font-["Arial"] antialiased'}>{children}</body>
    </html>
  )
}
