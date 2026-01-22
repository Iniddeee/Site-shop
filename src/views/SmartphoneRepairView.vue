<template>
  <div>
    <!-- Header de page -->
    <section class="py-16 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-sm text-dark-600 mb-8">
          <router-link to="/" class="hover:text-primary-600 transition-colors">Accueil</router-link>
          <ChevronRight :size="16" />
          <span class="text-dark-700">Réparation</span>
          <ChevronRight :size="16" />
          <span class="text-primary-600 font-medium">Smartphones</span>
        </nav>

        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-title font-bold text-dark-900 mb-4">
            Réparation <span class="text-primary-600">Smartphone</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-2xl mx-auto">
            Toutes marques réparées - Pièces d'origine - Garantie 6 mois à 1 an
          </p>
        </div>
      </div>
    </section>

    <!-- Section marques -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle gradient>
          Choisissez la marque de votre smartphone
        </SectionTitle>

        <div class="flex justify-center gap-8">
          <!-- iPhone -->
          <router-link 
            to="/reparation/smartphones/iphone"
            class="group"
          >
            <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center h-full">
              <div class="space-y-4">
                <div class="w-16 h-16 bg-primary-600 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Smartphone :size="32" class="text-white" />
                </div>
                <div>
                  <div class="text-xs text-dark-600 uppercase tracking-wide mb-1">Réparations</div>
                  <h3 class="text-lg font-title font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                    iPhone
                  </h3>
                </div>
              </div>
            </div>
          </router-link>

          <!-- Samsung -->
          <router-link 
            to="/reparation/smartphones/samsung"
            class="group"
          >
            <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center h-full">
              <div class="space-y-4">
                <div class="w-16 h-16 bg-primary-600 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Smartphone :size="32" class="text-white" />
                </div>
                <div>
                  <div class="text-xs text-dark-600 uppercase tracking-wide mb-1">Réparations</div>
                  <h3 class="text-lg font-title font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
                    Samsung
                  </h3>
                </div>
              </div>
            </div>
          </router-link>

        </div>
      </div>
    </section>

    <!-- Engagements (réutiliser le composant) -->
    <EngagementsGrid />
  </div>
</template>

<script setup>
import { ChevronRight, Smartphone } from 'lucide-vue-next'
import SectionTitle from '../components/ui/SectionTitle.vue'
import EngagementsGrid from '../components/home/EngagementsGrid.vue'
</script>
