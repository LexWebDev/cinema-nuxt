<script setup lang="ts">
import MovieInfo from '~/components/movies/MovieInfo.vue'

const route = useRoute()
const { movies, fetchMovies } = useMovies()
const { loading, error, fetchPlaces, bookTicket, seatsMap } = useBooking()

const movieId = computed(() => route.params.id as string)
const movie = computed(() =>
  movies.value.find((m) => m.id === Number(movieId.value))
)
const showDate = computed(() => route.query.date as string)
const daytime = computed(() => route.query.time as string)

useHead(() => ({
  title: movie.value ? `Ticket booking: ${movie.value.name}` : 'Booking'
}))

const handleBooking = async ({ row, seat }: { row: number; seat: number }) => {
  try {
    const result = await bookTicket({
      movie_id: Number(movieId.value),
      showdate: showDate.value,
      daytime: daytime.value,
      row,
      seat
    })

    useToast().add({
      title: 'Ticket Booked!',
      description: `Your ticket number is: ${result.ticketkey}`,
      icon: 'i-heroicons-ticket-solid',
      color: 'green'
    })

    await fetchPlaces({
      movie_id: Number(movieId.value),
      showdate: showDate.value,
      daytime: daytime.value
    })
  } catch (e) {
    useToast().add({
      title: 'Booking Failed',
      description: 'Unable to book the ticket. Please try again.',
      icon: 'i-heroicons-x-circle',
      color: 'red'
    })
  }
}

const initialize = async () => {
  if (!movie.value) {
    await fetchMovies()
  }

  if (movieId.value && showDate.value && daytime.value) {
    await fetchPlaces({
      movie_id: Number(movieId.value),
      showdate: showDate.value,
      daytime: daytime.value
    })
  }
}

onMounted(async () => {
  await initialize()
})
</script>

<template>
  <layout-container>
    <movie-info v-if="movie" :movie="movie" />

    <bookings-seats-map
      :seats-map="seatsMap"
      :loading="loading"
      :error="error"
      @select="handleBooking"
    />
  </layout-container>
</template>
