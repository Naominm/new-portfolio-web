import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsBuilding, BsCalendar3 } from 'react-icons/bs';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'GPS LAB Ltd, Kenya',
    type: 'Full-time',
    period: 'May 2026 - Present',
    points: [
      'Progressed from an earlier software development internship into a full-time role with responsibility for production-ready digital platforms.',
      'Deliver secure, scalable web applications and REST APIs, translating stakeholder needs into usable digital solutions.',
      'Contribute to performance, reliability and maintainability improvements across client and organisational projects.',
    ],
  },
  {
    role: 'Presidential Digital Talent Programme (PDTP) Intern - Cohort X',
    company: 'ICT Authority, Kenya',
    type: 'Paid internship',
    period: 'Jan 2026 - Present',
    points: [
      'Selected for PDTP Cohort X and contributed to public-sector digital transformation and technology adoption.',
      'Co-developed an Asset Tracking and Ticketing System that digitised IT asset management and streamlined technical issue reporting and follow-up.',
      'Supported staff onboarding, troubleshooting and adoption of digital systems, helping users work more effectively with technology.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Tenakata, Kenya',
    type: 'Paid internship',
    period: 'Nov 2025 - Jun 2026',
    points: [
      'Improved application scalability and maintainability through TypeScript, Zustand, Prisma and PostgreSQL.',
      'Built responsive interfaces and RESTful APIs that supported stable feature delivery and future application growth.',
    ],
  },
  {
    role: 'Software Development Intern',
    company: 'GPS LAB Ltd, Kenya',
    type: 'Part-time internship',
    period: 'Aug 2025 - Apr 2026',
    points: [
      'Delivered client-facing websites and backend services, improving performance through code optimisation, caching and API integration.',
      'Worked directly with stakeholders to convert requirements into polished, production-ready digital solutions.',
    ],
  },
  {
    role: 'Full Stack Development Intern',
    company: 'Teach2Give, Kenya',
    type: 'Unpaid internship',
    period: 'Feb 2025 - Apr 2025',
    points: [
      'Delivered full-stack features using React, TypeScript, Node.js, Prisma and PostgreSQL, strengthening reliability and maintainability.',
      'Contributed to debugging, testing and reusable component development within project timelines.',
    ],
  },
  {
    role: 'Frontend Web Development Intern',
    company: 'Saliq Software Solutions, Ruiru, Kenya',
    type: 'Internship',
    period: 'Jun 2023 - Aug 2023',
    points: [
      'Contributed to a Point-of-Sale administration dashboard that supported users moving from manual bookkeeping to a digital workflow.',
    ],
  },
];

function Experience() {
  useEffect(() => {
    AOS.init({ easing: 'ease-in-out' });
  }, []);

  return (
    <section id='experience' className='section lg:h-auto mb-40 lg:mb-0'>
      <div className='container mx-auto py-5'>
        <h2 className='h2 text-accent text-center font-secondary text-4xl font-bold'>Experience</h2>

        <div className='relative mt-14 max-w-[1100px] mx-auto'>
          {/* timeline spine: left edge on mobile, centred from lg up */}
          <div className='absolute top-2 bottom-2 w-[2px] bg-white/20 left-[7px] lg:left-1/2 lg:-translate-x-1/2' />

          {experiences.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className='relative pb-12 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-x-16'
              >
                {/* node on the spine */}
                <span className='absolute z-10 top-2 w-4 h-4 lg:w-5 lg:h-5 rounded-full gradient border-4 border-primary left-0 lg:left-1/2 lg:-translate-x-1/2' />

                <div
                  data-aos={isLeft ? 'fade-right' : 'fade-left'}
                  data-aos-duration='1200'
                  className={`relative pl-10 lg:pl-0 ${
                    isLeft ? 'lg:col-start-1' : 'lg:col-start-2'
                  }`}
                >
                  {/* connector from the card across the gutter to the spine */}
                  <span
                    className={`hidden lg:block absolute top-[17px] w-8 h-[2px] bg-white/20 ${
                      isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'
                    }`}
                  />

                  <div className='bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02] hover:bg-white/10'>
                    <h3 className='text-white text-xl sm:text-2xl font-secondary font-semibold leading-snug mb-2'>
                      {item.role}
                    </h3>

                    <div className='flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-y-1 sm:gap-x-6 mb-4 font-secondary text-base'>
                      <span className='flex items-center gap-x-2 text-gradient'>
                        <BsBuilding /> {item.company}
                      </span>
                      <span className='flex items-center gap-x-2 text-white/60'>
                        <BsCalendar3 /> {item.period}
                      </span>
                      <span className='text-white/40 text-sm uppercase tracking-[1px]'>
                        {item.type}
                      </span>
                    </div>

                    <ul className='list-disc pl-5 space-y-2 text-white/80 text-base leading-7'>
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
