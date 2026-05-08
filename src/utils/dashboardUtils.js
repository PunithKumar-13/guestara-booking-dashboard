import {
  differenceInDays,
  format,
} from 'date-fns'



// =========================
// OCCUPANCY
// =========================

export function getOccupancyRate(bookings) {

  const activeBookings =
    bookings.filter(
      (booking) =>
        booking.status !== 'cancelled'
    )

  const occupiedRooms =
    new Set(
      activeBookings.map(
        (booking) => booking.roomNumber
      )
    ).size

  return Math.round(
    (occupiedRooms / 10) * 100
  )
}



// =========================
// TOTAL REVENUE
// =========================

export function getTotalRevenue(bookings) {

  return bookings
    .filter(
      (booking) =>
        booking.status !== 'cancelled'
    )
    .reduce(
      (total, booking) =>
        total + booking.totalAmount,
      0
    )
}



// =========================
// AVERAGE STAY
// =========================

export function getAverageStay(bookings) {

  const activeBookings =
    bookings.filter(
      (booking) =>
        booking.status !== 'cancelled'
    )

  const totalNights =
    activeBookings.reduce(
      (total, booking) => {

        return (
          total +
          differenceInDays(
            new Date(booking.checkOut),
            new Date(booking.checkIn)
          )
        )
      },
      0
    )

  return (
    totalNights /
    activeBookings.length
  ).toFixed(1)
}



// =========================
// LONGEST STAY
// =========================

export function getLongestStay(bookings) {

  let maxStay = 0

  bookings.forEach((booking) => {

    const nights =
      differenceInDays(
        new Date(booking.checkOut),
        new Date(booking.checkIn)
      )

    if (nights > maxStay) {
      maxStay = nights
    }
  })

  return maxStay
}



// =========================
// MOST BOOKED ROOM
// =========================

export function getMostBookedRoom(bookings) {

  const roomCounts = {}

  bookings.forEach((booking) => {

    const roomType =
      booking.roomType

    roomCounts[roomType] =
      (roomCounts[roomType] || 0) + 1
  })

  let topRoom = ''
  let topCount = 0

  for (const room in roomCounts) {

    if (roomCounts[room] > topCount) {

      topRoom = room
      topCount = roomCounts[room]
    }
  }

  return {
    room: topRoom,
    count: topCount,
  }
}



// =========================
// MONTHLY BOOKINGS
// =========================

export function getMonthlyBookings(bookings) {

  const monthlyData = {}

  bookings.forEach((booking) => {

    const month =
      format(
        new Date(booking.checkIn),
        'MMM'
      )

    monthlyData[month] =
      (monthlyData[month] || 0) + 1

      
  })

  return Object.entries(monthlyData)
    .map(([month, bookings]) => ({
      month,
      bookings,
    }))
}