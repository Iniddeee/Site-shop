<template>
  <component 
    :is="tag" 
    :to="to"
    :href="href"
    :class="['card-base', paddingClass, hoverClass, borderClass]"
  >
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  hover: {
    type: Boolean,
    default: true
  },
  border: {
    type: Boolean,
    default: true
  },
  tag: {
    type: String,
    default: 'div'
  },
  to: {
    type: String,
    default: null
  },
  href: {
    type: String,
    default: null
  }
})

const paddingClass = computed(() => {
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }
  return paddings[props.padding]
})

const hoverClass = computed(() => {
  return props.hover ? 'hover:shadow-card-hover hover:-translate-y-1 cursor-pointer' : ''
})

const borderClass = computed(() => {
  return props.border ? 'border border-light-300' : ''
})
</script>

<style scoped>
.card-base {
  @apply bg-white rounded-2xl transition-all duration-300 shadow-soft;
}
</style>
