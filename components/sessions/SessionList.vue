<script setup lang="ts">
import { PAGES } from '~/constants/pages'

const props = defineProps<{
  movieId: number
}>()

const { sessions, loading, error, fetchSessions, sessionsByDate } =
  useSessions()

const navigateToBooking = (date: string, time: string) => {
  navigateTo(
    `${PAGES.MOVIE}/${props.movieId}${PAGES.BOOKING}?date=${date}&time=${time}`
  )
}

onMounted(async () => {
  await fetchSessions(props.movieId)
})
</script>

<template>
  <u-divider label="Sessions" :ui="{ label: 'text-primary-500' }" />

  <div v-if="error" class="mb-4 text-red-500">
    {{ error }}
  </div>

  <div v-if="loading">
    <u-skeleton v-for="_ in 5" :key="_" class="mb-4 h-16" />
  </div>

  <div
    v-else-if="sessions.length"
    class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
  >
    <u-card
      v-for="session in sessions"
      :key="`${session.showdate}-${session.daytime}`"
    >
      <template #header>
        <div class="text-xl font-semibold">
          {{ formatDate(session.showdate) }}
        </div>
      </template>

      <div class="flex flex-wrap gap-4">
        <u-button
          v-for="time in sessionsByDate.get(session.showdate)"
          variant="outline"
          :key="time"
          size="sm"
          @click="navigateToBooking(session.showdate, time)"
        >
          {{ time }}
        </u-button>
      </div>
    </u-card>
  </div>

  <div v-else class="py-8 text-center">
    No sessions available for this movie
  </div>
</template>
