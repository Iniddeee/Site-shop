<template>
  <div class="bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center group">
    <div class="relative">
      <div class="w-20 h-20 bg-primary-100 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
        <component :is="iconComponent" :size="40" class="text-primary-600" />
      </div>
      
      <div class="space-y-3">
        <h3 class="text-xl font-title font-bold text-dark-900">
          {{ title }}
        </h3>
        <p class="text-dark-600 text-sm leading-relaxed">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { 
  Clock, 
  Shield, 
  Award,
  MapPin
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
  }
})

const iconComponent = computed(() => {
  const icons = {
    clock: Clock,
    'shield-check': Shield,
    award: Award,
    'map-pin': MapPin
  }
  return icons[props.icon] || Clock
})
</script>
