import {
  format,
  isSameMonth
} from 'date-fns'

import {
  isDateInRange
} from '../../utils/dateUtils'

import { getOccupancyForDate } from '../../utils/bookingUtils'



function getHeatmapColor(level) {

  if (level >= 9) {
    return 'bg-[#4f7cff] text-white'
  }

  if (level >= 7) {
    return 'bg-[#7ea6ff] text-[#07153a]'
  }

  if (level >= 5) {
    return 'bg-[#c8dcff] text-[#07153a]'
  }

  if (level >= 3) {
    return 'bg-[#e3efff] text-[#07153a]'
  }

  return 'bg-[#f1f6ff] text-[#07153a]'
}



function DayCell({
  day,
  bookings,
  currentMonth,
  dragStart,
  dragEnd,
  onMouseDown,
  onMouseEnter,
  onMouseUp
}) {

  const occupancy = getOccupancyForDate(day, bookings)

  const isCurrentMonth =
  isSameMonth(day, currentMonth)

  const isSelected =
  isDateInRange(
    day,
    dragStart,
    dragEnd
  )

  

  return (

    <div


     onMouseDown={() =>
    onMouseDown(day)
  }

  onMouseEnter={() =>
    onMouseEnter(day)
  }

  onMouseUp={onMouseUp}


      className={`
        h-[92px]
        rounded-xl
        border
        p-3
        transition-all
        duration-300 ease-out
        hover:shadow-[0_10px_25px_rgba(79,124,255,0.28)]
        cursor-pointer
        select-none
        scale-[1.04]
        


        ${
        isSelected
  ? `
      ring-4
      ring-blue-400
      z-20
      scale-[1.04]
      shadow-[0_10px_25px_rgba(79,124,255,0.28)]
    `
  : ''

        }

        ${
          isCurrentMonth
            ? getHeatmapColor(occupancy)
            : 'bg-[#f8fafc] text-slate-400'
        }
      `}
    >

      <div className="font-bold text-[15px]">
        {format(day, 'd')}
      </div>

      <div className="mt-5 text-[15px] font-bold">
        {occupancy}/10
      </div>

    </div>
  )
}

export default DayCell