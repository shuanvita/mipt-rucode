import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title:
        'Всероссийский фестиваль по искусственному интеллекту и алгоритмическому программированию',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@pinia/nuxt',
    'nuxt-svgo',
    '@vueuse/nuxt',
  ],

  srcDir: './src',
  dir: {
    app: 'app/entrypoint',
    pages: 'app/routes',
    layouts: 'app/layouts',
  },

  components: [{ path: './shared/ui', prefix: 'ui', extensions: ['vue'] }],

  css: ['~/app/styles/main.css'],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },

  svgo: {
    defaultImport: 'component',
    componentPrefix: 'icon',
    autoImportPath: './shared/icons',
  },

  image: {
    format: ['avif', 'webp'],
  },
})
