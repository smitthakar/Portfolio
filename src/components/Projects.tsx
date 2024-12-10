import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce clone',
    description: 'A full-featured online shopping platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    tags: ['React'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Food Delivery System',
    description: 'A collaborative task management tool with real-time updates',
    image: 'https://media.istockphoto.com/id/1979503998/photo/man-hand-holding-phone-with-food-delivery-app-on-screen.jpg?s=2048x2048&w=is&k=20&c=EacqtW40Vw8leN4-J6bURQMaZezRKwMt8xWqfLBznuw=',
    tags: ['MERN'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'ToDO  Website',
    description: 'A modern portfolio website built with React and Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'Tailwind CSS'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}