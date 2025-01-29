<script setup lang="ts">
import { computed } from 'vue'

const copyright = computed(() => {
  return `© ${new Date().getFullYear()} Y Media`
})
</script>

<template>
  <footer
    class="flex h-12 items-center justify-center border-t border-t-slate-300"
  >
    <div class="text-sm text-slate-500">
      {{ copyright }}
    </div>
  </footer>
</template>
