import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  css: ["~/assets/css/tailwind.css"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
