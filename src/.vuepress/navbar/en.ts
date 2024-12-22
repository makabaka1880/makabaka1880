import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Blogs",
    icon: "pen-to-square",
    prefix: "/en/",
    children: [
      {
        text: "Computer Science",
        prefix: "CS/",
        children: [
          { text: "UAV Structure", icon: "pen-to-square", link: "UAV" },
          { text: "Numerical Simulations in Blender", icon: "pen-to-square", link: "BlenderSim" },
        ],
      },
      {
        text: "Psychology",
        prefix: "Psychology/",
        children: [
          { text: "DSM-5", icon: "pen-to-square", link: "DSM-5" },
          { text: "Pschoanalysis", icon: "pen-to-square", link: "Psych" },
        ]
      },
      {
        text: "Mathematics",
        prefix: "Math/",
        children: [
          { text: "Game Theory", icon: "pen-to-square", link: "GameTheory" },
        ],
      }
    ],
  }
]);
