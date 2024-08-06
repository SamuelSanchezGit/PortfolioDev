import React from 'react';

const Project = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white mx-auto">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-400 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-4 flex justify-center"> {/* Centrer le bouton */}
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Project
        </a>
      </div>
    </div>
  );
}

export default Project;
