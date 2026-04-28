import { ArrowLeft, PlusCircle } from 'lucide-react';
import { path } from '../../admin/const/super-admin';

const HeaderCreateVeterinaria = () => {


    return (
        <div className=" flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-4">
                {/* Botón Volver - Útil para la navegación del dashboard */}
                <a href={path + "/veterinarias"} className="p-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl text-gray-500 hover:text-blue-600 transition-colors shadow-sm">
                    <ArrowLeft size={20} />
                </a>

                <div>
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <PlusCircle className="text-emerald-600" size={24} />
                        Nueva Veterinaria
                    </h1>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Completa los datos para dar de alta un nuevo establecimiento en la plataforma.
                    </p>
                </div>
            </div>

            {/* Indicador de progreso o ID automático (Opcional) */}
            <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/10 text-emerald-700 dark:text-emerald-400 rounded-full text-xs font-bold uppercase tracking-widest border border-emerald-100 dark:border-emerald-800">
                Registro de Sucursal
            </div>
        </div>
    );
};

export default HeaderCreateVeterinaria;