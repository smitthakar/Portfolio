import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800">
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <SocialLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6">
            <div className="flex flex-col space-y-4">
              <NavLinks />
              <div className="flex justify-center space-x-6 pt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks() {
  return (
    <>
      {['Home', 'About', 'Projects', 'Contact'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          {item}
        </a>
      ))}
    </>
  );
}

function SocialLinks() {
  return (
    <>
      <a
        href="https://github.com/smitthakar"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Github size={20} />
      </a>
      <a
        href="www.linkedin.com/in/smit-thakar-6854bb249"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Linkedin size={20} />
      </a>
      <a
        href="mailto:smitthakar199@gmail.com"
        className="text-gray-600 hover:text-gray-900 transition-colors"
      >
        <Mail size={20} />
      </a>
    </>
  );
}