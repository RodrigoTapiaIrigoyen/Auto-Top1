import React from 'react';
import {
  Wrench,
  Car,
  FileText,
  Sparkles,
  Paintbrush,
  SprayCan,
  Phone,
  MessageSquare,
} from 'lucide-react';

const services = [
  {
    id: 1,
    name: 'Asesoría mecánica y diagnóstico',
    description: 'Diagnóstico profesional y asesoramiento experto para tu vehículo',
    icon: Wrench,
    price: 'Consulta precio',
  },
  {
    id: 2,
    name: 'Traslado para clientes',
    description: 'Servicio de transporte gratuito a tu destino mientras reparamos tu auto',
    icon: Car,
    price: 'Servicio gratuito',
  },
  {
    id: 3,
    name: 'Trámites vehiculares',
    description: 'Gestión completa de documentación y trámites para tu vehículo',
    icon: FileText,
    price: 'Consulta precio',
  },
  {
    id: 4,
    name: 'Estética y detallado',
    description: 'Servicio completo de limpieza y detallado profesional',
    icon: Sparkles,
    price: 'Desde $800',
  },
  {
    id: 5,
    name: 'Hojalatería y pintura',
    description: 'Reparación y pintura profesional con acabados de primera',
    icon: Paintbrush,
    price: 'Cotización personalizada',
  },
  {
    id: 6,
    name: 'Cabina de pintura',
    description: 'Instalaciones especializadas para un acabado perfecto',
    icon: SprayCan,
    price: 'Incluido en servicio',
  },
];


export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios automotrices con la más alta
            calidad y garantía
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-dark-800 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 animate-float">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <p className="text-blue-400 font-bold">{service.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-slide-up">
          <p className="text-gray-400 mb-4">
            ¿Necesitas un servicio específico? ¡Contáctanos!
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="tel:+52720 469 0624"
              className="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-500 hover:to-blue-300 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center animate-scale"
            >
              <Phone className="mr-2 h-5 w-5" />
              Llamar
            </a>
            <a
              href="https://wa.me/52720 469 0624"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-400 hover:from-green-500 hover:to-green-300 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25 flex items-center animate-scale"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}