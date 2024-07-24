// src/data/skills.js
import { FaJs, FaReact, FaGit, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMicrosoftazure } from 'react-icons/si';
import { SiFigma } from 'react-icons/si'; // Figma icon
import { FaPython } from 'react-icons/fa'; // Python icon

const skills = [
    { name: 'JavaScript', icon: <FaJs />, color: '#f7df1e' },
    { name: 'React', icon: <FaReact />, color: '#61dafb' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38b2ac' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: '#000000' },
    { name: 'Azure', icon: <SiMicrosoftazure />, color: '#0078d4' },
    { name: 'Git', icon: <FaGit />, color: '#f05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#181717' },
    { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' }, 
    { name: 'Python', icon: <FaPython />, color: '#3776AB' }, 
];

export default skills;
