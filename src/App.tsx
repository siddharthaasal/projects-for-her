import React from "react";
import "./App.css"

import ProjectCard from "./components/ProjectCard";

const projects = [
  {
    title: "Wallpapers",
    description: "Download Half and Half wallpapers for us",
    imageSrc: "./",
    imageAlt: "Heart image",
    link: "https://siddharthaasal.github.io/our-wallpaper/",
  },
  {
    title: "Typewriter Love",
    description: "A romantic message typed on screen ✍️",
    imageSrc: "/assets/typewriter.png",
    imageAlt: "Typewriter image",
    link: "https://siddharthaasal.github.io/our-wallpaper/",
  },
  // Add more...
];

export default function ProjectShowcase() {
  return (
    <div className="flex flex-col items-center gap-10 p-8">
      <h1 className="text-3xl font-bold text-pink-600">Projects for Her 💕</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
