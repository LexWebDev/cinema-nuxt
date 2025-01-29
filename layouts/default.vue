<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen flex-col">
    <LayoutHeader />
    <div class="flex-1">
      <slot />
    </div>
    <LayoutFooter />
    <u-notifications />
  </div>
</template>
