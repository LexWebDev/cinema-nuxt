<script setup lang="ts">
import { PAGES } from '~/constants/pages'
</script>

<template>
  <header
    class="flex h-16 items-center justify-center bg-rose-500 text-white shadow-md"
  >
    <nuxt-link class="text-3xl font-bold uppercase" :to="PAGES.HOME">
      Cinema
    </nuxt-link>
  </header>
</template>
