import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'

// Can be imported from a shared config
const locales = ['en', 'pt-BR']

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as string)) notFound()

  return {
    messages: {
      ...(await import(`./messages/${locale}/resume.json`)).default,
      ...(await import(`./messages/${locale}/categorized-skills.json`)).default,
    },
  }
})
