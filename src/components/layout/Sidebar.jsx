import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  Users,
  BarChart3,
  Settings,
} from 'lucide-react'

const navItems = [
  {
    name: 'Dashboard',
    icon: LayoutDashboard,
    active: true,
  },

  {
    name: 'Calendar',
    icon: Calendar,
  },

  {
    name: 'Bookings',
    icon: BookOpen,
  },

  {
    name: 'Guests',
    icon: Users,
  },

  {
    name: 'Reports',
    icon: BarChart3,
  },

  {
    name: 'Settings',
    icon: Settings,
  },
]

function Sidebar() {
  return (

    <aside className="w-[260px] rounded-[32px] border border-white/40 bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(59,130,246,0.08)] p-6 flex flex-col justify-between">

      {/* Logo */}

      <div>

        <div className="flex items-center gap-4 mb-12">

          <div className="w-14 h-14 rounded-3xl bg-blue-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-200">
            G
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Guestara
            </h2>

            <p className="text-slate-500 text-sm">
              Hotel Dashboard
            </p>
          </div>

        </div>

        {/* Navigation */}

        <nav className="flex flex-col gap-3">

          {navItems.map((item) => {

            const Icon = item.icon

            return (

              <button
                key={item.name}
                className={`
                  flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200 text-left

                  ${
                    item.active
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-200'
                      : 'hover:bg-blue-50 text-slate-600'
                  }
                `}
              >

                <Icon size={20} />

                <span className="font-medium">
                  {item.name}
                </span>

              </button>

            )
          })}

        </nav>

      </div>

      {/* Bottom Card */}

      <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-5">

        <h3 className="font-semibold text-lg">
          Front Desk Analytics
        </h3>

        <p className="text-sm text-slate-500 mt-2 leading-relaxed">
          Monitor occupancy, bookings, and hotel activity in real-time.
        </p>

      </div>

    </aside>
  )
}

export default Sidebar