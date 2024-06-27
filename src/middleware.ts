import createMiddleware from 'next-intl/middleware'
import {locales, pathnames} from './config'
 
export default createMiddleware({
  locales,
  pathnames,
  defaultLocale: 'pt'
})
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|en)/:path*']
}