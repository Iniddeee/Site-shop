<template>
  <div class="bg-white min-h-screen">
    <!-- Header de page -->
    <section class="py-20 bg-gradient-to-br from-light-100 to-primary-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-title font-bold text-dark-900 mb-4">
            Notre <span class="text-primary-600">Boutique</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-2xl mx-auto">
            Choisissez votre univers
          </p>
        </div>
      </div>
    </section>

    <!-- 2 Univers -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <!-- Univers Smartphone -->
          <router-link to="/shop/smartphones" class="group">
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all">
              <div class="aspect-video relative">
                <img src="https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&h=400&fit=crop" alt="Réparations Smartphone" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-primary-900/20"></div>
                <div class="absolute inset-0 flex flex-col justify-end p-8">
                  <span class="text-primary-200 font-medium mb-2">📱 Espace Tech</span>
                  <h2 class="text-3xl font-bold text-white mb-2">Réparations Smartphone</h2>
                  <p class="text-primary-100">iPhone, Samsung, Huawei, tablettes, ordinateurs...</p>
                </div>
              </div>
              <div class="p-6 flex justify-between items-center">
                <span class="text-dark-700">Tous nos services tech</span>
                <span class="text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Voir tout →
                </span>
              </div>
            </div>
          </router-link>
          
          <!-- Univers Cordonnerie -->
          <router-link to="/shop/cordonnerie" class="group">
            <div class="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all">
              <div class="aspect-video relative">
                <img src="https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=600&h=400&fit=crop" alt="Cordonnerie" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-gradient-to-t from-leather-900/80 to-leather-900/20"></div>
                <div class="absolute inset-0 flex flex-col justify-end p-8">
                  <span class="text-leather-200 font-medium mb-2">👞 Cordonnerie</span>
                  <h2 class="text-3xl font-bold text-white mb-2">Services Cordonnerie</h2>
                  <p class="text-leather-100">Chaussures, sacs, clés, maroquinerie...</p>
                </div>
              </div>
              <div class="p-6 flex justify-between items-center">
                <span class="text-dark-700">45 services disponibles</span>
                <span class="text-leather-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Voir tout →
                </span>
              </div>
            </div>
          </router-link>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Page de choix entre les 2 univers - pas de logique nécessaire
</script>
