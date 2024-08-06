import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 flex flex-col items-center">
      <div className="flex space-x-4 mb-4">
        <a href="https://www.linkedin.com/in/samuel-sanchez-48a2aa2a7/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-700 transition duration-300" />
        </a>
        <a href="https://github.com/SamuelSanchezGit" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-white hover:text-gray-500 transition duration-300" />
        </a>
      </div>
      <p className="text-center text-lg">© 2024 Samuel Sanchez. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
