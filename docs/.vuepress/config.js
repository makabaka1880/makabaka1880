module.exports = {
  title: 'Makabaka1880\'s Blog',
  description: '欢迎来到我的博客👏',
  themeConfig: {
    logo: "https://img2.imgtp.com/2024/03/24/DUQvvzXV.png",
    displayAllHeaders: true,
    nav: [
      {
        text: "首页",
        link: "/"
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
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/'
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