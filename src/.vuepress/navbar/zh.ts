import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/",
    children: [
      {
        text: "计算机科学",
        icon: "computer",
        prefix: "CS/",
        children: [
          { text: "UAV结构", icon: "pen-to-square", link: "UAV" },
          { text: "Blender仿真学", icon: "pen-to-square", link: "BlenderSim" },
          { text: "算法", icon: "pen-to-square", link: "Algorithms" },
          { text: "折腾CASIO fx991-cn", icon: "pen-to-square", link: "Casio" },
          { text: "手搓渲染器", icon: "pen-to-square", link: "CG" },
        ],
      },
      {
        text: "杂谈",
        icon: "pen-to-square",
        prefix: "Miscellaneous/",
        children: [
          // {
          //   text: "香蕉 2",
          //   icon: "pen-to-square",
          //   link: "2",
          // },
        ],
      }
    ],
  }
]);
