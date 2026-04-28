import CreateVet from '@/modules/public/modules/veterinary/components/CreateVet'
import HeaderCreateVeterinaria from '@/modules/public/modules/veterinary/components/HeaderCrearVet'
import MaxWithAdmin from '@/modules/public/modules/veterinary/components/MaxWithAdmin'

const page = () => {
    return (
        <MaxWithAdmin>
            <HeaderCreateVeterinaria></HeaderCreateVeterinaria>
            <CreateVet></CreateVet>
        </MaxWithAdmin>
    )
}

export default page