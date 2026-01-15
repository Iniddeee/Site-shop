<template>
  <component 
    :is="tag" 
    :to="to"
    :href="href"
    :class="['btn-base', sizeClasses, variantClasses]"
  >
    <component v-if="icon" :is="icon" :size="iconSize" />
    <span><slot /></span>
  </component>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  icon: {
    type: Object,
    default: null
  },
  tag: {
    type: String,
    default: 'button'
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

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-5 text-xl rounded-xl'
  }
  return sizes[props.size]
})

const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-primary hover:-translate-y-0.5',
    secondary: 'bg-accent-500 text-white hover:bg-accent-600 shadow-soft hover:shadow-card',
    outline: 'border-2 border-primary-600 bg-transparent text-primary-600 hover:bg-primary-50'
  }
  return variants[props.variant]
})

const iconSize = computed(() => {
  const sizes = {
    sm: 16,
    md: 18,
    lg: 20,
    xl: 24
  }
  return sizes[props.size]
})
</script>

<style scoped>
.btn-base {
  @apply inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
}
</style>
