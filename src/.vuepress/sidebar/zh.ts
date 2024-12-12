import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    {
      text: "计算机科学",
      icon: "laptop-code",
      prefix: "/",
      link: "CS/"
    },
    {
      text: "心理学",
      icon: "heart",
      prefix: "/",
      link: "Psychology/"
    },
    {
      text: "数学",
      icon: "square-root-variable",
      prefix: "/",
      link: "Math/"
    },
    {
      text: "杂谈",
      icon: "pen",
      prefix: "/",
      link: "Miscellaneous/"
    }
  ],
});
