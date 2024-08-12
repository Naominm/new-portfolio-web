import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Loader from './components/Loader.jsx';
import Banner from './components/Banner.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Banner />
          <Navbar />  {/* Navbar with links to sections, including Contact */}
          <About />
          <Services />
          <Projects />
          <Achievements />
          <Contact />  {/* Contact section linked from Navbar */}
        </>
      )}
    </div>
  );
}

export default App;
