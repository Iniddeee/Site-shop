<template>
  <div>
    <!-- Header de page -->
    <section class="py-16 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-sm text-dark-600 mb-8">
          <router-link to="/" class="hover:text-primary-600 transition-colors">Accueil</router-link>
          <ChevronRight :size="16" />
          <span class="text-primary-600 font-medium">Réparation Ordinateur</span>
        </nav>

        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-title font-bold text-dark-900 mb-4">
            Réparation <span class="text-primary-600">Ordinateur</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-2xl mx-auto">
            PC portable et fixe, Mac - Service sur place et en atelier
          </p>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle gradient>
          Nos Services de Réparation
        </SectionTitle>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Monitor :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Écran LCD</h3>
            <p class="text-dark-600 text-sm mb-4">
              Remplacement d'écran cassé ou défectueux pour PC portable
            </p>
            <div class="text-2xl font-bold text-primary-600">À partir de 199 CHF</div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <HardDrive :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Disque dur / SSD</h3>
            <p class="text-dark-600 text-sm mb-4">
              Remplacement et upgrade vers SSD pour plus de performance
            </p>
            <div class="text-2xl font-bold text-primary-600">À partir de 129 CHF</div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Cpu :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">RAM</h3>
            <p class="text-dark-600 text-sm mb-4">
              Ajout ou remplacement de mémoire RAM pour plus de rapidité
            </p>
            <div class="text-2xl font-bold text-primary-600">À partir de 89 CHF</div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-accent-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Battery :size="32" class="text-accent-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Batterie</h3>
            <p class="text-dark-600 text-sm mb-4">
              Remplacement de batterie pour PC portable
            </p>
            <div class="text-2xl font-bold text-accent-600">À partir de 99 CHF</div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Keyboard :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Clavier</h3>
            <p class="text-dark-600 text-sm mb-4">
              Remplacement de clavier endommagé ou défectueux
            </p>
            <div class="text-2xl font-bold text-primary-600">À partir de 119 CHF</div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Wifi :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Carte WiFi</h3>
            <p class="text-dark-600 text-sm mb-4">
              Réparation ou remplacement carte réseau WiFi
            </p>
            <div class="text-2xl font-bold text-primary-600">À partir de 99 CHF</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagements -->
    <EngagementsGrid />
  </div>
</template>

<script setup>
import { ChevronRight, Monitor, HardDrive, Cpu, Battery, Keyboard, Wifi } from 'lucide-vue-next'
import SectionTitle from '../components/ui/SectionTitle.vue'
import EngagementsGrid from '../components/home/EngagementsGrid.vue'
</script>
