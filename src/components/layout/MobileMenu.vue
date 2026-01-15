<template>
  <transition name="mobile-menu">
    <div v-show="isOpen" class="lg:hidden bg-white border-t border-light-300 shadow-card">
      <div class="px-4 py-6 space-y-4">
        <router-link 
          to="/" 
          @click="$emit('close')"
          class="block px-4 py-3 text-dark-700 hover:text-primary-600 hover:bg-light-100 rounded-lg transition-colors"
        >
          Accueil
        </router-link>
        
        <router-link 
          to="/shop" 
          @click="$emit('close')"
          class="block px-4 py-3 text-dark-700 hover:text-primary-600 hover:bg-light-100 rounded-lg transition-colors"
        >
          Shop
        </router-link>

        <router-link 
          to="/contact" 
          @click="$emit('close')"
          class="block px-4 py-3 text-dark-700 hover:text-primary-600 hover:bg-light-100 rounded-lg transition-colors"
        >
          Contact
        </router-link>
        
        <router-link 
          to="/a-propos" 
          @click="$emit('close')"
          class="block px-4 py-3 text-dark-700 hover:text-primary-600 hover:bg-light-100 rounded-lg transition-colors"
        >
          À propos
        </router-link>

        <div class="pt-4 border-t border-light-300">
          <a 
            href="tel:0XXXXXXXXX" 
            class="flex items-center justify-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold shadow-soft hover:bg-primary-700"
          >
            <Phone :size="18" />
            <span>0XX XXX XX XX</span>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { Phone } from 'lucide-vue-next'

defineProps({
  isOpen: Boolean
})

defineEmits(['close'])
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
