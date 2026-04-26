import Image from "next/image";

export default function Directory(){
    return(
        <section className="w-full">
            <div className="grid grid-cols-[3fr_1fr] min-h-180">
                <div className="relative row-span-2 bg-amber-600">
                    <Image
                    src="/image2.png"
                    alt="image2"
                    priority
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="relative bg-blue-600">
                    <Image
                    src="/image2.png"
                    alt="image2"
                    priority
                    fill
                    className="object-cover"
                    />
                </div>
                <div className="relative bg-red-600 flex items-center justify-center">
                    <Image
                    src="/image2.png"
                    alt="image2"
                    priority
                    fill
                    className="object-cover brightness-20"
                    />
                    <span className="absolute text-white text-6xl">
                        +4
                    </span>
                </div>
            </div>
        </section>
    )
}