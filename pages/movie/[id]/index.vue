<script setup lang="ts">
import MovieInfo from '~/components/movies/MovieInfo.vue'
import SessionList from '~/components/sessions/SessionList.vue'

const route = useRoute()
const { movies, fetchMovies } = useMovies()

const movieId = computed(() => Number(route.params.id))
const movie = computed(() => movies.value.find((m) => m.id === movieId.value))

useHead(() => ({
  title: movie.value ? `${movie.value.name}` : 'Loading...'
}))

const initialize = async () => {
  if (!movie.value) {
    await fetchMovies()
  }
}

onMounted(async () => {
  await initialize()
})
</script>

<template>
  <layout-container>
    <movie-info v-if="movie" :movie="movie" />

    <session-list v-if="movie" :movie-id="movieId" />
  </layout-container>
</template>

<style scoped></style>
