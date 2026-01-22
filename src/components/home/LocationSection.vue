<template>
  <section class="py-20 bg-light-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image à gauche -->
        <div class="relative order-2 lg:order-1">
          <div class="relative">
            <!-- Effet glow -->
            <div class="absolute inset-0 bg-primary-600/10 rounded-2xl blur-2xl"></div>
            
            <!-- Map container -->
            <div class="relative bg-white rounded-2xl overflow-hidden border border-light-300 shadow-card-hover h-[500px]">
              <!-- 
                COMMENT MODIFIER LA CARTE GOOGLE MAPS :
                1. Allez sur https://www.google.com/maps
                2. Cherchez votre adresse : "Fbg Saint-Germain 2, 2900 Porrentruy"
                3. Cliquez sur "Partager" puis "Intégrer une carte"
                4. Copiez le code iframe et remplacez l'attribut src ci-dessous
              -->
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.8237!2d7.0750!3d47.4150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791ca1234567890%3A0xabcdef1234567890!2sFbg%20Saint-Germain%202%2C%202900%20Porrentruy!5e0!3m2!1sfr!2sch!4v1234567890"
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        <!-- Texte à droite -->
        <div class="space-y-8 order-1 lg:order-2">
          <!-- Label -->
          <div class="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full text-sm border border-light-300 shadow-soft">
            <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
            <span class="text-primary-600">Porrentruy</span>
          </div>

          <div class="space-y-6">
            <h2 class="text-3xl sm:text-4xl font-title font-bold text-dark-900">
              Nous trouver
            </h2>
            
            <div class="space-y-6">
              <!-- Adresse -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <MapPin :size="20" class="text-primary-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-dark-900 mb-1">Adresse</h3>
                  <div class="text-dark-600">
                    <div>Fbg Saint-Germain 2</div>
                    <div>2900 Porrentruy</div>
                    <div>Suisse</div>
                  </div>
                </div>
              </div>

              <!-- Horaires -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Clock :size="20" class="text-primary-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-dark-900 mb-1">Horaires d'ouverture</h3>
                  <div class="text-dark-600 space-y-1">
                    <div>Lundi - Mercredi: 8h - 18h30</div>
                    <div>Jeudi: 8h - 20h</div>
                    <div>Vendredi: 8h - 18h30</div>
                    <div>Samedi: 8h - 17h</div>
                    <div class="text-dark-500">Dimanche: Fermé</div>
                  </div>
                </div>
              </div>

              <!-- Transport -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Car :size="20" class="text-primary-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-dark-900 mb-1">Accès</h3>
                  <div class="text-dark-600">
                    <div>Transports publics à proximité</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Boutons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <GradientButton 
              variant="primary" 
              size="lg"
              :icon="Navigation"
              href="https://www.google.com/maps/dir//Fbg+Saint-Germain+2,+2900+Porrentruy"
              target="_blank"
            >
              Itinéraire
            </GradientButton>
            
            <GradientButton 
              variant="outline" 
              size="lg"
              :icon="Phone"
              href="tel:0XXXXXXXXX"
            >
              Nous appeler
            </GradientButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MapPin, Clock, Car, Navigation, Phone } from 'lucide-vue-next'
import GradientButton from '../ui/GradientButton.vue'
</script>
