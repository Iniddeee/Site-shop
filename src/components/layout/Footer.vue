<template>
  <footer class="bg-primary-900 border-t border-primary-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Logo + Description -->
        <div class="space-y-6">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
              <Smartphone :size="28" class="text-white" />
            </div>
            <div>
              <span class="text-2xl font-title font-bold text-white">
                Atelier de l'<span class="text-primary-400">Esplanade</span>
              </span>
              <div class="text-sm text-primary-300 -mt-1">Porrentruy</div>
            </div>
          </div>
          
          <p class="text-primary-200 text-sm leading-relaxed">
            Service de réparation professionnel pour smartphones, tablettes et ordinateurs. 
            Pièces de qualité, garantie 6 mois à 1 an selon les pièces.
          </p>
        </div>

        <!-- Liens rapides -->
        <div>
          <h3 class="text-lg font-title font-semibold text-white mb-6">Liens Rapides</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-primary-200 hover:text-white transition-colors flex items-center space-x-2 group">
                <ChevronRight :size="14" class="text-primary-400 group-hover:translate-x-1 transition-transform" />
                <span>Accueil</span>
              </router-link>
            </li>
            <li>
              <router-link to="/shop" class="text-primary-200 hover:text-white transition-colors flex items-center space-x-2 group">
                <ChevronRight :size="14" class="text-primary-400 group-hover:translate-x-1 transition-transform" />
                <span>Boutique</span>
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-primary-200 hover:text-white transition-colors flex items-center space-x-2 group">
                <ChevronRight :size="14" class="text-primary-400 group-hover:translate-x-1 transition-transform" />
                <span>Contact</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Nos services -->
        <div>
          <h3 class="text-lg font-title font-semibold text-white mb-6">Nos Services</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/reparation/smartphones" class="text-primary-200 hover:text-white transition-colors flex items-center space-x-2 group">
                <ChevronRight :size="14" class="text-primary-400 group-hover:translate-x-1 transition-transform" />
                <span>Smartphones</span>
              </router-link>
            </li>
            <li>
              <router-link to="/reparation/tablettes" class="text-primary-200 hover:text-white transition-colors flex items-center space-x-2 group">
                <ChevronRight :size="14" class="text-primary-400 group-hover:translate-x-1 transition-transform" />
                <span>Tablettes</span>
              </router-link>
            </li>
            <li>
              <router-link to="/a-propos" class="text-primary-200 hover:text-white transition-colors flex items-center space-x-2 group">
                <ChevronRight :size="14" class="text-primary-400 group-hover:translate-x-1 transition-transform" />
                <span>À propos</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-lg font-title font-semibold text-white mb-6">Contact</h3>
          <ul class="space-y-4">
            <li class="flex items-start space-x-3">
              <MapPin :size="18" class="text-primary-400 flex-shrink-0 mt-1" />
              <div class="text-primary-200 text-sm">
                <div>Fbg Saint-Germain 2</div>
                <div>2900 Porrentruy</div>
                <div>Suisse</div>
              </div>
            </li>
            
            <li class="flex items-center space-x-3">
              <Phone :size="18" class="text-primary-400 flex-shrink-0" />
              <a href="tel:0XXXXXXXXX" class="text-primary-200 hover:text-white transition-colors">
                0XX XXX XX XX
              </a>
            </li>
            
            <li class="flex items-center space-x-3">
              <Mail :size="18" class="text-primary-400 flex-shrink-0" />
              <a href="mailto:info@[votresite].ch" class="text-primary-200 hover:text-white transition-colors">
                info@[votresite].ch
              </a>
            </li>
            
            <li class="flex items-start space-x-3">
              <Clock :size="18" class="text-primary-400 flex-shrink-0 mt-1" />
              <div class="text-primary-300 space-y-1">
                <div>Lundi - Mercredi: 8h - 18h30</div>
                <div>Jeudi: 8h - 20h</div>
                <div>Vendredi: 8h - 18h30</div>
                <div>Samedi: 8h - 17h</div>
                <div class="text-primary-400">Dimanche fermé</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Séparateur -->
      <div class="border-t border-primary-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-center md:text-left">
            <p class="text-primary-300 text-sm">
              &copy; {{ currentYear }} Atelier de l'Esplanade Porrentruy. Tous droits réservés.
            </p>
            <p class="text-primary-400 text-xs mt-1">
              Développé par Zakaria Eddini
            </p>
          </div>
          
          <div class="flex items-center space-x-6 text-sm">
            <a href="#" class="text-primary-300 hover:text-white transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" class="text-primary-300 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { 
  Smartphone, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight
} from 'lucide-vue-next'

const currentYear = computed(() => new Date().getFullYear())
</script>
