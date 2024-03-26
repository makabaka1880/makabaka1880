module.exports = {
  title: 'Makabaka1880\'s Blog',
  description: '欢迎来到我的博客👏',
  themeConfig: {
    logo: "https://img2.imgtp.com/2024/03/24/DUQvvzXV.png",
    displayAllHeaders: true,
    extendsMarkdown: md => {
      md.use(require('markdown-it-mathjax3'))
      md.linkify.set({ fuzzyEmail: false })
    },
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