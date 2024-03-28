module.exports = {
  plugins: [
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github',
        owner: 'makabaka1880',
        repo: 'makabaka1880.github.io',
        clientId: '71e3010f2012a5e26f29',
        clientSecret: 'cb78aa8edf3233527277ed8e95c3fb942c9649b9',
      }
    ],
    ['vuepress-plugin-reading-time'],
    ['@vuepress/back-to-top'],
    ['@vuepress/container'],
    ['autonav', true],
    ['vuepress-plugin-nprogress'],
    'vuepress-plugin-flowchart',
    [
      'sitemap', {
        hostname: 'https://localhost:8080'
      },
    ],
    ['graysite',{
      startDate: '2020-04-03 00:00:00',
      endDate: '2025-04-04 23:59:59'
    }],
    [
       'dynamic-title',
       {
          showIcon: '/favicon.ico',
          showText: '(/≧▽≦/)咦！又好了！',
          hideIcon: '/failure.ico',
          hideText: '(●—●)喔哟，崩溃啦！',
          recoverTime: 2000,
       },
    ],
    ["vuepress-plugin-auto-sidebar", {}],
    ['vuepress-plugin-glossary'],
    ['fulltext-search'],
    ['flowchart'],
    ['@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor'
    }]
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
        md.set({
            html: true
        })
        md.use(require('markdown-it-katex'))
    }
  },
  head: [
      ['link', {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
      }],
      ['link', {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
      }]
  ],
  title: 'Makabaka1880\'s Blog',
  description: '欢迎来到我的博客👏',
  themeConfig: {
    logo: "https://img2.imgtp.com/2024/03/24/DUQvvzXV.png",
    displayAllHeaders: true,
    nav: [
      {
        text: "首页",
        link: "/",
        items: [
          { text: "GitHub", link: "https://github.com/makabaka1880/makabaka1880.github.io"}
        ]
      },
      {
        text: "CS",
        link: "/CS/",
        items: [
          { text: "CASIO", link: "/CS/Casio" },
          { text: "算法汇集", link: "/CS/Algorithms" }
        ]
      },
      {
        text: "心理学",
        link: "/Psychology/",
        items: [
          { text: "精神分析学导论", link: "/Psychology/Psych"}
        ]
      },
      {
        text: "自然科学",
        link: "/Science/",
        items: [
          { text: "Brain Bee", link: "/Science/BrainBee/" }
        ]
      },
      {
        text: "杂类",
        link: "/Miscellaneous/",
        items: [
          { text: "部署线上Keynote", link: "/Miscellaneous/Keynote-deploy" }
        ]
      }
    ],
    lastUpdated: '上次更新', // string | boolean
  }

}