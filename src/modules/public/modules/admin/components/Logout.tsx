import { LogOut } from 'lucide-react'

const LogoutAccount = () => {
    return (
        <a href='/login' className="icons-sidebar cursor-pointer flex items-center w-full px-3 
        py-2 text-sm font-medium  transition-colors duration-200 rounded-lg  dark:hover:bg-red-900/10 group">
            <LogOut size={18} className=" " />
            <span className="mx-3 ">Cerrar Sesión</span>
        </a>
    )
}

export default LogoutAccount