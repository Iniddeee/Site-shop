<template>
  <div>
    <!-- Header de page -->
    <section class="py-16 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-sm text-dark-600 mb-8">
          <router-link to="/" class="hover:text-primary-600 transition-colors">Accueil</router-link>
          <ChevronRight :size="16" />
          <span class="text-primary-600 font-medium">Dépannage 7/7</span>
        </nav>

        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-title font-bold text-dark-900 mb-4">
            Dépannage <span class="text-primary-600">7/7</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-2xl mx-auto">
            Service d'urgence - Intervention rapide - Coursier disponible
          </p>
        </div>
      </div>
    </section>

    <!-- Services d'urgence -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle gradient>
          Services d'Urgence
        </SectionTitle>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Truck :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Coursier 7/7</h3>
            <p class="text-dark-600 text-sm mb-4">
              Enlèvement et retour à domicile 7 jours sur 7
            </p>
            <div class="text-2xl font-bold text-primary-600">Sur devis</div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-accent-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Droplets :size="32" class="text-accent-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Dégât d'eau</h3>
            <p class="text-dark-600 text-sm mb-4">
              Intervention d'urgence 24h/24 pour dégâts des liquides
            </p>
            <div class="text-2xl font-bold text-accent-600">Sur devis</div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Database :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Récupération données</h3>
            <p class="text-dark-600 text-sm mb-4">
              Récupération urgente de vos données importantes
            </p>
            <div class="text-2xl font-bold text-primary-600">Sur devis</div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Wrench :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Dépannage sur place</h3>
            <p class="text-dark-600 text-sm mb-4">
              Intervention à domicile ou au bureau pour entreprises
            </p>
            <div class="text-2xl font-bold text-primary-600">Sur devis</div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Shield :size="32" class="text-primary-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Contrat Pro</h3>
            <p class="text-dark-600 text-sm mb-4">
              Maintenance et support technique pour entreprises
            </p>
            <div class="text-2xl font-bold text-primary-600">Sur devis</div>
          </div>

          <div class="bg-white rounded-2xl p-6 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-16 h-16 bg-accent-100 rounded-xl mx-auto mb-4 flex items-center justify-center">
              <Clock :size="32" class="text-accent-600" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Service Express</h3>
            <p class="text-dark-600 text-sm mb-4">
              Priorité absolue - Réparation sous 2h garantie
            </p>
            <div class="text-2xl font-bold text-accent-600">Sur devis</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Urgence -->
    <section class="py-20 bg-primary-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-title font-bold text-white mb-6">
          Urgence ? Contactez-nous 24h/24
        </h2>
        <p class="text-white/90 text-lg mb-8">
          Notre service d'urgence est disponible 7 jours sur 7 pour vous aider
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <PhoneButton 
            size="xl" 
            variant="white"
            number="0XX XXX XX XX"
            label="Urgence 24h/24"
          />
          <GradientButton 
            variant="outline" 
            size="xl"
            tag="router-link"
            to="/contact"
            class="border-white text-white hover:bg-white hover:text-dark-900"
          >
            Formulaire d'urgence
          </GradientButton>
        </div>
      </div>
    </section>

    <!-- Engagements -->
    <EngagementsGrid />
  </div>
</template>

<script setup>
import { ChevronRight, Truck, Droplets, Database, Wrench, Shield, Clock } from 'lucide-vue-next'
import SectionTitle from '../components/ui/SectionTitle.vue'
import PhoneButton from '../components/ui/PhoneButton.vue'
import GradientButton from '../components/ui/GradientButton.vue'
import EngagementsGrid from '../components/home/EngagementsGrid.vue'
</script>
