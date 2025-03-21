import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://makabaka1880.github.io",

  author: {
    name: "Makabaka1880",
    url: "https://makabaka1880.xyz",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/static/Avatar.webp",

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
      Zhihu: "https://www.zhihu.com/people/makabaka1880",
    },
  },

  encrypt: {
    config: {
      "/School-2024": ["HBBSS-24", "ln1880"],
      "/School-2024/Chinese": "Chi-24",
      "/School-2024/Physics": "Phy-24",
    },
  },

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: "",
      displayFooter: true,
      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },
    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "",
      displayFooter: true,
      blog: {
        description: "Makabaka's Blog",
        intro: "/en/",
      },
    },
  },

  hotReload: true,

  markdown: {
    revealjs: {
      plugins: ["math"],
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
          if (tag === "em") {
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
          }
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
    math: {
      type: "katex",
    },
    flowchart: true,
    mermaid: true,
  },

  plugins: {
    blog: true,
    comment: {
      provider: "Waline",
      serverURL: "https://comments-frontend.makabaka1880.xyz/",
    },
    components: {
      components: ["Badge", "VPCard"],
    }
  },
});
