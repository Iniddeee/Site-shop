<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-6">
        <!-- Box 1: Achat occasion -->
        <div class="relative bg-light-100 rounded-2xl p-8 border border-light-300 overflow-hidden group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
          <!-- Fond coloré semi-transparent -->
          <div class="absolute inset-0 bg-primary-100/50 group-hover:bg-primary-100 transition-colors"></div>
          
          <div class="relative z-10 space-y-6">
            <div class="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShoppingBag :size="32" class="text-white" />
            </div>
            
            <div class="space-y-3">
              <h3 class="text-2xl font-title font-bold text-dark-900">
                Achat occasion
              </h3>
              <p class="text-dark-600 leading-relaxed">
                Smartphones reconditionnés avec garantie. Testés et vérifiés par nos experts.
              </p>
            </div>
            
            <GradientButton 
              variant="outline" 
              size="md"
              tag="router-link"
              to="/shop"
            >
              Voir le stock
            </GradientButton>
          </div>
        </div>

        <!-- Box 2: Dégât d'eau -->
        <div class="relative bg-light-100 rounded-2xl p-8 border border-light-300 overflow-hidden group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
          <div class="absolute inset-0 bg-primary-100/50 group-hover:bg-primary-100 transition-colors"></div>
          
          <div class="relative z-10 space-y-6">
            <div class="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Droplets :size="32" class="text-white" />
            </div>
            
            <div class="space-y-3">
              <h3 class="text-2xl font-title font-bold text-dark-900">
                Dégât d'eau
              </h3>
              <p class="text-dark-600 leading-relaxed">
                Intervention d'urgence 24h/24. Séchage professionnel et récupération de données.
              </p>
            </div>
            
            <GradientButton 
              variant="primary" 
              size="md"
              href="tel:0XXXXXXXXX"
            >
              Urgence 24h/24
            </GradientButton>
          </div>
        </div>

        <!-- Box 3: Solutions Pro -->
        <div class="relative bg-light-100 rounded-2xl p-8 border border-light-300 overflow-hidden group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
          <div class="absolute inset-0 bg-accent-100/50 group-hover:bg-accent-100 transition-colors"></div>
          
          <div class="relative z-10 space-y-6">
            <div class="w-16 h-16 bg-accent-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Building :size="32" class="text-white" />
            </div>
            
            <div class="space-y-3">
              <h3 class="text-2xl font-title font-bold text-dark-900">
                Solutions Pro
              </h3>
              <p class="text-dark-600 leading-relaxed">
                Contrats de maintenance pour entreprises. Intervention sur site et support technique.
              </p>
            </div>
            
            <GradientButton 
              variant="outline" 
              size="md"
              tag="router-link"
              to="/contact"
            >
              Devis gratuit
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ShoppingBag, Droplets, Building } from 'lucide-vue-next'
import GradientButton from '../ui/GradientButton.vue'
</script>
