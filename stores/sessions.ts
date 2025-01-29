import type { TMovieSession } from '~/types/booking.types'

export const useSessionsStore = defineStore('sessions', {
  state: () => ({
    data: [] as TMovieSession[],
    loading: false,
    error: ''
  })
})
