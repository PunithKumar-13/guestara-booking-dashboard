import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval
} from 'date-fns'



export function generateCalendarDays(currentMonth) {

  const monthStart =
    startOfMonth(currentMonth)

  const monthEnd =
    endOfMonth(currentMonth)

  const calendarStart =
    startOfWeek(monthStart)

  const calendarEnd =
    endOfWeek(monthEnd)

  return eachDayOfInterval({
    start: calendarStart,
    end: calendarEnd
  })
}


import {
  isWithinInterval,
  startOfDay
} from 'date-fns'



export function isDateInRange(
  date,
  startDate,
  endDate
) {

  if (!startDate || !endDate) {
    return false
  }

  const normalizedStart =
    startDate < endDate
      ? startDate
      : endDate

  const normalizedEnd =
    startDate > endDate
      ? startDate
      : endDate

  return isWithinInterval(
    startOfDay(date),
    {
      start: startOfDay(normalizedStart),
      end: startOfDay(normalizedEnd)
    }
  )
}