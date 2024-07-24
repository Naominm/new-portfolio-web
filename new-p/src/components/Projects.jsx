import React, { useEffect } from "react";
import img1 from "../assets/freshfarm.png";
import img2 from "../assets/freshfarm2.png";
import img3 from "../assets/elingo.png";
import img4 from "../assets/secondHand.png";
import img5 from "../assets/portfolio.png";
import img6 from "../assets/kienyeji.png";

import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
    useEffect(() => {
        AOS.init({
            easing: "ease-in-out",
        });
    }, []);

    const projects = [
        {
            title: "Fresh Farm",
            imgSrc: img1,
            liveDemo: "https://gaming-lilac-kappa.vercel.app/",
            github: "https://github.com/Naominm/Tomato-diagonise.git",
            technologies: " Tailwind CSS react",
        },
        {
            title: "Fresh Farm",
            imgSrc: img2,
            liveDemo: "https://ferrari-eight.vercel.app/",
            github: "https://github.com/Naominm/Tomato-diagonise.git",
            technologies: "Tailwind CSS React",
        },
        {
            title: "Elingo",
            imgSrc: img3,
            liveDemo: " https://language-model.vercel.app ",
            github: "https://github.com/Naominm/language-model.git",
            technologies: "Next Js Tailwind CSS CSS",
        },
        {
            title: "Second Hand",
            imgSrc: img4,
            liveDemo: "https://flagship-secondhand.vercel.app ",
            github: "https://github.com/Naominm/react-flagship-secondhand.git",
            technologies: "CSS React",
        },
        {
            title: "Portfolio",
            imgSrc: img5,
            liveDemo: " https://naomimbugua.vercel.app/",
            github: "https://github.com/Naominm/Portfolio.git",
            technologies: " CSS React",
        },
       
        
        {
            title: "Kieyeji",
            imgSrc: img6,
            liveDemo: "https://chicken-selling.netlify.app",
            github: "https://github.com/yourusername/kieyeji",
            technologies: "HTML  CSS JS",
        },
    ];

    return (
        <section id="projects" className="section" style={{ minHeight: "200vh" }}>
            <div className="container mx-auto p-5">
                <h2 className="text-accent text-center font-secondary text-4xl font-bold mb-10">Projects</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            className="group relative overflow-hidden border-2 rounded-xl"
                        >
                            <div className="cursor-pointer group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration 300"></div>
                            <img
                                className="group-hover:scale-125 transition-all duration-500"
                                src={project.imgSrc}
                                alt={project.title}
                            />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    <span className="text-3xl uppercase text-gradient font-secondary">
                                       {project.title}
                                    </span>
                                </a>
                            </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-800 z-50">
                                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                    <span className=" mt-10 text-3xl text-white"> {project.technologies}</span>
                                </a>
                            </div>
                            <div className="absolute -bottom-full right-12 group-hover:bottom-16 transition-all duration-800 z-50">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    <span className="text-3xl text-gradient font-secondary">GitHub</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
