import { defineStore } from 'pinia'
import type { TPlace } from '~/types/booking.types'

export const useBookingStore = defineStore('booking', {
  state: () => ({
    places: null as TPlace | null,
    loading: false,
    error: ''
  })
})
