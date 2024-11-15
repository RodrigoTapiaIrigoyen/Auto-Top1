import React from 'react';
import { History, Users, Award } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Sobre Nosotros
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Clinicars S.A. de C.V. es una empresa líder en el sector automotriz
            desde 2020
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: History,
              title: 'Nuestra Historia',
              description: 'Fundada en 2020, hemos crecido hasta convertirnos en un referente en el sector automotriz.',
            },
            {
              icon: Users,
              title: 'Nuestro Equipo',
              description: 'Contamos con técnicos altamente capacitados y certificados.',
            },
            {
              icon: Award,
              title: 'Compromiso',
              description: 'Nos dedicamos a ofrecer servicios de la más alta calidad.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4 animate-float">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-slide-up">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&q=80&w=1000"
              alt="Equipo AutoTop"
              className="relative w-full h-96 object-cover rounded-xl shadow-lg hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}