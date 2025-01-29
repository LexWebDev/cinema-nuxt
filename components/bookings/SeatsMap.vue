<script setup lang="ts">
import type { TSeat } from '~/types/booking.types'
import BookingLegend from '~/components/bookings/BookingLegend.vue'

interface Props {
  seatsMap: Map<number, TSeat[]>
  loading?: boolean
  error?: string
}

interface Emits {
  (e: 'select', payload: { row: number; seat: number }): void
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  error: ''
})

const emit = defineEmits<Emits>()

const handleSeatSelect = (row: number, seat: number) => {
  emit('select', { row, seat })
}

const sortedRows = computed(() => {
  return Array.from(props.seatsMap.entries()).sort(([a], [b]) => a - b)
})
</script>

<template>
  <div class="mx-auto w-full max-w-4xl px-4">
    <h2 class="mb-6 text-xl font-semibold">Select Your Seats</h2>

    <div v-if="loading" class="space-y-4">
      <USkeleton v-for="_ in 5" :key="_" class="h-12" />
    </div>

    <div
      v-else-if="error"
      class="rounded-lg bg-red-50 p-4 text-red-500 dark:bg-red-900/20"
    >
      {{ error }}
    </div>

    <div v-else-if="seatsMap.size" class="space-y-4">
      <div v-for="[row, seats] in sortedRows" :key="row" class="flex gap-4">
        <div class="w-16 shrink-0 text-center font-medium">Row {{ row }}</div>
        <div class="flex flex-wrap gap-2">
          <u-button
            v-for="seat in seats"
            :key="seat.seat"
            :ui="{ rounded: 'rounded-full' }"
            class="flex size-10 items-center justify-center"
            :disabled="!seat.is_free"
            :color="seat.is_free ? 'primary' : 'gray'"
            :variant="seat.is_free ? 'soft' : 'ghost'"
            @click="handleSeatSelect(row, seat.seat)"
          >
            {{ seat.seat }}
          </u-button>
        </div>
      </div>
    </div>

    <div v-else class="py-8 text-center text-gray-500">
      No seats available for this session
    </div>

    <booking-legend />
  </div>
</template>
