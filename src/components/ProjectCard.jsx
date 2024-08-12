import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../components/motion";
import { IoLogoGithub } from "react-icons/io5";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const ProjectCard = ({
  id,
  imgUrl,
  title,
  desc,
  index,
  active,
  handleClick,
  github,
  live,
  tech,
  type,
}) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    initial="hidden"
    animate="visible"
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex`}
    onClick={() => handleClick(id)}
  >
    {/* Rest of your component code */}
  </motion.div>
);

export default ProjectCard;
