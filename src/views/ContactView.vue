<template>
  <div>
    <!-- Header de page -->
    <section class="py-16 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-sm text-dark-600 mb-8">
          <router-link to="/" class="hover:text-primary-600 transition-colors">Accueil</router-link>
          <ChevronRight :size="16" />
          <span class="text-primary-600 font-medium">Contact</span>
        </nav>

        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-title font-bold text-dark-900 mb-4">
            <span class="text-primary-600">Contact</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-2xl mx-auto">
            Une question ? Un devis ? Nous sommes là pour vous aider
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Infos de contact -->
          <div class="space-y-8">
            <SectionTitle gradient>
              Nous joindre
            </SectionTitle>

            <div class="space-y-6">
              <!-- Adresse -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-dark-900 mb-2">Adresse</h3>
                  <div class="text-dark-600 space-y-1">
                    <div>Fbg Saint-Germain 2</div>
                    <div>2900 Porrentruy</div>
                    <div>Suisse</div>
                  </div>
                </div>
              </div>

              <!-- Téléphone -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-dark-900 mb-2">Téléphone</h3>
                  <a href="tel:0XXXXXXXXX" class="text-dark-600 hover:text-primary-600 transition-colors text-lg">
                    0XX XXX XX XX
                  </a>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-dark-900 mb-2">Email</h3>
                  <a href="mailto:info@[votresite].ch" class="text-dark-600 hover:text-primary-600 transition-colors">
                    info@[votresite].ch
                  </a>
                </div>
              </div>

              <!-- Horaires -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock :size="24" class="text-white" />
                </div>
                <div>
                  <h3 class="font-semibold text-dark-900 mb-2">Horaires</h3>
                  <div class="text-dark-600 space-y-1">
                    <div>Lundi - Vendredi: 10h - 18h30</div>
                    <div>Samedi: 10h - 17h</div>
                    <div class="text-dark-500">Dimanche: Fermé</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA rapide -->
            <div class="bg-primary-600 rounded-xl p-6">
              <h3 class="text-xl font-bold text-white mb-3">Besoin d'une réponse rapide ?</h3>
              <p class="text-white/90 mb-4">
                Appelez-nous directement pour un diagnostic gratuit
              </p>
              <PhoneButton 
                size="lg" 
                variant="white"
                number="0XX XXX XX XX"
                label="Appeler maintenant"
              />
            </div>
          </div>

          <!-- Formulaire -->
          <div>
            <SectionTitle gradient>
              Envoyez-nous un message
            </SectionTitle>

            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-dark-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="input-neon w-full"
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-dark-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="input-neon w-full"
                  placeholder="jean.dupont@email.com"
                />
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-dark-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="input-neon w-full"
                  placeholder="0XX XXX XX XX"
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-dark-700 mb-2">
                  Sujet
                </label>
                <select
                  id="subject"
                  v-model="form.subject"
                  class="input-neon w-full"
                >
                  <option value="">Sélectionnez...</option>
                  <option value="devis">Demande de devis</option>
                  <option value="urgence">Urgence / Dépannage</option>
                  <option value="information">Information</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-dark-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="5"
                  class="input-neon w-full resize-none"
                  placeholder="Décrivez votre demande..."
                ></textarea>
              </div>

              <button
                type="submit"
                class="w-full bg-gradient-neon text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-glow-purple hover:shadow-glow-pink transition-all duration-300 transform hover:scale-[1.02]"
              >
                Envoyer le message
              </button>

              <p v-if="submitMessage" :class="['text-center font-medium', submitSuccess ? 'text-accent-secondary' : 'text-neon-pink']">
                {{ submitMessage }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Carte -->
    <section class="py-20 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle gradient>
          Nous trouver
        </SectionTitle>

        <div class="bg-white rounded-2xl overflow-hidden border border-light-300 shadow-card-hover">
          <div class="aspect-video bg-light-100 flex items-center justify-center">
            <div class="text-center">
              <MapPin :size="48" class="text-primary-600 mx-auto mb-4" />
              <p class="text-dark-600">Carte Google Maps à intégrer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagements -->
    <EngagementsGrid />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-vue-next'
import SectionTitle from '../components/ui/SectionTitle.vue'
import PhoneButton from '../components/ui/PhoneButton.vue'
import EngagementsGrid from '../components/home/EngagementsGrid.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitMessage = ref('')
const submitSuccess = ref(false)

const handleSubmit = () => {
  submitSuccess.value = true
  submitMessage.value = 'Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.'
  
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.phone = ''
    form.subject = ''
    form.message = ''
    submitMessage.value = ''
  }, 3000)
}
</script>
