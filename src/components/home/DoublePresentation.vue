<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Bloc Smartphone -->
      <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <span class="text-primary-600 font-semibold mb-2 block">📱 Espace Tech</span>
          <h2 class="text-3xl font-title font-bold text-dark-900 mb-4">Réparation Smartphone & Informatique</h2>
          <p class="text-dark-700 mb-6">
            Votre smartphone est tombé ? L'écran est fissuré ? La batterie ne tient plus ?
            Nos techniciens certifiés réparent votre appareil en express, avec des pièces de qualité.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center gap-2 text-dark-700">
              <CheckCircle2 class="w-5 h-5 text-primary-600 flex-shrink-0" />
              Réparation en 1-2h selon la réparation (écran, batterie)
            </li>
            <li class="flex items-center gap-2 text-dark-700">
              <CheckCircle2 class="w-5 h-5 text-primary-600 flex-shrink-0" />
              Garantie 6 mois à 1 an sur pièces
            </li>
            <li class="flex items-center gap-2 text-dark-700">
              <CheckCircle2 class="w-5 h-5 text-primary-600 flex-shrink-0" />
              Toutes marques : iPhone, Samsung, Huawei...
            </li>
          </ul>
          <router-link 
            to="/reparation/smartphones" 
            class="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition"
          >
            Voir les tarifs smartphone →
          </router-link>
        </div>
        <div class="relative">
          <img 
            src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=500&fit=crop" 
            alt="Atelier réparation smartphone" 
            class="rounded-2xl shadow-xl" 
          />
          <div class="absolute -bottom-4 -right-4 bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
            Express 1-2h
          </div>
        </div>
      </div>
      
      <!-- Bloc Cordonnerie -->
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1 relative">
          <img 
            src="https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=600&h=500&fit=crop" 
            alt="Atelier cordonnerie" 
            class="rounded-2xl shadow-xl" 
          />
          <div class="absolute -bottom-4 -left-4 bg-leather-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
            Artisan qualifié
          </div>
        </div>
        <div class="order-1 md:order-2">
          <span class="text-leather-600 font-semibold mb-2 block">👞 Cordonnerie</span>
          <h2 class="text-3xl font-title font-bold text-dark-900 mb-4">Cordonnerie & Maroquinerie</h2>
          <p class="text-dark-700 mb-6">
            Vos chaussures préférées méritent une seconde vie. Notre cordonnier expert 
            répare, restaure et entretient tous vos articles en cuir.
          </p>
          <ul class="space-y-3 mb-6">
            <li class="flex items-center gap-2 text-dark-700">
              <CheckCircle2 class="w-5 h-5 text-leather-600 flex-shrink-0" />
              Ressemelage et talons toutes marques
            </li>
            <li class="flex items-center gap-2 text-dark-700">
              <CheckCircle2 class="w-5 h-5 text-leather-600 flex-shrink-0" />
              Réparation sacs, ceintures, maroquinerie
            </li>
            <li class="flex items-center gap-2 text-dark-700">
              <CheckCircle2 class="w-5 h-5 text-leather-600 flex-shrink-0" />
              Reproduction de clés et télécommandes
            </li>
          </ul>
          <router-link 
            to="/cordonnerie" 
            class="inline-block bg-leather-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-leather-700 transition"
          >
            Voir les services cordonnerie →
          </router-link>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { CheckCircle2 } from 'lucide-vue-next'
</script>
