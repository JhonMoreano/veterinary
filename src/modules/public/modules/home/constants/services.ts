import { Search } from "lucide-react";
import { OctagonAlert, Syringe, Bath, Stethoscope, Scan } from 'lucide-react';


export const SERVICES = [
    {
        icon: OctagonAlert,
        title: 'Emergencia 24/7',
        description: 'Operan las 24 horas del día, los 365 días del año, sin necesidad de cita previa para casos graves.',
        color: 'bg-[#FEF2F2] text-[#DC2626]',
    },
    {
        icon: Syringe,
        title: 'Vacunación',
        description: 'Las vacunas introducen una forma inofensiva del patógeno, permitiendo que el cuerpo cree anticuerpos sin enfermarse.',
        color: 'bg-[#EBF9F6] text-[#48C9B0]',
    },
    {
        icon: Bath,
        title: 'Peluqueria',
        description: 'ortes de raza, baños terapéuticos y cuidados estéticos integrales realizados por especialistas en manejo amable.',
        color: 'bg-[#FEF5E7] text-[#F39C12]',
    },
    {
        icon: Search,
        title: 'Odontología',
        description: 'Salud oral avanzada para prevenir el dolor dental y la pérdida de piezas mediante tecnología ultrasónica.',
        color: 'bg-[#D2F0FF] text-[#083D77]',
    },
    {
        icon: Stethoscope,
        title: 'Cirujía',
        description: 'Intervenciones quirúrgicas realizadas con tecnología avanzada y monitoreo constante para garantizar la seguridad de tu mascota.',
        color: 'bg-[#F4EDF8] text-[#8E44AD]',
    },
    {
        icon: Scan,
        title: 'Radiología',
        description: 'Diagnóstico por imagen de alta precisión para evaluar de forma no invasiva el estado de huesos, órganos y estructuras internas.',
        color: 'bg-[#F0F2F4] text-[#566573]',
    },
]