import { LucideIcon } from "lucide-react";

interface InfoServicesProps {
    icon: LucideIcon,
    title: string;
    description: string;
    color: string,
}

export default function InfoServices({ icon: Icon, title, description, color }:InfoServicesProps){
    return(
        <div className="bg-white rounded-xl p-7">
            <div className={`rounded-xl w-fit p-3 ${color}`}>
                <Icon/>
            </div>
            <div className="font-roboto mt-4">
                <h3 className="text-2xl">{title}</h3>
                <p className="font-robotoSlab text-sm mt-3">{description}</p>
            </div>
        </div>
    )
}