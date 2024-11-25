import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden bg-dark-900">
      {/* Full-screen image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/casatop.jpeg"
          alt="AutoTop Servicio Automotriz"
          className="w-full h-[75vh] object-cover animate-scale" // Ajustamos la altura a 75vh
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 to-dark-800/90"></div>
      </div>

      {/* Content overlay */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center px-4 animate-fade-in">
          <a
            href="#servicios"
            className="inline-flex items-center px-8 py-4 text-lg rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:from-blue-500 hover:to-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 animate-scale group"
          >
            Ver Servicios
            <ArrowRight className="ml-2 -mr-1 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
