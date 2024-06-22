export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  imports: {
    autoImport: true,
  },
  ssr: true,
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@vite-pwa/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  css: ["~/assets/css/main.css", "@/assets/css/tailwind.css"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "TIPYTHON - TI-84 Scientific Calculator Python Applications",
      short_name: "TIPYTHON",
      description:
        "The largest collection of Python Applications for the TI-84 Plus CE Calculator. Open source, tested and verified, continuously growing.",
      theme_color: "#ffffff",
      icons: [
        {
          src: "/python-logo-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/python-logo-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/python-logo-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/tipthon\.com\/.*$/,
          handler: "NetworkFirst",
          options: {
            cacheName: "api-cache",
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 300,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  },
});
