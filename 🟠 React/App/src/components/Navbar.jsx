import React from 'react';

const Navbar = ({ title, logo, children }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        {logo && (
          <img src={logo} alt="Logo" className="h-8 w-8 rounded-full mr-2" />
        )}
        <span className="text-xl font-bold">{title}</span>
      </div>
      <div className="flex space-x-4">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;