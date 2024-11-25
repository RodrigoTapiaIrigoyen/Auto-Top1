import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-dark-900">
      {/* Imagen con overlay */}
      <div className="relative">
        <img
          src="/assets/casa-casaa.jpeg"
          alt="AutoTop Servicio Automotriz"
          className="w-full h-[80vh] object-cover"
        />
        <div className="absolute inset-0 bg-dark-900/50"></div>
      </div>

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl font-bold">SERVICIO AUTOMOTRIZ</h1>
        <p className="mt-4 text-lg font-medium">
          Reparación, Mantenimiento y Servicio, desde 1998.
        </p>
        <a
          href="#servicios"
          className="mt-6 inline-flex items-center px-8 py-4 bg-blue-500 text-white text-lg font-medium rounded hover:bg-blue-600 transition-all"
        >
          AGENDE UNA CITA
        </a>
      </div>
    </section>
  );
}
