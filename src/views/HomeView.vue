<template>
  <div>
    <!-- Hero Multi-Services -->
    <HeroMultiService />
    
    <!-- Services Grid (6 cards: 3 tech + 3 cordonnerie) -->
    <ServicesGridMulti />
    
    <!-- Double Présentation (Smartphone + Cordonnerie) -->
    <DoublePresentation />
    
    <!-- Engagements Grid (4 cards) -->
    <section class="py-20 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-title font-bold text-dark-900 text-center mb-12">Pourquoi nous choisir ?</h2>
        
        <div class="grid md:grid-cols-4 gap-8">
          <EngagementCard 
            icon="clock"
            title="Service Express"
            description="La plupart des réparations en 1-2h selon la réparation"
          />
          <EngagementCard 
            icon="shield-check"
            title="Garantie 6 mois à 1 an"
            description="Selon les pièces changées"
          />
          <EngagementCard 
            icon="award"
            title="Artisans qualifiés"
            description="Techniciens et cordonniers expérimentés"
          />
          <EngagementCard 
            icon="map-pin"
            title="En centre-ville"
            description="Facilement accessible, transports à proximité"
          />
        </div>
      </div>
    </section>
    
    <!-- Location Section -->
    <LocationSection />
  </div>
</template>

<script setup>
import HeroMultiService from '../components/home/HeroMultiService.vue'
import ServicesGridMulti from '../components/home/ServicesGridMulti.vue'
import DoublePresentation from '../components/home/DoublePresentation.vue'
import LocationSection from '../components/home/LocationSection.vue'
import EngagementCard from '../components/ui/EngagementCard.vue'
</script>
