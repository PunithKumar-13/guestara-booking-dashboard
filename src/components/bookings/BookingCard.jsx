import {
  format,
  differenceInDays
} from 'date-fns'

function BookingCard({ booking }) {

  const nights =
    differenceInDays(
      new Date(booking.checkOut),
      new Date(booking.checkIn)
    )

  return (

    <div className="rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition-all duration-300">

      {/* Top */}

      <div className="flex items-start justify-between">

        <div>

          <h3 className="font-bold text-lg">
            {booking.guestName}
          </h3>

          <p className="text-slate-500 text-sm mt-1">
            Room {booking.roomNumber}
          </p>

        </div>

        <div
          className={`
            px-3 py-1 rounded-full text-xs font-semibold

            ${
              booking.status === 'confirmed'
                ? 'bg-emerald-100 text-emerald-600'
                : 'bg-amber-100 text-amber-600'
            }
          `}
        >

                  {
                      booking.status
                          .replace('_', ' ')
                          .replace(
                              /\b\w/g,
                              (char) => char.toUpperCase()
                          )
                  }

        </div>

      </div>

      {/* Dates */}

      <div className="mt-5 flex items-center justify-between text-sm">

        <div>

          <p className="text-slate-400">
            Check In
          </p>

          <p className="font-semibold mt-1">
            {format(
              new Date(booking.checkIn),
              'MMM d'
            )}
          </p>

        </div>

        <div>

          <p className="text-slate-400">
            Check Out
          </p>

          <p className="font-semibold mt-1">
            {format(
              new Date(booking.checkOut),
              'MMM d'
            )}
          </p>

        </div>

        <div>

          <p className="text-slate-400">
            Nights
          </p>

          <p className="font-semibold mt-1">
            {nights}
          </p>

        </div>

      </div>

    </div>
  )
}

export default BookingCard