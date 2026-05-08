import { BedDouble } from 'lucide-react'

function OccupancyGauge({ occupancyRate }) {

  const radius = 90

  const circumference =
    Math.PI * radius

  const progress =
    circumference -
    (occupancyRate / 100) * circumference



  return (

    <div className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-[0_8px_30px_rgba(59,130,246,0.08)] backdrop-blur-xl">

      {/* Header */}

      <div className="flex items-center justify-between">

        <p className="text-sm text-slate-500">
          Occupancy (Rooms)
        </p>

        <div className="rounded-2xl bg-blue-100 p-3 text-blue-600">
          <BedDouble size={20} />
        </div>

      </div>



      {/* Percentage */}

      <h2 className="mt-4 text-5xl font-bold text-slate-900">
        {occupancyRate}%
      </h2>



      {/* SVG Gauge */}

      <div className="mt-4 flex justify-center">

        <svg
          width="240"
          height="130"
          viewBox="0 0 240 140"
        >

          {/* Background Arc */}

          <path
            d="
              M 30 120
              A 90 90 0 0 1 210 120
            "
            fill="none"
            stroke="#dbe4f0"
            strokeWidth="18"
            strokeLinecap="round"
          />



          {/* Progress Arc */}

          <path
            d="
              M 30 120
              A 90 90 0 0 1 210 120
            "
            fill="none"
            stroke="#4f7cff"
            strokeWidth="18"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            className="transition-all duration-700"
          />

        </svg>

      </div>



      {/* Footer */}

      <div className="mt-2 flex items-center justify-between">

        <p className="text-sm text-slate-500">

          {(
            occupancyRate / 10
          ).toFixed(1)}

          /10 rooms avg.

        </p>

        <p className="text-sm font-semibold text-emerald-500">
          Live Data
        </p>

      </div>

    </div>
  )
}

export default OccupancyGauge