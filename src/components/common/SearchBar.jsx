import { Search } from 'lucide-react'

function SearchBar({
  searchQuery,
  setSearchQuery,
}) {

  return (

    <div className="relative w-[320px]">

      {/* Icon */}

      <Search
        size={25}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      {/* Input */}

      <input
        type="text"
        placeholder="Search guest or room..."

        value={searchQuery}

        onChange={(e) =>
          setSearchQuery(e.target.value)
        }

        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white/70
          py-3
          pl-11
          pr-4
          text-sm
          outline-none
          transition-all
          duration-300

          focus:border-blue-400
          focus:ring-4
          focus:ring-blue-100
        "
      />

    </div>
  )
}

export default SearchBar