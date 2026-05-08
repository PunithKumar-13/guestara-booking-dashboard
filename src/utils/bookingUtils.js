import {
  eachDayOfInterval,
  subDays,
  isSameDay,
  areIntervalsOverlapping
} from 'date-fns'


 
export function getOccupiedDates(booking) {     //this is functions is for booking chekin and chekout date and 
                                                // it will return the occupied dates for that booking

  const start = new Date(booking.checkIn)

  const end = subDays(new Date(booking.checkOut), 1) 
  
  return eachDayOfInterval({ 
    start,
    end
  })
}



export function getOccupancyForDate(date, bookings) { // this function is for getting the number of occupied rooms for a specific date

  let occupiedRooms = 0

  bookings.forEach((booking) => {

    if (booking.status === 'cancelled') {
      return
    }

    const occupiedDates = getOccupiedDates(booking)

    const isOccupied = occupiedDates.some((occupiedDate) =>
      isSameDay(occupiedDate, date)
    )

    if (isOccupied) {
      occupiedRooms++
    }
  })

  return occupiedRooms
}



export function getBookingsForRange( //this function is for getting the bookings that overlap with a given date range
  bookings,
  startDate,
  endDate
) {

  if (!startDate || !endDate) {
    return []
  }

  const normalizedStart =
    startDate < endDate
      ? startDate
      : endDate

  const normalizedEnd =
    startDate > endDate
      ? startDate
      : endDate

  return bookings.filter((booking) => {

    if (booking.status === 'cancelled') {
      return false
    }

    const bookingStart =
      new Date(booking.checkIn)

    const bookingEnd =
      subDays(
        new Date(booking.checkOut),
        1
      )

    return areIntervalsOverlapping(  // this function checks if the booking interval overlaps with the given date range
      {
        start: bookingStart,
        end: bookingEnd
      },
      {
        start: normalizedStart,
        end: normalizedEnd
      }
    )
  })
}