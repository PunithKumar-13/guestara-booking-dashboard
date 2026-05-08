import { useState, useEffect } from 'react'


import { //these are all imports 
  addMonths,
  subMonths,
} from 'date-fns'

import Sidebar from './Sidebar'
import Header from './Header'

import OccupancyGauge from '../stats/OccupancyGauge'
import RevenueCard from '../stats/RevenueCard'
import AverageStayCard from '../stats/AverageStayCard'
import LongestStayCard from '../stats/LongestStayCard'
import MostBookedRoomCard from '../stats/MostBookedRoomCard'
import BookingTrendChart from '../stats/BookingTrendChart'

import CalendarHeader from '../calendar/CalendarHeader'
import CalendarGrid from '../calendar/CalendarGrid'
import SearchBar from '../common/SearchBar'
import LoadingSkeleton from '../common/LoadingSkeleton'
import ErrorState from '../common/ErrorState'

import BookingPanel from '../bookings/BookingPanel'

import useBookings from '../../hooks/useBookings'

import {
  generateCalendarDays,
} from '../../utils/dateUtils'

import {
  getBookingsForRange,
} from '../../utils/bookingUtils'

import {
  getOccupancyRate,
  getTotalRevenue,
  getAverageStay,
  getLongestStay,
  getMostBookedRoom,
  getMonthlyBookings,
} from '../../utils/dashboardUtils'


function DashboardLayout() {

  // =========================
  // MONTH STATE
  // =========================

  const [currentMonth, setCurrentMonth] =
    useState(() => {

      const savedMonth =
        localStorage.getItem(
          'guestara-current-month'
        )

      return savedMonth
        ? new Date(savedMonth)
        : new Date()
    })

  // =========================
  // DRAG STATES
  // =========================
  const [dragStart, setDragStart] =
    useState(() => {

      const saved =
        localStorage.getItem(
          'guestara-drag-start'
        )

      return saved
        ? new Date(saved)
        : null
    })



  const [dragEnd, setDragEnd] =
    useState(() => {

      const saved =
        localStorage.getItem(
          'guestara-drag-end'
        )

      return saved
        ? new Date(saved)
        : null
    })

  const [isDragging, setIsDragging] =
    useState(false)


  const [searchQuery, setSearchQuery] =
    useState(() => {

      return (
        localStorage.getItem(
          'guestara-search-query'
        ) || ''
      )
    })


  useEffect(() => {

    localStorage.setItem(
      'guestara-current-month',
      currentMonth.toISOString()
    )

  }, [currentMonth])



  useEffect(() => {

    localStorage.setItem(
      'guestara-search-query',
      searchQuery
    )

  }, [searchQuery])



  useEffect(() => {

    if (dragStart) {

      localStorage.setItem(
        'guestara-drag-start',
        dragStart.toISOString()
      )
    }

  }, [dragStart])



  useEffect(() => {

    if (dragEnd) {

      localStorage.setItem(
        'guestara-drag-end',
        dragEnd.toISOString()
      )
    }

  }, [dragEnd])

  // =========================
  // FETCH BOOKINGS
  // =========================

  const {
    bookings,
    loading,
    error,
  } = useBookings()



  // =========================
  // CALENDAR DAYS
  // =========================

  const calendarDays =
    generateCalendarDays(currentMonth)



  // =========================
  // SELECTED BOOKINGS
  // =========================

  const rangeBookings =
    getBookingsForRange(
      bookings,
      dragStart,
      dragEnd
    )



  const selectedBookings =
    rangeBookings.filter((booking) => {

      const query =
        searchQuery.toLowerCase()

      return (

        booking.guestName
          .toLowerCase()
          .includes(query)

        ||

        booking.roomNumber
          .toLowerCase()
          .includes(query)
      )
    })

  const occupancyRate =
    getOccupancyRate(bookings)

  const totalRevenue =
    getTotalRevenue(bookings)

  const averageStay =
    getAverageStay(bookings)

  const longestStay =
    getLongestStay(bookings)

  const mostBookedRoom =
    getMostBookedRoom(bookings)

  const monthlyBookings =
    getMonthlyBookings(bookings)



  // =========================
  // DRAG FUNCTIONS
  // =========================

  function handleMouseDown(day) {   // this function starts the drag selection when the user clicks on a calendar day and stores the start date in state

    setDragStart(day)
    setDragEnd(day)

    setIsDragging(true)
  }



  function handleMouseEnter(day) { //this continously updates the sleetced range 

    if (!isDragging) return

    setDragEnd(day)
  }



  function handleMouseUp() { //stop drag selection when the user releases the mouse button and stores the end date in state
 
    setIsDragging(false)
  }


  function clearSelection() {

    // Clear states

    setDragStart(null)
    setDragEnd(null)

    setSearchQuery('')



    // Clear localStorage

    localStorage.removeItem(
      'guestara-drag-start'
    )

    localStorage.removeItem(
      'guestara-drag-end'
    )

    localStorage.removeItem(
      'guestara-search-query'
    )
  }


  // =========================
  // LOADING
  // =========================
  if (loading) {

    return (

      <div className="min-h-screen bg-[#f4f8ff] p-6">

        <div className="mx-auto max-w-[1650px]">

          <LoadingSkeleton />

        </div>

      </div>
    )
  }



  // =========================
  // ERROR
  // =========================

  if (error) {

    return (
      <ErrorState error={error} />
    )
  }



  // =========================
  // UI
  // =========================

  return (

    <div className="min-h-screen bg-[#f4f8ff] p-6">

      <div className="mx-auto flex max-w-[1650px] gap-8">

        {/* SIDEBAR */}

        <Sidebar />



        {/* MAIN */}

        <main className="flex-1 flex flex-col gap-6">

          <Header />



          {/* CONTENT */}

          <section className="flex flex-col gap-6">



            {/* WELCOME */}
            {/* TOP BAR */}

            <div className="flex items-center justify-between">

              {/* Left */}

              <div>

                <h1 className="text-5xl font-bold tracking-tight">
                  Hello, John 👋
                </h1>

                <p className="mt-3 text-lg text-slate-500">
                  Welcome back to Guestara Front Desk Dashboard
                </p>

              </div>



              {/* Right */}

              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />

            </div>



            {/* STATS */}

            <div className="grid grid-cols-5 gap-6">

              <OccupancyGauge
                occupancyRate={occupancyRate}
              />

              <RevenueCard
                totalRevenue={totalRevenue}
              />

              <AverageStayCard
                averageStay={averageStay}
              />

              <LongestStayCard
                longestStay={longestStay}
              />

              <MostBookedRoomCard
                mostBookedRoom={mostBookedRoom}
              />

            </div>



            {/* CALENDAR + PANEL */}

            <div className="grid grid-cols-[1fr_380px] gap-6 items-start">



              {/* CALENDAR */}

              <section className="rounded-[32px] border border-white/40 bg-white/70 p-8 shadow-[0_8px_30px_rgba(59,130,246,0.08)] backdrop-blur-xl">

                <CalendarHeader
                  currentMonth={currentMonth}

                  onPrevMonth={() =>
                    setCurrentMonth((prev) =>
                      subMonths(prev, 1)
                    )
                  }

                  onNextMonth={() =>
                    setCurrentMonth((prev) =>
                      addMonths(prev, 1)
                    )
                  }
                />



                <CalendarGrid
                  calendarDays={calendarDays}
                  bookings={bookings}

                  dragStart={dragStart}
                  dragEnd={dragEnd}

                  onMouseDown={handleMouseDown}
                  onMouseEnter={handleMouseEnter}
                  onMouseUp={handleMouseUp}
                />

              </section>



              {/* RIGHT PANEL */}

              <BookingPanel
                selectedBookings={selectedBookings}

                dragStart={dragStart}
                dragEnd={dragEnd}

                searchQuery={searchQuery}

                clearSelection={clearSelection}
              />



            </div>



            {/* CHART */}

            <BookingTrendChart
              monthlyBookings={monthlyBookings}
            />



          </section>

        </main>

      </div>

    </div>
  )
}

export default DashboardLayout