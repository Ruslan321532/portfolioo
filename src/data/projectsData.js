import eight from "../assets/svg/projects/eight.svg";
import millerok from "../assets/svg/projects/Group 245 (1).svg";
import starwars from "../assets/svg/projects/Star-wars-logo-new-tall.webp";

export const projectsData = [
  {
    id: 1,
    projectName: "Miller-shop",
    projectDesc: "This project is about an online coffee shop",
    tags: ["React", "SCSS", "Redux", "Firebase"],
    code: "",
    demo: "https://miller-shop.netlify.app/",
    image: millerok,
  },
  {
    id: 2,
    projectName: "StarWars",
    projectDesc: "Star Wars website",
    tags: ["React", "CSS"],
    code: "https://github.com/Ruslan321532/starworlds",
    demo: "https://starworlds.netlify.app/",
    image: starwars,
  },
  {
    id: 3,
    projectName: "Travel Agency",
    projectDesc: "This project about travel agency management.",
    tags: ["React", "CSS", "Material Ui"],
    code: "https://github.com/said7388/Travel-Agency-client",
    demo: "https://travel-agency-fc58b.web.app/",
    image: eight,
  },
];
