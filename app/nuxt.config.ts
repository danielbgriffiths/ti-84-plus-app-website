export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@nuxt/image"],
  css: ["~/assets/css/tailwind.css"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});