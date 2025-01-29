import { bookingService } from '~/services/api/booking.service'
import type { TBookingRequest, TSeat } from '~/types/booking.types'

export const useBooking = () => {
  const store = useBookingStore()
  const { places, loading, error } = storeToRefs(store)

  const fetchPlaces = async (params: {
    movie_id: number
    showdate: string
    daytime: string
  }) => {
    try {
      loading.value = true
      const response = await bookingService.getShowPlaces(params)

      if (response.error_code === 0) {
        places.value = response.data
        error.value = ''
      } else {
        places.value = []
        error.value = response.error_message
      }
    } catch (e) {
      error.value = 'Failed to load places'
      console.error(e)
      places.value = []
    } finally {
      loading.value = false
    }
  }

  const bookTicket = async (request: TBookingRequest) => {
    try {
      loading.value = true
      const response = await bookingService.bookPlace(request)

      if (response.error_code === 0) {
        return response.data
      }
      throw new Error(response.error_message)
    } finally {
      loading.value = false
    }
  }

  const seatsMap = computed(() => {
    if (!places.value) return new Map<number, TSeat[]>()

    return new Map(
      places.value.map((placeRow) => {
        const [rowInfo, seats] = placeRow
        return [rowInfo.row, seats]
      })
    )
  })

  return {
    places,
    loading,
    error,
    seatsMap,
    fetchPlaces,
    bookTicket
  }
}
