import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SearchCard(){
    return(
        <div className="bg-white p-3 rounded-lg w-full flex shadow-[0_10px_20px_-10px_rgba(194,194,194,0.5)] lg:h-auto lg:max-h-36 [direction:ltr]">
            <Link href={"/directory"} className="relative w-30 min-w-30 h-30">
                <Image
                src="/image2.png"
                alt="image2"
                priority
                fill
                className="rounded-lg object-cover"
                />
            </Link>
            <div className="font-roboto ml-2.5 w-full overflow-hidden overflow">
                <h2 className="text-base font-bold line-clamp-1">Veterinaria El Roble </h2>
                <div className="flex items-center gap-1 text-[#666666] text-[11px] md:text-xs">
                    <MapPin size={12}/>
                    <p>Lima, Lince</p>
                </div>
                <div className='flex justify-between items-end mt-4'>
                    <div className="text-xs ">
                        <span>Hora: <br/>6:00am - 8:00pm</span>
                    </div>
                    <div className="relative w-7 min-w-7 h-7 items-end">
                        <Image src="/whatsapp.png"
                        alt="whatsapp"
                        priority
                        fill
                        />
                    </div>
                </div>
                <div className='flex gap-2 mt-3 text-[11px] md:text-xs overflow-x-auto scrollbar-hide [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden min-w-80'>         
                    <div className="flex justify-center bg-[#0082FF] text-white rounded-full px-2 gap-1.5">
                        <p>Consulta</p>
                    </div>
                    <div className="flex justify-center bg-[#0082FF] text-white rounded-full px-2 gap-1.5">
                        <p>Consulta</p>
                    </div>
                    <div className="flex justify-center bg-[#0082FF] text-white rounded-full px-2 gap-1.5">
                        <p>Consulta</p>
                    </div>
                    <div className="flex justify-center bg-[#0082FF] text-white rounded-full px-2 gap-1.5">
                        <p>Consulta</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}