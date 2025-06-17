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

  head: [
    [ "link", { rel: "preconnect", href: "https://fonts.googleapis.com" } ],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Noto+Sans+SC:wght@100..900&display=swap",
        rel: "stylesheet",
      },
    ],
  ] // 
  // Enable it with pwa
  // shouldPrefetch: false,
});
