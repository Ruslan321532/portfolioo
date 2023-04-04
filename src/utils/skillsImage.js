import bootstrap from "../assets/svg/skills/bootstrap.svg";
import css from "../assets/svg/skills/css.svg";
import firebase from "../assets/svg/skills/firebase.svg";
import git from "../assets/svg/skills/git.svg";
import graphql from "../assets/svg/skills/graphql.svg";
import html from "../assets/svg/skills/html.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import tailwind from "../assets/svg/skills/tailwind.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import vite from "../assets/svg/skills/vitejs.svg";
import figma from "../assets/svg/skills/figma.svg";
import react from "../assets/svg/skills/react.svg";
import docker from "../assets/svg/skills/docker.png";
import less from "../assets/svg/skills/less.png";
import restapi from "../assets/svg/skills/restapi.png";
import github from "../assets/svg/skills/github.svg";
import redux from "../assets/svg/skills/redux.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import nodejs from "../assets/svg/skills/nodejs.png";
import python from "../assets/svg/skills/python.svg";
import scss from "../assets/svg/skills/sass.png";

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "figma":
      return figma;
    case "javascript":
      return javascript;
    case "css":
      return css;
    case "react":
      return react;
    case "docker":
      return docker;
    case "nodejs":
      return nodejs;
    case "bootstrap":
      return bootstrap;
    case "typescript":
      return typescript;
    case "tailwind":
      return tailwind;
    case "materialui":
      return materialui;
    case "firebase":
      return firebase;
    case "redux":
      return redux;
    case "vite":
      return vite;
    case "git":
      return git;
    case "github":
      return github;
    case "graphql":
      return graphql;
    case "restapi":
      return restapi;
    case "scss":
      return scss;
    case "less":
      return less;
    case "python":
      return python;
    default:
      break;
  }
};
