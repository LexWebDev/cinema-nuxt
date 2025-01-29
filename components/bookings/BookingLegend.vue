<template>
  <div class="mt-8 flex justify-center gap-6">
    <div class="flex items-center gap-2">
      <u-button
        color="primary"
        variant="soft"
        disabled
        :ui="{ rounded: 'rounded-full' }"
        class="flex size-10 items-center justify-center"
      >
        1
      </u-button>
      <span class="text-sm">Available</span>
    </div>
    <div class="flex items-center gap-2">
      <u-button
        color="gray"
        variant="ghost"
        disabled
        :ui="{ rounded: 'rounded-full' }"
        class="flex size-10 items-center justify-center"
      >
        1
      </u-button>
      <span class="text-sm">Taken</span>
    </div>
  </div>
</template>
