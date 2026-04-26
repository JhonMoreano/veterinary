import SearchResult from "@/modules/public/modules/search/components/SearchResult";

export default function Search() {
  return (
    <div className="bg-[#F8FAFC] w-full min-h-screen inset-shadow-sm ">
      <main className="px-3 xl:max-w-6xl mx-auto xl:px-0">
            <SearchResult></SearchResult>
        </main>
    </div>
  )
}