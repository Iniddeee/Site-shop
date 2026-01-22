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
              Atelier de l'<span class="text-primary-600">Esplanade</span>
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

          <!-- Dropdown Smartphones -->
          <div class="relative" @mouseenter="smartphonesOpen = true" @mouseleave="smartphonesOpen = false">
            <button class="flex items-center space-x-1 text-dark-700 hover:text-primary-600 font-medium transition-colors">
              <span>Smartphones</span>
              <ChevronDown :size="16" :class="{ 'rotate-180': smartphonesOpen }" class="transition-transform" />
            </button>
            <Transition name="dropdown">
              <div v-if="smartphonesOpen" class="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-card border border-light-300 py-2">
                <router-link to="/reparation/smartphones" class="block px-4 py-2 text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Toutes marques
                </router-link>
                <router-link to="/reparation/smartphones/iphone" class="block px-4 py-2 text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Réparation iPhone
                </router-link>
                <router-link to="/reparation/smartphones/samsung" class="block px-4 py-2 text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Réparation Samsung
                </router-link>
                <router-link to="/reparation/tablettes" class="block px-4 py-2 text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Réparation Tablettes
                </router-link>
                <router-link to="/reparation/ordinateurs" class="block px-4 py-2 text-dark-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                  Réparation Ordinateurs
                </router-link>
              </div>
            </Transition>
          </div>

          <!-- Dropdown Cordonnerie -->
          <div class="relative" @mouseenter="cordonnerieOpen = true" @mouseleave="cordonnerieOpen = false">
            <button class="flex items-center space-x-1 text-dark-700 hover:text-leather-600 font-medium transition-colors">
              <span>Cordonnerie</span>
              <ChevronDown :size="16" :class="{ 'rotate-180': cordonnerieOpen }" class="transition-transform" />
            </button>
            <Transition name="dropdown">
              <div v-if="cordonnerieOpen" class="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-card border border-light-300 py-2">
                <router-link to="/cordonnerie" class="block px-4 py-2 text-dark-700 hover:bg-leather-50 hover:text-leather-600 transition-colors">
                  Tous les services
                </router-link>
                <router-link to="/cordonnerie/chaussures" class="block px-4 py-2 text-dark-700 hover:bg-leather-50 hover:text-leather-600 transition-colors">
                  Réparation Chaussures
                </router-link>
                <router-link to="/cordonnerie/maroquinerie" class="block px-4 py-2 text-dark-700 hover:bg-leather-50 hover:text-leather-600 transition-colors">
                  Sacs & Maroquinerie
                </router-link>
                <router-link to="/cordonnerie/cles" class="block px-4 py-2 text-dark-700 hover:bg-leather-50 hover:text-leather-600 transition-colors">
                  Clés & Télécommandes
                </router-link>
                <router-link to="/cordonnerie/entretien" class="block px-4 py-2 text-dark-700 hover:bg-leather-50 hover:text-leather-600 transition-colors">
                  Entretien Cuir
                </router-link>
              </div>
            </Transition>
          </div>

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
  ShoppingCart,
  ChevronDown
} from 'lucide-vue-next'
import MobileMenu from './MobileMenu.vue'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const smartphonesOpen = ref(false)
const cordonnerieOpen = ref(false)

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
