import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

const insuranceCompanies = [
  {
    name: 'Crabi Seguros',
    logo: '/assets/crabi.jpeg',
    description: 'Aseguradora digital con cobertura nacional',
  },
  {
    name: 'Chubb Seguros',
    logo: '/assets/chubb.jpeg',
    description: 'Líder mundial en seguros comerciales y personales',
  },
  {
    name: 'La Latino Seguros',
    logo: '/assets/crabi.jpeg',
    description: 'Compañía mexicana con más de 50 años de experiencia',
  },
];

export default function Certifications() {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificaciones y Alianzas
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Respaldados por las mejores certificaciones y en colaboración con las principales aseguradoras
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {insuranceCompanies.map((company, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl text-center hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-24 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={company.logo}
                  alt={`Logo de ${company.name}`}
                  className="max-h-full max-w-full object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{company.name}</h3>
              <p className="text-gray-400">{company.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 animate-fade-in">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Certificación Cesvi</h3>
            </div>
            <p className="text-gray-400">
              Certificados por el Centro de Experimentación y Seguridad Vial México, garantizando los más altos estándares de calidad en nuestros servicios.
            </p>
          </div>

          <div className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 animate-fade-in">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Garantía de Calidad</h3>
            </div>
            <p className="text-gray-400">
              Todos nuestros servicios cuentan con garantía por escrito, respaldando la calidad y durabilidad de nuestro trabajo.
            </p>
          </div>
        </div>

        <div className="relative group animate-slide-up">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
          <div className="relative bg-dark-800/90 backdrop-blur-sm rounded-xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">¿Necesitas ayuda con tu seguro?</h3>
            <p className="text-xl mb-8 text-gray-300">
              Te asesoramos en todo el proceso con tu aseguradora
            </p>
            <a
              href="tel:+527204690624"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 rounded-full text-lg font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 animate-scale"
            >
              Llámanos ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}