<template>
  <div class="product-card group">
    <!-- Image container -->
    <div class="relative aspect-square bg-light-100 rounded-xl overflow-hidden mb-4">
      <!-- Image du produit -->
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
      />
      
      <!-- Badge promo (si applicable) -->
      <span v-if="product.discount" class="absolute top-3 left-3 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded">
        -{{ product.discount }}%
      </span>
      
      <!-- Bouton quick action au hover -->
      <div class="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/10 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
        <button 
          @click="$emit('view-details', product)"
          class="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all hover:bg-primary-700"
        >
          Voir détails
        </button>
      </div>
    </div>
    
    <!-- Infos produit -->
    <div class="text-center">
      <h3 class="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors mb-1">
        {{ product.name }}
      </h3>
      <p class="text-sm text-dark-600 mb-2">{{ product.category }}</p>
      <p class="text-xl font-bold text-primary-600">
        CHF {{ product.price.toFixed(2) }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})

defineEmits(['view-details'])
</script>

<style scoped>
.product-card {
  @apply bg-white rounded-2xl p-4 transition-all duration-300;
  @apply hover:shadow-card-hover hover:-translate-y-1;
  @apply border border-transparent hover:border-primary-100;
}
</style>
