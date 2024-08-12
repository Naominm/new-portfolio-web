import React from 'react';
import mlsaLogo from '../assets/transparent.png';

export default function Achievements() {
  return (
    <section id="achievements" className="section py-10 mt-5 ">
      <div className="container mx-10 p-5">
        <h2 className="text-white text-center text-4xl mb-10 lg:text-4xl font-secondary font-semibold uppercase">Achievements</h2>
        <div className="flex justify-center items-center">
          <div className="achievement-item bg-white bg-opacity-20 p-6 rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105 hover:rotate-3 hover:shadow-2xl">
            <img src={mlsaLogo} alt="MLSA Logo" className="w-20 h-20 mb-3 mx-auto filter drop-shadow-md" />
            <h3 className="text-white text-2xl font-secondary mb-3">Microsoft Learn Student Ambassador</h3>
          
          </div>
          
          {/* Add more achievement items as needed */}
        </div>
      </div>
    </section>
  );
}
