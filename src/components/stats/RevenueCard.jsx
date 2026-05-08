import { IndianRupee } from 'lucide-react'

function RevenueCard({ totalRevenue }) {

  return (

    <div className="rounded-[28px] bg-gradient-to-br from-blue-500 to-indigo-500 p-6 text-white shadow-[0_10px_40px_rgba(59,130,246,0.25)]">

      <div className="flex items-center justify-between">

        <p className="text-sm text-white/80">
          Total Revenue
        </p>

        <div className="rounded-2xl bg-white/20 p-3">
          <IndianRupee size={20} />
        </div>

      </div>



      <div className="mt-10">

        <h2 className="text-5xl font-bold tracking-tight">

          ₹
          {(
            totalRevenue / 100000
          ).toFixed(1)}
          L

        </h2>

        <p className="mt-3 text-sm text-white/80">
          Real booking revenue
        </p>

      </div>

    </div>
  )
}

export default RevenueCard