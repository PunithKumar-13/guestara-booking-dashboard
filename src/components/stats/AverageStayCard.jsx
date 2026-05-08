import { Moon } from 'lucide-react'

function AverageStayCard({ averageStay }) {

  return (

    <div className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-[0_8px_30px_rgba(59,130,246,0.08)] backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <p className="text-sm text-slate-500">
          Average Stay
        </p>

        <div className="rounded-2xl bg-indigo-100 p-3 text-indigo-500">
          <Moon size={20} />
        </div>

      </div>



      <div className="mt-12">

        <h2 className="text-5xl font-bold">
          {averageStay}
        </h2>

        <p className="mt-3 text-sm text-slate-500">
          Average nights booked
        </p>

      </div>

    </div>
  )
}

export default AverageStayCard