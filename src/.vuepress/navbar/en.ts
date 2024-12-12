import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Computer Science",
    icon: "computer",
    prefix: "/en/CS/",
    children: [
      {
        text: "Main",
        prefix: "",
        children: [
          { text: "UAV Structure", icon: "pen-to-square", link: "UAV" },
        ],
      }
    ],
  }
]);
