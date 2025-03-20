// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  app: {
    baseURL: "/gcc-official/",
    buildAssetsDir: "assets",
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
