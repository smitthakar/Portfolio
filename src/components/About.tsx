import React from 'react';
import { Code, Palette, Globe } from 'lucide-react';
import smit from "../assets/smit.jpg";

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={smit}
              alt="Developer working"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <p className="text-lg text-gray-600 mb-8">
              I'm a MERN stack developer with a passion for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I build applications that are not just functional, 
              but also beautiful and user-friendly.
            </p>
            
            <div className="grid gap-6">
              <Skill
                icon={<Code className="text-blue-600" />}
                title="Development"
                description="Expert in React, Node.js, and modern web technologies"
              />
              <Skill
                icon={<Palette className="text-blue-600" />}
                title="Design"
                description="Creating beautiful and intuitive user interfaces"
              />
              <Skill
                icon={<Globe className="text-blue-600" />}
                title="Deployment"
                description="Experience with cloud platforms and DevOps practices"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-2 bg-blue-50 rounded-lg">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}