import { defineUserConfig } from "vuepress";
import theme from "./theme.js";


export default defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Makabaka1880的博客",
      description: "Makabaka1880的博客",
    },
    "/en/": {
      lang: "en-US",
      title: "Makabaka1880's Blog",
      description: "Makabaka1880's Blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
