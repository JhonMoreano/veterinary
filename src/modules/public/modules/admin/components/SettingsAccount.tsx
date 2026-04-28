import { Settings } from 'lucide-react'

const SettingsAccount = () => {
    return (



        <button className="icons-sidebar cursor-pointer flex items-center w-full 
                        px-3 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 
                        rounded-lg dark:text-gray-300  dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white group">
            <Settings size={18} className="text-gray-400 " />
            <span className="mx-3 ">Configuración</span>
        </button>
    )
}

export default SettingsAccount