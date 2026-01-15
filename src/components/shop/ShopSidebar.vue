<template>
  <aside class="w-64 pr-8 border-r border-light-300">
    <div class="sticky top-24">
      <h3 class="text-lg font-semibold text-dark-900 mb-4">Catégories</h3>
      
      <ul class="space-y-2">
        <li v-for="category in categories" :key="category.id">
          <a 
            href="#" 
            @click.prevent="$emit('select-category', category.id)"
            :class="[
              'flex justify-between items-center py-2 px-3 rounded-lg transition',
              selectedCategory === category.id 
                ? 'bg-primary-50 text-primary-600' 
                : 'text-dark-800 hover:bg-primary-50 hover:text-primary-600'
            ]"
          >
            <span>{{ category.name }}</span>
            <span class="text-sm text-dark-700 bg-light-200 px-2 py-0.5 rounded-full">
              ({{ category.count }})
            </span>
          </a>
          
          <!-- Sous-catégories -->
          <ul v-if="category.subcategories && category.subcategories.length" class="ml-4 mt-2 space-y-1">
            <li v-for="sub in category.subcategories" :key="sub.id">
              <a 
                href="#" 
                @click.prevent="$emit('select-category', sub.id)"
                :class="[
                  'flex justify-between items-center py-2 px-3 rounded-lg transition text-sm',
                  selectedCategory === sub.id 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'text-dark-700 hover:bg-primary-50 hover:text-primary-600'
                ]"
              >
                <span>{{ sub.name }}</span>
                <span class="text-xs bg-light-200 px-2 py-0.5 rounded-full">
                  ({{ sub.count }})
                </span>
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <!-- Filtres supplémentaires -->
      <div class="mt-8">
        <h3 class="text-lg font-semibold text-dark-900 mb-4">Prix</h3>
        <div class="space-y-2">
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              :checked="priceFilters.includes('0-50')"
              @change="togglePriceFilter('0-50')"
              class="rounded border-light-300 text-primary-600 focus:ring-primary-500"
            >
            <span class="text-dark-700 text-sm">Moins de 50 CHF</span>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              :checked="priceFilters.includes('50-100')"
              @change="togglePriceFilter('50-100')"
              class="rounded border-light-300 text-primary-600 focus:ring-primary-500"
            >
            <span class="text-dark-700 text-sm">50 - 100 CHF</span>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              :checked="priceFilters.includes('100-200')"
              @change="togglePriceFilter('100-200')"
              class="rounded border-light-300 text-primary-600 focus:ring-primary-500"
            >
            <span class="text-dark-700 text-sm">100 - 200 CHF</span>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              :checked="priceFilters.includes('200+')"
              @change="togglePriceFilter('200+')"
              class="rounded border-light-300 text-primary-600 focus:ring-primary-500"
            >
            <span class="text-dark-700 text-sm">Plus de 200 CHF</span>
          </label>
        </div>
      </div>

      <!-- Marques -->
      <div class="mt-8">
        <h3 class="text-lg font-semibold text-dark-900 mb-4">Marques</h3>
        <div class="space-y-2">
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              :checked="brandFilters.includes('iPhone')"
              @change="toggleBrandFilter('iPhone')"
              class="rounded border-light-300 text-primary-600 focus:ring-primary-500"
            >
            <span class="text-dark-700 text-sm">iPhone</span>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              :checked="brandFilters.includes('Samsung')"
              @change="toggleBrandFilter('Samsung')"
              class="rounded border-light-300 text-primary-600 focus:ring-primary-500"
            >
            <span class="text-dark-700 text-sm">Samsung</span>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              :checked="brandFilters.includes('iPad')"
              @change="toggleBrandFilter('iPad')"
              class="rounded border-light-300 text-primary-600 focus:ring-primary-500"
            >
            <span class="text-dark-700 text-sm">iPad</span>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input 
              type="checkbox" 
              :checked="brandFilters.includes('MacBook')"
              @change="toggleBrandFilter('MacBook')"
              class="rounded border-light-300 text-primary-600 focus:ring-primary-500"
            >
            <span class="text-dark-700 text-sm">MacBook</span>
          </label>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  selectedCategory: {
    type: String,
    default: null
  },
  priceFilters: {
    type: Array,
    default: () => []
  },
  brandFilters: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['select-category', 'toggle-price-filter', 'toggle-brand-filter'])

const togglePriceFilter = (range) => {
  emit('toggle-price-filter', range)
}

const toggleBrandFilter = (brand) => {
  emit('toggle-brand-filter', brand)
}
</script>
