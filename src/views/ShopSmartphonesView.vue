<template>
  <div class="bg-white">
    <!-- Header de page -->
    <section class="py-16 bg-gradient-to-br from-light-100 to-primary-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-title font-bold text-dark-900 mb-4">
            Boutique <span class="text-primary-600">Smartphone</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-2xl mx-auto">
            Réparations et accessoires pour tous vos appareils tech
          </p>
        </div>
      </div>
    </section>

    <!-- Section promotions -->
    <section class="py-12 bg-primary-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-8">
          <h2 class="text-2xl font-bold text-dark-900">🔥 Promotions du moment</h2>
          <span class="text-sm text-dark-600">Offres limitées</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product"
            @view-details="handleViewDetails"
          />
        </div>
      </div>
    </section>

    <!-- Modal produit -->
    <ProductModal 
      v-if="selectedProduct"
      :product="selectedProduct"
      :isOpen="isModalOpen"
      @close="closeModal"
    />

    <!-- Section principale -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex gap-8">
          <!-- Sidebar -->
          <ShopSidebar 
            :categories="categories" 
            :selectedCategory="selectedCategory"
            :priceFilters="priceFilters"
            :brandFilters="brandFilters"
            @select-category="handleCategorySelect"
            @toggle-price-filter="handleTogglePriceFilter"
            @toggle-brand-filter="handleToggleBrandFilter"
          />
          
          <!-- Main content -->
          <main class="flex-1">
            <!-- Header avec tri -->
            <div class="flex justify-between items-center mb-8">
              <div>
                <h2 class="text-2xl font-bold text-dark-900">
                  {{ filteredProducts.length }} produits
                </h2>
                <p class="text-dark-600 text-sm mt-1">
                  {{ selectedCategoryName || 'Toutes les catégories' }}
                </p>
              </div>
              <select 
                v-model="sortBy"
                class="border border-light-300 rounded-lg px-4 py-2 text-dark-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="default">Trier par défaut</option>
                <option value="price-asc">Prix croissant</option>
                <option value="price-desc">Prix décroissant</option>
                <option value="name">Nom A-Z</option>
              </select>
            </div>
            
            <!-- Grille de produits -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <ProductCard 
                v-for="product in sortedProducts" 
                :key="product.id" 
                :product="product"
                @view-details="handleViewDetails"
              />
            </div>
            
            <!-- Message si aucun produit -->
            <div v-if="filteredProducts.length === 0" class="text-center py-16">
              <p class="text-dark-600 text-lg">Aucun produit trouvé dans cette catégorie</p>
            </div>
            
            <!-- Pagination -->
            <div v-if="totalPages > 1" class="mt-12 flex justify-center gap-2">
              <button 
                v-for="page in totalPages" 
                :key="page"
                @click="currentPage = page"
                :class="[
                  'w-10 h-10 rounded-lg transition-colors',
                  currentPage === page 
                    ? 'bg-primary-600 text-white' 
                    : 'border border-light-300 hover:border-primary-500 hover:text-primary-600 text-dark-700'
                ]"
              >
                {{ page }}
              </button>
            </div>
          </main>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '@/components/shop/ProductCard.vue'
import ProductModal from '@/components/shop/ProductModal.vue'
import ShopSidebar from '@/components/shop/ShopSidebar.vue'

const selectedCategory = ref(null)
const selectedProduct = ref(null)
const isModalOpen = ref(false)
const sortBy = ref('default')
const currentPage = ref(1)
const itemsPerPage = 12

const priceFilters = ref([])

const brandFilters = ref([])

const categories = ref([
  {
    id: null,
    name: 'Toutes les catégories',
    count: 40
  },
  {
    id: 'iphone-screen',
    name: 'Écrans iPhone',
    count: 7
  },
  {
    id: 'samsung-screen',
    name: 'Écrans Samsung',
    count: 5
  },
  {
    id: 'battery',
    name: 'Batteries',
    count: 8
  },
  {
    id: 'ipad-screen',
    name: 'iPad',
    count: 8
  },
  {
    id: 'laptop-screen',
    name: 'Ordinateurs',
    count: 8
  },
  {
    id: 'accessories',
    name: 'Accessoires',
    count: 4
  }
])

// Produits complets
const products = ref([
  // iPhone réparations écran
  { id: 1, name: 'Réparation écran iPhone 15 Pro Max', category: 'Smartphone', categoryId: 'iphone-screen', price: 329.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 2, name: 'Réparation écran iPhone 15 Pro', category: 'Smartphone', categoryId: 'iphone-screen', price: 289.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 3, name: 'Réparation écran iPhone 15', category: 'Smartphone', categoryId: 'iphone-screen', price: 249.00, image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400&h=400&fit=crop&auto=format', discount: 10 },
  { id: 4, name: 'Réparation écran iPhone 14 Pro', category: 'Smartphone', categoryId: 'iphone-screen', price: 269.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 5, name: 'Réparation écran iPhone 14', category: 'Smartphone', categoryId: 'iphone-screen', price: 229.00, image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400&h=400&fit=crop&auto=format', discount: 15 },
  { id: 6, name: 'Réparation écran iPhone 13', category: 'Smartphone', categoryId: 'iphone-screen', price: 199.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 7, name: 'Réparation écran iPhone 12', category: 'Smartphone', categoryId: 'iphone-screen', price: 179.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  
  // Samsung réparations écran
  { id: 8, name: 'Réparation écran Samsung S24 Ultra', category: 'Smartphone', categoryId: 'samsung-screen', price: 299.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 9, name: 'Réparation écran Samsung S24', category: 'Smartphone', categoryId: 'samsung-screen', price: 249.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 10, name: 'Réparation écran Samsung S23', category: 'Smartphone', categoryId: 'samsung-screen', price: 219.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 11, name: 'Réparation écran Samsung S22', category: 'Smartphone', categoryId: 'samsung-screen', price: 189.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 12, name: 'Réparation écran Samsung A54', category: 'Smartphone', categoryId: 'samsung-screen', price: 149.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format', discount: null },
  
  // Batteries smartphones
  { id: 13, name: 'Changement batterie iPhone 15 Pro', category: 'Smartphone', categoryId: 'battery', price: 119.00, image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 14, name: 'Changement batterie iPhone 14', category: 'Smartphone', categoryId: 'battery', price: 109.00, image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 15, name: 'Changement batterie iPhone 13', category: 'Smartphone', categoryId: 'battery', price: 99.00, image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 16, name: 'Changement batterie iPhone 12', category: 'Smartphone', categoryId: 'battery', price: 89.00, image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 17, name: 'Changement batterie Samsung S24', category: 'Smartphone', categoryId: 'battery', price: 99.00, image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 18, name: 'Changement batterie Samsung S23', category: 'Smartphone', categoryId: 'battery', price: 89.00, image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 19, name: 'Réparation connecteur charge iPhone', category: 'Smartphone', categoryId: 'battery', price: 79.00, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 20, name: 'Réparation caméra iPhone 14', category: 'Smartphone', categoryId: 'iphone-screen', price: 169.00, image: 'https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=400&h=400&fit=crop&auto=format', discount: null },
  
  // iPad réparations
  { id: 21, name: 'Réparation écran iPad Pro 12.9"', category: 'Tablette', categoryId: 'ipad-screen', price: 399.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 22, name: 'Réparation écran iPad Pro 11"', category: 'Tablette', categoryId: 'ipad-screen', price: 349.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 23, name: 'Réparation écran iPad Air', category: 'Tablette', categoryId: 'ipad-screen', price: 299.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 24, name: 'Réparation écran iPad 10', category: 'Tablette', categoryId: 'ipad-screen', price: 249.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 25, name: 'Changement batterie iPad Pro', category: 'Tablette', categoryId: 'tablet-battery', price: 149.00, image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 26, name: 'Changement batterie iPad Air', category: 'Tablette', categoryId: 'tablet-battery', price: 129.00, image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 27, name: 'Réparation connecteur charge iPad', category: 'Tablette', categoryId: 'tablet-other', price: 99.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 28, name: 'Réparation caméra iPad', category: 'Tablette', categoryId: 'tablet-other', price: 139.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  
  // Ordinateurs
  { id: 29, name: 'Réparation écran MacBook Pro 16"', category: 'Ordinateur', categoryId: 'laptop-screen', price: 549.00, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 30, name: 'Réparation écran MacBook Air', category: 'Ordinateur', categoryId: 'laptop-screen', price: 449.00, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 31, name: 'Upgrade SSD 512GB MacBook', category: 'Ordinateur', categoryId: 'ssd-upgrade', price: 249.00, image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 32, name: 'Upgrade SSD 1TB MacBook', category: 'Ordinateur', categoryId: 'ssd-upgrade', price: 349.00, image: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 33, name: 'Upgrade RAM 16GB', category: 'Ordinateur', categoryId: 'ram-upgrade', price: 149.00, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 34, name: 'Upgrade RAM 32GB', category: 'Ordinateur', categoryId: 'ram-upgrade', price: 249.00, image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 35, name: 'Changement batterie MacBook', category: 'Ordinateur', categoryId: 'laptop-screen', price: 199.00, image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 36, name: 'Nettoyage complet PC portable', category: 'Ordinateur', categoryId: 'ssd-upgrade', price: 79.00, image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=400&fit=crop&auto=format', discount: null },
  
  // Accessoires
  { id: 37, name: 'Coque iPhone 15 Pro transparente', category: 'Accessoires', categoryId: 'accessories', price: 29.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 38, name: 'Protection écran iPhone 15', category: 'Accessoires', categoryId: 'accessories', price: 19.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 39, name: 'Câble USB-C vers Lightning', category: 'Accessoires', categoryId: 'accessories', price: 25.00, image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop&auto=format', discount: 15 },
  { id: 40, name: 'Chargeur rapide 20W', category: 'Accessoires', categoryId: 'accessories', price: 35.00, image: 'https://images.unsplash.com/photo-1624823183493-ed5832f48f18?w=400&h=400&fit=crop&auto=format', discount: 10 }
])

// Produits en promotion
const featuredProducts = computed(() => {
  return products.value.filter(p => p.discount).slice(0, 4)
})

// Nom de la catégorie sélectionnée
const selectedCategoryName = computed(() => {
  if (!selectedCategory.value) return null
  const cat = categories.value.find(c => c.id === selectedCategory.value)
  return cat ? cat.name : null
})

// Produits filtrés
const filteredProducts = computed(() => {
  let filtered = products.value

  // Filtre par catégorie
  if (selectedCategory.value) {
    filtered = filtered.filter(p => p.categoryId === selectedCategory.value)
  }

  // Filtre par prix
  const activePriceFilters = Object.entries(priceFilters.value)
    .filter(([_, active]) => active)
    .map(([key]) => key)

  if (activePriceFilters.length > 0) {
    filtered = filtered.filter(p => {
      return activePriceFilters.some(filter => {
        switch (filter) {
          case 'under50': return p.price < 50
          case 'between50and100': return p.price >= 50 && p.price < 100
          case 'between100and200': return p.price >= 100 && p.price < 200
          case 'over200': return p.price >= 200
          default: return true
        }
      })
    })
  }

  return filtered
})

// Produits triés
const sortedProducts = computed(() => {
  const sorted = [...filteredProducts.value]
  
  switch (sortBy.value) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return sorted
  }
})

// Pagination
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage)
})

// Handlers
const handleCategorySelect = (categoryId) => {
  selectedCategory.value = categoryId
  currentPage.value = 1
}

const handleTogglePriceFilter = (filterKey) => {
  priceFilters.value[filterKey] = !priceFilters.value[filterKey]
  currentPage.value = 1
}

const handleToggleBrandFilter = (filterKey) => {
  brandFilters.value[filterKey] = !brandFilters.value[filterKey]
  currentPage.value = 1
}

const handleViewDetails = (product) => {
  selectedProduct.value = product
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  setTimeout(() => {
    selectedProduct.value = null
  }, 300)
}
</script>
