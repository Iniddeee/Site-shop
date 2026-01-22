<template>
  <section class="min-h-[80vh] bg-gradient-to-br from-light-100 to-primary-50 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-4xl mx-auto">
        
        <!-- Badge -->
        <span class="inline-block bg-accent-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
          🔧 Réparation Express • 📍 Porrentruy
        </span>
        
        <!-- Titre principal -->
        <h1 class="text-5xl md:text-6xl font-title font-bold text-dark-900 mb-6">
          Vos réparations <span class="text-primary-600">smartphone</span><br>
          & <span class="text-leather-600">cordonnerie</span><br>
          en un seul endroit
        </h1>
        
        <!-- Sous-titre -->
        <p class="text-xl text-dark-700 mb-10 max-w-2xl mx-auto">
          Service express, qualité professionnelle. Téléphone cassé ou chaussures usées, 
          nous avons la solution pour vous.
        </p>
        
        <!-- 2 CTA côte à côte -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <router-link 
            to="/reparation/smartphones" 
            class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
          >
            <Smartphone class="w-6 h-6" />
            Réparation Smartphone
          </router-link>
          <router-link 
            to="/cordonnerie" 
            class="bg-leather-600 hover:bg-leather-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-xl"
          >
            <Scissors class="w-6 h-6" />
            Cordonnerie
          </router-link>
        </div>
        
        <!-- Numéro de téléphone -->
        <a 
          href="tel:0XXXXXXXX" 
          class="inline-flex items-center gap-2 text-dark-700 hover:text-primary-600 transition"
        >
          <Phone class="w-5 h-5" />
          <span class="text-lg">Appelez-nous : <strong>0XX XXX XX XX</strong></span>
        </a>
        
      </div>
      
      <!-- Images des 2 services -->
      <div class="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop" 
            alt="Réparation smartphone" 
            class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent flex items-end p-6">
            <span class="text-white text-xl font-semibold">📱 Réparation Tech</span>
          </div>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-2xl group">
          <img 
            src="https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=600&h=400&fit=crop" 
            alt="Cordonnerie" 
            class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" 
          />
          <div class="absolute inset-0 bg-gradient-to-t from-leather-900/60 to-transparent flex items-end p-6">
            <span class="text-white text-xl font-semibold">👞 Cordonnerie</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Smartphone, Scissors, Phone } from 'lucide-vue-next'
</script>
