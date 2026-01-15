<template>
  <nav 
    :class="[
      'sticky top-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white shadow-card' : 'bg-white shadow-soft'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group">
          <div class="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
            <Smartphone :size="24" class="text-white" />
          </div>
          <div class="hidden sm:block">
            <span class="text-xl font-title font-bold text-dark-900">
              Repair<span class="text-primary-600">Tech</span>
            </span>
            <div class="text-xs text-dark-600 -mt-1">Porrentruy</div>
          </div>
        </router-link>

        <!-- Menu Desktop -->
        <div class="hidden lg:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="nav-link text-dark-700 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
          >
            Accueil
          </router-link>

          <router-link 
            to="/shop" 
            class="nav-link text-dark-700 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
          >
            Shop
          </router-link>

          <router-link 
            to="/contact" 
            class="nav-link text-dark-700 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
          >
            Contact
          </router-link>
          
          <router-link 
            to="/a-propos" 
            class="nav-link text-dark-700 hover:text-primary-600 font-medium transition-colors"
            active-class="text-primary-600"
          >
            À propos
          </router-link>
        </div>

        <!-- Téléphone + Panier Desktop -->
        <div class="hidden lg:flex items-center space-x-4">
          <a 
            href="tel:0XXXXXXXXX" 
            class="flex items-center space-x-2 text-dark-700 hover:text-primary-600 transition-colors"
          >
            <Phone :size="16" />
            <span class="text-sm">0XX XXX XX XX</span>
          </a>
          
          <div class="w-px h-6 bg-light-300"></div>
          
          <button class="relative p-2 text-dark-700 hover:text-primary-600 transition-colors">
            <ShoppingCart :size="20" />
            <span class="absolute -top-1 -right-1 w-4 h-4 bg-primary-600 rounded-full text-xs text-white flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        <!-- Menu Burger Mobile -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="lg:hidden p-2 rounded-lg hover:bg-light-100 transition-colors"
        >
          <Menu v-if="!mobileMenuOpen" :size="24" class="text-dark-800" />
          <X v-else :size="24" class="text-dark-800" />
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    <MobileMenu :isOpen="mobileMenuOpen" @close="mobileMenuOpen = false" />
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  Smartphone, 
  Phone, 
  Menu, 
  X,
  ShoppingCart
} from 'lucide-vue-next'
import MobileMenu from './MobileMenu.vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
