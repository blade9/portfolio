"use client"
import React, { useState } from 'react';
import { FaReact, FaPython, FaJs, FaDatabase } from 'react-icons/fa';

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-3xl" />,
    description: `React enables fast, interactive UIs, and 
    component-based architecture.`
  },
  {
    name: 'Python',
    icon: <FaPython className="text-yellow-400 text-3xl" />,
    description: `Python is versatile and great for 
    data science, scripting, and backend.`,
  },
  {
    name: 'JavaScript',
    icon: <FaJs className="text-yellow-300 text-3xl" />,
    description: `JavaScript powers the web and enables dynamic, 
    interactive sites.`,
  },
  {
    name: 'Databases',
    icon: <FaDatabase className="text-green-400 text-3xl" />,
    description: `Databases store and organize data 
    efficiently for scalable apps.`,
  },
];

export default function SkillsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full py-12 px-4 bg-gray-950">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Skills</h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="relative bg-gray-800 rounded-lg shadow-md p-6 w-64 h-28 flex flex-col items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex items-center gap-3 mb-2">
              {skill.icon}
              <span className="text-lg font-semibold text-white">{skill.name}</span>
            </div>
            <div className={`absolute left-0 top-0 w-full h-full bg-gray-900 bg-opacity-95 rounded-lg flex items-center justify-center px-4 text-center text-sm text-purple-200 transition-opacity duration-300 ${hovered === idx ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none'}`}>
              {skill.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 