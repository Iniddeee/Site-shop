<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto" @click.self="closeModal">
        <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
          <!-- Overlay -->
          <div class="fixed inset-0 transition-opacity bg-dark-900 bg-opacity-75" @click="closeModal"></div>
          
          <!-- Modal -->
          <div class="relative inline-block w-full max-w-4xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <!-- Close button -->
            <button 
              @click="closeModal"
              class="absolute top-4 right-4 z-10 p-2 text-dark-600 hover:text-dark-900 hover:bg-light-200 rounded-lg transition"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <!-- Image -->
              <div class="flex items-center justify-center bg-light-100 rounded-xl overflow-hidden">
                <img 
                  :src="product.image" 
                  :alt="product.name"
                  class="w-full h-96 object-cover"
                />
              </div>

              <!-- Détails -->
              <div class="flex flex-col justify-between">
                <div>
                  <span class="inline-block px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-full mb-4">
                    {{ product.category }}
                  </span>
                  
                  <h2 class="text-3xl font-bold text-dark-900 mb-4">
                    {{ product.name }}
                  </h2>
                  
                  <div class="flex items-baseline gap-3 mb-6">
                    <span v-if="product.discount" class="text-3xl font-bold text-primary-600">
                      CHF {{ discountedPrice.toFixed(2) }}
                    </span>
                    <span 
                      :class="[
                        'text-3xl font-bold',
                        product.discount ? 'line-through text-dark-500 text-2xl' : 'text-primary-600'
                      ]"
                    >
                      CHF {{ product.price.toFixed(2) }}
                    </span>
                    <span v-if="product.discount" class="px-2 py-1 text-sm font-semibold text-white bg-red-500 rounded-lg">
                      -{{ product.discount }}%
                    </span>
                  </div>

                  <div class="space-y-4 mb-6">
                    <div class="flex items-start gap-3">
                      <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 class="font-semibold text-dark-900">Garantie 12 mois</h4>
                        <p class="text-sm text-dark-600">Sur toutes nos réparations</p>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h4 class="font-semibold text-dark-900">Réparation rapide</h4>
                        <p class="text-sm text-dark-600">Sous 24-48h en moyenne</p>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <div>
                        <h4 class="font-semibold text-dark-900">En magasin</h4>
                        <p class="text-sm text-dark-600">Fbg Saint-Germain 2, Porrentruy</p>
                      </div>
                    </div>

                    <div class="flex items-start gap-3">
                      <svg class="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div>
                        <h4 class="font-semibold text-dark-900">Pièces d'origine</h4>
                        <p class="text-sm text-dark-600">Qualité garantie</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Actions -->
                <div class="space-y-3">
                  <a 
                    href="tel:+41324661234"
                    class="block w-full px-6 py-4 text-center text-white bg-primary-600 hover:bg-primary-700 rounded-xl font-semibold transition shadow-lg hover:shadow-xl"
                  >
                    Réserver maintenant
                  </a>
                  <a 
                    href="/contact"
                    class="block w-full px-6 py-4 text-center text-primary-600 bg-primary-50 hover:bg-primary-100 rounded-xl font-semibold transition"
                  >
                    Demander un devis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const discountedPrice = computed(() => {
  if (props.product.discount) {
    return props.product.price * (1 - props.product.discount / 100)
  }
  return props.product.price
})

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .inline-block,
.modal-leave-active .inline-block {
  transition: all 0.3s ease;
}

.modal-enter-from .inline-block,
.modal-leave-to .inline-block {
  transform: scale(0.95);
  opacity: 0;
}
</style>
