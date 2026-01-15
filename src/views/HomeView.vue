<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- Services Grid (4 cards) -->
    <ServicesGrid />
    
    <!-- About Section (texte + image magasin) -->
    <AboutSection />
    
    <!-- Location Section -->
    <LocationSection />
    
    <!-- Three Boxes (Achat, Dégât d'eau, Pro) -->
    <ThreeBoxes />
    
    <!-- Engagements Grid (4 cards) -->
    <EngagementsGrid />
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import ServicesGrid from '../components/home/ServicesGrid.vue'
import AboutSection from '../components/home/AboutSection.vue'
import LocationSection from '../components/home/LocationSection.vue'
import ThreeBoxes from '../components/home/ThreeBoxes.vue'
import EngagementsGrid from '../components/home/EngagementsGrid.vue'
</script>
