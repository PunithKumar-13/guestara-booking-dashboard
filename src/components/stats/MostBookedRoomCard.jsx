import { Building2 } from 'lucide-react'

function MostBookedRoomCard({
  mostBookedRoom,
}) {

  return (

    <div className="rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-[0_8px_30px_rgba(59,130,246,0.08)] backdrop-blur-xl">

      <div className="flex items-center justify-between">

        <p className="text-sm text-slate-500">
          Most Booked Room
        </p>

        <div className="rounded-2xl bg-cyan-100 p-3 text-cyan-600">
          <Building2 size={20} />
        </div>

      </div>



      <div className="mt-8">

        <h2 className="text-4xl font-bold leading-tight text-blue-600">

          {mostBookedRoom.room}

        </h2>

        <p className="mt-4 text-sm text-slate-500">

          {mostBookedRoom.count}
          {' '}
          total reservations

        </p>

      </div>

    </div>
  )
}

export default MostBookedRoomCard