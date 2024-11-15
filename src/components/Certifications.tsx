import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

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
          {[
            {
              icon: Award,
              title: 'Certificación Cesvi',
              description: 'Certificados por el Centro de Experimentación y Seguridad Vial México',
            },
            {
              icon: Shield,
              title: 'Aseguradoras',
              description: 'Colaboramos con las principales aseguradoras como Crabi y Chubb',
            },
            {
              icon: CheckCircle,
              title: 'Garantía de Calidad',
              description: 'Todos nuestros servicios cuentan con garantía por escrito',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl text-center hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
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