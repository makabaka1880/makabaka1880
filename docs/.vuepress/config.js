module.exports = {
  plugins: [
    '@vuepress/back-to-top',
    'vuepress-plugin-janitor',
    '@vuepress/container',
  ],
  markdown: {
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
          { text: "CASIO", link: "/CS/Casio"}
        ]
      },
      {
        text: "精神分析",
        link: "/Psychoanalysis/",
        items: [
          { text: "精神分析学导论", link: "/Psychoanalysis/Psych"}
        ]
      }
    ],
    sidebar: [
      {
        title: '首页',   // required
        path: '/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        children: [
          {title: "GitHub", path: "https://github.com/makabaka1880/makabaka1880.github.io"}
        ]
      },
      {
        title: 'CS',
        children: [ 
          '/CS/Casio.md'
        ],
      },
      {
        title: 'Psychoanalysis',
        children: [ 
          '/Psychoanalysis/Psych.md'
        ],
      }
    ]
  }

}