import Hero from "@/modules/public/modules/home/components/Hero";
import Services from "@/modules/public/modules/home/components/Services";
import TopVeterinaries from "@/modules/public/modules/home/components/TopVeterinaries";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC] w-full min-h-screen inset-shadow-sm ">
      <main className="px-3 xl:max-w-6xl mx-auto xl:px-0">
        <Hero/>
        <TopVeterinaries/>
        <Services/>
      </main>
    </div>
  );
}
