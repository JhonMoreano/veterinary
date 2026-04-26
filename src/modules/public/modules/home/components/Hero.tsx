import { Button } from "@/modules/shared/components/ui/button";
import { Input } from "@/modules/shared/components/ui/input";
import Image from "next/image";
import { Search } from 'lucide-react';
import Link from "next/link";
import { HERO_INFO } from "../constants/heroInfo";
import InfoCard from "./InfoCard";

export default function Hero(){
    return(
        <section className="grid grid-cols-1 py-15  lg:py-20">
            <div className="grid sm:grid-cols-2 xl:grid-cols-[1fr_360px]">
                <div>
                    <h1 className="font-roboto font-bold text-5xl lg:text-6xl lg:leading-17">
                        <span className="md:block">Encuentra la </span>
                        <span className="text-[#083D77]">atención ideal en 3 pasos</span>
                    </h1>
                    <p className="mt-4 text-sm font-robotoSlab hidden sm:block lg:text-xl xl:text-xl">Cada veterinaria tiene un perfil con su nombre, ubicación,<br className="lg:hidden" /> horario y servicios disponibles para consultar antes de tu visita.</p>
                </div>
                <div className="relative mx-auto w-[290px] h-[290px] sm:w-[250px] sm:h-[250px] lg:w-[360px] lg:h-[360px] xl:row-span-2">
                    <Image
                    src="/image.png"
                    alt="image"
                    priority
                    fill
                    className="object-contain"
                    />
                </div>
                <div className="flex flex-col text-[#083D77] gap-3 mt-10 sm:col-span-2 lg:flex-row lg:items-center xl:mt-15 xl:col-span-1">
                    <Input type="text" className="bg-white p-7 !text-xl w-full lg:max-w-50" placeholder="Ciudad/Distrito"/>
                    <Input type="text" className="bg-white p-7 !text-xl" placeholder="Consulta, Vacunas, Baño" />
                    <Link href={"/search"} className="flex items-center justify-center bg-[#FFD74B] text-white gap-3 rounded-full p-2 ">
                        <Search size={32}/>
                        <p className="text-2xl lg:hidden">Buscar</p>
                    </Link>
                </div>
            </div>
            <div className="font-adlam flex flex-col justify-between gap-5 mt-15 lg:flex-row xl:gap-10 xl:mt-10 xl:col-span-2">
                {HERO_INFO.map((item,index) => {
                    return(
                        <InfoCard key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                        color={item.color}
                        />
                    )
                })}
            </div>
        </section>
    )
}