import Image from "next/image";
import { MapPin,Circle,Eye } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/modules/shared/components/ui/carousel";


export default function TopVeterinaries(){
    return(
        <section className="pt-5 pb-10 xl:pt-10 xl:pb-20">
            <h2 className="font-roboto font-bold text-3xl xl:text-4xl">
                <span>Veterinarias </span>
                <span className="text-[#083D77]">destacadas</span>
            </h2>
            <p  className="font-robotoSlab mt-2 text-sm xl:text-base">Las veterinarias preferidas y/o mas solicitadas por nuestros usuarios a <br/>lo largo de este mes.</p>
            <div className="flex gap-5 mt-5 xl:mt-10 overflow-hidden">
                <Carousel className="w-full" 
                    opts={{
						loop: true,
					}}>
                    <CarouselContent>
                        <CarouselItem className="basis-auto">
                            <div className="bg-white p-3 rounded-lg max-w-[270px] shadow-[0_10px_20px_-10px_rgba(194,194,194,0.5)]">
                                    <div className="relative w-full h-30">
                                        <Image
                                        src="/image2.png"
                                        alt="image2"
                                        priority
                                        fill
                                        className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="font-roboto mt-2 mx-1">
                                        <h2 className="text-xl font-bold line-clamp-1">Veterinaria El Roble 1</h2>
                                        <div className="flex items-center gap-1 text-[#666666] text-xs">
                                            <MapPin size={12}/>
                                            <p>Lima, Lince</p>
                                        </div>
                                        <div className="flex  items-center mt-2 gap-2">
                                            <Circle className="fill-[#2DEF2D]" stroke="0" size={10}/>
                                            <p className="text-sm">Abierto Ahora</p>
                                        </div>
                                        <div className="flex items-center justify-center bg-[#0082FF] text-white rounded-sm mt-3 text-sm py-1 gap-1.5">
                                            <Eye size={20}/>
                                            <p>Ver perfil</p>
                                        </div>
                                    </div>
                                </div>
                        </CarouselItem>
                        <CarouselItem className="basis-auto">
                            <div className="bg-white p-3 rounded-lg max-w-[270px] shadow-[0_10px_20px_-10px_rgba(194,194,194,0.5)]">
                                    <div className="relative w-full h-[120px]">
                                        <Image
                                        src="/image2.png"
                                        alt="image2"
                                        priority
                                        fill
                                        className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="font-roboto mt-2 mx-1">
                                        <h2 className="text-xl font-bold line-clamp-1">Veterinaria El Roble 2</h2>
                                        <div className="flex items-center gap-1 text-[#666666] text-xs">
                                            <MapPin size={12}/>
                                            <p>Lima, Lince</p>
                                        </div>
                                        <div className="flex  items-center mt-2 gap-2">
                                            <Circle className="fill-[#2DEF2D]" stroke="0" size={10}/>
                                            <p className="text-sm">Abierto Ahora</p>
                                        </div>
                                        <div className="flex items-center justify-center bg-[#0082FF] text-white rounded-sm mt-3 text-sm py-1 gap-1.5">
                                            <Eye size={20}/>
                                            <p>Ver perfil</p>
                                        </div>
                                    </div>
                                </div>
                        </CarouselItem>
                        <CarouselItem className="basis-auto">
                            <div className="bg-white p-3 rounded-lg max-w-[270px] shadow-[0_10px_20px_-10px_rgba(194,194,194,0.5)]">
                                    <div className="relative w-full h-[120px]">
                                        <Image
                                        src="/image2.png"
                                        alt="image2"
                                        priority
                                        fill
                                        className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="font-roboto mt-2 mx-1">
                                        <h2 className="text-xl font-bold line-clamp-1">Veterinaria El Roble 3</h2>
                                        <div className="flex items-center gap-1 text-[#666666] text-xs">
                                            <MapPin size={12}/>
                                            <p>Lima, Lince</p>
                                        </div>
                                        <div className="flex  items-center mt-2 gap-2">
                                            <Circle className="fill-[#2DEF2D]" stroke="0" size={10}/>
                                            <p className="text-sm">Abierto Ahora</p>
                                        </div>
                                        <div className="flex items-center justify-center bg-[#0082FF] text-white rounded-sm mt-3 text-sm py-1 gap-1.5">
                                            <Eye size={20}/>
                                            <p>Ver perfil</p>
                                        </div>
                                    </div>
                                </div>
                        </CarouselItem>
                        <CarouselItem className="basis-auto">
                            <div className="bg-white p-3 rounded-lg max-w-[270px] shadow-[0_10px_20px_-10px_rgba(194,194,194,0.5)]">
                                    <div className="relative w-full h-[120px]">
                                        <Image
                                        src="/image2.png"
                                        alt="image2"
                                        priority
                                        fill
                                        className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="font-roboto mt-2 mx-1">
                                        <h2 className="text-xl font-bold line-clamp-1">Veterinaria El Roble 4</h2>
                                        <div className="flex items-center gap-1 text-[#666666] text-xs">
                                            <MapPin size={12}/>
                                            <p>Lima, Lince</p>
                                        </div>
                                        <div className="flex  items-center mt-2 gap-2">
                                            <Circle className="fill-[#2DEF2D]" stroke="0" size={10}/>
                                            <p className="text-sm">Abierto Ahora</p>
                                        </div>
                                        <div className="flex items-center justify-center bg-[#0082FF] text-white rounded-sm mt-3 text-sm py-1 gap-1.5">
                                            <Eye size={20}/>
                                            <p>Ver perfil</p>
                                        </div>
                                    </div>
                                </div>
                        </CarouselItem>
                        <CarouselItem className="basis-auto">
                            <div className="bg-white p-3 rounded-lg max-w-[270px] shadow-[0_10px_20px_-10px_rgba(194,194,194,0.5)]">
                                    <div className="relative w-full h-[120px]">
                                        <Image
                                        src="/image2.png"
                                        alt="image2"
                                        priority
                                        fill
                                        className="rounded-lg object-cover"
                                        />
                                    </div>
                                    <div className="font-roboto mt-2 mx-1">
                                        <h2 className="text-xl font-bold line-clamp-1">Veterinaria El Roble 5</h2>
                                        <div className="flex items-center gap-1 text-[#666666] text-xs">
                                            <MapPin size={12}/>
                                            <p>Lima, Lince</p>
                                        </div>
                                        <div className="flex  items-center mt-2 gap-2">
                                            <Circle className="fill-[#2DEF2D]" stroke="0" size={10}/>
                                            <p className="text-sm">Abierto Ahora</p>
                                        </div>
                                        <div className="flex items-center justify-center bg-[#0082FF] text-white rounded-sm mt-3 text-sm py-1 gap-1.5">
                                            <Eye size={20}/>
                                            <p>Ver perfil</p>
                                        </div>
                                    </div>
                                </div>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    )
}