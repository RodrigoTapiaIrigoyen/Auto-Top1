import React from 'react';
import { Star, Shield, Clock } from 'lucide-react';

const cars = [
  {
    id: 1,
    name: "Mercedes-Benz GLE 2024",
    price: "1,299,000",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80",
    specs: "3.0L V6 • 362 HP • Automático"
  },
  {
    id: 2,
    name: "BMW X5 2024",
    price: "1,459,000",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80",
    specs: "4.4L V8 • 456 HP • Automático"
  },
  {
    id: 3,
    name: "Audi Q8 2024",
    price: "1,589,000",
    image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80",
    specs: "3.0L V6 • 335 HP • Automático"
  }
];

export default function FeaturedCars() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Vehículos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestra selección premium de vehículos de lujo, cada uno cuidadosamente elegido para satisfacer los más altos estándares.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition group">
              <div className="relative">
                <img src={car.image} alt={car.name} className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-yellow-500 inline" />
                  <span className="ml-1 text-sm font-medium">Destacado</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{car.specs}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">MXN ${car.price}</span>
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition text-sm">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md">
            <div className="bg-red-100 p-3 rounded-full">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Garantía Extendida</h3>
              <p className="text-gray-600 text-sm">Protección completa para tu inversión</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md">
            <div className="bg-red-100 p-3 rounded-full">
              <Star className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Calidad Premium</h3>
              <p className="text-gray-600 text-sm">Vehículos certificados y verificados</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-md">
            <div className="bg-red-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Atención 24/7</h3>
              <p className="text-gray-600 text-sm">Soporte y asistencia en todo momento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}