import { Project } from "utils/types";

export const projects: Project[] = [
  {
    id: 1,
    name: "Simple Calendar ",
    description:
      "A simple React Calendar, builded from scratch and extendible.",
    isUnderDevelopment: false,
    repoURL: "https://github.com/DevCeur/simple-calendar",
    websiteURL: "https://simple-calendar.vercel.app/",
  },
  {
    id: 2,
    name: "Taskify",
    description:
      "A Minimalist but powerful TO-DO App, crafted from scratch with React and Firebase",
    isUnderDevelopment: true,
    repoURL: "https://github.com/DevCeur/taskify",
    websiteURL: "",
  },
];
