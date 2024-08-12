import React from 'react';
import skills from '../components/Skills';

const Services = () => {
    return (
        <section id='services' className='section mb-10'>
            <div className='container mx-auto'>
                <h2 className='h2 text-accent text-center font-secondary text-4xl font-bold'>Skills</h2>
                <div className='flex flex-wrap justify-center'>
                    {skills.map((skill, index) => (
                        <div
                            className='flex flex-col items-center border border-white/20  mt-8 p-5 m-10 mx-12 rounded-md octagon-icon'
                            key={index}
                        >
                            <div className='w-17 h-17 flex justify-center items-center'>
                                {React.cloneElement(skill.icon, { color: skill.color, size: '2em' })}
                            </div>
                            <h4 className='text-lg font-secondary font-semibold'>{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
