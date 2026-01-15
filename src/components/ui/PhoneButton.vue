<template>
  <a 
    :href="`tel:${number}`"
    :class="['phone-btn', sizeClass, variantClass]"
  >
    <Phone :size="iconSize" />
    <span>{{ label }}</span>
  </a>
</template>

<script setup>
import { computed } from 'vue'
import { Phone } from 'lucide-vue-next'

const props = defineProps({
  number: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'Appelez-nous'
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'white', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['md', 'lg', 'xl'].includes(value)
  }
})

const sizeClass = computed(() => {
  const sizes = {
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
    xl: 'px-10 py-6 text-xl rounded-2xl'
  }
  return sizes[props.size]
})

const variantClass = computed(() => {
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-soft hover:shadow-primary hover:-translate-y-0.5',
    white: 'bg-white text-dark-900 shadow-card hover:shadow-card-hover',
    outline: 'border-2 border-primary-600 bg-transparent text-primary-600 hover:bg-primary-50'
  }
  return variants[props.variant]
})

const iconSize = computed(() => {
  const sizes = {
    md: 20,
    lg: 24,
    xl: 28
  }
  return sizes[props.size]
})
</script>

<style scoped>
.phone-btn {
  @apply inline-flex items-center justify-center gap-3 font-semibold transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2;
}
</style>
