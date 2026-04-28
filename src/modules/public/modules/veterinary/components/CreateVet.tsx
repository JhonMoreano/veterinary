'use client';

const CreateVet = () => {
  return (
    <div className=" bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-8">
      <form className="space-y-6">
        
        {/* Fila 1: Nombre y Teléfono */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
              Nombre Veterinaria
            </label>
            <input 
              type="text" 
              placeholder="Value"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
              Teléfono
            </label>
            <input 
              type="tel" 
              placeholder="Value"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Fila 2: WhatsApp y Ubicación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
              Numero whatsapp
            </label>
            <input 
              type="text" 
              placeholder="Value"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
              Ubicacion
            </label>
            <input 
              type="text" 
              placeholder="Value"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Fila 3: Título Descripción */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
            Titulo descripcion (about)
          </label>
          <input 
            type="text" 
            placeholder="Value"
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Fila 4: Info Descripción (Textarea) */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 ml-1">
            Info descripcion
          </label>
          <textarea 
            placeholder="Value"
            rows={6}
            className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-400 resize-none"
          ></textarea>
        </div>

        {/* Botón de Acción */}
        <div className="pt-4">
          <button 
            type="submit"
            className="w-full py-4 bg-[#346b54] hover:bg-[#2a5543] text-white font-semibold rounded-xl shadow-md transition-all active:scale-[0.98]"
          >
            Crear Veterinaria
          </button>
        </div>

      </form>
    </div>
  );
};

export default CreateVet;