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
          { text: "UAV结构", icon: "pen-to-square", link: "UAV" },
          { text: "Blender仿真学", icon: "pen-to-square", link: "BlenderSim" },
          { text: "算法", icon: "pen-to-square", link: "Algorithms" },
          { text: "折腾CASIO fx991-cn", icon: "pen-to-square", link: "Casio" },
          { text: "手搓渲染器", icon: "pen-to-square", link: "CG" },
          { text: "C++笔记", icon: "pen-to-square", link: "cpp/" },
          { text: "树莓派烹饪指南", icon: "pen-to-square", link: "raspi/" },
          { text: "Arm ASM笔记", icon: "pen-to-square", link: "asm/" },
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
