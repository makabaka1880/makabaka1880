import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/",
    children: [
      {
        text: "提纲",
        icon: "pen-to-square",
        prefix: "",
        children: [
          { text: "博客主页", icon: "pen-to-square", link: "article/"},
          { text: "大事记", icon: "pen-to-square", link: "timeline/"}
        ]
      }
    ]
  },
  {
    text: "创客笔记",
    icon: "pen-to-square",
    prefix: "/",
    children: [
      {
        text: "计算机科学",
        icon: "laptop-code",
        prefix: "CS/",
        children: [
          { text: "友情链接", icon: "pen-to-square", link: "Friends" },
          { text: "类型系统", icon: "pen-to-square", link: "miscellaneous/" },
          { text: "ARM开发", icon: "pen-to-square", link: "ARM/" },
          { text: "C++学习", icon: "pen-to-square", link: "cpp/" },
          { text: "理论计算机科学", icon: "pen-to-square", link: "theoretical/" },
          { text: "树莓派烹饪指南", icon: "pen-to-square", link: "raspi/" },
          { text: "杂项", icon: "pen-to-square", link: "miscellaneous/" },
        ],
      },
      {
        text: "心理学",
        icon: "heart",
        prefix: "Psychology/",
        children: [
          { text: "DSM-5参考", icon: "pen-to-square", link: "DSM-5" },
          { text: "精神分析学笔记", icon: "pen-to-square", link: "Psych" },
        ],
      },
      {
        text: "数学",
        icon: "square-root-variable",
        prefix: "Math/",
        children: [
          { text: "博弈论笔记", icon: "pen-to-square", link: "GameTheory" }
        ],
      },
      {
        text: "科学",
        icon: "microscope",
        prefix: "Science/",
        children: [
          { text: "脑科学", icon: "pen-to-square", link: "BrainBee/" },
          { text: "BrainBee 真题", icon: "pen-to-square", link: "BrainBee/Quiz-BB" },
          { text: "静电场与电学", icon: "pen-to-square", link: "Coulumb" },
        ],
      },
      {
        text: "杂谈",
        icon: "pen-to-square",
        prefix: "Miscellaneous/",
        children: [
          {
            text: "书单",
            icon: "pen-to-square",
            link: "BookList",
          },
          {
            text: "部署线上Keynote",
            icon: "pen-to-square",
            link: "Keynote-deploy",
          },
          {
            text: "Public Forum Debate 笔记",
            icon: "pen-to-square",
            link: "Debate",
          },
          {
            text: "牛逼的东西",
            icon: "pen-to-square",
            link: "NewBeeLinks",
          }
        ],
      }
    ],
  }
]);
