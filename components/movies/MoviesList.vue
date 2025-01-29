<script setup lang="ts">
import { PAGES } from '~/constants/pages'
import MovieCard from '~/components/movies/MovieCard.vue'

const { movies, loading, error, fetchMovies } = useMovies()

onMounted(async () => {
  await fetchMovies()
})
</script>

<template>
  <div v-if="error" class="mb-4 text-red-500">
    {{ error }}
  </div>

  <div v-if="loading">
    <div
      class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <u-skeleton
        v-for="_ in 8"
        :key="_"
        class="h-[400px]"
        :ui="{ background: 'bg-gray-100 dark:bg-gray-800' }"
      />
    </div>
  </div>

  <div
    v-else
    class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <movie-card
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @click="navigateTo(`${PAGES.MOVIE}/${movie.id}`)"
    />
  </div>
</template>
