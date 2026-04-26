import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar(){
    return(
        <header className="font-roboto w-full">
            <nav className="flex justify-between py-4 px-3 xl:px-0 xl:max-w-6xl mx-auto">
                <Link href="/" className="text-[#083D77] text-2xl">Veteri</Link>
                <Link href="/">
                    <Button variant={"default"} className="px-5 xl:px-10 py-4 rounded-full">Registrar mi veterinaria</Button>
                </Link>
            </nav>
        </header>
    )
}