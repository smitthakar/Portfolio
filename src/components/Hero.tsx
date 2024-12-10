import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 -z-10" />
      
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">Smit Thakar</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          A passionate MERN Stack developer crafting beautiful and functional web experiences
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
}