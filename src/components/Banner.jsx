import React, { useEffect } from 'react';
import profile from '../assets/profile1.jpg';  // Ensure this path is correct
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <section id='home' className='min-h-[85vh] lg:min-h-[75vh] flex items-center'>
      <div className='container mx-auto p-5'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div data-aos="fade-right" data-aos-duration="1400" className='flex-1 text-center lg:text-start font-secondary'>
            <h1 className='text-3xl font-bold leading-[0.8] lg:text-5xl'>Naomi <span>Mbugua</span></h1>
            <div className='text-2xl mb-8 lg:text-4xl font-secondary font-semibold uppercase leading-[1]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation sequence={[
                  'Web Developer',
                  2000,
                  'Front-End Developer',
                  2000,
                  'Graphics Designer',
                  2000,
                  'UI/UX Designer',
                  2000,
                ]}
                speed={50}
                className='text-gradient'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p className='mb-12 max-w-lg mx-auto lg:mx-0'>
              I specialize in creating stunning websites and intuitive user interfaces. With a passion for design and a commitment to quality, I ensure every project I undertake exceeds expectations.
            </p>
            <div className='flex max-w-max lg:mx-0 mx-auto gap-x-6 items-center mb-16'>
              <a href="https://drive.google.com/file/d/1kauRosxVgY6ddRol1oTW8RKWVQESaBDp/view?usp=sharing" target='_blank' rel='noopener noreferrer'>
                <button className='btn btn-lg'>Download Resume</button>
              </a>
            </div>
            <div className='flex text-2xl max-w-max gap-x-6 mx-auto mb-10 lg:mx-0 cursor-pointer'>
              <a href="https://github.com/Naominm" target='_blank' rel='noopener noreferrer'>
                <FaGithub className='text-white' />
              </a>
              <a href="https://www.linkedin.com/in/naomi-mbugua-b18984245/" target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='text-white' />
              </a>
              <a href="https://wa.me/+254703937319" target='_blank' rel='noopener noreferrer'>
                <FaWhatsapp className='text-white' />
              </a>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1400" className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[500px]'>
            <div className="homeContainerPic">
              <div className="homeImageBoarder">
                <div className="homeImage">
                  <img src={profile} alt="Profile of Naomi Mbugua" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
