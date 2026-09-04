import portalSms from '../assets/portal-sms.png';
import blogit from '../assets/blogit.png';
import mutc from '../assets/mutc.png';
import elingo from '../assets/elingo.png';
import secondHand from '../assets/secondHand.png';
import zarph from '../assets/zarph.png';
import urbanHaven from '../assets/urban-haven.png';

// Adding a project = one object in this array. `category` feeds the filter bar,
// so a new category shows up as a pill on its own.
const projects = [
  {
    title: 'School Manager',
    imgSrc: portalSms,
    category: 'Full Stack',
    description:
      'A PERN school management system covering markbook, attendance, report cards, fees and merit lists, with role-based dashboards for administrators, teachers and parents.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
    liveDemo: 'https://school-management-system-frontend-rouge.vercel.app',
  },
  {
    title: 'Blogit',
    imgSrc: blogit,
    category: 'Full Stack',
    description: 'A full stack blogging platform with authentication and post management.',
    technologies: ['React', 'Material UI', 'Node.js', 'Express', 'PostgreSQL'],
    liveDemo: 'https://blog-it-git-master-naomi-mbuguas-projects.vercel.app/',
    github: 'https://github.com/Naominm/blogIt.git',
  },
  {
    title: 'MUTC',
    imgSrc: mutc,
    category: 'Frontend',
    description: 'A web application for the Murang’a University tech club.',
    technologies: ['React', 'TypeScript'],
    liveDemo: 'https://mutc-website-wheat.vercel.app/',
    github: 'https://github.com/Naominm/mutc-website.git',
  },
  {
    title: 'Zarph Tours',
    imgSrc: zarph,
    category: 'Frontend',
    description: 'Frontend application for a travel company.',
    technologies: ['React', 'CSS'],
    liveDemo: 'https://zaph-tours-flame.vercel.app/',
    github: 'https://github.com/Naominm/zaph-tours.git',
  },
  {
    title: 'Elingo',
    imgSrc: elingo,
    category: 'Frontend',
    description:
      'A neural machine translator built for the KAPS inter-university hackathon. I built the frontend.',
    technologies: ['Next.js', 'Tailwind CSS', 'CSS'],
    award: 'KAPS Hackathon — Category Winner',
    liveDemo: 'https://language-model.vercel.app',
    github: 'https://github.com/Naominm/language-model.git',
  },
  {
    title: 'Second Hand',
    imgSrc: secondHand,
    category: 'Frontend',
    description: 'A marketplace for buying and selling second-hand goods.',
    technologies: ['React', 'CSS'],
    liveDemo: 'https://flagship-secondhand.vercel.app',
    github: 'https://github.com/Naominm/react-flagship-secondhand.git',
  },
  {
    title: 'Urban Haven',
    imgSrc: urbanHaven,
    category: 'Frontend',
    description: 'An apartment listing website.',
    technologies: ['HTML', 'CSS'],
    liveDemo: 'https://urban-haven-phi.vercel.app/',
    github: 'https://github.com/Naominm/URBAN-HAVEN.git',
  },
];

export default projects;
