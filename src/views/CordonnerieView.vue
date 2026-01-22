<template>
  <div class="min-h-screen bg-light-100">
    
    <!-- Header -->
    <section class="bg-leather-700 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="text-leather-200 text-sm mb-4">
          <router-link to="/" class="hover:text-white">Accueil</router-link>
          <span class="mx-2">/</span>
          <span class="text-white">Cordonnerie</span>
        </nav>
        <h1 class="text-4xl font-title font-bold text-white mb-4">Services Cordonnerie</h1>
        <p class="text-leather-200 text-lg">Réparation, entretien et reproduction de clés</p>
      </div>
    </section>
    
    <!-- Services principaux -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <router-link 
            to="/cordonnerie/chaussures"
            class="group bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover hover:border-leather-300 transition-all"
          >
            <div class="w-16 h-16 bg-leather-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Footprints :size="32" class="text-leather-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Réparation Chaussures</h3>
            <p class="text-dark-600 text-sm mb-4">Ressemelage, talons, coutures</p>
            <span class="text-leather-600 font-medium text-sm">18 services →</span>
          </router-link>
          
          <router-link 
            to="/cordonnerie/maroquinerie"
            class="group bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover hover:border-leather-300 transition-all"
          >
            <div class="w-16 h-16 bg-leather-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Briefcase :size="32" class="text-leather-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Sacs & Maroquinerie</h3>
            <p class="text-dark-600 text-sm mb-4">Sacs, ceintures, portefeuilles</p>
            <span class="text-leather-600 font-medium text-sm">12 services →</span>
          </router-link>
          
          <router-link 
            to="/cordonnerie/cles"
            class="group bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover hover:border-leather-300 transition-all"
          >
            <div class="w-16 h-16 bg-leather-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Key :size="32" class="text-leather-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Clés & Télécommandes</h3>
            <p class="text-dark-600 text-sm mb-4">Reproduction, programmation</p>
            <span class="text-leather-600 font-medium text-sm">10 services →</span>
          </router-link>
          
          <router-link 
            to="/cordonnerie/entretien"
            class="group bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover hover:border-leather-300 transition-all"
          >
            <div class="w-16 h-16 bg-leather-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Sparkles :size="32" class="text-leather-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Entretien Cuir</h3>
            <p class="text-dark-600 text-sm mb-4">Nettoyage, imperméabilisation</p>
            <span class="text-leather-600 font-medium text-sm">5 services →</span>
          </router-link>
          
        </div>
      </div>
    </section>
    
    <!-- Services populaires -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-title font-bold text-dark-900 text-center mb-12">Services populaires</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="service in popularServices" :key="service.id" class="bg-light-100 rounded-xl p-6 border border-light-300">
            <h3 class="font-semibold text-dark-900 mb-2">{{ service.name }}</h3>
            <p class="text-sm text-dark-600 mb-3">{{ service.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-xl font-bold text-leather-600">CHF {{ service.price.toFixed(2) }}</span>
              <span class="text-xs text-dark-500">{{ service.duration }}</span>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12">
          <router-link 
            to="/shop/cordonnerie" 
            class="inline-block bg-leather-600 hover:bg-leather-700 text-white px-8 py-4 rounded-xl font-semibold transition"
          >
            Voir tous les services
          </router-link>
        </div>
      </div>
    </section>
    
    <!-- Pourquoi nous choisir -->
    <section class="py-20 bg-leather-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-title font-bold text-dark-900 text-center mb-12">Notre expertise cordonnerie</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-leather-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award :size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-dark-900 mb-2">Artisan qualifié</h3>
            <p class="text-dark-600">Plus de 15 ans d'expérience en cordonnerie traditionnelle</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-leather-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock :size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-dark-900 mb-2">Service rapide</h3>
            <p class="text-dark-600">Certaines réparations effectuées en express</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-leather-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp :size="32" class="text-white" />
            </div>
            <h3 class="text-xl font-bold text-dark-900 mb-2">Qualité garantie</h3>
            <p class="text-dark-600">Matériaux de qualité et finitions soignées</p>
          </div>
        </div>
      </div>
    </section>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Footprints, Briefcase, Key, Sparkles, Award, Clock, ThumbsUp } from 'lucide-vue-next'
import { cordonnerieServices } from '../data/cordonnerie-services'

const popularServices = ref(
  cordonnerieServices.filter(s => s.popular).slice(0, 4)
)
</script>
