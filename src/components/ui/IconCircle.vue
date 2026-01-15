<template>
  <div 
    :class="[
      'rounded-full flex items-center justify-center transition-all duration-300',
      sizeClass,
      backgroundClass,
      glowClass
    ]"
  >
    <component :is="icon" :size="iconSize" class="text-white" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: Object,
    required: true
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  variant: {
    type: String,
    default: 'gradient',
    validator: (value) => ['gradient', 'purple', 'pink', 'blue', 'cyan', 'green'].includes(value)
  },
  glow: {
    type: Boolean,
    default: false
  }
})

const sizeClass = computed(() => {
  const sizes = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  }
  return sizes[props.size]
})

const iconSize = computed(() => {
  const sizes = {
    sm: 20,
    md: 24,
    lg: 32,
    xl: 40
  }
  return sizes[props.size]
})

const backgroundClass = computed(() => {
  const variants = {
    gradient: 'bg-gradient-neon',
    purple: 'bg-neon-purple',
    blue: 'bg-neon-blue',
    cyan: 'bg-accent-primary',
    green: 'bg-accent-secondary'
  }
  return variants[props.variant]
})

const glowClass = computed(() => {
  if (!props.glow) return ''
  
  const glows = {
    gradient: 'shadow-glow-purple',
    purple: 'shadow-glow-purple',
    blue: 'shadow-glow-blue',
    cyan: 'shadow-glow-cyan',
    green: 'shadow-glow-cyan'
  }
  return glows[props.variant]
})
</script>
