import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { title: 'Réparation Smartphone Porrentruy - Service Express & Garantie 2 ans' }
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/ShopView.vue'),
    meta: { title: 'Nos Réparations - Catalogue complet' }
  },
  {
    path: '/reparation/smartphones',
    name: 'SmartphoneRepair',
    component: () => import('../views/SmartphoneRepairView.vue'),
    meta: { title: 'Réparation Smartphone - Toutes marques' }
  },
  {
    path: '/reparation/smartphones/:brand',
    name: 'BrandRepair',
    component: () => import('../views/BrandRepairView.vue'),
    meta: { title: 'Réparation :brand - Tarifs et modèles' }
  },
  {
    path: '/reparation/ordinateurs',
    name: 'ComputerRepair',
    component: () => import('../views/ComputerRepairView.vue'),
    meta: { title: 'Réparation Ordinateur PC & Mac' }
  },
  {
    path: '/reparation/tablettes',
    name: 'TabletRepair',
    component: () => import('../views/TabletRepairView.vue'),
    meta: { title: 'Réparation Tablette iPad & Android' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact - Nous joindre' }
  },
  {
    path: '/a-propos',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'À propos - Qui sommes-nous' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

router.beforeEach((to, from, next) => {
  let title = to.meta.title || 'Réparation Smartphone'
  if (to.params.brand) {
    title = title.replace(':brand', to.params.brand.charAt(0).toUpperCase() + to.params.brand.slice(1))
  }
  document.title = title
  next()
})

export default router
