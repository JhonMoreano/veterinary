import { LucideIcon } from "lucide-react";

interface InfoCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string,
}


export default function InfoCard({ icon: Icon, title, description, color }: InfoCardProps){
    return(
        <div className={`flex bg-white rounded-xl p-6 ${color}`}>
            <div className="flex items-center mr-4">
                <Icon className="w-8 h-8"></Icon>
            </div>
            <div>
                <h4 className="text-xl">{title}</h4>
                <p className="mt-2 text-sm">{description}</p>
            </div>
        </div>
    )
}
