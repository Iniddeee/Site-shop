<template>
  <section class="relative min-h-[70vh] bg-gradient-to-br from-primary-50 via-white to-light-100 overflow-hidden">
    <!-- Formes géométriques animées en arrière-plan -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-xl animate-float"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-primary-300/20 rounded-full blur-xl animate-float" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-primary-100/40 rounded-full blur-xl animate-float" style="animation-delay: 4s;"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div class="grid lg:grid-cols-5 gap-12 items-center">
        <!-- Contenu gauche (60%) -->
        <div class="lg:col-span-3 space-y-8">
          <!-- Label -->
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-primary-200 rounded-full text-sm shadow-soft">
            <div class="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
            <span class="text-dark-700">Réparation Express</span>
          </div>

          <!-- Titre principal -->
          <div class="space-y-4">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-title font-bold text-dark-900 leading-tight">
              Réparation smartphone 
              <span class="text-primary-600">Porrentruy</span>
            </h1>
            <p class="text-lg text-primary-600 font-medium mt-2">
              Atelier de l'Esplanade
            </p>
            <p class="text-xl sm:text-2xl text-dark-700 font-medium">
              sans perte de données
            </p>
          </div>

          <!-- Description -->
          <p class="text-lg text-dark-600 leading-relaxed max-w-2xl">
            Service de réparation express pour smartphones, tablettes et ordinateurs. 
            Pièces d'origine, garantie 6 mois à 1 an, intervention en 1-2h selon la réparation.
          </p>

          <!-- Boutons CTA -->
          <div class="flex flex-col sm:flex-row gap-4">
            <!-- Gros bouton téléphone -->
            <PhoneButton 
              size="xl" 
              variant="primary"
              number="0XX XXX XX XX"
              label="Appelez-nous"
            />
            
            <!-- Bouton secondaire -->
            <GradientButton 
              variant="outline" 
              size="lg"
              tag="router-link"
              to="/shop"
            >
              Voir nos tarifs
            </GradientButton>
          </div>

          <!-- Points forts -->
          <div class="flex flex-wrap gap-6 pt-4">
            <div class="flex items-center space-x-2">
              <CheckCircle2 :size="20" class="text-primary-600" />
              <span class="text-dark-700">Réparation 1-2h</span>
            </div>
            <div class="flex items-center space-x-2">
              <CheckCircle2 :size="20" class="text-primary-600" />
              <span class="text-dark-700">Garantie 6 mois à 1 an</span>
            </div>
            <div class="flex items-center space-x-2">
              <CheckCircle2 :size="20" class="text-primary-600" />
              <span class="text-dark-700">Pièces d'origine</span>
            </div>
          </div>
        </div>

        <!-- Image droite (40%) -->
        <div class="lg:col-span-2 relative">
          <div class="relative">
            <!-- Effet ombre derrière l'image -->
            <div class="absolute inset-0 bg-primary-600/10 rounded-3xl blur-3xl transform rotate-6"></div>
            
            <!-- Image principale -->
            <div class="relative bg-white rounded-3xl p-8 border border-light-300 shadow-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=600&fit=crop&auto=format" 
                alt="Réparation smartphone professionnelle"
                class="w-full h-auto rounded-2xl"
              />
              
              <!-- Badge flottant -->
              <div class="absolute -top-4 -right-4 bg-primary-600 rounded-2xl p-4 shadow-primary">
                <div class="text-center">
                  <div class="text-2xl font-bold text-white">20</div>
                  <div class="text-xs text-white/90">minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckCircle2 } from 'lucide-vue-next'
import PhoneButton from '../ui/PhoneButton.vue'
import GradientButton from '../ui/GradientButton.vue'
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
