import { hopeTheme } from "vuepress-theme-hope";
// const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
import { musicBarPlugin } from "vuepress-plugin-music-bar"
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://makabaka1880.github.io",

  author: {
    name: "Makabaka1880",
    url: "https://makabaka1880.xyz",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/static/Avatar.png",

  repo: "makabaka1880/makabaka1880",

  docsDir: "src",

  blog: {
    medias: {
      BiliBili: "https://bilibili.com/makabaka1880",
      Discord: "https://discord.gg/MJV3cW9G8H",
      GitHub: "https://github.com/makabaka1880",
      Email: "mailto:makabaka1880@outlook.com",
      Wechat: "assets/WeChat.JPG",
      Youtube: "https://www.youtube.com/@XXXMakabaka1880",
      Zhihu: "https://www.zhihu.com/people/makabaka1880"
    },
  },
  encrypt: {
    config: {
    // This will encrypt the entire guide directory, and both passwords are available
      "/School-2024": ["HBBSS-24", "ln1880"],
      "/School-2024/Chinese": "Chi-24",
      "/School-2024/Physics": "Phy-24"
    }
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/en/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "",

      displayFooter: true,

      blog: {
        description: "Makabaka's Blog",
        intro: "/en/",
      },
    },
  },

  // enable it to preview all changes in time
  hotReload: true,

  // These features are enabled for demo, only preserve features you need here
  markdown: {
    revealjs: {
      plugins: ["math"]
    },
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // uncomment these if you need TeX support
    math: {
      // install katex before enabling it
      type: "katex"
    },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    flowchart: true,

    // install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  plugins: {
    blog: true,
    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    comment: {
      provider: "Waline",
      serverURL: "https://comments-frontend.makabaka1880.xyz/",
    },
    components: {
      components: ["Badge", "VPCard"],
    },
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
