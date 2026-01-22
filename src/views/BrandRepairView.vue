<template>
  <div>
    <!-- Header de page -->
    <section class="py-16 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-sm text-dark-600 mb-8">
          <router-link to="/" class="hover:text-primary-600 transition-colors">Accueil</router-link>
          <ChevronRight :size="16" />
          <router-link to="/reparation/smartphones" class="hover:text-primary-600 transition-colors">Smartphones</router-link>
          <ChevronRight :size="16" />
          <span class="text-primary-600 font-medium">{{ brandName }}</span>
        </nav>

        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-title font-bold text-dark-900 mb-4">
            Réparation <span class="text-primary-600">{{ brandName }}</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-2xl mx-auto">
            Service express - Pièces d'origine - Garantie 6 mois à 1 an
          </p>
        </div>
      </div>
    </section>

    <!-- Section modèles -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle gradient>
          Sélectionnez votre modèle {{ brandName }}
        </SectionTitle>

        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Sidebar avec modèles -->
          <div class="lg:col-span-1">
            <div class="bg-light-100 rounded-xl p-6 border border-light-300">
              <h3 class="text-lg font-title font-bold text-dark-900 mb-4">Modèles</h3>
              <div class="space-y-2">
                <button
                  v-for="model in models"
                  :key="model.id"
                  @click="selectedModel = model.id"
                  :class="[
                    'w-full text-left px-4 py-3 rounded-lg transition-all duration-300',
                    selectedModel === model.id
                      ? 'bg-primary-600 text-white shadow-primary'
                      : 'bg-white text-dark-700 hover:bg-light-100 border border-light-300'
                  ]"
                >
                  <div class="font-medium">{{ model.name }}</div>
                </button>
              </div>
            </div>
          </div>

          <!-- Contenu principal -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-xl p-8 border border-light-300 shadow-card-hover">
              <div class="space-y-8">
                <!-- Image du modèle -->
                <div class="text-center">
                  <img 
                    :src="getModelImage()" 
                    :alt="currentModel?.name"
                    class="w-full h-auto rounded-xl object-cover max-h-[300px]"
                  />
                </div>

                <!-- Titre -->
                <div class="text-center">
                  <h2 class="text-3xl font-title font-bold text-dark-900 mb-2">
                    Réparation {{ brandName }} {{ currentModel?.name }}
                  </h2>
                  <p class="text-dark-600">
                    La plupart des réparations sont réalisées en 1-2h selon la réparation
                  </p>
                </div>

                <!-- Tableau des tarifs -->
                <div class="bg-light-100 rounded-xl overflow-hidden">
                  <table class="w-full">
                    <thead class="bg-primary-600 text-white">
                      <tr>
                        <th class="px-6 py-4 text-left font-semibold">Type de réparation</th>
                        <th class="px-6 py-4 text-right font-semibold">Prix (CHF)</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-light-300">
                      <tr
                        v-for="repair in currentModel?.repairs"
                        :key="repair.name"
                        class="hover:bg-white transition-colors"
                      >
                        <td class="px-6 py-4 text-dark-700">
                          {{ repair.name }}
                        </td>
                        <td class="px-6 py-4 text-right">
                          <span v-if="repair.price" class="text-2xl font-bold text-primary-600">
                            {{ repair.price }}
                          </span>
                          <span v-else class="text-dark-500">
                            {{ repair.label || 'Sur devis' }}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <!-- Garantie -->
                <div class="bg-light-100 rounded-xl p-6 border border-light-300">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <Shield :size="24" class="text-white" />
                    </div>
                    <div>
                      <h3 class="font-semibold text-dark-900">Garantie 6 mois à 1 an</h3>
                      <p class="text-dark-600 text-sm">
                        Selon les pièces changées, garantie pièces et main d'œuvre
                      </p>
                      <div class="space-y-1 mt-2 text-xs text-dark-600">
                        <div>Lu-Ve: 8h-18h30</div>
                        <div>Sa: 8h-17h</div>
                        <div class="text-dark-500">Dimanche: Fermé</div>
                        <div class="mt-2">Fbg Saint-Germain 2, 2900 Porrentruy</div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- CTA -->
                <div class="text-center">
                  <PhoneButton 
                    size="xl" 
                    variant="primary"
                    number="0XX XXX XX XX"
                    label="Réparation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagements -->
    <EngagementsGrid />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronRight, Shield } from 'lucide-vue-next'
import SectionTitle from '../components/ui/SectionTitle.vue'
import PhoneButton from '../components/ui/PhoneButton.vue'
import EngagementsGrid from '../components/home/EngagementsGrid.vue'

const route = useRoute()
const brand = computed(() => route.params.brand)
const selectedModel = ref('')

const brandName = computed(() => {
  const names = {
    'iphone': 'iPhone',
    'samsung': 'Samsung',
    'huawei': 'Huawei',
    'xiaomi': 'Xiaomi',
    'google-pixel': 'Google Pixel',
    'oppo': 'OPPO'
  }
  return names[brand.value] || brand.value
})

const brandColor = computed(() => {
  const colors = {
    'iphone': 'A855F7',
    'samsung': '3B82F6',
    'huawei': '3B82F6',
    'xiaomi': '22D3EE',
    'google-pixel': '10B981',
    'oppo': 'A855F7'
  }
  return colors[brand.value] || 'A855F7'
})

// Données exemples - à remplacer avec vraies données
const models = computed(() => {
  if (brand.value === 'iphone') {
    return [
      { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max' },
      { id: 'iphone-16-pro', name: 'iPhone 16 Pro' },
      { id: 'iphone-16', name: 'iPhone 16' },
      { id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max' },
      { id: 'iphone-15-pro', name: 'iPhone 15 Pro' },
      { id: 'iphone-15', name: 'iPhone 15' },
    ]
  }
  if (brand.value === 'samsung') {
    return [
      { id: 'galaxy-s24-ultra', name: 'Galaxy S24 Ultra' },
      { id: 'galaxy-s24-plus', name: 'Galaxy S24+' },
      { id: 'galaxy-s24', name: 'Galaxy S24' },
      { id: 'galaxy-s23-ultra', name: 'Galaxy S23 Ultra' },
      { id: 'galaxy-s23', name: 'Galaxy S23' },
    ]
  }
  return []
})

const currentModel = computed(() => {
  const model = models.value.find(m => m.id === selectedModel.value)
  if (!model) return null
  
  // Tarifs exemples
  return {
    ...model,
    repairs: [
      { name: 'Vitre + Écran', price: 289 },
      { name: 'Changement batterie', price: 109 },
      { name: 'Caméra arrière', price: 169 },
      { name: 'Caméra selfie', price: 139 },
      { name: 'Lentille caméra', price: 109 },
      { name: 'Connecteur de charge', price: 149 },
      { name: 'Vitre arrière', price: 219 },
      { name: 'Dégât d\'eau', label: 'Sur devis' }
    ]
  }
})

const getModelImage = () => {
  if (brand.value === 'iphone') {
    return 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop&auto=format'
  }
  if (brand.value === 'samsung') {
    return 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600&h=400&fit=crop&auto=format'
  }
  return 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop&auto=format'
}

onMounted(() => {
  if (models.value.length > 0 && !selectedModel.value) {
    selectedModel.value = models.value[0].id
  }
})
</script>
