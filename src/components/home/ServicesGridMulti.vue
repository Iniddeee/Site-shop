<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-title font-bold text-dark-900 mb-4">Nos Services</h2>
        <p class="text-dark-700 max-w-2xl mx-auto">
          Deux expertises, un seul lieu. Découvrez tous nos services de réparation.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- SERVICES TECH (bleu) -->
        <ServiceCard 
          icon="smartphone"
          title="Réparation Smartphone"
          description="iPhone, Samsung, Huawei... Écran, batterie, connecteur. Réparation en 1-2h selon la réparation."
          color="primary"
          link="/reparation/smartphones"
        />
        <ServiceCard 
          icon="laptop"
          title="Réparation Ordinateur"
          description="PC et Mac. Écran, clavier, disque dur, virus. Devis gratuit."
          color="primary"
          link="/reparation/ordinateurs"
        />
        <ServiceCard 
          icon="tablet"
          title="Réparation Tablette"
          description="iPad, Samsung Tab, Surface. Toutes réparations."
          color="primary"
          link="/reparation/tablettes"
        />
        
        <!-- SERVICES CORDONNERIE (marron) -->
        <ServiceCard 
          icon="footprints"
          title="Réparation Chaussures"
          description="Ressemelage, talons, coutures, nettoyage. Toutes marques."
          color="leather"
          link="/cordonnerie/chaussures"
        />
        <ServiceCard 
          icon="briefcase"
          title="Sacs & Maroquinerie"
          description="Réparation sacs, ceintures, portefeuilles. Cuir et synthétique."
          color="leather"
          link="/cordonnerie/maroquinerie"
        />
        <ServiceCard 
          icon="key"
          title="Clés & Télécommandes"
          description="Reproduction de clés, badges, télécommandes auto."
          color="leather"
          link="/cordonnerie/cles"
        />
        
      </div>
    </div>
  </section>
</template>

<script setup>
import ServiceCard from '../ui/ServiceCard.vue'
</script>
