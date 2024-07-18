import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
      <style jsx>{`
        .loader {
          border-top-color: #3498db; /* Blue */
          border-right-color: #e74c3c; /* Red */
          border-bottom-color: #ecf0f1; /* White */
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
