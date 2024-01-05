import config from '~/assets/config.json';

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      cfg: () => config,
    }
  }
})