import BookingCard from './BookingCard'

function BookingPanel({
  selectedBookings,
  dragStart,
  dragEnd,
  searchQuery,
  clearSelection,
}) {

  return (

    <section className="sticky top-6 flex h-[720px] flex-col rounded-[32px] border border-white/40 bg-white/70 p-6 shadow-[0_8px_30px_rgba(59,130,246,0.08)] backdrop-blur-xl">

      {/* Header */}

      <div className="mb-6 flex items-start justify-between">

        {/* Left */}

        <div>

          <p className="text-sm text-slate-500">
            Selected Range
          </p>

          <h2 className="mt-2 text-2xl font-bold">

            {
              dragStart && dragEnd
                ? `${selectedBookings.length} bookings found`
                : 'No Selection'
            }

          </h2>

        </div>



        {/* Clear Button */}

        {
          (dragStart || searchQuery) && (

            <button
              onClick={clearSelection}
              className="
                rounded-xl
                border
                border-slate-200
                bg-white
                px-4
                py-2
                text-sm
                font-medium
                text-slate-600
                transition-all
                duration-300

                hover:border-red-200
                hover:bg-red-50
                hover:text-red-500
              "
            >

              Clear

            </button>

          )
        }

      </div>



      {/* Content */}

      <div className="mt-2 flex-1 overflow-y-auto pr-2 custom-scrollbar">

        {

          /* NO SELECTION */

          !dragStart || !dragEnd ? (

            <div className="flex h-full items-center justify-center">

              <div className="text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl">

                  📅

                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-800">
                  No Date Selected
                </h3>

                <p className="mt-3 max-w-[260px] text-sm leading-relaxed text-slate-500">

                  Select a date or drag across multiple dates
                  to view overlapping hotel bookings.

                </p>

              </div>

            </div>

          )



          /* NO MATCHING BOOKINGS */

          : selectedBookings.length === 0 ? (

            <div className="flex h-full items-center justify-center">

              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl">

                  🔍

                </div>

                <h3 className="mt-4 text-lg font-bold text-slate-800">
                  No Matching Bookings
                </h3>

                <p className="mt-2 text-sm text-slate-500">

                  Try searching another guest or room.

                </p>

              </div>

            </div>

          )



          /* BOOKINGS EXIST */

          : (

            <div className="space-y-4">

              {
                selectedBookings.map((booking) => (

                  <BookingCard
                    key={booking.id}
                    booking={booking}
                  />

                ))
              }

            </div>

          )
        }

      </div>

    </section>
  )
}

export default BookingPanel