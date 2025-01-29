<script setup lang="ts">
import { GENRES_MAP } from '~/constants/genres'
import type { TMovie } from '~/types/movie.types'

const props = defineProps<{
  movie: TMovie
}>()
</script>

<template>
  <div v-if="props.movie" class="mb-8">
    <div class="flex flex-col gap-6 md:flex-row">
      <img
        :src="props.movie.image"
        :alt="props.movie.name"
        class="h-[300px] w-[200px] rounded-lg object-cover"
      />
      <div class="space-y-4">
        <h1 class="text-3xl font-bold">{{ props.movie.name }}</h1>
        <div class="text-gray-600" v-html="props.movie.description" />
        <u-badge color="gray" variant="soft">
          {{ GENRES_MAP[props.movie.genre] }}
        </u-badge>
      </div>
    </div>
  </div>
</template>
