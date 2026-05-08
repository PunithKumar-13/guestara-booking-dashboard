import { Bell, Search } from 'lucide-react'

function Header() {
  return (

    <header className="rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(59,130,246,0.08)] px-8 py-5 flex items-center justify-between">

      {/* Left */}

      <div>

        <p className="text-slate-500 text-sm">
          Monday, May 6 2026
        </p>

        <h1 className="text-3xl font-bold mt-1">
          Occupancy Overview
        </h1>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">


        {/* Notification */}

        <button className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center hover:shadow-md transition-all duration-200">

          <Bell size={20} />

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 bg-white border border-slate-100 rounded-2xl px-4 py-2 shadow-sm">

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>

            <h3 className="font-semibold">
              John Doe
            </h3>

            <p className="text-sm text-slate-500">
              Front Desk
            </p>

          </div>

        </div>

      </div>

    </header>
  )
}

export default Header