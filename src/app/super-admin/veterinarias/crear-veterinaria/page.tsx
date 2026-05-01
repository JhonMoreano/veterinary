import { path } from '@/modules/public/modules/admin/const/super-admin'
import CreateVet from '@/modules/public/modules/veterinary/components/CreateVet'
import HeaderReusable from '@/modules/public/modules/veterinary/components/HeaderReusable'
import MaxWithAdmin from '@/modules/public/modules/veterinary/components/MaxWithAdmin'
import { ArrowLeft } from 'lucide-react'

const page = () => {
    return (
        <MaxWithAdmin>
            <HeaderReusable sub_title='Completa los datos para dar de alta un nuevo establecimiento en la plataforma.'
                title='Crear Veterinaria'
            >
                <a href={path + "/veterinarias"} className="p-2 bg-white
                 dark:bg-gray-900 border border-gray-100
                  dark:border-gray-800 rounded-xl text-gray-500 hover:text-blue-600 transition-colors shadow-sm">
                    <ArrowLeft size={20} />
                </a>
            </HeaderReusable>
            <CreateVet></CreateVet>
        </MaxWithAdmin>
    )
}

export default page