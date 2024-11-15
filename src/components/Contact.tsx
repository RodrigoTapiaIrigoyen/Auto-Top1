import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Contáctanos por cualquiera de estos medios
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: MapPin,
              title: 'Dirección',
              content: 'Calle laureles #20, Colonia el Romeral, C.P. 76915, Corregidora, Quéretaro',
            },
            {
              icon: Phone,
              title: 'Teléfono',
              content: '720 469 0624',
              link: 'tel:+52720 469 0624',
            },
            {
              icon: Mail,
              title: 'Email',
              content: 'contacto@autotop.mx',
              link: 'mailto:contacto@autotop.mx',
            },
            {
              icon: Clock,
              title: 'Horario',
              content: 'Lun - Sáb: 9:00 - 18:00',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl text-center hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-400">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg animate-slide-up">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.8864132555584!2d-100.4436248!3d20.5895677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b31c7c7b00d%3A0x4b7c8f8f8f8f8f8f!2sAutoTop!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
            className="w-full h-96 rounded-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}