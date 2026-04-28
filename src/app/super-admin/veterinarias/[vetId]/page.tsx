'use client';

import { Clock, MapPin, Image as ImageIcon, MessageCircle } from 'lucide-react';

interface VetDetail {
  vetId: number
}

const VeterinariaDetalle = ({ params }: {params: VetDetail}) => {
  


  console.log(params.vetId);
  // En una app real, aquí harías un fetch usando el id
  const vetData = {
    name: "Clínica Veterinaria Aristocat",
    horario: "6:00 am - 8:00pm",
    dias: "Lunes - Sabado",
    emergencia: "24 Horas",
    whatsapp: "656546456545",
    sobreNosotros: "Información detallada sobre la veterinaria...",
    lat: -34.6037, // Ejemplo
    lng: -58.3816  // Ejemplo
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">

      {/* Sección Superior: Fotos e Info Rápida */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Columna Izquierda: Galería/Foto Principal */}
        <div className="lg:col-span-5 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center min-h-[400px] shadow-sm">
          <div className="flex flex-col items-center text-gray-400">
            <ImageIcon size={64} strokeWidth={1} />
            <span className="text-3xl font-bold mt-4">Sin fotos</span>
          </div>
        </div>

        {/* Columna Derecha: Horarios, Contacto y Mapa */}
        <div className="lg:col-span-7 space-y-6">

          {/* Card Horarios */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm">
            <div className="flex gap-3">
              <Clock className="text-gray-400" size={20} />
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Horario: {vetData.horario}
                </p>
                <p className="text-gray-500">{vetData.dias}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-800 dark:text-gray-200">
                Emergencia: <span className="text-emerald-600">{vetData.emergencia}</span>
              </p>
            </div>
          </div>

          {/* Botón WhatsApp Estilo Imagen */}
          <button className="w-full bg-[#073b73] hover:bg-[#052d59] text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md">
            <MessageCircle size={24} fill="currentColor" />
            <span className="text-lg font-medium">{vetData.whatsapp}</span>
          </button>

          {/* Card Ubicación con "Mapa" */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Ubicacion</h3>
            <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden relative border border-gray-200 dark:border-gray-700">
              {/* Aquí iría el componente de Google Maps o Leaflet */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center text-gray-400">
                  <MapPin size={32} className="text-red-500 mb-2" />
                  <span className="text-xs uppercase tracking-widest font-bold">Mapa Interactivo</span>
                </div>
              </div>
              {/* Placeholder de imagen de mapa para simular la captura */}
              <div className="w-full h-full opacity-30 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=-12.0463,-77.0427&zoom=13&size=600x300&key=YOUR_KEY')] bg-cover"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección Inferior: Sobre la Veterinaria */}
      <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 min-h-[250px]">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Sobre la veterinaria
        </h2>
        <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {/* Contenido dinámico */}
          <p>ID de consulta: <span className="font-mono text-blue-500">{params.vetId}</span></p>
          <p className="mt-4">
            Aquí aparecerá toda la descripción cargada desde el formulario de Info descripción.
          </p>
        </div>
      </div>

    </div>
  );
};

export default VeterinariaDetalle;