// src/data/skills.js
import { FaJs, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiNodedotjs,SiPostgresql,SiMongodb,SiTypescript,SiExpress } from 'react-icons/si';


const skills = [
    { name: 'JS', icon: <FaJs />, color: '#f7df1e' },
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'Typescript ', icon: <SiTypescript />, color: '#38b2ac' },
    { name: 'NodeJs', icon: <SiNodedotjs />, color: '#F24E1E' }, 
    { name: 'Express', icon: <SiExpress />, color: '#F24E1E' }, 
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#0078d4' },
    { name: 'Git', icon: <FaGit />, color: '#f05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
   
];

export default skills;
