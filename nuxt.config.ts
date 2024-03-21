// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  css: [
    "@/styles/colors.scss",
    "@/styles/default.sass",
    "@/styles/raw-fonts.scss",
    "@/styles/typography.scss",
  ],
})
