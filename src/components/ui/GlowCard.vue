<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :class="[
      'bg-dark-800 rounded-xl transition-all duration-300 card-hover',
      paddingClass,
      glowClass,
      clickable && 'cursor-pointer'
    ]"
    v-bind="$attrs"
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
  glow: {
    type: String,
    default: 'purple',
    validator: (value) => ['purple', 'pink', 'blue', 'cyan', 'none'].includes(value)
  },
  clickable: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String,
    default: 'div'
  },
  to: String,
  href: String
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

const glowClass = computed(() => {
  if (props.glow === 'none') return ''
  
  const glows = {
    purple: 'hover:shadow-glow-purple',
    blue: 'hover:shadow-glow-blue',
    cyan: 'hover:shadow-glow-cyan'
  }
  return glows[props.glow]
})
</script>
