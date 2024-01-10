// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@hypernym/nuxt-anime",
    'vue3-carousel-nuxt',
    '@nuxtjs/supabase',
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
  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    }
  },
  supabase: {
    redirect: false,
    redirectOptions: {
      login: '/login',
      callback: '/user/me',
    }
  }
})