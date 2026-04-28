import { Home, LayoutDashboard, User, LogOut, LogIn, PawPrint, ShieldCheck, Settings } from 'lucide-react';

const Sidebar = () => {
    // Simulación de estado de sesión
    const isLoggedIn = true;
    const user = {
        name: "Jorge",
        role: "Admin",
        avatar: "" // URL de imagen si tuvieras
    };
    const path = "/super-admin"
    return (
        <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">

            {/* Logo */}
            <div className="flex items-center gap-x-3 px-2">
                <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                    <img src="/logo-vetery.svg" alt="" />
                </div>
                <span className="text-xl font-semibold text-gray-800 dark:text-white">Veteri</span>
            </div>

            {/* Navegación */}
            <div className="flex flex-col justify-between flex-1 mt-10">
                <nav className="space-y-3">


                    <a className="icons-sidebar flex items-center px-3 py-2 text-gray-600
                    transition-colors duration-300 transform rounded-lg dark:text-gray-300
                     hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href={path + "/dashboard"}>
                        <LayoutDashboard size={20} />
                        <span className="mx-2 text-sm font-medium">Dashboard</span>
                    </a>
                    <a className="icons-sidebar flex items-center px-3 py-2 text-gray-600 transition-colors 
                    duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800
                     dark:hover:text-gray-200 hover:text-gray-700" href={path + "/veterinarias"}>
                        <PawPrint className='' />
                        <span className=" mx-2 text-sm font-medium">Veterinarias</span>
                    </a>
                </nav>

                {/* Sección de Perfil y Sesión */}
                <div className="mt-auto border-t border-gray-200 dark:border-gray-700 pt-6 px-2">

                    {/* Contenedor de Perfil Principal */}
                    <div className="flex gap-[1rem]  items-center mb-6 text-center cursor-pointer icons-sidebar p-2 rounded-2xl">
                        <div className=" relative mb-3 ">
                            {/* Avatar / Círculo de Usuario */}
                            <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center border-2 border-white dark:border-gray-800 shadow-sm">
                                <User size={32} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            {/* Badge de Rol (opcional, da un toque profesional) */}
                            <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900"></div>
                        </div>

                        {/* Nombre en grande y Rol */}
                        <div>

                            <h3 className="text-[1.5rem] font-bold text-gray-900 dark:text-white leading-tight">
                                {user.name}
                            </h3>
                            <div className="flex items-center gap-1 mt-1 text-blue-600 dark:text-blue-400">
                                <ShieldCheck size={14} />
                                <span className="text-xs font-semibold uppercase tracking-wider">
                                    {user.role}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Opciones de Configuración y Sesión */}
                    <nav className="space-y-1">
                        <button className="icons-sidebar cursor-pointer flex items-center w-full 
                        px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 
                        rounded-lg dark:text-gray-300  dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white group">
                            <Settings size={18} className="text-gray-400 " />
                            <span className="mx-3 ">Configuración</span>
                        </button>

                        <button className="icons-sidebar cursor-pointer flex items-center w-full px-3 
                        py-2 text-sm font-medium  transition-colors duration-200 rounded-lg  dark:hover:bg-red-900/10 group">
                            <LogOut size={18} className=" " />
                            <span className="mx-3 ">Cerrar Sesión</span>
                        </button>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;