// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  {
    text: "Blogs",
    icon: "pen-to-square",
    prefix: "/en/",
    children: [
      {
        text: "Computer Science",
        prefix: "CS/",
        children: [
          { text: "UAV Structure", icon: "pen-to-square", link: "UAV" },
          { text: "Numerical Simulations in Blender", icon: "pen-to-square", link: "BlenderSims" }
        ]
      },
      {
        text: "Mathematics",
        prefix: "Math/",
        children: [
          { text: "Game Theory", icon: "pen-to-square", link: "GameTheory" }
        ]
      }
    ]
  }
]);

// src/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  {
    text: "\u535A\u6587",
    icon: "pen-to-square",
    prefix: "/",
    children: [
      {
        text: "\u8BA1\u7B97\u673A\u79D1\u5B66",
        icon: "laptop-code",
        prefix: "CS/",
        children: [
          { text: "UAV\u7ED3\u6784", icon: "pen-to-square", link: "UAV" },
          { text: "Blender\u4EFF\u771F\u5B66", icon: "pen-to-square", link: "BlenderSim" },
          { text: "\u7B97\u6CD5", icon: "pen-to-square", link: "Algorithms" },
          { text: "\u6298\u817ECASIO fx991-cn", icon: "pen-to-square", link: "Casio" },
          { text: "\u624B\u6413\u6E32\u67D3\u5668", icon: "pen-to-square", link: "CG" }
        ]
      },
      {
        text: "\u5FC3\u7406\u5B66",
        icon: "heart",
        prefix: "Pyschology/",
        children: [
          { text: "DSM-5\u53C2\u8003", icon: "pen-to-square", link: "DSM-5" },
          { text: "\u7CBE\u795E\u5206\u6790\u5B66\u7B14\u8BB0", icon: "pen-to-square", link: "Psych" }
        ]
      },
      {
        text: "\u6570\u5B66",
        icon: "square-root-variable",
        prefix: "Math/",
        children: [
          { text: "\u535A\u5F08\u8BBA\u7B14\u8BB0", icon: "pen-to-square", link: "GameTheory" }
        ]
      },
      {
        text: "\u79D1\u5B66",
        icon: "microscope",
        prefix: "Science/",
        children: [
          { text: "\u8111\u79D1\u5B66", icon: "pen-to-square", link: "BrainBee/" },
          { text: "BrainBee \u771F\u9898", icon: "pen-to-square", link: "BrainBee/Quiz-BB" }
        ]
      },
      {
        text: "\u6742\u8C08",
        icon: "pen-to-square",
        prefix: "Miscellaneous/",
        children: [
          {
            text: "\u4E66\u5355",
            icon: "pen-to-square",
            link: "BookList"
          },
          {
            text: "\u90E8\u7F72\u7EBF\u4E0AKeynote",
            icon: "pen-to-square",
            link: "Keynote-deploy"
          },
          {
            text: "Public Forum Debate \u7B14\u8BB0",
            icon: "pen-to-square",
            link: "Debate"
          }
        ]
      }
    ]
  }
]);

// src/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/en": [
    {
      text: "Computer Science",
      icon: "laptop-code",
      prefix: "/",
      link: "CS/"
    },
    {
      text: "Mathematics",
      icon: "square-root-variable",
      prefix: "/",
      link: "Math/"
    }
  ]
});

// src/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/": [
    {
      text: "\u8BA1\u7B97\u673A\u79D1\u5B66",
      icon: "laptop-code",
      prefix: "/",
      link: "CS/"
    },
    {
      text: "\u5FC3\u7406\u5B66",
      icon: "heart",
      prefix: "/",
      link: "Psychology/"
    },
    {
      text: "\u6570\u5B66",
      icon: "square-root-variable",
      prefix: "/",
      link: "Math/"
    },
    {
      text: "\u6742\u8C08",
      icon: "pen",
      prefix: "/",
      link: "Miscellaneous/"
    }
  ]
});

// src/.vuepress/theme.ts
var theme_default = hopeTheme({
  hostname: "https://makabaka1880.github.io",
  author: {
    name: "Makabaka1880",
    url: "https://makabaka1880.xyz"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/static/Avatar.webp",
  repo: "makabaka1880/makabaka1880",
  docsDir: "src",
  blog: {
    medias: {
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press"
      }
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
        editLink: "Edit this page on GitHub"
      }
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
        intro: "/en/"
      }
    }
  },
  // enable it to preview all changes in time
  hotReload: true,
  // These features are enabled for demo, only preserve features you need here
  markdown: {
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
              content: "Recommended"
            };
        }
      }
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
    }
    // install chart.js before enabling it
    // chartjs: true,
    // install echarts before enabling it
    // echarts: true,
    // install flowchart.ts before enabling it
    // flowchart: true,
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
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    components: {
      components: ["Badge", "VPCard"]
    }
    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.webp",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.webp",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.webp",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.webp",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.webp",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.webp",
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
    //             src: "/assets/icon/guide-maskable.webp",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "\u535A\u5BA2",
      description: "Makabaka1880\u7684\u535A\u5BA2"
    },
    "/en/": {
      lang: "en-US",
      title: "Blog",
      description: "Makabaka1880's Blog"
    }
  },
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci96aC50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHMiLCAic3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL21ha2FiYWthMTg4MC9ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tYWthYmFrYTE4ODAvYmxvZy9zcmMvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvbWFrYWJha2ExODgwL2Jsb2cvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5cbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcbiAgYmFzZTogXCIvXCIsXG5cbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICBsYW5nOiBcInpoLUNOXCIsXG4gICAgICB0aXRsZTogXCJcdTUzNUFcdTVCQTJcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1ha2FiYWthMTg4MFx1NzY4NFx1NTM1QVx1NUJBMlwiLFxuICAgIH0sXG4gICAgXCIvZW4vXCI6IHtcbiAgICAgIGxhbmc6IFwiZW4tVVNcIixcbiAgICAgIHRpdGxlOiBcIkJsb2dcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk1ha2FiYWthMTg4MCdzIEJsb2dcIixcbiAgICB9LFxuICB9LFxuXG4gIHRoZW1lLFxuXG4gIC8vIEVuYWJsZSBpdCB3aXRoIHB3YVxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL21ha2FiYWthMTg4MC9ibG9nL3NyYy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9tYWthYmFrYTE4ODAvYmxvZy9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYWthYmFrYTE4ODAvYmxvZy9zcmMvLnZ1ZXByZXNzL3RoZW1lLnRzXCI7aW1wb3J0IHsgaG9wZVRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuaW1wb3J0IHsgZW5OYXZiYXIsIHpoTmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBlblNpZGViYXIsIHpoU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIvaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9tYWthYmFrYTE4ODAuZ2l0aHViLmlvXCIsXG5cbiAgYXV0aG9yOiB7XG4gICAgbmFtZTogXCJNYWthYmFrYTE4ODBcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly9tYWthYmFrYTE4ODAueHl6XCIsXG4gIH0sXG5cbiAgaWNvbkFzc2V0czogXCJmb250YXdlc29tZS13aXRoLWJyYW5kc1wiLFxuXG4gIGxvZ286IFwiL3N0YXRpYy9BdmF0YXIucG5nXCIsXG5cbiAgcmVwbzogXCJtYWthYmFrYTE4ODAvbWFrYWJha2ExODgwXCIsXG5cbiAgZG9jc0RpcjogXCJzcmNcIixcblxuICBibG9nOiB7XG4gICAgbWVkaWFzOiB7XG4gICAgICBCaWxpQmlsaTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBCaXRidWNrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRGluZ2Rpbmc6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRGlzY29yZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBEcmliYmJsZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBFbWFpbDogXCJtYWlsdG86aW5mb0BleGFtcGxlLmNvbVwiLFxuICAgICAgRXZlcm5vdGU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRmFjZWJvb2s6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgRmxpcGJvYXJkOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEdpdGVlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEdpdEh1YjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHaXRsYWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR21haWw6IFwibWFpbHRvOmluZm9AZXhhbXBsZS5jb21cIixcbiAgICAgIEluc3RhZ3JhbTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBMYXJrOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIExpbmVzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIExpbmtlZGluOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFBpbnRlcmVzdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBQb2NrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUVE6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUXpvbmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUmVkZGl0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFJzczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBTdGVhbTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBUd2l0dGVyOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFdlY2hhdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBXZWlibzogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBXaGF0c2FwcDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBZb3V0dWJlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFpoaWh1OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIFZ1ZVByZXNzVGhlbWVIb3BlOiB7XG4gICAgICAgIGljb246IFwiaHR0cHM6Ly90aGVtZS1ob3BlLWFzc2V0cy52dWVqcy5wcmVzcy9sb2dvLnN2Z1wiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzc1wiLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGxvY2FsZXM6IHtcbiAgICBcIi9cIjoge1xuICAgICAgLy8gbmF2YmFyXG4gICAgICBuYXZiYXI6IHpoTmF2YmFyLFxuXG4gICAgICAvLyBzaWRlYmFyXG4gICAgICBzaWRlYmFyOiB6aFNpZGViYXIsXG5cbiAgICAgIGZvb3RlcjogXCJcIixcblxuICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAgICAgbWV0YUxvY2FsZXM6IHtcbiAgICAgICAgZWRpdExpbms6IFwiRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViXCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCIvZW4vXCI6IHtcbiAgICAgIC8vIG5hdmJhclxuICAgICAgbmF2YmFyOiBlbk5hdmJhcixcblxuICAgICAgLy8gc2lkZWJhclxuICAgICAgc2lkZWJhcjogZW5TaWRlYmFyLFxuXG4gICAgICBmb290ZXI6IFwiXCIsXG5cbiAgICAgIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgICAgIGJsb2c6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWFrYWJha2EncyBCbG9nXCIsXG4gICAgICAgIGludHJvOiBcIi9lbi9cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICAvLyBlbmFibGUgaXQgdG8gcHJldmlldyBhbGwgY2hhbmdlcyBpbiB0aW1lXG4gIGhvdFJlbG9hZDogdHJ1ZSxcblxuICAvLyBUaGVzZSBmZWF0dXJlcyBhcmUgZW5hYmxlZCBmb3IgZGVtbywgb25seSBwcmVzZXJ2ZSBmZWF0dXJlcyB5b3UgbmVlZCBoZXJlXG4gIG1hcmtkb3duOiB7XG4gICAgYWxpZ246IHRydWUsXG4gICAgYXR0cnM6IHRydWUsXG4gICAgY29kZVRhYnM6IHRydWUsXG4gICAgY29tcG9uZW50OiB0cnVlLFxuICAgIGRlbW86IHRydWUsXG4gICAgZmlndXJlOiB0cnVlLFxuICAgIGdmbTogdHJ1ZSxcbiAgICBpbWdMYXp5bG9hZDogdHJ1ZSxcbiAgICBpbWdTaXplOiB0cnVlLFxuICAgIGluY2x1ZGU6IHRydWUsXG4gICAgbWFyazogdHJ1ZSxcbiAgICBwbGFudHVtbDogdHJ1ZSxcbiAgICBzcG9pbGVyOiB0cnVlLFxuICAgIHN0eWxpemU6IFtcbiAgICAgIHtcbiAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcbiAgICAgICAgICBpZiAodGFnID09PSBcImVtXCIpXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB0YWc6IFwiQmFkZ2VcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0aXBcIiB9LFxuICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIHN1YjogdHJ1ZSxcbiAgICBzdXA6IHRydWUsXG4gICAgdGFiczogdHJ1ZSxcbiAgICB0YXNrbGlzdDogdHJ1ZSxcbiAgICB2UHJlOiB0cnVlLFxuXG4gICAgLy8gdW5jb21tZW50IHRoZXNlIGlmIHlvdSBuZWVkIFRlWCBzdXBwb3J0XG4gICAgbWF0aDoge1xuICAgICAgLy8gaW5zdGFsbCBrYXRleCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIHR5cGU6IFwia2F0ZXhcIlxuICAgIH0sXG5cbiAgICAvLyBpbnN0YWxsIGNoYXJ0LmpzIGJlZm9yZSBlbmFibGluZyBpdFxuICAgIC8vIGNoYXJ0anM6IHRydWUsXG5cbiAgICAvLyBpbnN0YWxsIGVjaGFydHMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgLy8gZWNoYXJ0czogdHJ1ZSxcblxuICAgIC8vIGluc3RhbGwgZmxvd2NoYXJ0LnRzIGJlZm9yZSBlbmFibGluZyBpdFxuICAgIC8vIGZsb3djaGFydDogdHJ1ZSxcblxuICAgIC8vIGluc3RhbGwgbWVybWFpZCBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAvLyBtZXJtYWlkOiB0cnVlLFxuXG4gICAgLy8gcGxheWdyb3VuZDoge1xuICAgIC8vICAgcHJlc2V0czogW1widHNcIiwgXCJ2dWVcIl0sXG4gICAgLy8gfSxcblxuICAgIC8vIGluc3RhbGwgQHZ1ZS9yZXBsIGJlZm9yZSBlbmFibGluZyBpdFxuICAgIC8vIHZ1ZVBsYXlncm91bmQ6IHRydWUsXG5cbiAgICAvLyBpbnN0YWxsIHNhbmRwYWNrLXZ1ZTMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgLy8gc2FuZHBhY2s6IHRydWUsXG5cbiAgICAvLyBpbnN0YWxsIEB2dWVwcmVzcy9wbHVnaW4tcmV2ZWFsanMgYW5kIHVuY29tbWVudCB0aGVzZSBpZiB5b3UgbmVlZCBzbGlkZXNcbiAgICAvLyByZXZlYWxqczoge1xuICAgIC8vICAgcGx1Z2luczogW1wiaGlnaGxpZ2h0XCIsIFwibWF0aFwiLCBcInNlYXJjaFwiLCBcIm5vdGVzXCIsIFwiem9vbVwiXSxcbiAgICAvLyB9LFxuICB9LFxuXG4gIHBsdWdpbnM6IHtcbiAgICBibG9nOiB0cnVlLFxuICAgIC8vIEluc3RhbGwgQHdhbGluZS9jbGllbnQgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgLy8gTm90ZTogVGhpcyBpcyBmb3IgdGVzdGluZyBPTkxZIVxuICAgIC8vIFlvdSBNVVNUIGdlbmVyYXRlIGFuZCB1c2UgeW91ciBvd24gY29tbWVudCBzZXJ2aWNlIGluIHByb2R1Y3Rpb24uXG4gICAgLy8gY29tbWVudDoge1xuICAgIC8vICAgcHJvdmlkZXI6IFwiV2FsaW5lXCIsXG4gICAgLy8gICBzZXJ2ZXJVUkw6IFwiaHR0cHM6Ly93YWxpbmUtY29tbWVudC52dWVqcy5wcmVzc1wiLFxuICAgIC8vIH0sXG4gICAgY29tcG9uZW50czoge1xuICAgICAgY29tcG9uZW50czogW1wiQmFkZ2VcIiwgXCJWUENhcmRcIl0sXG4gICAgfSxcbiAgICAvLyBpbnN0YWxsIEB2dWVwcmVzcy9wbHVnaW4tcHdhIGFuZCB1bmNvbW1lbnQgdGhlc2UgaWYgeW91IHdhbnQgYSBQV0FcbiAgICAvLyBwd2E6IHtcbiAgICAvLyAgIGZhdmljb246IFwiL2Zhdmljb24uaWNvXCIsXG4gICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXG4gICAgLy8gICBjYWNoZUltYWdlOiB0cnVlLFxuICAgIC8vICAgYXBwZW5kQmFzZTogdHJ1ZSxcbiAgICAvLyAgIGFwcGxlOiB7XG4gICAgLy8gICAgIGljb246IFwiL2Fzc2V0cy9pY29uL2FwcGxlLWljb24tMTUyLnBuZ1wiLFxuICAgIC8vICAgICBzdGF0dXNCYXJDb2xvcjogXCJibGFja1wiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1zVGlsZToge1xuICAgIC8vICAgICBpbWFnZTogXCIvYXNzZXRzL2ljb24vbXMtaWNvbi0xNDQucG5nXCIsXG4gICAgLy8gICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gICBtYW5pZmVzdDoge1xuICAgIC8vICAgICBpY29uczogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLW1hc2stMTkyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiMTkyeDE5MlwiLFxuICAgIC8vICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTUxMi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjUxMng1MTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2Nocm9tZS0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICAgIHNob3J0Y3V0czogW1xuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIG5hbWU6IFwiRGVtb1wiLFxuICAgIC8vICAgICAgICAgc2hvcnRfbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICB1cmw6IFwiL2RlbW8vXCIsXG4gICAgLy8gICAgICAgICBpY29uczogW1xuICAgIC8vICAgICAgICAgICB7XG4gICAgLy8gICAgICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9ndWlkZS1tYXNrYWJsZS5wbmdcIixcbiAgICAvLyAgICAgICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICAgICAgcHVycG9zZTogXCJtYXNrYWJsZVwiLFxuICAgIC8vICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBdLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIF0sXG4gICAgLy8gICB9LFxuICAgIC8vIH0sXG4gIH0sXG59KTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL21ha2FiYWthMTg4MC9ibG9nL3NyYy8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFrYWJha2ExODgwL2Jsb2cvc3JjLy52dWVwcmVzcy9uYXZiYXIvZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL21ha2FiYWthMTg4MC9ibG9nL3NyYy8udnVlcHJlc3MvbmF2YmFyL2VuLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IGVuTmF2YmFyID0gbmF2YmFyKFtcbiAge1xuICAgIHRleHQ6IFwiQmxvZ3NcIixcbiAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICBwcmVmaXg6IFwiL2VuL1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiQ29tcHV0ZXIgU2NpZW5jZVwiLFxuICAgICAgICBwcmVmaXg6IFwiQ1MvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlVBViBTdHJ1Y3R1cmVcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiVUFWXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiTnVtZXJpY2FsIFNpbXVsYXRpb25zIGluIEJsZW5kZXJcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiQmxlbmRlclNpbXNcIiB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJNYXRoZW1hdGljc1wiLFxuICAgICAgICBwcmVmaXg6IFwiTWF0aC9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiR2FtZSBUaGVvcnlcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiR2FtZVRoZW9yeVwiIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgXSxcbiAgfVxuXSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9tYWthYmFrYTE4ODAvYmxvZy9zcmMvLnZ1ZXByZXNzL25hdmJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL21ha2FiYWthMTg4MC9ibG9nL3NyYy8udnVlcHJlc3MvbmF2YmFyL3poLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYWthYmFrYTE4ODAvYmxvZy9zcmMvLnZ1ZXByZXNzL25hdmJhci96aC50c1wiO2ltcG9ydCB7IG5hdmJhciB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG5cbmV4cG9ydCBjb25zdCB6aE5hdmJhciA9IG5hdmJhcihbXG4gIHtcbiAgICB0ZXh0OiBcIlx1NTM1QVx1NjU4N1wiLFxuICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAgIHByZWZpeDogXCIvXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdThCQTFcdTdCOTdcdTY3M0FcdTc5RDFcdTVCNjZcIixcbiAgICAgICAgaWNvbjogXCJsYXB0b3AtY29kZVwiLFxuICAgICAgICBwcmVmaXg6IFwiQ1MvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlVBVlx1N0VEM1x1Njc4NFwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJVQVZcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJCbGVuZGVyXHU0RUZGXHU3NzFGXHU1QjY2XCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIkJsZW5kZXJTaW1cIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJcdTdCOTdcdTZDRDVcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiQWxnb3JpdGhtc1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NjI5OFx1ODE3RUNBU0lPIGZ4OTkxLWNuXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIkNhc2lvXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2MjRCXHU2NDEzXHU2RTMyXHU2N0QzXHU1NjY4XCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIkNHXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU1RkMzXHU3NDA2XHU1QjY2XCIsXG4gICAgICAgIGljb246IFwiaGVhcnRcIixcbiAgICAgICAgcHJlZml4OiBcIlB5c2Nob2xvZ3kvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIkRTTS01XHU1M0MyXHU4MDAzXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIkRTTS01XCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU3Q0JFXHU3OTVFXHU1MjA2XHU2NzkwXHU1QjY2XHU3QjE0XHU4QkIwXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIlBzeWNoXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU2NTcwXHU1QjY2XCIsXG4gICAgICAgIGljb246IFwic3F1YXJlLXJvb3QtdmFyaWFibGVcIixcbiAgICAgICAgcHJlZml4OiBcIk1hdGgvXCIsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NTM1QVx1NUYwOFx1OEJCQVx1N0IxNFx1OEJCMFwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJHYW1lVGhlb3J5XCIgfVxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTc5RDFcdTVCNjZcIixcbiAgICAgICAgaWNvbjogXCJtaWNyb3Njb3BlXCIsXG4gICAgICAgIHByZWZpeDogXCJTY2llbmNlL1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogXCJcdTgxMTFcdTc5RDFcdTVCNjZcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiQnJhaW5CZWUvXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiQnJhaW5CZWUgXHU3NzFGXHU5ODk4XCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIkJyYWluQmVlL1F1aXotQkJcIiB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTY3NDJcdThDMDhcIixcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gICAgICAgIHByZWZpeDogXCJNaXNjZWxsYW5lb3VzL1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHU0RTY2XHU1MzU1XCIsXG4gICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICAgICAgICAgIGxpbms6IFwiQm9va0xpc3RcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHU5MEU4XHU3RjcyXHU3RUJGXHU0RTBBS2V5bm90ZVwiLFxuICAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIktleW5vdGUtZGVwbG95XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlB1YmxpYyBGb3J1bSBEZWJhdGUgXHU3QjE0XHU4QkIwXCIsXG4gICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICAgICAgICAgIGxpbms6IFwiRGViYXRlXCIsXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgfVxuICAgIF0sXG4gIH1cbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFrYWJha2ExODgwL2Jsb2cvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFrYWJha2ExODgwL2Jsb2cvc3JjLy52dWVwcmVzcy9zaWRlYmFyL2VuLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYWthYmFrYTE4ODAvYmxvZy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvZW4udHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IGVuU2lkZWJhciA9IHNpZGViYXIoe1xuICBcIi9lblwiOiBbXG4gICAge1xuICAgICAgdGV4dDogXCJDb21wdXRlciBTY2llbmNlXCIsXG4gICAgICBpY29uOiBcImxhcHRvcC1jb2RlXCIsXG4gICAgICBwcmVmaXg6IFwiL1wiLFxuICAgICAgbGluazogXCJDUy9cIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJNYXRoZW1hdGljc1wiLFxuICAgICAgaWNvbjogXCJzcXVhcmUtcm9vdC12YXJpYWJsZVwiLFxuICAgICAgcHJlZml4OiBcIi9cIixcbiAgICAgIGxpbms6IFwiTWF0aC9cIlxuICAgIH0sXG4gIF1cbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFrYWJha2ExODgwL2Jsb2cvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFrYWJha2ExODgwL2Jsb2cvc3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYWthYmFrYTE4ODAvYmxvZy9zcmMvLnZ1ZXByZXNzL3NpZGViYXIvemgudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoU2lkZWJhciA9IHNpZGViYXIoe1xuICBcIi9cIjogW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU4QkExXHU3Qjk3XHU2NzNBXHU3OUQxXHU1QjY2XCIsXG4gICAgICBpY29uOiBcImxhcHRvcC1jb2RlXCIsXG4gICAgICBwcmVmaXg6IFwiL1wiLFxuICAgICAgbGluazogXCJDUy9cIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJcdTVGQzNcdTc0MDZcdTVCNjZcIixcbiAgICAgIGljb246IFwiaGVhcnRcIixcbiAgICAgIHByZWZpeDogXCIvXCIsXG4gICAgICBsaW5rOiBcIlBzeWNob2xvZ3kvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiXHU2NTcwXHU1QjY2XCIsXG4gICAgICBpY29uOiBcInNxdWFyZS1yb290LXZhcmlhYmxlXCIsXG4gICAgICBwcmVmaXg6IFwiL1wiLFxuICAgICAgbGluazogXCJNYXRoL1wiXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1Njc0Mlx1OEMwOFwiLFxuICAgICAgaWNvbjogXCJwZW5cIixcbiAgICAgIHByZWZpeDogXCIvXCIsXG4gICAgICBsaW5rOiBcIk1pc2NlbGxhbmVvdXMvXCJcbiAgICB9XG4gIF0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFIsU0FBUyx3QkFBd0I7OztBQ0FuQyxTQUFTLGlCQUFpQjs7O0FDQVgsU0FBUyxjQUFjO0FBRXZULElBQU0sV0FBVyxPQUFPO0FBQUEsRUFDN0I7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLFVBQVU7QUFBQSxNQUNSO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsVUFDUixFQUFFLE1BQU0saUJBQWlCLE1BQU0saUJBQWlCLE1BQU0sTUFBTTtBQUFBLFVBQzVELEVBQUUsTUFBTSxvQ0FBb0MsTUFBTSxpQkFBaUIsTUFBTSxjQUFjO0FBQUEsUUFDekY7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLGVBQWUsTUFBTSxpQkFBaUIsTUFBTSxhQUFhO0FBQUEsUUFDbkU7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOzs7QUN6QnNTLFNBQVMsVUFBQUEsZUFBYztBQUV2VCxJQUFNLFdBQVdDLFFBQU87QUFBQSxFQUM3QjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLElBQ1IsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxVQUNSLEVBQUUsTUFBTSxtQkFBUyxNQUFNLGlCQUFp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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXlERjtBQUNGLENBQUM7OztBRHRPRCxJQUFPLGlCQUFRLGlCQUFpQjtBQUFBLEVBQzlCLE1BQU07QUFBQSxFQUVOLFNBQVM7QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUVBO0FBQUE7QUFBQTtBQUlGLENBQUM7IiwKICAibmFtZXMiOiBbIm5hdmJhciIsICJuYXZiYXIiLCAic2lkZWJhciIsICJzaWRlYmFyIl0KfQo=
