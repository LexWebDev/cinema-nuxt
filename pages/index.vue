<script setup lang="ts">
import MovieFilter from '~/components/movies/MovieFilter.vue'
import MoviesList from '~/components/movies/MoviesList.vue'

useSeoMeta({
  title: 'Home'
})
</script>

<template>
  <layout-container>
    <movie-filter />

    <movies-list />
  </layout-container>
</template>
