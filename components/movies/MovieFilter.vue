<script setup lang="ts">
import { useDebounceFn } from '@vueuse/shared'

const { selectedGenres, searchQuery, genres, fetchMovies } = useMovies()

const debouncedFetch = useDebounceFn(() => {
  fetchMovies()
}, 300)

watch(
  [searchQuery, selectedGenres],
  () => {
    debouncedFetch()
  },
  { deep: true }
)
</script>

<template>
  <div class="mb-8 flex flex-col gap-4 md:flex-row">
    <u-input
      v-model="searchQuery"
      placeholder="Search movies..."
      class="flex-1"
      icon="i-heroicons-magnifying-glass-20-solid"
    />
    <u-select-menu
      v-model="selectedGenres"
      :options="genres"
      placeholder="Select genres"
      multiple
      option-attribute="name"
      value-attribute="id"
      class="md:w-[300px]"
    />
  </div>
</template>

<style scoped></style>
