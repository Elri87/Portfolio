import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Hungry Pets Web-Based Game",
    description:
      "I created the 'Hungry Pets' web-based game using HTML, CSS, and JavaScript. The game features animated pets with dynamic hunger levels that increase every second, posing a challenge for users to keep their pets alive. Users can interact by feeding the pets and expressing affection through a Love meter. A new pet is introduced every 30 seconds, and if the Love meter reaches zero, pets perish, marked by a visual shift in the container's background color.",
    image: "/hungry-pets.png",
    github: "https://github.com/Elri87/hungryPets",
    link: "https://hackmyhead-hungrypets.netlify.app/",
  },
  {
    name: "Spammer Message Board Platform",
    description:
      "I created 'Spammer,' a dynamic message board platform using React Next.js for the frontend and a RESTful API server for the backend. This web application features user-generated posts, a voting system for upvoting content, and a clean UI for an enhanced user experience.",
    image: "/spammer.png",
    github: "https://github.com/Elri87/hmhSpammerCrud",
    link: "https://hmh-crud-spammer.netlify.app/",
  },
  {
    name: "Reddit Clone Message Board Platform",
    description:
      "I created my version of a Reddit Clone, a versatile message board platform fostering user-generated content and engagement. Utilizing React Next.js for the frontend and incorporating full-stack capabilities, I engineered an intuitive user interface with reusable components, including recursive elements for efficiently managing replies within message threads.",
    image: "/reddit-temp.png",
    github: "https://github.com/Elri87/hmhRedditClone",
    link: "",
  },
  {
    name: "Landing Page",
    description:
      "I created a landing page utilizing React Next.js & Chakra Ui for the frontend.",
    image: "/chakra.png",
    github: "https://github.com/Elri87/LandingPage",
    link: "https://landing-page-elri87.vercel.app/",
  },
  {
    name: "Architect Website",
    description: "Static Website with Bootstrap.",
    image: "/mbarc.png",
    github: "https://github.com/ft8coza/mbarc",
    link: "https://mbarch.co.za/",
  },
  {
    name: "Netflix Clone",
    description: "React & CSS",
    image: "/NetflixClone.png",
    github: "",
    link: "https://netflix-clone-elri87.vercel.app/",
  },
];

function ProjectSection() {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectSection;
