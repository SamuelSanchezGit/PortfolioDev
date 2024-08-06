import React, { useState } from 'react';

const Header = ({ onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    onSectionChange(section);
    setIsOpen(false); // Close the menu after clicking
  };

  return (
    <header className="bg-gray-900 text-white p-4 flex items-center justify-between shadow-lg relative">
      <div className="text-3xl font-bold tracking-wider">Portfolio</div>
      <nav className="hidden md:flex space-x-8">
        <button onClick={() => handleLinkClick('home')} className="hover:text-blue-400 transition duration-300">Home</button>
        <button onClick={() => handleLinkClick('bio')} className="hover:text-blue-400 transition duration-300">Bio</button>
        <button onClick={() => handleLinkClick('skills')} className="hover:text-blue-400 transition duration-300">Skills</button>
        <button onClick={() => handleLinkClick('contact')} className="hover:text-blue-400 transition duration-300">Contact</button>
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <nav className={`absolute top-16 left-0 w-full bg-gray-900 text-white p-4 flex flex-col space-y-2 md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <button onClick={() => handleLinkClick('home')} className="block px-2 py-1 hover:text-blue-400 transition duration-300">Home</button>
        <button onClick={() => handleLinkClick('bio')} className="block px-2 py-1 hover:text-blue-400 transition duration-300">Bio</button>
        <button onClick={() => handleLinkClick('skills')} className="block px-2 py-1 hover:text-blue-400 transition duration-300">Skills</button>
        <button onClick={() => handleLinkClick('contact')} className="block px-2 py-1 hover:text-blue-400 transition duration-300">Contact</button>
      </nav>
    </header>
  );
}

export default Header;
