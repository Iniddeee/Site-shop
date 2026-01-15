<template>
  <div class="h-11 bg-primary-600 flex items-center justify-center relative overflow-hidden">
    <a 
      href="tel:0XXXXXXXXX" 
      class="flex items-center space-x-2 text-white font-semibold text-sm hover:scale-105 transition-transform duration-300 relative z-10"
    >
      <Phone :size="16" />
      <span>0XX XXX XX XX</span>
    </a>
  </div>
</template>

<script setup>
import { Phone } from 'lucide-vue-next'
</script>
