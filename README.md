# 📖 BibleShot - Landing Page

Landing page pour l'application mobile **BibleShot** - Un shot de Parole vivante chaque jour.

## 🚀 Structure du Projet

```
Bibleshot_app/
├── index.html              # Page principale
├── styles.css              # Styles CSS
├── script.js               # JavaScript interactif
├── assets/
│   ├── images/            # Images et logos
│   └── screenshots/       # Captures d'écran de l'app
├── Landing_page_bibleshot.md  # Spécifications complètes
└── README.md              # Ce fichier
```

## 🎨 Fonctionnalités de la Landing Page

### Sections Principales
1. **Hero Section** - Titre accrocheur avec CTA vers l'App Store
2. **Concept** - Explication du "shot biblique" avec exemples
3. **Fonctionnalités** - 6 cartes présentant les features principales
4. **Quiz** - Démonstration interactive du système de quiz
5. **Thèmes** - Carrousel des 7 thèmes visuels disponibles
6. **Pourquoi BibleShot** - Points de différenciation
7. **FAQ** - Questions fréquentes avec accordion
8. **CTA Final** - Appel à l'action pour télécharger
9. **Footer** - Liens légaux et navigation

### Interactions JavaScript
- ✨ Smooth scroll sur toute la page
- 🎭 Animations au scroll (fade-in)
- 📱 Accordion FAQ interactif
- 🎨 Interactions sur les cartes de thèmes
- 🔔 Notifications toast pour les actions
- 📊 Parallax subtil sur le hero
- 📱 Design responsive (mobile-first)

## 🎨 Design System

### Couleurs (Thème Classique)
```css
--color-primary: #5FA3D0     /* Bleu doux */
--color-accent: #7BC67E      /* Vert tendre */
--color-background: #F2F2F7  /* Gris très clair */
--color-surface: #FAF9F6     /* Blanc cassé */
--color-text: #1D1D1F        /* Presque noir */
```

### Typographie
- Font principale: **Inter** (Google Fonts)
- Fallback: SF Pro (système Apple)
- Hiérarchie: 8 tailles de texte (sm à 5xl)

### Espacements
- Système cohérent: xs (0.5rem) à 3xl (6rem)
- Grid responsive avec CSS Grid

## 📱 Responsive Design

### Breakpoints
- **Desktop**: > 968px (layout 2 colonnes)
- **Tablet**: 640px - 968px (layout mixte)
- **Mobile**: < 640px (layout 1 colonne)

### Optimisations Mobile
- Navigation simplifiée
- Boutons pleine largeur
- Images optimisées
- Touch-friendly (espacement 44px minimum)

## 🚀 Déploiement sur GitHub Pages

### 1. Initialiser Git (si pas déjà fait)
```bash
cd "Bibleshot_app"
git init
git add .
git commit -m "Initial commit: BibleShot landing page"
```

### 2. Créer le Repository GitHub
1. Aller sur [GitHub.com](https://github.com)
2. Créer un nouveau repository (ex: `bibleshot-landing`)
3. Ne pas initialiser avec README (déjà existant)

### 3. Pousser le Code
```bash
git remote add origin https://github.com/VOTRE_USERNAME/bibleshot-landing.git
git branch -M main
git push -u origin main
```

### 4. Activer GitHub Pages
1. Aller dans **Settings** du repository
2. Section **Pages** (menu gauche)
3. Source: **Deploy from a branch**
4. Branch: **main** / **(root)**
5. Cliquer **Save**

### 5. Accéder au Site
Votre site sera disponible à :
```
https://VOTRE_USERNAME.github.io/bibleshot-landing/
```

## 📝 Personnalisation

### Ajouter des Images
1. Placer les images dans `assets/images/` ou `assets/screenshots/`
2. Référencer dans le HTML :
```html
<img src="assets/images/logo.png" alt="BibleShot Logo">
```

### Modifier les Couleurs
Éditer les variables CSS dans `styles.css` :
```css
:root {
    --color-primary: #VOTRE_COULEUR;
    --color-accent: #VOTRE_ACCENT;
}
```

### Ajouter du Contenu
Le HTML est structuré de manière sémantique. Chaque section est indépendante et modifiable facilement.

## 🔗 Liens Utiles

### App Store
Remplacer tous les liens `#` par le vrai lien App Store :
```html
<a href="https://apps.apple.com/app/idXXXXXXXXX">Télécharger</a>
```

### Réseaux Sociaux
Ajouter les liens dans le footer selon vos comptes.

## ⚡ Performance

### Optimisations Incluses
- ✅ CSS minifié possible
- ✅ Lazy loading des images
- ✅ Debounce sur scroll events
- ✅ Intersection Observer pour animations
- ✅ Web fonts optimisées (Google Fonts)

### Pour Améliorer
1. **Compresser les images** : Utiliser TinyPNG ou Squoosh
2. **Minifier CSS/JS** : Avant déploiement en production
3. **CDN** : Pour les fonts si beaucoup de trafic
4. **Analytics** : Ajouter Google Analytics ou Plausible

## 📊 SEO

### Meta Tags Inclus
- ✅ Description
- ✅ Keywords
- ✅ Viewport (mobile-friendly)
- ✅ Titre optimisé

### À Ajouter (optionnel)
```html
<!-- Open Graph pour réseaux sociaux -->
<meta property="og:title" content="BibleShot">
<meta property="og:description" content="Un shot de Parole vivante chaque jour">
<meta property="og:image" content="URL_IMAGE">
<meta property="og:url" content="URL_SITE">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
```

## 🐛 Debug

### Tester Localement
1. Ouvrir `index.html` directement dans un navigateur
2. Ou utiliser un serveur local :
```bash
# Python 3
python3 -m http.server 8000

# Node.js (avec http-server)
npx http-server
```

### Console JavaScript
Ouvrir les DevTools (F12) pour voir les logs et animations.

## 📄 Licence

Ce projet est créé pour BibleShot. Tous droits réservés.

## 🙏 Support

Pour toute question ou support :
- Email : [votre email]
- Twitter : [@votre_compte]
- GitHub Issues : [lien du repo]

---

**Développé avec ❤️ pour nourrir la foi quotidiennement**
# bible_shot_landing_page
