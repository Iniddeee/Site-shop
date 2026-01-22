<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Texte à gauche -->
        <div class="space-y-8">
          <!-- Label -->
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-light-100 rounded-full text-sm border border-light-300">
            <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
            <span class="text-dark-700">À propos</span>
          </div>

          <div class="space-y-6">
            <h2 class="text-3xl sm:text-4xl font-title font-bold text-dark-900">
              Réparation smartphone 
              <span class="text-primary-600">Porrentruy</span>
            </h2>
            
            <div class="space-y-4 text-dark-600 leading-relaxed">
              <p>
                <strong class="text-dark-900">Expert en réparation depuis plus de 10 ans</strong>, 
                nous sommes votre référence pour la réparation de smartphones, tablettes et ordinateurs 
                à Porrentruy.
              </p>
              
              <p>
                Notre atelier équipé des dernières technologies nous permet d'intervenir sur tous types 
                d'appareils avec des <strong class="text-primary-600">pièces d'origine</strong> et une 
                <strong class="text-primary-600">garantie de 2 ans</strong>.
              </p>
              
              <p>
                Réparation express en 1-2h selon la réparation pour la plupart des interventions. 
                Diagnostic gratuit et devis transparent.
              </p>
            </div>
          </div>

          <!-- Marques supportées -->
          <div class="space-y-4">
            <h3 class="text-lg font-title font-semibold text-dark-900">
              Marques supportées
            </h3>
            
            <div class="grid grid-cols-3 sm:grid-cols-6 gap-4">
              <div class="bg-light-100 rounded-lg p-3 text-center border border-light-300 hover:border-primary-600 transition-colors">
                <div class="text-xs font-medium text-dark-700">iPhone</div>
              </div>
              <div class="bg-light-100 rounded-lg p-3 text-center border border-light-300 hover:border-primary-600 transition-colors">
                <div class="text-xs font-medium text-dark-700">Samsung</div>
              </div>
              <div class="bg-light-100 rounded-lg p-3 text-center border border-light-300 hover:border-primary-600 transition-colors">
                <div class="text-xs font-medium text-dark-700">Huawei</div>
              </div>
              <div class="bg-light-100 rounded-lg p-3 text-center border border-light-300 hover:border-accent-600 transition-colors">
                <div class="text-xs font-medium text-dark-700">Xiaomi</div>
              </div>
              <div class="bg-light-100 rounded-lg p-3 text-center border border-light-300 hover:border-accent-600 transition-colors">
                <div class="text-xs font-medium text-dark-700">Google</div>
              </div>
              <div class="bg-light-100 rounded-lg p-3 text-center border border-light-300 hover:border-primary-600 transition-colors">
                <div class="text-xs font-medium text-dark-700">OPPO</div>
              </div>
            </div>
          </div>

          <!-- Bouton CTA -->
          <div class="pt-4">
            <GradientButton 
              variant="primary" 
              size="lg"
              tag="router-link"
              to="/a-propos"
            >
              En savoir plus sur nous
            </GradientButton>
          </div>
        </div>

        <!-- Image à droite -->
        <div class="relative">
          <div class="relative">
            <!-- Effet glow -->
            <div class="absolute inset-0 bg-primary-600/10 rounded-2xl blur-2xl"></div>
            <div class="relative bg-white rounded-2xl overflow-hidden border border-light-300 shadow-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=500&fit=crop&auto=format" 
                alt="Réparation de smartphones"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import GradientButton from '../ui/GradientButton.vue'
</script>
