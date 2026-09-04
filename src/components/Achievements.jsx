import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaTrophy,
  FaGraduationCap,
  FaStar,
  FaCertificate,
  FaChalkboardTeacher,
} from 'react-icons/fa';
import mlsaLogo from '../assets/transparent.png';

const achievements = [
  {
    icon: <FaTrophy />,
    title: 'KAPS Inter-University Hackathon — Category Winner',
    org: 'JKUAT, Kenya',
    year: '2023',
    description:
      'Frontend Developer for Elingo, a Neural Machine Translator that won its category.',
  },
  {
    icon: <FaGraduationCap />,
    title: 'BSc Software Engineering — First Class Honours',
    org: "Murang'a University of Technology",
    year: '2024',
    description:
      'Graduated with First Class Honours in Software Engineering.',
  },
  {
    icon: <FaStar />,
    title: 'Presidential Digital Talent Programme — Cohort X',
    org: 'ICT Authority, Kenya',
    year: '2026',
    description:
      "Selected for Kenya's national programme for top graduate technology talent.",
  },
  {
    logo: mlsaLogo,
    title: 'Microsoft Learn Student Ambassador',
    org: 'Microsoft',
    year: '2024',
    description:
      'Supported student technology communities, peer learning and technical skills development.',
  },
  {
    icon: <FaCertificate />,
    title: 'Front End Development with React',
    org: 'edX',
    year: 'Certification',
    description:
      'Certified in building modern user interfaces with React.',
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Student Mentor',
    org: 'MUT Tech Club',
    year: 'University period',
    description:
      'Mentored junior students in web development and led technical sessions.',
  },
];

export default function Achievements() {
  useEffect(() => {
    AOS.init({ easing: 'ease-in-out' });
  }, []);

  return (
    <section id='achievements' className='section lg:h-auto py-10'>
      <div className='container mx-auto p-5'>
        <h2 className='h2 text-accent text-center font-secondary text-4xl font-bold'>
          Achievements
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          {achievements.map((item, index) => (
            <article
              key={index}
              data-aos='fade-up'
              data-aos-duration='1000'
              className='flex flex-col bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:bg-white/10'
            >
              <div className='w-16 h-16 mb-4 flex justify-center items-center rounded-full bg-white/10'>
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt=''
                    className='w-10 h-10 object-contain'
                  />
                ) : (
                  React.cloneElement(item.icon, {
                    size: '1.75em',
                    color: '#00bcd4',
                  })
                )}
              </div>

              <h3 className='text-white text-lg font-secondary font-semibold leading-snug mb-2'>
                {item.title}
              </h3>

              <div className='flex flex-wrap items-center gap-x-3 mb-3 font-secondary text-sm'>
                <span className='text-gradient'>{item.org}</span>
                <span className='text-white/40'>{item.year}</span>
              </div>

              <p className='text-white/70 text-base leading-7'>
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
