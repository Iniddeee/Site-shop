<template>
  <div class="min-h-screen bg-light-100">
    
    <!-- Header -->
    <section class="bg-leather-700 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="text-leather-200 text-sm mb-4">
          <router-link to="/" class="hover:text-white">Accueil</router-link>
          <span class="mx-2">/</span>
          <router-link to="/shop" class="hover:text-white">Shop</router-link>
          <span class="mx-2">/</span>
          <span class="text-white">Cordonnerie</span>
        </nav>
        <h1 class="text-4xl font-title font-bold text-white">Shop Cordonnerie</h1>
        <p class="text-leather-200 mt-2">Chaussures, maroquinerie, clés et plus encore</p>
      </div>
    </section>
    
    <!-- Contenu -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row gap-8">
          
          <!-- Sidebar Filtres -->
          <aside class="w-full lg:w-72 flex-shrink-0">
            <div class="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h3 class="font-bold text-dark-900 mb-4">Catégories</h3>
              <ul class="space-y-1">
                <li>
                  <button 
                    @click="selectedCategory = null"
                    class="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-leather-50 text-dark-800 transition text-left"
                    :class="{ 'bg-leather-100 text-leather-700': selectedCategory === null }"
                  >
                    <span>Tous les services</span>
                    <span class="text-sm text-dark-500">({{ allServices.length }})</span>
                  </button>
                </li>
                <li v-for="cat in categories" :key="cat.id">
                  <button 
                    @click="toggleCategory(cat.id)"
                    class="w-full flex justify-between items-center py-2 px-3 rounded-lg hover:bg-leather-50 text-dark-800 transition text-left"
                    :class="{ 'bg-leather-100 text-leather-700': selectedCategory === cat.id }"
                  >
                    <span>{{ cat.name }}</span>
                    <span class="text-sm text-dark-500">({{ cat.count }})</span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>
          
          <!-- Grille Produits -->
          <main class="flex-1">
            <div class="flex justify-between items-center mb-8">
              <p class="text-dark-600">{{ filteredServices.length }} services</p>
              <select 
                v-model="sortBy"
                class="border border-light-300 rounded-lg px-4 py-2 bg-white"
              >
                <option value="default">Trier par défaut</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="popular">Populaires</option>
              </select>
            </div>
            
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                v-for="service in sortedServices" 
                :key="service.id"
                class="product-card group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <!-- Image -->
                <div class="relative aspect-square bg-leather-50">
                  <img 
                    :src="service.image" 
                    :alt="service.name"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span v-if="service.popular" class="absolute top-3 left-3 bg-leather-600 text-white text-xs font-bold px-2 py-1 rounded">
                    Populaire
                  </span>
                  <span class="absolute top-3 right-3 bg-white/90 backdrop-blur text-dark-700 text-xs font-medium px-2 py-1 rounded">
                    {{ service.duration }}
                  </span>
                </div>
                
                <!-- Infos -->
                <div class="p-4">
                  <h3 class="font-semibold text-dark-900 group-hover:text-leather-600 transition-colors mb-1">
                    {{ service.name }}
                  </h3>
                  <p class="text-sm text-dark-600 mb-3 line-clamp-2">
                    {{ service.description }}
                  </p>
                  <div class="flex justify-between items-center">
                    <div>
                      <span class="text-xl font-bold text-leather-600">
                        CHF {{ service.price.toFixed(2) }}
                      </span>
                      <span v-if="service.priceRange" class="text-sm text-dark-500 ml-1">
                        ({{ service.priceRange }})
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          
        </div>
      </div>
    </section>
    
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { cordonnerieCategories } from '../data/cordonnerie-categories'
import { cordonnerieServices } from '../data/cordonnerie-services'

const categories = ref(cordonnerieCategories)
const allServices = ref(cordonnerieServices)
const selectedCategory = ref(null)
const sortBy = ref('default')

const toggleCategory = (categoryId) => {
  selectedCategory.value = categoryId
}

const filteredServices = computed(() => {
  if (!selectedCategory.value) {
    return allServices.value
  }
  return allServices.value.filter(s => s.category === selectedCategory.value)
})

const sortedServices = computed(() => {
  const services = [...filteredServices.value]
  
  switch (sortBy.value) {
    case 'price-asc':
      return services.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return services.sort((a, b) => b.price - a.price)
    case 'popular':
      return services.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0))
    default:
      return services
  }
})
</script>
