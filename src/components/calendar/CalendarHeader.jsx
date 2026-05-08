import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import { format } from 'date-fns'

function CalendarHeader({
  currentMonth,
  onPrevMonth,
  onNextMonth,
}) {

  return (

    <div className="flex items-center justify-between mb-8">

      {/* Left */}

      <div>

        <p className="text-slate-500 text-sm">
          Occupancy Calendar
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {format(currentMonth, 'MMMM yyyy')}
        </h2>

      </div>

      {/* Buttons */}

      <div className="flex items-center gap-3">

        <button
          onClick={onPrevMonth}
          className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-50 transition-all"
        >

          <ChevronLeft size={20} />

        </button>

        <button
          onClick={onNextMonth}
          className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-50 transition-all"
        >

          <ChevronRight size={20} />

        </button>

      </div>

    </div>
  )
}

export default CalendarHeader