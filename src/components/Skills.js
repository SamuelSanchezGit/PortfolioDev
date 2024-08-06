import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaSass, FaPython, FaGithub, FaFigma, FaDigitalOcean } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiVisualstudiocode, SiMicrosoftazure, SiCsharp, SiLua } from 'react-icons/si';

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 className="text-4xl text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-4xl text-blue-600" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-4xl text-yellow-500" /> },
  { name: 'React', icon: <FaReact className="text-4xl text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-600" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-4xl text-teal-500" /> },
  { name: 'Sass', icon: <FaSass className="text-4xl text-pink-400" /> },
  { name: 'MySQL', icon: <SiMysql className="text-4xl text-blue-800" /> },
  { name: 'Python', icon: <FaPython className="text-4xl text-yellow-400" /> },
  { name: 'Azure', icon: <SiMicrosoftazure className="text-4xl text-blue-500" /> },
  { name: 'Figma', icon: <FaFigma className="text-4xl text-purple-600" /> },
  { name: 'VS Code', icon: <SiVisualstudiocode className="text-4xl text-blue-500" /> },
  { name: 'GitHub', icon: <FaGithub className="text-4xl text-black" /> },
  { name: 'DigitalOcean', icon: <FaDigitalOcean className="text-4xl text-blue-500" /> },
  { name: 'C#', icon: <SiCsharp className="text-4xl text-purple-600" /> },
  { name: 'Lua', icon: <SiLua className="text-4xl text-blue-400" /> },
];

const Skills = () => {
  const skillsLength = skillsData.length;
  const lastRowLength = skillsLength % 4;
  const isOdd = lastRowLength !== 0;

  return (
    <div id="skills" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Mes Compétences</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData.map((skill, index) => (
          <div key={skill.name} className={`flex flex-col items-center ${isOdd && index >= skillsLength - lastRowLength ? 'col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1' : ''}`}>
            {skill.icon}
            <p className="mt-2 text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
