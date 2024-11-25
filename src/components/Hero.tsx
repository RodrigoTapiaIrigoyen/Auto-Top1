import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left animate-fade-in">
            <h1 className="text-5xl tracking-tight font-extrabold sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl">
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text animate-gradient">
                Servicio Automotriz
              </span>
              <span className="block text-white mt-3 font-bold text-2xl sm:text-3xl lg:text-2xl xl:text-3xl">
                Reparación, Mantenimiento y Servicio
              </span>
            </h1>
            <p className="mt-3 text-sm text-gray-400 sm:mt-5 sm:text-lg lg:text-base xl:text-lg animate-slide-up">
              Somos expertos en cuidar tu vehículo con servicios de alta calidad y atención personalizada.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <a
                href="#servicios"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:from-blue-500 hover:to-blue-300 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 animate-scale"
              >
                Servicios
                <ArrowRight className="ml-2 -mr-1 h-5 w-5 animate-float" />
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg lg:max-w-md animate-float">
              <img
                className="w-full rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 hover:scale-105 transition-transform duration-300"
                src="/assets/casatop.jpeg"
                alt="Mecánico trabajando en un auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
