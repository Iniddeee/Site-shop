<template>
  <div class="relative overflow-hidden">
    <!-- Slides -->
    <div class="relative h-64 sm:h-72">
      <TransitionGroup name="slide">
        <div 
          v-for="(slide, index) in slides" 
          :key="index"
          v-show="currentSlide === index"
          class="absolute inset-0"
        >
          <!-- Image de fond -->
          <div class="absolute inset-0">
            <img 
              :src="slide.image" 
              :alt="slide.title" 
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          
          <!-- Contenu -->
          <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div class="max-w-2xl">
              <div class="inline-block bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
                {{ slide.badge }}
              </div>
              <h2 class="text-3xl sm:text-5xl font-title font-bold text-white mb-3">
                {{ slide.title }}
              </h2>
              <p class="text-white/90 text-lg mb-6">
                {{ slide.description }}
              </p>
              <router-link 
                :to="slide.link" 
                class="inline-flex items-center gap-2 bg-white text-primary-600 px-6 py-3 rounded-xl font-bold hover:bg-primary-50 transition shadow-lg hover:shadow-xl"
              >
                {{ slide.cta }} →
              </router-link>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
    
    <!-- Indicateurs -->
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
      <button 
        v-for="(slide, index) in slides" 
        :key="index"
        @click="goToSlide(index)"
        class="w-2 h-2 rounded-full transition-all"
        :class="currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'"
        :aria-label="`Aller à la slide ${index + 1}`"
      >
      </button>
    </div>
    
    <!-- Flèches navigation -->
    <button 
      @click="prevSlide"
      class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur transition z-10"
      aria-label="Slide précédente"
    >
      <ChevronLeft :size="24" />
    </button>
    <button 
      @click="nextSlide"
      class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur transition z-10"
      aria-label="Slide suivante"
    >
      <ChevronRight :size="24" />
    </button>
    
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const currentSlide = ref(0)
let autoplayInterval = null

const slides = ref([
  {
    badge: '🎉 OFFRE SPÉCIALE',
    title: '-10% sur toutes les réparations d\'écran',
    description: 'Valable tout le mois • iPhone, Samsung, Huawei et plus encore',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=1920&h=400&fit=crop',
    cta: 'Réparer maintenant',
    link: '/reparation/smartphones'
  },
  {
    badge: '👞 NOUVEAU SERVICE',
    title: 'Cordonnerie professionnelle',
    description: 'Ressemelage, talons, maroquinerie • Artisan qualifié • Service rapide',
    image: 'https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=1920&h=400&fit=crop',
    cta: 'Découvrir nos services',
    link: '/cordonnerie'
  },
  {
    badge: '⚡ SERVICE EXPRESS',
    title: 'Réparation en 1-2h',
    description: 'La plupart des réparations effectuées le jour même • Garantie 6 mois à 1 an',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1920&h=400&fit=crop',
    cta: 'Voir nos tarifs',
    link: '/shop'
  },
  {
    badge: '🔑 CLÉS & TÉLÉCOMMANDES',
    title: 'Reproduction de clés express',
    description: 'Clés standard, sécurisées, voiture • Télécommandes portail',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=400&fit=crop',
    cta: 'En savoir plus',
    link: '/cordonnerie/cles'
  }
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    nextSlide()
  }, 5000)
}

const stopAutoplay = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval)
  }
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
