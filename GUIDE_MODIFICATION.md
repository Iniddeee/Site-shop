# 📘 Guide de Modification du Site RepairTech

Ce guide vous explique comment modifier facilement tous les éléments du site web.

---

## 📋 Table des Matières

1. [Informations Générales](#informations-générales)
2. [Modifier les Textes](#modifier-les-textes)
3. [Modifier les Images](#modifier-les-images)
4. [Modifier les Produits du Shop](#modifier-les-produits-du-shop)
5. [Modifier les Tarifs de Réparation](#modifier-les-tarifs-de-réparation)
6. [Modifier Google Maps](#modifier-google-maps)
7. [Modifier les Coordonnées](#modifier-les-coordonnées)
8. [Modifier les Couleurs](#modifier-les-couleurs)

---

## 🌐 Informations Générales

### Structure du Projet
```
src/
├── components/          # Composants réutilisables
│   ├── home/           # Composants de la page d'accueil
│   ├── layout/         # Header, Footer, Navbar
│   ├── shop/           # Composants du shop
│   └── ui/             # Boutons, cartes, etc.
├── views/              # Pages principales
│   ├── HomeView.vue    # Page d'accueil
│   ├── ShopView.vue    # Page boutique
│   ├── ContactView.vue # Page contact
│   ├── AboutView.vue   # Page à propos
│   └── BrandRepairView.vue # Page tarifs par marque
└── router/
    └── index.js        # Configuration des routes
```

---

## ✏️ Modifier les Textes

### 1. Textes de la Page d'Accueil
**Fichier :** `src/components/home/HeroSection.vue`

```vue
<!-- LIGNE 23-24 : Titre principal -->
<h1>
  Réparation smartphone 
  <span class="text-primary-600">Porrentruy</span>
</h1>

<!-- LIGNE 26-28 : Sous-titre -->
<p>sans perte de données</p>

<!-- LIGNE 32-35 : Description -->
<p>
  Service de réparation express pour smartphones, tablettes et ordinateurs. 
  Pièces d'origine, garantie 2 ans, intervention en 20 minutes.
</p>
```

### 2. Textes de la Section "À Propos"
**Fichier :** `src/components/home/AboutSection.vue`

```vue
<!-- LIGNE 14-17 : Titre -->
<h2>
  Réparation smartphone 
  <span class="text-primary-600">Porrentruy</span>
</h2>

<!-- LIGNE 20-35 : Paragraphes de description -->
<p>
  Expert en réparation depuis plus de 10 ans...
</p>
```

### 3. Textes du Footer
**Fichier :** `src/components/layout/Footer.vue`

```vue
<!-- LIGNE 19-22 : Description du footer -->
<p>
  Service de réparation professionnel pour smartphones, 
  tablettes et ordinateurs. Pièces de qualité, garantie 2 ans.
</p>
```

---

## 🖼️ Modifier les Images

### 1. Image de la Page d'Accueil (Hero)
**Fichier :** `src/components/home/HeroSection.vue`

```vue
<!-- LIGNE 83-87 : Image principale -->
<img 
  src="VOTRE_URL_IMAGE_ICI" 
  alt="Réparation smartphone professionnelle"
  class="w-full h-auto rounded-2xl"
/>
```

**Comment trouver une image :**
1. Allez sur [Unsplash](https://unsplash.com)
2. Cherchez "smartphone repair" ou "phone repair"
3. Cliquez sur une image
4. Copiez l'URL et ajoutez `?w=600&h=600&fit=crop&auto=format`
5. Exemple : `https://images.unsplash.com/photo-XXXXXX?w=600&h=600&fit=crop&auto=format`

### 2. Image de la Section "À Propos"
**Fichier :** `src/components/home/AboutSection.vue`

```vue
<!-- LIGNE 86-90 : Image de la section -->
<img 
  src="VOTRE_URL_IMAGE_ICI" 
  alt="Réparation de smartphones"
  class="w-full h-auto"
/>
```

### 3. Images des Modèles (iPhone/Samsung)
**Fichier :** `src/views/BrandRepairView.vue`

```javascript
// LIGNE 232-240 : Fonction pour les images
const getModelImage = () => {
  if (brand.value === 'iphone') {
    return 'VOTRE_URL_IMAGE_IPHONE'
  }
  if (brand.value === 'samsung') {
    return 'VOTRE_URL_IMAGE_SAMSUNG'
  }
  return 'VOTRE_URL_IMAGE_PAR_DEFAUT'
}
```

---

## 🛒 Modifier les Produits du Shop

**Fichier :** `src/views/ShopView.vue`

### Ajouter un Nouveau Produit

```javascript
// LIGNE 135-210 : Liste des produits
const products = ref([
  {
    id: 1,                                    // ID unique
    name: 'Réparation écran iPhone 15',      // Nom du produit
    category: 'Réparation Smartphone',       // Catégorie
    categoryId: 'reparation-smartphone',     // ID de catégorie
    price: 289,                              // Prix en CHF
    image: 'URL_DE_L_IMAGE',                 // URL de l'image
    discount: 10                             // Réduction en % (optionnel)
  },
  // Ajoutez vos produits ici...
])
```

### Modifier les Catégories

```javascript
// LIGNE 120-155 : Liste des catégories
const categories = ref([
  {
    id: 'reparation-smartphone',
    name: 'Réparation Smartphone',
    count: 15,  // Nombre de produits dans cette catégorie
    subcategories: [
      { id: 'iphone', name: 'iPhone', count: 6 },
      { id: 'samsung', name: 'Samsung', count: 5 }
    ]
  }
])
```

---

## 💰 Modifier les Tarifs de Réparation

**Fichier :** `src/views/BrandRepairView.vue`

### Modifier les Modèles Disponibles

```javascript
// LIGNE 189-210 : Liste des modèles
const models = computed(() => {
  if (brand.value === 'iphone') {
    return [
      { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max' },
      { id: 'iphone-16-pro', name: 'iPhone 16 Pro' },
      // Ajoutez vos modèles ici...
    ]
  }
  if (brand.value === 'samsung') {
    return [
      { id: 'galaxy-s24-ultra', name: 'Galaxy S24 Ultra' },
      // Ajoutez vos modèles ici...
    ]
  }
})
```

### Modifier les Prix de Réparation

```javascript
// LIGNE 217-229 : Tarifs de réparation
repairs: [
  { name: 'Vitre + Écran', price: 289 },           // Prix en CHF
  { name: 'Changement batterie', price: 109 },
  { name: 'Caméra arrière', price: 169 },
  { name: 'Caméra selfie', price: 139 },
  { name: 'Lentille caméra', price: 109 },
  { name: 'Connecteur de charge', price: 149 },
  { name: 'Vitre arrière', price: 219 },
  { name: 'Dégât d\'eau', label: 'Sur devis' }    // Sans prix = "Sur devis"
]
```

---

## 🗺️ Modifier Google Maps

**Fichier :** `src/components/home/LocationSection.vue`

### Étapes pour Obtenir le Bon Code Google Maps :

1. **Allez sur Google Maps** : https://www.google.com/maps
2. **Cherchez votre adresse** : "Fbg Saint-Germain 2, 2900 Porrentruy"
3. **Cliquez sur "Partager"** (bouton en haut à gauche)
4. **Sélectionnez "Intégrer une carte"**
5. **Copiez le code HTML** qui commence par `<iframe src="..."`
6. **Collez uniquement l'URL** dans le fichier :

```vue
<!-- LIGNE 20-29 : Code Google Maps -->
<iframe 
  src="COLLEZ_ICI_L_URL_DE_GOOGLE_MAPS"
  width="100%" 
  height="100%" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy"
></iframe>
```

**Exemple d'URL valide :**
```
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2703.8!2d7.075!3d47.415!...
```

---

## 📞 Modifier les Coordonnées

### 1. Numéro de Téléphone

**Fichiers à modifier :**
- `src/components/layout/Navbar.vue` (ligne 157)
- `src/components/layout/Footer.vue` (ligne 109)
- `src/components/home/HeroSection.vue` (ligne 43)
- `src/views/ContactView.vue` (ligne 58)

```vue
<!-- Remplacez partout où vous voyez : -->
<a href="tel:0XXXXXXXXX">0XX XXX XX XX</a>

<!-- Par votre vrai numéro : -->
<a href="tel:0324651234">032 465 12 34</a>
```

### 2. Email

**Fichier :** `src/components/layout/Footer.vue` (ligne 116)

```vue
<!-- Remplacez : -->
<a href="mailto:info@[votresite].ch">info@[votresite].ch</a>

<!-- Par votre vrai email : -->
<a href="mailto:contact@repairtech.ch">contact@repairtech.ch</a>
```

### 3. Adresse

**Fichiers à modifier :**
- `src/components/home/LocationSection.vue` (lignes 51-53)
- `src/components/layout/Footer.vue` (lignes 101-103)

```vue
<!-- Modifiez : -->
<div>Fbg Saint-Germain 2</div>
<div>2900 Porrentruy</div>
<div>Suisse</div>
```

### 4. Horaires d'Ouverture

**Fichiers à modifier :**
- `src/components/home/LocationSection.vue` (lignes 66-68)
- `src/components/layout/Footer.vue` (lignes 124-126)

```vue
<!-- Modifiez : -->
<div>Lundi - Vendredi: 10h - 18h30</div>
<div>Samedi: 10h - 17h</div>
<div>Dimanche: Fermé</div>
```

---

## 🎨 Modifier les Couleurs

**Fichier :** `tailwind.config.js`

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... jusqu'à
    900: '#1e3a8a',
  }
}
```

**Couleurs principales utilisées :**
- `primary-600` : Bleu principal (#3B82F6)
- `dark-900` : Texte noir (#111827)
- `light-100` : Fond gris clair (#F3F4F6)

---

## 🚀 Commandes Utiles

### Démarrer le Serveur de Développement
```bash
npm run dev
```

### Compiler pour la Production
```bash
npm run build
```

### Prévisualiser la Version de Production
```bash
npm run preview
```

---

## ⚠️ Points Importants

1. **Toujours sauvegarder** avant de modifier
2. **Tester localement** avec `npm run dev`
3. **Les images doivent être en HTTPS** (pas HTTP)
4. **Les prix sont en CHF** (Francs Suisses)
5. **Respecter l'indentation** dans les fichiers Vue

---

## 📞 Besoin d'Aide ?

Si vous rencontrez des problèmes :
1. Vérifiez la console du navigateur (F12)
2. Vérifiez que tous les fichiers sont sauvegardés
3. Redémarrez le serveur de développement
4. Consultez la documentation Vue.js : https://vuejs.org/

---

**Dernière mise à jour :** Janvier 2026
