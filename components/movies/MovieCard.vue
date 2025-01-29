<script lang="ts" setup>
import type { TMovie } from '~/types/movie.types'

const props = defineProps<{
  movie: TMovie
}>()

const emit = defineEmits<{
  click: [movie: TMovie]
}>()
</script>

<template>
  <u-card
    @click="emit('click', props.movie)"
    class="cursor-pointer transition-all duration-300 ease-in-out hover:bg-rose-400 hover:text-white"
  >
    <img
      :src="props.movie.image"
      :alt="props.movie.name"
      class="size-full rounded-md object-cover"
    />

    <div class="p-2">
      <div class="text-lg font-bold">{{ props.movie.name }}</div>
    </div>
  </u-card>
</template>
