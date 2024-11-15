import React from 'react';
import { Warehouse, Wrench, Car, Clock } from 'lucide-react';

const facilities = [
  {
    image:
      'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=1000',
    title: 'Área Techada',
    description: '2500 metros cuadrados de espacio techado',
  },
  {
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLdyk9ZETdta5-yh6L_FJ-1SvUPIFJj71oqogkbgXAAJVtJk_Up7Up9xzWhOwjJKHJOtN2YM2ytqiUPVLkxCSGLlYOGxPZHuW0cSEQGYolUoo1iz-eevS98w0UcER9VMSQMlB-che9IlUB/s1600/bahia+de+un+taller.jpg',
    title: 'Patio',
    description: '7500 metros cuadrados de patio',
  },
  {
    image:
      'https://http2.mlstatic.com/D_NQ_NP_868144-MLM79114860020_092024-O.webp',
    title: 'Cabina de Pintura',
    description: 'Equipamiento de última generación',
  },
];

export default function Facilities() {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Nuestras Instalaciones
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contamos con instalaciones modernas y equipadas con la última
            tecnología
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-900/90 z-10"></div>
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  {facility.title}
                </h3>
                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Warehouse,
              title: 'Amplias Instalaciones',
              desc: '10,000 m² totales',
            },
            {
              icon: Wrench,
              title: 'Equipo Moderno',
              desc: 'Última tecnología',
            },
            { icon: Car, title: 'Capacidad', desc: 'Múltiples vehículos' },
            { icon: Clock, title: '24/7', desc: 'Recepción 24 horas' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 animate-float">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
