import Hero from "@/modules/public/modules/directory/components/Hero";
import Tabs from "@/modules/public/modules/directory/components/Tabs";

export default function Directory() {
  return (
    <div className="bg-[#F8FAFC] w-full min-h-screen inset-shadow-sm ">
        <Hero/>
        <div className="relative items-start grid grid-cols-[1fr_auto] max-w-6xl mx-auto mt-10 gap-5">
          <main className="min-h-[1500px]">
            <Tabs></Tabs>
          </main>
          <aside className="sticky top-0">
            asdadad
          </aside>
        </div>
        
    </div>
  )
}