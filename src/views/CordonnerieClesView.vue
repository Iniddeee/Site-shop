<template>
  <div class="min-h-screen bg-light-100">
    <section class="bg-leather-700 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="text-leather-200 text-sm mb-4">
          <router-link to="/" class="hover:text-white">Accueil</router-link>
          <span class="mx-2">/</span>
          <router-link to="/cordonnerie" class="hover:text-white">Cordonnerie</router-link>
          <span class="mx-2">/</span>
          <span class="text-white">Clés</span>
        </nav>
        <h1 class="text-4xl font-title font-bold text-white">Clés & Télécommandes</h1>
        <p class="text-leather-200 mt-2">Reproduction de clés, badges et télécommandes</p>
      </div>
    </section>
    
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="service in services" :key="service.id" class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
            <div class="relative aspect-square bg-leather-50">
              <img :src="service.image" :alt="service.name" class="w-full h-full object-cover" />
              <span v-if="service.popular" class="absolute top-3 left-3 bg-leather-600 text-white text-xs font-bold px-2 py-1 rounded">Populaire</span>
              <span class="absolute top-3 right-3 bg-white/90 text-dark-700 text-xs font-medium px-2 py-1 rounded">{{ service.duration }}</span>
            </div>
            <div class="p-4">
              <h3 class="font-semibold text-dark-900 mb-1">{{ service.name }}</h3>
              <p class="text-sm text-dark-600 mb-3">{{ service.description }}</p>
              <div class="flex justify-between items-center">
                <span class="text-xl font-bold text-leather-600">CHF {{ service.price.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { cordonnerieServices } from '../data/cordonnerie-services'

const services = ref(cordonnerieServices.filter(s => s.category === 'cles'))
</script>
