import { useEffect, useState } from 'react'

function useBookings() {

  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    async function fetchBookings() {

      try {

        setLoading(true)

        const response = await fetch('/bookings.json')

        if (!response.ok) {
          throw new Error('Failed to load bookings')
        }

        const data = await response.json()

        setBookings(data)

      } catch (err) {

        setError(err.message)

      } finally {

        setLoading(false)

      }
    }

    fetchBookings()

  }, [])

  return {
    bookings,
    loading,
    error
  }
}

export default useBookings