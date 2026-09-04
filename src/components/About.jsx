import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import img1 from '../assets/second.jpg';
import CardList from '../components/CardList';

// Coding since the start of the Software Engineering degree (Sep 2020)
const CODING_START = new Date('2020-09-01');
const yearsOfCoding = Math.floor(
  (Date.now() - CODING_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);

// Paid work since the first attachment at Saliq Software Solutions (Jun 2023)
const PROFESSIONAL_START = new Date('2023-06-01');
const yearsProfessional = Math.floor(
  (Date.now() - PROFESSIONAL_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id='about' className='section mb-40 lg:mb-0' ref={ref}>
      <div className="container mx-auto p-5">
        <div className='flex flex-col lg:flex-row gap-y-10 lg:items-center lg:gap-x-20 lg:gap-y-0 min-h-screen'>
          <div data-aos="fade-right" data-aos-duration='2000' className='flex-1 flex justify-center lg:justify-start'>
            <div className="aboutContainerImage">
              <img 
                src={img1} 
                alt="A black lady standing" 
                className="w-full h-auto max-h-[200px] sm:max-h-none" 
              />
            </div>
          </div>
          <div data-aos="fade-down" data-aos-duration='2000' className='flex-1'>
            <h2 className='h2 text-accent font-secondary text-4xl font-bold'>About ME</h2>
            <h3 className='text-xl lg:text-4xl mb-5'><CardList /></h3>
            <div className='flex flex-col sm:flex-row gap-y-6 sm:gap-x-6 lg:gap-x-10 mb-12 mt-5'>
              <div className='text-center sm:text-left'>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={yearsOfCoding} duration={8} /> : null} +
                </div>
                <div className='font-secondary text-md tracking-[1px]'>
                  years of <br /> Coding
                </div>
              </div>
              <div className='text-center sm:text-left'>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={yearsProfessional} duration={8} /> : null} +
                </div>
                <div className='font-secondary text-md tracking-[1px]'>
                  years <br /> Professional
                </div>
              </div>
              <div className='text-center sm:text-left'>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={20} duration={8} /> : null} +
                </div>
                <div className='font-secondary text-md tracking-[1px]'>
                  Projects <br /> completed
                </div>
              </div>
            </div>
            <div className='flex justify-center sm:justify-start'>
              <a href="#contact"><button className='btn btn-lg p-4 text-xl font-secondary'>Work With Me</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
