export const VETERINARIAS_DATA = [
    {
        id: 0,
        name: "Veterinaria 1",
        address: "Ayacucho 32",
        status: "activo",
        plan: ["Plan mayor"],
        rating: 5,
        image: null,
        hours_open: "6:00 am - 8:00pm",
        days_available: "Lunes - Sabado",
        emergency: "24 Horas",
        whatsapp: "+5491134567890", // Argentina (CABA)
        about_us: "Líderes en cuidado integral con tecnología de punta para cirugías complejas y diagnóstico por imagen.",
        lat: -34.6037,
        lng: -58.3816,
        services: ["Cirugía General", "Ecografía", "Laboratorio", "Hospitalización"],
        specialists: [
            { name: "Dr. Carlos Gómez", specialty: "Cirujano Senior" },
            { name: "Dra. Ana Luz", specialty: "Imagenología" }
        ]
    },
    {
        id: 1,
        name: "Clínica San Roque",
        address: "Av. España 450",
        status: "activo",
        plan: ["Plan medio"],
        rating: 4,
        image: null,
        hours_open: "8:00 am - 8:00pm",
        days_available: "Lunes - Sabado",
        emergency: "24 Horas",
        whatsapp: "+51987654321", // Perú
        about_us: "Especialistas en medicina interna y cuidados preventivos para mascotas de todas las edades.",
        lat: -34.6100,
        lng: -58.3900,
        services: ["Vacunación", "Desparasitación", "Odontología", "Clínica Médica"],
        specialists: [
            { name: "Dra. Elena Rossi", specialty: "Medicina Interna" },
            { name: "Dr. Juan P. Díaz", specialty: "Odontopediatría Vet" }
        ]
    },
    {
        id: 2,
        name: "Huellas de Tandil",
        address: "Rodríguez 1120",
        status: "inactivo",
        plan: ["Plan menor"],
        rating: 3,
        image: null,
        hours_open: "9:00 am - 7:00pm",
        days_available: "Lunes - Viernes",
        emergency: "No disponible",
        whatsapp: "+5492494123456", // Argentina (Tandil)
        about_us: "Atención personalizada y familiar enfocada en el bienestar básico de los animales del barrio.",
        lat: -37.3216,
        lng: -59.1332,
        services: ["Consulta General", "Peluquería Canina", "Farmacia"],
        specialists: [
            { name: "Dra. Martina Paz", specialty: "Médica Veterinaria" }
        ]
    },
    {
        id: 3,
        name: "Pampa Animal",
        address: "Chacabuco 890",
        status: "activo",
        plan: ["Plan mayor"],
        rating: 5,
        image: null,
        hours_open: "24 Horas",
        days_available: "Lunes - Domingo",
        emergency: "24 Horas",
        whatsapp: "+51912345678", // Perú
        about_us: "Hospital de alta complejidad especializado en especies no convencionales y cardiología.",
        lat: -34.6200,
        lng: -58.4000,
        services: ["Cardiología", "Traumatología", "Exóticos", "UCI"],
        specialists: [
            { name: "Dr. Roberto Pampa", specialty: "Cardiólogo" },
            { name: "Dra. Sofía Vaca", specialty: "Especialista en Exóticos" },
            { name: "Dr. Luis Sierra", specialty: "Traumatólogo" }
        ]
    },
    {
        id: 4,
        name: "Centro Veterinario Norte",
        address: "General Paz 215",
        status: "activo",
        plan: ["Plan menor"],
        rating: 4,
        image: null,
        hours_open: "8:00 am - 6:00pm",
        days_available: "Lunes - Sabado",
        emergency: "Hasta medianoche",
        whatsapp: "+5493514987654", // Argentina (Córdoba)
        about_us: "Enfoque en dermatología y nutrición clínica para mejorar la calidad de vida de tu mascota.",
        lat: -34.5800,
        lng: -58.4200,
        services: ["Dermatología", "Nutrición", "Análisis Clínicos"],
        specialists: [
            { name: "Dra. Laura Méndez", specialty: "Dermatóloga" },
            { name: "Dr. Hugo Ferrero", specialty: "Nutricionista" }
        ]
    }
];