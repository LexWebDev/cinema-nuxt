import { bookingService } from '~/services/api/booking.service'

export const useSessions = () => {
  const store = useSessionsStore()
  const { data: sessions, loading, error } = storeToRefs(store)

  const fetchSessions = async (movieId: number) => {
    try {
      loading.value = true
      const response = await bookingService.getMovieSessions(movieId)

      sessions.value = response.data || []
    } catch (e) {
      error.value = 'Failed to load sessions'
      console.error(e)
      sessions.value = []
    } finally {
      loading.value = false
    }
  }

  const sessionsByDate = computed(() => {
    if (!sessions.value) return new Map<string, string[]>()

    const grouped = new Map<string, string[]>()
    sessions.value.forEach((session) => {
      const times = session.daytime.split(';')
      grouped.set(session.showdate, times)
    })

    return grouped
  })

  return {
    sessions,
    loading,
    error,
    fetchSessions,
    sessionsByDate
  }
}
