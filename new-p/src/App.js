import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Loader from './components/Loader.jsx';



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
         
        </>
      )}
    </div>
  );
}

export default App;
