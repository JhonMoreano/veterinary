'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight } from 'lucide-react';

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría tu lógica de autenticación (Auth.js, Firebase, etc.)
    console.log("Iniciando sesión...");
  };

  const handleAdminRedirect = () => {
    router.push('/super-admin/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg dark:bg-gray-900 border dark:border-gray-800">
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Bienvenido</h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Ingresa tus credenciales para acceder</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Mail size={18} />
              </span>
              <input 
                type="email" 
                placeholder="correo@ejemplo.com"
                className="w-full py-2.5 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Contraseña</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <Lock size={18} />
              </span>
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full py-2.5 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">O acceso rápido</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
        </div>

        {/* Botón de redirección especial */}
        <button 
          onClick={handleAdminRedirect}
          className="cursor-pointer flex items-center justify-center w-full px-6 py-3 text-sm font-medium text-gray-700 transition-colors duration-300 transform border rounded-lg dark:text-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 gap-2 group"
        >
          Ir al Panel Super Admin
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>

      </div>
    </div>
  );
};

export default LoginForm;