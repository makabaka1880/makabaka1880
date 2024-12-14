import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/en": [
    {
      text: "Computer Science",
      icon: "laptop-code",
      prefix: "/",
      link: "CS/"
    },
    {
      text: "Psychology",
      icon: "heart",
      prefix: "/",
      link: "Psychology/"
    },
    {
      text: "Mathematics",
      icon: "square-root-variable",
      prefix: "/",
      link: "Math/"
    },
  ]
});
