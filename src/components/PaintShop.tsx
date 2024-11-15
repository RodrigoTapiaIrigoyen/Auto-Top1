import React from 'react';
import { Paintbrush, Shield, Wrench, Droplet } from 'lucide-react';

export default function PaintShop() {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hojalatería y Pintura
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contamos con el mejor equipo y tecnología para garantizar acabados
            perfectos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group animate-fade-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_2X_656263-MLM79114869736_092024-F.webp"
              alt="Cabina de pintura"
              className="relative rounded-xl shadow-lg hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-6">
              Cabina de Pintura
            </h3>
            {[
              {
                icon: Paintbrush,
                title: 'Zona de Preparación',
                desc: 'Área especializada para la preparación de superficies',
              },
              {
                icon: Droplet,
                title: 'Laboratorio de Color',
                desc: 'Sistema computarizado de igualación de color AXALTA',
              },
              {
                icon: Wrench,
                title: 'Equipo Profesional',
                desc: 'Pistolas SATA, lámparas infrarrojas y más',
              },
              {
                icon: Shield,
                title: 'Garantía de 1 Año',
                desc: 'En todos nuestros trabajos de pintura',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 bg-dark-800/50 backdrop-blur-sm p-4 rounded-xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-2 rounded-lg animate-float">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.title}</h4>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-800/50 backdrop-blur-sm p-8 rounded-xl shadow-lg animate-fade-in">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Línea de Repintado AXALTA
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Preparación',
                img: 'https://www.bhp.com.mx/hubfs/Sitio_web/Preparacion-y-acabado-de-superficies/v2/preparacion-y-acabado-de-superficies-alto-rendimiento.jpg',
              },
              {
                title: 'Aplicación',
                img: 'https://www.quicklane.com/content/dam/quicklane-global/mx/images/blog/home/que-tipos-servicio-mecanico-existen/quick-lane-quicklane-mexico-servicio-automotriz-tipos-menor-mayor.jpg',
              },
              {
                title: 'Acabado',
                img: 'https://www.axalta.com/content/axalta_blog_mx/es_ES/repintado-automotriz/gestion-talleres/tips-aumentar-produccion-taller-automotriz/_jcr_content/parMainContent/layoutcontainer/parMainContentLayout/col12/parMainContent/mediateaser.axFitIn.mediaTeaser_desktop_x1.png/1583793637031/tips-aumentar-produccion-taller-automotriz.png',
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <h4 className="font-bold text-white">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
