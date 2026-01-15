<template>
  <div class="bg-white">
    <!-- Header de page -->
    <section class="py-16 bg-light-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl sm:text-5xl font-title font-bold text-dark-900 mb-4">
            Nos <span class="text-primary-600">Réparations</span>
          </h1>
          <p class="text-xl text-dark-700 max-w-2xl mx-auto">
            Trouvez la réparation dont vous avez besoin pour votre appareil
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
import { useRouter } from 'vue-router'
import ProductCard from '../components/shop/ProductCard.vue'
import ShopSidebar from '../components/shop/ShopSidebar.vue'
import ProductModal from '../components/shop/ProductModal.vue'

const router = useRouter()
const selectedCategory = ref(null)
const sortBy = ref('default')
const currentPage = ref(1)
const itemsPerPage = 12
const selectedProduct = ref(null)
const isModalOpen = ref(false)
const priceFilters = ref([])
const brandFilters = ref([])

// Catégories avec sous-catégories (compteurs basés sur les vrais produits)
const categories = ref([
  {
    id: 'smartphones',
    name: 'Réparation Smartphone',
    count: 20,
    subcategories: [
      { id: 'iphone-screen', name: 'iPhone Réparation écran', count: 8 },
      { id: 'samsung-screen', name: 'Samsung Réparation écran', count: 5 },
      { id: 'battery', name: 'Changement batterie', count: 7 }
    ]
  },
  {
    id: 'tablets',
    name: 'Réparation Tablette',
    count: 8,
    subcategories: [
      { id: 'ipad-screen', name: 'iPad Réparation écran', count: 4 },
      { id: 'tablet-battery', name: 'Batterie tablette', count: 2 },
      { id: 'tablet-other', name: 'Autres réparations', count: 2 }
    ]
  },
  {
    id: 'computers',
    name: 'Réparation Ordinateur',
    count: 8,
    subcategories: [
      { id: 'laptop-screen', name: 'Écran portable', count: 3 },
      { id: 'ssd-upgrade', name: 'Upgrade SSD', count: 3 },
      { id: 'ram-upgrade', name: 'Upgrade RAM', count: 2 }
    ]
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
  { id: 3, name: 'Réparation écran iPhone 15', category: 'Smartphone', categoryId: 'iphone-screen', price: 249.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: 10 },
  { id: 4, name: 'Réparation écran iPhone 14 Pro', category: 'Smartphone', categoryId: 'iphone-screen', price: 269.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 5, name: 'Réparation écran iPhone 14', category: 'Smartphone', categoryId: 'iphone-screen', price: 229.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: 15 },
  { id: 6, name: 'Réparation écran iPhone 13', category: 'Smartphone', categoryId: 'iphone-screen', price: 199.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 7, name: 'Réparation écran iPhone 12', category: 'Smartphone', categoryId: 'iphone-screen', price: 179.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  
  // Samsung réparations écran
  { id: 8, name: 'Réparation écran Samsung S24 Ultra', category: 'Smartphone', categoryId: 'samsung-screen', price: 299.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 9, name: 'Réparation écran Samsung S24', category: 'Smartphone', categoryId: 'samsung-screen', price: 249.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 10, name: 'Réparation écran Samsung S23', category: 'Smartphone', categoryId: 'samsung-screen', price: 219.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format', discount: 10 },
  { id: 11, name: 'Réparation écran Samsung S22', category: 'Smartphone', categoryId: 'samsung-screen', price: 189.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 12, name: 'Réparation écran Samsung A54', category: 'Smartphone', categoryId: 'samsung-screen', price: 149.00, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop&auto=format', discount: 15 },
  
  // Batteries smartphones
  { id: 13, name: 'Changement batterie iPhone 15 Pro', category: 'Smartphone', categoryId: 'battery', price: 119.00, image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 14, name: 'Changement batterie iPhone 14', category: 'Smartphone', categoryId: 'battery', price: 109.00, image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop&auto=format', discount: 15 },
  { id: 15, name: 'Changement batterie iPhone 13', category: 'Smartphone', categoryId: 'battery', price: 99.00, image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 16, name: 'Changement batterie iPhone 12', category: 'Smartphone', categoryId: 'battery', price: 89.00, image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 17, name: 'Changement batterie Samsung S24', category: 'Smartphone', categoryId: 'battery', price: 99.00, image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 18, name: 'Changement batterie Samsung S23', category: 'Smartphone', categoryId: 'battery', price: 89.00, image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=400&fit=crop&auto=format', discount: 10 },
  { id: 19, name: 'Réparation connecteur charge iPhone', category: 'Smartphone', categoryId: 'battery', price: 79.00, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 20, name: 'Réparation caméra iPhone 14', category: 'Smartphone', categoryId: 'iphone-screen', price: 169.00, image: 'https://images.unsplash.com/photo-1603921326210-6edd2d60ca68?w=400&h=400&fit=crop&auto=format', discount: null },
  
  // iPad réparations
  { id: 21, name: 'Réparation écran iPad Pro 12.9"', category: 'Tablette', categoryId: 'ipad-screen', price: 399.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 22, name: 'Réparation écran iPad Pro 11"', category: 'Tablette', categoryId: 'ipad-screen', price: 349.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 23, name: 'Réparation écran iPad Air', category: 'Tablette', categoryId: 'ipad-screen', price: 299.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: 10 },
  { id: 24, name: 'Réparation écran iPad 10', category: 'Tablette', categoryId: 'ipad-screen', price: 249.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 25, name: 'Changement batterie iPad Pro', category: 'Tablette', categoryId: 'tablet-battery', price: 149.00, image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 26, name: 'Changement batterie iPad Air', category: 'Tablette', categoryId: 'tablet-battery', price: 129.00, image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop&auto=format', discount: 15 },
  { id: 27, name: 'Réparation connecteur charge iPad', category: 'Tablette', categoryId: 'tablet-other', price: 99.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 28, name: 'Réparation caméra iPad', category: 'Tablette', categoryId: 'tablet-other', price: 139.00, image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop&auto=format', discount: null },
  
  // Ordinateurs
  { id: 29, name: 'Réparation écran MacBook Pro 16"', category: 'Ordinateur', categoryId: 'laptop-screen', price: 549.00, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 30, name: 'Réparation écran MacBook Air', category: 'Ordinateur', categoryId: 'laptop-screen', price: 449.00, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 31, name: 'Upgrade SSD 512GB MacBook', category: 'Ordinateur', categoryId: 'ssd-upgrade', price: 249.00, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop&auto=format', discount: 10 },
  { id: 32, name: 'Upgrade SSD 1TB MacBook', category: 'Ordinateur', categoryId: 'ssd-upgrade', price: 349.00, image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 33, name: 'Upgrade RAM 16GB', category: 'Ordinateur', categoryId: 'ram-upgrade', price: 149.00, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 34, name: 'Upgrade RAM 32GB', category: 'Ordinateur', categoryId: 'ram-upgrade', price: 249.00, image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop&auto=format', discount: 15 },
  { id: 35, name: 'Changement batterie MacBook', category: 'Ordinateur', categoryId: 'laptop-screen', price: 199.00, image: 'https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 36, name: 'Nettoyage complet PC portable', category: 'Ordinateur', categoryId: 'ssd-upgrade', price: 79.00, image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=400&fit=crop&auto=format', discount: null },
  
  // Accessoires
  { id: 37, name: 'Coque iPhone 15 Pro transparente', category: 'Accessoires', categoryId: 'accessories', price: 29.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 38, name: 'Protection écran iPhone 15', category: 'Accessoires', categoryId: 'accessories', price: 19.00, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format', discount: 20 },
  { id: 39, name: 'Câble USB-C vers Lightning', category: 'Accessoires', categoryId: 'accessories', price: 25.00, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&auto=format', discount: null },
  { id: 40, name: 'Chargeur rapide 20W', category: 'Accessoires', categoryId: 'accessories', price: 35.00, image: 'https://images.unsplash.com/photo-1591290619762-c588f7e4e86c?w=400&h=400&fit=crop&auto=format', discount: null }
])

// Produits en promotion
const featuredProducts = computed(() => {
  return products.value.filter(p => p.discount).slice(0, 4)
})

// Nom de la catégorie sélectionnée
const selectedCategoryName = computed(() => {
  if (!selectedCategory.value) return null
  
  for (const cat of categories.value) {
    if (cat.id === selectedCategory.value) return cat.name
    if (cat.subcategories) {
      const sub = cat.subcategories.find(s => s.id === selectedCategory.value)
      if (sub) return sub.name
    }
  }
  return null
})

// Produits filtrés par catégorie, prix et marque
const filteredProducts = computed(() => {
  let filtered = products.value
  
  // Filtrage par catégorie
  if (selectedCategory.value) {
    const mainCategories = {
      'smartphones': ['iphone-screen', 'samsung-screen', 'battery'],
      'tablets': ['ipad-screen', 'tablet-battery', 'tablet-other'],
      'computers': ['laptop-screen', 'ssd-upgrade', 'ram-upgrade'],
      'accessories': ['accessories']
    }
    
    if (mainCategories[selectedCategory.value]) {
      const subcategoryIds = mainCategories[selectedCategory.value]
      filtered = filtered.filter(p => subcategoryIds.includes(p.categoryId))
    } else {
      filtered = filtered.filter(p => p.categoryId === selectedCategory.value)
    }
  }
  
  // Filtrage par prix
  if (priceFilters.value.length > 0) {
    filtered = filtered.filter(p => {
      const price = p.discount ? p.price * (1 - p.discount / 100) : p.price
      return priceFilters.value.some(range => {
        if (range === '0-50') return price < 50
        if (range === '50-100') return price >= 50 && price < 100
        if (range === '100-200') return price >= 100 && price < 200
        if (range === '200+') return price >= 200
        return false
      })
    })
  }
  
  // Filtrage par marque
  if (brandFilters.value.length > 0) {
    filtered = filtered.filter(p => {
      return brandFilters.value.some(brand => p.name.includes(brand))
    })
  }
  
  return filtered
})

// Produits triés
const sortedProducts = computed(() => {
  const items = [...filteredProducts.value]
  
  let sorted = items
  switch (sortBy.value) {
    case 'price-asc':
      sorted = items.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      sorted = items.sort((a, b) => b.price - a.price)
      break
    case 'name':
      sorted = items.sort((a, b) => a.name.localeCompare(b.name))
      break
    default:
      sorted = items
  }
  
  // Pagination
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sorted.slice(start, end)
})

// Nombre total de pages
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage)
})

const handleCategorySelect = (categoryId) => {
  selectedCategory.value = categoryId === selectedCategory.value ? null : categoryId
  currentPage.value = 1
}

const handleTogglePriceFilter = (range) => {
  const index = priceFilters.value.indexOf(range)
  if (index > -1) {
    priceFilters.value.splice(index, 1)
  } else {
    priceFilters.value.push(range)
  }
  currentPage.value = 1
}

const handleToggleBrandFilter = (brand) => {
  const index = brandFilters.value.indexOf(brand)
  if (index > -1) {
    brandFilters.value.splice(index, 1)
  } else {
    brandFilters.value.push(brand)
  }
  currentPage.value = 1
}

const handleViewDetails = (product) => {
  selectedProduct.value = product
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProduct.value = null
}
</script>
