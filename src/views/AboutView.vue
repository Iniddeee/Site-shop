<template>
  <div>
    <!-- Header de page -->
    <section class="py-16 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-sm text-dark-600 mb-8">
          <router-link to="/" class="hover:text-primary-600 transition-colors">Accueil</router-link>
          <ChevronRight :size="16" />
          <span class="text-primary-600 font-medium">À propos</span>
        </nav>

        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-title font-bold text-dark-900 mb-4">
            Qui sommes-<span class="text-primary-600">nous</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </p>
        </div>
      </div>
    </section>

    <!-- Histoire -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Texte -->
          <div class="space-y-8">
            <SectionTitle gradient>
              Notre histoire
            </SectionTitle>

            <div class="space-y-4 text-dark-600 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, <span class="text-primary-600 font-semibold">consectetur adipiscing elit</span>, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                <span class="text-primary-600 font-bold">totam rem aperiam</span>, eaque ipsa quae ab illo inventore veritatis 
                et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-6 pt-6">
              <div class="text-center">
                <div class="text-3xl font-title font-bold text-primary-600">10+</div>
                <p class="text-dark-600 text-sm">Années d'expérience</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-title font-bold text-primary-600">15K+</div>
                <p class="text-dark-600 text-sm">Appareils réparés</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-title font-bold text-primary-600">98%</div>
                <p class="text-dark-600 text-sm">Clients satisfaits</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-title font-bold text-primary-600">2 ans</div>
                <p class="text-dark-600 text-sm">Garantie</p>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="relative">
            <div class="absolute inset-0 bg-primary-100 rounded-2xl blur-2xl"></div>
            <div class="relative bg-white rounded-2xl overflow-hidden border border-light-300 shadow-card-hover">
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=500&fit=crop&auto=format" 
                alt="Notre atelier"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Valeurs -->
    <section class="py-20 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle gradient>
          Nos valeurs
        </SectionTitle>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
              <Award :size="40" class="text-primary-600" />
            </div>
            <h3 class="text-2xl font-title font-bold text-dark-900 mb-4">Qualité</h3>
            <p class="text-dark-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-20 h-20 bg-accent-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
              <Heart :size="40" class="text-accent-600" />
            </div>
            <h3 class="text-2xl font-title font-bold text-dark-900 mb-4">Transparence</h3>
            <p class="text-dark-600 leading-relaxed">
              Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip
            </p>
          </div>

          <div class="bg-white rounded-2xl p-8 border border-light-300 hover:shadow-card-hover transition-all duration-300 text-center">
            <div class="w-20 h-20 bg-primary-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
              <Zap :size="40" class="text-primary-600" />
            </div>
            <h3 class="text-2xl font-title font-bold text-dark-900 mb-4">Rapidité</h3>
            <p class="text-dark-600 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Équipe -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle gradient>
          Notre équipe
        </SectionTitle>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User :size="64" class="text-white" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Jean Exemple 1</h3>
            <p class="text-primary-600 font-medium mb-2">Fondateur & Technicien Senior</p>
            <p class="text-dark-600 text-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
            </p>
          </div>

          <div class="text-center">
            <div class="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User :size="64" class="text-white" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Jean Exemple 2</h3>
            <p class="text-primary-600 font-medium mb-2">Technicien Spécialisé</p>
            <p class="text-dark-600 text-sm">
              Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
            </p>
          </div>

          <div class="text-center">
            <div class="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <User :size="64" class="text-white" />
            </div>
            <h3 class="text-xl font-title font-bold text-dark-900 mb-2">Jean Exemple 3</h3>
            <p class="text-primary-600 font-medium mb-2">Technicien Informatique</p>
            <p class="text-dark-600 text-sm">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pourquoi nous choisir -->
    <section class="py-20 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle gradient>
          Pourquoi nous choisir ?
        </SectionTitle>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="flex items-start space-x-4 bg-light-100 p-6 rounded-xl border border-light-300">
            <CheckCircle2 :size="24" class="text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h4 class="font-bold text-dark-900 mb-1">Diagnostic Gratuit</h4>
              <p class="text-dark-600">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </div>
          </div>

          <div class="flex items-start space-x-4 bg-light-100 p-6 rounded-xl border border-light-300">
            <CheckCircle2 :size="24" class="text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h4 class="font-bold text-dark-900 mb-1">Pièces Certifiées</h4>
              <p class="text-dark-600">Sed do eiusmod tempor incididunt ut labore et dolore</p>
            </div>
          </div>

          <div class="flex items-start space-x-4 bg-light-100 p-6 rounded-xl border border-light-300">
            <CheckCircle2 :size="24" class="text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h4 class="font-bold text-dark-900 mb-1">Garantie 2 ans</h4>
              <p class="text-dark-600">Ut enim ad minim veniam quis nostrud exercitation</p>
            </div>
          </div>

          <div class="flex items-start space-x-4 bg-light-100 p-6 rounded-xl border border-light-300">
            <CheckCircle2 :size="24" class="text-primary-600 flex-shrink-0 mt-1" />
            <div>
              <h4 class="font-bold text-dark-900 mb-1">Réparation Rapide</h4>
              <p class="text-dark-600">Excepteur sint occaecat cupidatat non proident</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-primary-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl sm:text-4xl font-title font-bold text-white mb-6">
          Lorem ipsum dolor sit amet?
        </h2>
        <p class="text-white/90 text-lg mb-8">
          Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <PhoneButton 
            size="xl" 
            variant="white"
            number="0XX XXX XX XX"
            label="Contacter"
          />
          <GradientButton 
            variant="outline" 
            size="xl"
            tag="router-link"
            to="/reparation/smartphones"
            class="border-white text-white hover:bg-white hover:text-dark-900"
          >
            Voir nos services
          </GradientButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ChevronRight, Award, Heart, Zap, User, CheckCircle2 } from 'lucide-vue-next'
import SectionTitle from '../components/ui/SectionTitle.vue'
import GlowCard from '../components/ui/GlowCard.vue'
import IconCircle from '../components/ui/IconCircle.vue'
import PhoneButton from '../components/ui/PhoneButton.vue'
import GradientButton from '../components/ui/GradientButton.vue'
</script>
