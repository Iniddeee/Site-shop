<template>
  <router-link 
    :to="link"
    class="group block bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover transition-all duration-300"
    :class="colorClass"
  >
    <div class="relative">
      <div 
        class="w-20 h-20 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
        :class="iconBgClass"
      >
        <component :is="iconComponent" :size="40" :class="iconColorClass" />
      </div>
      
      <div class="space-y-3 text-center">
        <h3 class="text-xl font-title font-bold text-dark-900">
          {{ title }}
        </h3>
        <p class="text-dark-600 text-sm leading-relaxed">
          {{ description }}
        </p>
        <div class="pt-2">
          <span 
            class="inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform"
            :class="linkColorClass"
          >
            En savoir plus →
          </span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { 
  Smartphone, 
  Laptop, 
  Tablet,
  Footprints,
  Briefcase,
  Key
} from 'lucide-vue-next'

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'primary'
  },
  link: {
    type: String,
    required: true
  }
})

const iconComponent = computed(() => {
  const icons = {
    smartphone: Smartphone,
    laptop: Laptop,
    tablet: Tablet,
    footprints: Footprints,
    briefcase: Briefcase,
    key: Key
  }
  return icons[props.icon] || Smartphone
})

const colorClass = computed(() => {
  return props.color === 'leather' 
    ? 'hover:border-leather-300' 
    : 'hover:border-primary-300'
})

const iconBgClass = computed(() => {
  return props.color === 'leather'
    ? 'bg-leather-100'
    : 'bg-primary-100'
})

const iconColorClass = computed(() => {
  return props.color === 'leather'
    ? 'text-leather-600'
    : 'text-primary-600'
})

const linkColorClass = computed(() => {
  return props.color === 'leather'
    ? 'text-leather-600'
    : 'text-primary-600'
})
</script>
