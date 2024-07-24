import React from 'react';
import mlsaLogo from '../assets/transparent.png';

export default function Achievements() {
  return (
    <section id="achievements" className="section py-10">
      <div className="container mx-auto p-5 ">
        <h2 className="text-accent text-center text-4xl  mb-10  lg:text-4xl font-secondary font-semibold uppercase ">Achievements</h2>
        <div className="flex justify-center items-center ">
          <div className="achievement-item bg-transparent p-6 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 hover:rotate-6 hover:shadow-2xl">
            <img src={mlsaLogo} alt="MLSA Logo" className="w-20 h-20 mb-3 mx-auto" />
            <h3 className="text-2xl font-secondary mb-3">Microsoft Learn Student Ambassador</h3>
            <p className="text-gray-700">
              
            </p>
          </div>
          
          {/* Add more achievement items as needed */}
        </div>
      </div>
    </section>
  );
}
