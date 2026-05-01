'use client';

import HeaderReusable from '@/modules/public/modules/veterinary/components/HeaderReusable';
import { VETERINARIAS_DATA } from '@/modules/public/modules/veterinary/const/vet-list';
import { Clock, MapPin, Image as ImageIcon, MessageCircle, ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import path from 'path';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
interface Vet {
  id: number;
  name: string;
  address: string;
  status: string;
  plan: string[];
  rating: number;
  image: string | null;
  hours_open: string;
  days_available: string;
  emergency: string;
  whatsapp: string;
  about_us: string;
  lat: number;
  lng: number;
  services: string[];
  specialists: { name: string; specialty: string }[];
}


const VeterinariaDetalle = () => {
  const router = useRouter()
  const { vetId } = useParams();
  // console.log(vetId);
  // console.log(params.vetId);
  // En una app real, aquí harías un fetch usando el id

  const vet_data: Vet | undefined = VETERINARIAS_DATA.find(vet => vet.id === Number(vetId));

  if (!vet_data) {
    return <div>Veterinaria no encontrada</div>;
  }

  // console.log(vet_data);

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-6">
      <HeaderReusable title='Detalles veterinaria'>
        
      </HeaderReusable>
      {/* Sección Superior: Fotos e Info Rápida */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Columna Izquierda: Galería/Foto Principal */}
        <div className="lg:col-span-5 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 flex flex-col items-center justify-center min-h-[400px] shadow-sm">
          <div className="flex flex-col items-center text-gray-400">
            <ImageIcon size={64} strokeWidth={1} />


            <img src={vet_data.image || ''} alt={vet_data.name} />
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">

          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm">
            <h2 className=" text-2xl font-bold text-gray-800 dark:text-white">{vet_data.name}</h2>
          </div>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex justify-between items-center text-sm">
            <div className="flex gap-3">
              <Clock className="text-gray-400" size={20} />
              <div>
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Horario: {vet_data.hours_open}
                </p>
                <p className="text-gray-500">{vet_data.days_available}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-800 dark:text-gray-200">
                Emergencia: <span className="text-emerald-600">{vet_data.emergency}</span>
              </p>
            </div>
          </div>

          {/* Botón WhatsApp Estilo Imagen */}
          <button className="w-full cursor-pointer bg-[#073b73] hover:bg-[#052d59] text-white py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-md">
            <MessageCircle size={24} fill="currentColor" />
            <span className="text-lg font-medium">{vet_data.whatsapp}</span>
          </button>

          {/* Card Ubicación con "Mapa" */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 space-y-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Ubicacion</h3>
            <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden relative border border-gray-200 dark:border-gray-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center text-gray-400">
                  <MapPin size={32} className="text-red-500 mb-2" />
                  {vet_data.lat && vet_data.lng ? (
                    <span className="text-xs uppercase tracking-widest font-bold">Ubicacion definida</span>
                  ) : (
                    <span className="text-xs uppercase tracking-widest font-bold">Sin una ubicacion definida</span>
                  )}
                  {vet_data.lat && vet_data.lng ? (
                    <MapContainer center={[vet_data.lat, vet_data.lng]} zoom={13} style={{ width: '100%', height: '100%' }}>
                      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                      <Marker position={[vet_data.lat, vet_data.lng]}>
                        {/* -37.32834085734585, -59.136675484784334 */}
                        <Popup>
                          {vet_data.name}
                        </Popup>
                      </Marker>
                    </MapContainer>
                  ) : (
                    <span className="text-xs uppercase tracking-widest font-bold">Sin una ubicacion definida</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 min-h-[250px]">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Sobre la veterinaria
        </h2>
        <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {/* Contenido dinámico */}
          <p>ID de consulta: <span className="font-mono text-blue-500">{vet_data.id}</span></p>
          <p className="mt-4">
            {vet_data.about_us}
          </p>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 min-h-[250px]">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Servicios
        </h2>
        <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {/* Contenido dinámico */}
          <ul className="list-disc list-inside">
            {vet_data.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>
        <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Especialistas
          </h3>
          <ul className="list-disc list-inside">
            {vet_data.specialists.map((specialist) => (
              <li key={specialist.name}>{specialist.name} - {specialist.specialty}</li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default VeterinariaDetalle;