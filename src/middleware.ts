import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'pt-BR'],
  defaultLocale: 'en',
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|pt-BR)/:path*', '/resume'],
}
