<template>
  <section class="py-20 bg-light-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle gradient>
        Nos Services
      </SectionTitle>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Card Smartphone -->
        <router-link 
          to="/reparation/smartphones"
          class="group text-center bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Smartphone :size="32" class="text-primary-600" />
          </div>
          
          <div class="space-y-2 mb-4">
            <div class="text-sm text-dark-600 uppercase tracking-wide">Réparation</div>
            <h3 class="text-2xl font-title font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
              Smartphone
            </h3>
          </div>
          
          <p class="text-dark-600 text-sm leading-relaxed mb-6">
            iPhone, Samsung, Huawei, Xiaomi et toutes marques. Écran, batterie, caméra.
          </p>
          
          <div class="flex items-center justify-center text-primary-600 group-hover:gap-2 transition-all">
            <span class="font-medium">Voir les tarifs</span>
            <ArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
          </div>
        </router-link>

        <!-- Card Ordinateur -->
        <router-link 
          to="/reparation/ordinateurs"
          class="group text-center bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Laptop :size="32" class="text-primary-600" />
          </div>
          
          <div class="space-y-2 mb-4">
            <div class="text-sm text-dark-600 uppercase tracking-wide">Réparation</div>
            <h3 class="text-2xl font-title font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
              Ordinateur
            </h3>
          </div>
          
          <p class="text-dark-600 text-sm leading-relaxed mb-6">
            PC portable et fixe, Mac. Écran, disque dur, RAM, batterie, nettoyage.
          </p>
          
          <div class="flex items-center justify-center text-primary-600 group-hover:gap-2 transition-all">
            <span class="font-medium">Voir les tarifs</span>
            <ArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
          </div>
        </router-link>

        <!-- Card Tablette -->
        <router-link 
          to="/reparation/tablettes"
          class="group text-center bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
        >
          <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Tablet :size="32" class="text-primary-600" />
          </div>
          
          <div class="space-y-2 mb-4">
            <div class="text-sm text-dark-600 uppercase tracking-wide">Réparation</div>
            <h3 class="text-2xl font-title font-bold text-dark-900 group-hover:text-primary-600 transition-colors">
              Tablette
            </h3>
          </div>
          
          <p class="text-dark-600 text-sm leading-relaxed mb-6">
            iPad, Samsung Galaxy Tab, Surface. Écran tactile, batterie, connectique.
          </p>
          
          <div class="flex items-center justify-center text-primary-600 group-hover:gap-2 transition-all">
            <span class="font-medium">Voir les tarifs</span>
            <ArrowRight :size="16" class="group-hover:translate-x-1 transition-transform" />
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Smartphone, Laptop, Tablet, ArrowRight } from 'lucide-vue-next'
import SectionTitle from '../ui/SectionTitle.vue'
</script>
