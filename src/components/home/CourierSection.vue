<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image à gauche -->
        <div class="relative">
          <div class="relative">
            <div class="absolute inset-0 bg-primary-600/10 rounded-2xl blur-2xl"></div>
            <div class="relative bg-white rounded-2xl overflow-hidden border border-light-300 shadow-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop&auto=format" 
                alt="Service de coursier"
                class="w-full h-auto"
              />
              <div class="absolute top-4 right-4">
                <div class="bg-primary-600 rounded-lg px-3 py-1 text-white text-sm font-bold">
                  7j/7
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Texte à droite -->
        <div class="space-y-8">
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-light-100 rounded-full text-sm border border-light-300">
            <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
            <span class="text-dark-700">Service premium</span>
          </div>

          <div class="space-y-6">
            <h2 class="text-3xl sm:text-4xl font-title font-bold text-dark-900">
              Service de <span class="text-primary-600">coursier</span>
            </h2>
            
            <div class="space-y-4 text-dark-600 leading-relaxed">
              <p>
                <strong class="text-dark-900">Pas le temps de vous déplacer ?</strong> 
                Notre service de coursier vient récupérer votre appareil directement chez vous ou au bureau.
              </p>
              <p>
                Réparation express dans notre atelier et retour sous 24h maximum. 
                Service disponible 7j/7 sur Porrentruy et communes environnantes.
              </p>
            </div>

            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <CheckCircle2 :size="20" class="text-primary-600" />
                <span class="text-dark-700">Enlèvement gratuit à domicile</span>
              </div>
              <div class="flex items-center space-x-3">
                <CheckCircle2 :size="20" class="text-primary-600" />
                <span class="text-dark-700">Retour sous 24h maximum</span>
              </div>
              <div class="flex items-center space-x-3">
                <CheckCircle2 :size="20" class="text-primary-600" />
                <span class="text-dark-700">Service 7j/7 disponible</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-4">
            <PhoneButton 
              size="lg" 
              variant="primary"
              number="0XX XXX XX XX"
              label="Coursier"
            />
            <GradientButton 
              variant="outline" 
              size="lg"
              tag="router-link"
              to="/depannage-7-7"
            >
              En savoir plus
            </GradientButton>
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
