import React from 'react';
import { Wrench, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in">
            <div className="flex items-center mb-4">
              <Wrench className="h-8 w-8 text-blue-400 animate-float" />
              <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                AutoTop
              </span>
            </div>
            <p className="text-gray-400">
              Tu taller de confianza con la mejor tecnología y servicio profesional.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-bold mb-4 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-bold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              {[
                'Diagnóstico Computarizado',
                'Afinación Mayor',
                'Sistema Eléctrico',
                'Frenos',
              ].map((service) => (
                <li key={service}>
                  <a href="#servicios" className="text-gray-400 hover:text-blue-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-2" />
                <a href="tel:+52720 469 0624" className="text-gray-400 hover:text-blue-400 transition-colors">
                  720 469 0624
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-2" />
                <a href="mailto:contacto@autotop.mx" className="text-gray-400 hover:text-blue-400 transition-colors">
                  contacto@autotop.mx
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-1" />
                <span className="text-gray-400">
                  Calle laureles #20, Colonia el Romeral, Corregidora, Quéretaro
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8 text-center animate-fade-in">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} AutoTop. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}