import React from 'react';
import { Target, Eye, Shield } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Misión',
              content: 'Ser un equipo de técnicos especializados comprometidos con ofrecer servicios automotrices de la más alta calidad.',
            },
            {
              icon: Eye,
              title: 'Visión',
              content: 'Ser reconocidos a nivel nacional como el centro de reparación automotriz más confiable y recomendado.',
            },
            {
              icon: Shield,
              title: 'Valores',
              content: ['Honestidad', 'Compromiso', 'Mejora continua', 'Precios justos', 'Responsabilidad'],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 animate-float">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              {Array.isArray(item.content) ? (
                <ul className="text-gray-400 space-y-2">
                  {item.content.map((value, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {value}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}