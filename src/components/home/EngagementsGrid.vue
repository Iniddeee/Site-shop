<template>
  <section class="py-20 bg-light-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle gradient>
        Nos Engagements
      </SectionTitle>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Réparation express 1-2h -->
        <div class="bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center group">
          <div class="relative">
            <div class="w-20 h-20 bg-primary-100 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap :size="40" class="text-primary-600" />
            </div>
            
            <div class="space-y-3">
              <h3 class="text-xl font-title font-bold text-dark-900">
                Réparation express
              </h3>
              <div class="text-3xl font-title font-bold text-primary-600">
                1-2h
              </div>
              <p class="text-dark-600 text-sm leading-relaxed">
                La plupart des réparations effectuées en 1-2h selon la réparation
              </p>
            </div>
          </div>
        </div>

        <!-- Garantie 6 mois à 1 an -->
        <div class="bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center group">
          <div class="relative">
            <div class="w-20 h-20 bg-primary-100 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield :size="40" class="text-primary-600" />
            </div>
            
            <div class="space-y-3">
              <h3 class="text-xl font-title font-bold text-dark-900">
                Garantie
              </h3>
              <div class="text-3xl font-title font-bold text-primary-600">
                6 mois à 1 an
              </div>
              <p class="text-dark-600 text-sm leading-relaxed">
                Selon les pièces changées, garantie pièces et main d'œuvre
              </p>
            </div>
          </div>
        </div>

        <!-- Technicien Pro -->
        <div class="bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center group">
          <div class="relative">
            <div class="w-20 h-20 bg-primary-100 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <UserCheck :size="40" class="text-primary-600" />
            </div>
            
            <div class="space-y-3">
              <h3 class="text-xl font-title font-bold text-dark-900">
                Technicien Pro
              </h3>
              <div class="text-lg font-title font-bold text-primary-600">
                +10 ans d'exp.
              </div>
              <p class="text-dark-600 text-sm leading-relaxed">
                Experts certifiés avec plus de 10 ans d'expérience
              </p>
            </div>
          </div>
        </div>

        <!-- Pièces d'origine -->
        <div class="bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center group">
          <div class="relative">
            <div class="w-20 h-20 bg-accent-100 rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Cpu :size="40" class="text-accent-600" />
            </div>
            
            <div class="space-y-3">
              <h3 class="text-xl font-title font-bold text-dark-900">
                Pièces d'origine
              </h3>
              <div class="text-lg font-title font-bold text-accent-600">
                Qualité premium
              </div>
              <p class="text-dark-600 text-sm leading-relaxed">
                Nous utilisons uniquement des pièces certifiées et testées
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Final -->
      <div class="text-center mt-16">
        <div class="space-y-6">
          <h3 class="text-2xl font-title font-bold text-dark-900">
            Prêt à réparer votre appareil ?
          </h3>
          <p class="text-dark-600 max-w-2xl mx-auto">
            Diagnostic gratuit et devis transparent. Contactez-nous dès maintenant.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneButton 
              size="xl" 
              variant="primary"
              number="0XX XXX XX XX"
              label="Appelez maintenant"
            />
            <GradientButton 
              variant="outline" 
              size="xl"
              tag="router-link"
              to="/contact"
            >
              Formulaire de contact
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Zap, Shield, UserCheck, Cpu } from 'lucide-vue-next'
import SectionTitle from '../ui/SectionTitle.vue'
import PhoneButton from '../ui/PhoneButton.vue'
import GradientButton from '../ui/GradientButton.vue'
</script>
