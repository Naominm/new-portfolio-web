import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsGithub, BsArrowUpRight, BsTrophy } from "react-icons/bs";
import allProjects from "../data/projects";

const PAGE_SIZE = 6;

function Projects() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

    useEffect(() => {
        AOS.init({ easing: "ease-in-out" });
    }, []);

    const categories = useMemo(
        () => ["All", ...new Set(allProjects.map((project) => project.category))],
        []
    );

    const filtered = useMemo(
        () =>
            activeCategory === "All"
                ? allProjects
                : allProjects.filter((project) => project.category === activeCategory),
        [activeCategory]
    );

    const visible = filtered.slice(0, visibleCount);

    // A newly picked category starts from the top again.
    const handleFilter = (category) => {
        setActiveCategory(category);
        setVisibleCount(PAGE_SIZE);
    };

    return (
        <section id="projects" className="section lg:h-auto py-0 mt-20 mb-40">
            <div className="container mx-auto px-5">
                <h2 className="h2 text-accent text-center font-secondary text-4xl font-bold">
                    Projects
                </h2>

                {/* Only worth showing once there is more than one category to pick from. */}
                {categories.length > 2 && (
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleFilter(category)}
                                className={`px-5 py-2 rounded-full font-secondary text-base transition-all duration-300 border ${
                                    activeCategory === category
                                        ? "gradient border-transparent text-white"
                                        : "border-white/20 text-white/60 hover:text-white hover:border-white/50"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visible.map((project) => (
                        <article
                            key={project.title}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            className="group flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10"
                        >
                            <div className="overflow-hidden aspect-video bg-black/30">
                                <img
                                    src={project.imgSrc}
                                    alt={`${project.title} screenshot`}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="flex flex-col flex-1 p-5">
                                {project.award && (
                                    <span className="inline-flex items-center gap-x-2 self-start mb-3 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-white font-secondary text-sm">
                                        <BsTrophy /> {project.award}
                                    </span>
                                )}

                                <h3 className="text-white text-xl font-secondary font-semibold leading-snug mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-white/70 text-base leading-7 mb-4">
                                    {project.description}
                                </p>

                                <ul className="flex flex-wrap gap-2 mb-5">
                                    {(project.technologies || []).map((tech) => (
                                        <li
                                            key={tech}
                                            className="px-3 py-1 rounded-full bg-white/10 text-white/70 font-secondary text-sm"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>

                                {/* mt-auto keeps the links on a common baseline across the row */}
                                <div className="flex flex-wrap gap-3 mt-auto">
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-sm flex items-center gap-x-2 font-secondary"
                                    >
                                        Live Demo <BsArrowUpRight />
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="h-[48px] px-6 text-sm rounded-full font-medium text-white border border-white/30 flex items-center gap-x-2 font-secondary hover:bg-white/10 transition-colors duration-300"
                                        >
                                            <BsGithub /> Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {visibleCount < filtered.length && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                            className="btn btn-lg p-4 text-xl font-secondary"
                        >
                            Show more
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Projects;
