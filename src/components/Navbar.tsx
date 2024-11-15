import React, { useState, useEffect } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src="/assets/auto-top.jpeg" alt="Logo" className="h-8 w-8" />
            <Wrench className="h-8 w-8 text-blue-500 animate-float" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              AutoTop
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#inicio"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#servicios"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#contacto"
              className="text-gray-300 hover:text-blue-500 transition-colors"
            >
              Contacto
            </a>
            <a
              href="https://wa.me/52720 469 0624"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
            >
              WhatsApp
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-dark-800 rounded-lg mt-2">
              <a
                href="#inicio"
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </a>
              <a
                href="#contacto"
                className="block px-3 py-2 text-gray-300 hover:text-blue-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </a>
              <a
                href="https://wa.me/52720 469 0624"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full text-center"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
