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
            technologies: "Tailwind CSS, React",
            description: "A platform to manage and diagnose tomato plant diseases.",
        },
        {
            title: "Fresh Farm",
            imgSrc: img2,
            liveDemo: "https://ferrari-eight.vercel.app/",
            github: "https://github.com/Naominm/Tomato-diagonise.git",
            technologies: "Tailwind CSS, React",
            description: "An extension of the Fresh Farm project with additional features.",
        },
        {
            title: "Elingo",
            imgSrc: img3,
            liveDemo: "https://language-model.vercel.app",
            github: "https://github.com/Naominm/language-model.git",
            technologies: "Next.js, Tailwind CSS, CSS",
            description: "A language learning platform for various languages.",
        },
        {
            title: "Second Hand",
            imgSrc: img4,
            liveDemo: "https://flagship-secondhand.vercel.app",
            github: "https://github.com/Naominm/react-flagship-secondhand.git",
            technologies: "CSS, React",
            description: "A marketplace for buying and selling second-hand goods.",
        },
        {
            title: "Portfolio",
            imgSrc: img5,
            liveDemo: "https://naomimbugua.vercel.app/",
            github: "https://github.com/Naominm/Portfolio.git",
            technologies: "CSS, React",
            description: "My personal portfolio showcasing my projects and skills.",
        },
        {
            title: "Kieyeji",
            imgSrc: img6,
            liveDemo: "https://chicken-selling.netlify.app",
            github: "https://github.com/yourusername/kieyeji",
            technologies: "HTML, CSS, JS",
            description: "An e-commerce site for selling traditional chicken.",
        },
    ];

    return (
        <section id="projects" className="section py-0 mt-10 mb-10">
            <div className="container mx-auto px-5">
                <h2 className="text-accent text-center font-secondary text-4xl sm:text-3xl text-2xl font-bold">Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            data-aos="fade-right"
                            data-aos-duration="2000"
                            className="group relative overflow-hidden border-2 border-gray-300 rounded-xl shadow-lg"
                        >
                            <div className="cursor-pointer group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img
                                className="group-hover:scale-125 transition-all duration-100"
                                src={project.imgSrc}
                                alt={project.title}
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-center p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50 text-center text-white">
                                <h3 className="text-2xl sm:text-xl text-lg mb-2">{project.title}</h3>
                                <p className="mb-4 text-base sm:text-sm text-xs">{project.description}</p>
                                <p className="mb-4 text-base sm:text-sm text-xs">{project.technologies}</p>
                                <div className="flex space-x-4">
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-4 rounded-lg text-sm sm:text-xs"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-2 px-4 rounded-lg text-sm sm:text-xs"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
