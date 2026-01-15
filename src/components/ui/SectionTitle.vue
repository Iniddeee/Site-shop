<template>
  <div class="text-center mb-12">
    <h2 :class="['text-3xl sm:text-4xl font-title font-bold mb-4', titleClass]">
      <slot />
    </h2>
    <div v-if="$slots.subtitle" class="text-lg text-dark-600 max-w-2xl mx-auto">
      <slot name="subtitle" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  gradient: {
    type: Boolean,
    default: false
  }
})

const titleClass = computed(() => {
  return props.gradient ? 'text-primary-600' : 'text-dark-900'
})
</script>
