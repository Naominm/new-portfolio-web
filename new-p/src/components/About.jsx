import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import profile from '../assets/new-b.png';
import CardList from '../components/CardList';

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
                src={profile} 
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
                  {inView ? <CountUp start={0} end={4} duration={8} /> : null}
                </div>
                <div className='font-secondary text-md tracking-[1px]'>
                  years of <br /> Programming
                </div>
              </div>
              <div className='text-center sm:text-left'>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={30} duration={8} /> : null} +
                </div>
                <div className='font-secondary text-md tracking-[1px]'>
                  Projects <br /> completed
                </div>
              </div>
              <div className='text-center sm:text-left'>
                <div className='text-[40px] font-secondary text-gradient mb-2'>
                  {inView ? <CountUp start={100} end={5} duration={5} /> : null} +
                </div>
                <div className='font-secondary text-md tracking-[1px]'>
                  Clients
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
