import i18n from './config/i18n.config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: i18n,
  
  typescript: {
        typeCheck: true,
        strict: true
    },

    experimental: {
        viewTransition: true,
        typedPages: true,
    },
})
