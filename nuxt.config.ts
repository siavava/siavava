// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
  ],
  css: [
    "@/styles/colors.scss",
    "@/styles/default.sass",
    "@/styles/raw-fonts.scss",
    "@/styles/typography.scss",
  ],
  routeRules: {
    "/sitemap.xml": {
      prerender: true,
    }
  },
  app: {
    head: {
      title: "landing | alt.",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#0A0A0A" },
        { property: "og:type", content: "article" },
        { property: "og:site_name", content: "amittai landing" },
        { property: "og:locale", content: "en_US" },
        { name: "robots", content: "index, follow" },
      ],
      link: [
        { rel: "icon", type: "image/svg", href: "https://amittai.studio/favicon.svg" },
        {
          rel: "mask-icon",
          type: "image/svg",
          href: "https://amittai.studio/favicon.svg",
          color: "#f42e4f",
        },
        {
          rel: "apple-touch-icon",
          type: "image/svg",
          href: "https://amittai.studio/favicon.svg",
        },
      ],
    },
  },
})
