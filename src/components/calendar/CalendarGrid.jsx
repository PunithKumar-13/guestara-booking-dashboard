import DayCell from './DayCell'

function CalendarGrid({
  calendarDays,
  bookings,
   dragStart,
  dragEnd,
  onMouseDown,
  onMouseEnter,
  onMouseUp
}) {

  return (

    <div className="grid grid-cols-7 gap-3 mt-6">

      {
        ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
          .map((day) => (

            <div
              key={day}
              className="text-center text-sm font-semibold text-slate-500 mb-2"
            >
              {day}
            </div>
          ))
      }

      {
        calendarDays.map((day, index) => (

          <DayCell
  key={index}
  day={day}
  bookings={bookings}
  currentMonth={calendarDays[15]}
  dragStart={dragStart}
  dragEnd={dragEnd}
  onMouseDown={onMouseDown}
  onMouseEnter={onMouseEnter}
  onMouseUp={onMouseUp}
/>
        ))
      }

    </div>
  )
}

export default CalendarGrid