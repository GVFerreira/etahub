import { Pathnames } from "next-intl/routing"

export const locales = ['pt', 'en'] as const

export const pathnames = {
  '/': '/',
  '/sobre-nos': {
    en: '/about',
    pt: '/sobre-nos'
  },
  '/nosso-hub': {
    en: '/our-hub',
    pt: '/nosso-hub'
  },
  '/contato': {
    en: '/contact',
    pt: '/contato'
  }
} satisfies Pathnames<typeof locales>