'use client';

import React, { useState } from 'react';
import { FaGithub, FaPlay, FaTerminal, FaMusic } from 'react-icons/fa';
import ChatPopup from '../ui/ChatPopup';

const projects = [
  {
    title: 'Portfolio Website',
    description: `A personal portfolio built with Next.js and Tailwind CSS.`,
    image: '/window.svg',
    github: 'https://github.com/blade9/portfolio',
  },
  {
    title: 'WebSocket Chat Server',
    description: `Live anonymous chat application connected to a Web-socket server built with Go. 
    Automatic P2P matching and instant messaging with concurrant user tolerance. Deployed on Render.com. `,
    image: '/file.svg',
    github: 'https://github.com/blade9/quantum_secure_chat',
    hasDemo: true,
  },
  {
    title: 'Madokoin - Toy Blockchain ',
   
    description: `A toy blockchain system built in Python. 
    Includes wallet generation, transaction signing and verification, 
    a mining mechanism, balance tracking, and chain validation.`,

    image: '/globe.svg',
    github: 'https://github.com/blade9/Madokoin',
  },
  {
    title: 'MusAI - AI Music Generator',
    description: `MusAI is an AI-powered piano music transcription system that 
    converts audio recordings of piano music into MIDI files`,
    image: '/musai.svg',
    github: 'https://github.com/blade9/MusAI_v2',

  }
];

export default function ProjectsSection() {
  const [chatPopupOpen, setChatPopupOpen] = useState(false);

  return (
    <section className="w-full py-12 px-4 bg-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Individual Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300">
            <img src={project.image} alt={project.title} className="h-48 w-full object-contain bg-gray-950 p-4" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 flex-1">{project.description}</p>
              <div className="mt-4 flex items-center gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200">
                  <FaGithub className="text-lg" />
                  <span className="text-sm font-medium">GitHub</span>
                </a>
                {project.hasDemo && (
                  <button
                    onClick={() => setChatPopupOpen(true)}
                    className="inline-flex items-right gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md transition-colors duration-200"
                  >
                    <FaPlay className="text-sm" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <ChatPopup isOpen={chatPopupOpen} onClose={() => setChatPopupOpen(false)} />
    </section>
  );
} 