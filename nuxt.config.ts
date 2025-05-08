// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  app: {
    buildAssetsDir: "assets",
    head: {
      title: "古德文創",
    },
  },
  nitro: {
    output: {
      publicDir: "dist",
    },
  },
  ssr: false,
  icon: {
    customCollections: [
      {
        prefix: "gcc",
        dir: "./assets/icons",
      },
    ],
  },
});
