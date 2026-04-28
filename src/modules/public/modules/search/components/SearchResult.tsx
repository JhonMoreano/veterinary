import { Search } from 'lucide-react';
import { Input } from "@/modules/shared/components/ui/input";
import Image from 'next/image';
import Link from 'next/link';
import SearchCard from './SearchCard';

export default function SearchResult(){
    return(
        <section>
            <div className='font-roboto flex flex-col gap-2 justify-between pt-15 md:flex-row'>
                <h2 className="text-[#083D77] font-roboto font-bold text-4xl">Buscar veterinaria</h2>
                <p>201 resultados de busqueda</p>
            </div>
            <div className="flex flex-col text-[#083D77] gap-3 mt-5 lg:flex-row lg:items-center">
                <Input type="text" className="bg-white p-5 sm:p-7 sm:!text-xl w-full lg:max-w-50" placeholder="Ciudad/Distrito"/>
                <Input type="text" className="bg-white p-5 sm:p-7 sm:!text-xl" placeholder="Consulta, Vacunas, Baño" />
                <Link href={"/search"} className="flex items-center justify-center bg-[#FFD74B] text-white text-xl gap-1.5 md:gap-3 rounded-full p-2">
                    <Search/>
                    <p className=" lg:hidden">Buscar</p>
                </Link>
            </div>
            <div className='mt-10 md:mt-15 flex flex-col gap-6 lg:flex-row'>
                <div className='grid grid-cols-1 mb-10 gap-y-4 sm:grid-cols-2 sm:gap-x-4 lg:flex lg:flex-col sm:max-h-150 pl-2 overflow-y-scroll [direction:rtl] order-last lg:order-first'>
                    {Array.from({ length: 10}).map ((_, index) =>
                    <SearchCard key={index}/>
                    )}
                </div>
                <div className='relative w-full h-100 sm:h-150 '>
                    <Image
                        src="/mapa.jpg"
                        alt="mapa"
                        priority
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}