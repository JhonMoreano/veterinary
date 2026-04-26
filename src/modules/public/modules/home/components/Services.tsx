import { Search } from "lucide-react";
import InfoServices from "./InfoServices";
import { SERVICES } from "../constants/services";

export default function Services(){
    return(
        <section className="pt-5 pb-10 xl:pt-10 xl:pb-20">
            <h2 className="font-roboto font-bold text-3xl xl:text-4xl">
                <span>Servicios que tu </span>
                <span className="text-[#083D77]">mascota<br className="hidden xl:inline"/> necesita</span>
            </h2>
            <p className="font-robotoSlab mt-2 text-sm xl:text-base">Contamos con todos los servicios, con atención 24/7 para cuidar a tu <br/> mascosta.</p>
            <div className="grid gap-5 mt-10 xl:grid-cols-3 sm:grid-cols-2 xl:grid-rows-2 xl:gap-10 xl:mt-15">
                {SERVICES.map((item, index) => {
                    return(
                        <InfoServices key={index}
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