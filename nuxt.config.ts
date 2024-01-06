// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@hypernym/nuxt-anime",
    'vue3-carousel-nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ['~/assets/css/main.css'],
  target: 'static',
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  app: {
    head: {
      title: 'Forza Mods',
    },
  },
})