# Landing Page BibleShot - Spécifications Complètes

## 📱 Vue d'ensemble de l'application

**BibleShot** est une application mobile iOS premium qui transforme la lecture quotidienne de la Bible en une expérience moderne, inspirante et interactive. Chaque jour, l'utilisateur reçoit un "shot" biblique - un message court et percutant dérivé d'un verset biblique - conçu pour inspirer et motiver dès le matin.

### Concept unique
L'application combine :
- **Inspiration quotidienne** : Un shot biblique par jour, présenté de manière moderne et visuelle
- **Défi intellectuel** : Un système de quiz pour retrouver le verset original qui a inspiré le shot
- **Suivi de progression** : Statistiques détaillées, séries de succès, et système de points
- **Personnalisation** : 7 thèmes visuels inspirants (Classique, Sombre, Nord, Océan, Forêt, Lavande, Aurore)

---

## 🎯 Fonctionnalités Principales

### 1. Shot Biblique Quotidien
**Ce que c'est :**
- Un message court et impactant inspiré d'un verset biblique
- Renouvelé automatiquement chaque jour
- Présenté dans une interface épurée et élégante

**Exemples de shots :**
- "Je suis guéri par Jésus." (inspiré d'Ésaïe 53:5)
- "Je suis aimé et sauvé par Dieu." (inspiré de Jean 3:16)
- "Je peux tout par Jésus qui me fortifie." (inspiré de Philippiens 4:13)
- "Je suis une lumière qui brille." (inspiré de Matthieu 5:14)
- "Je suis une nouvelle création en Christ." (inspiré de 2 Corinthiens 5:17)

**Interactions possibles :**
- ❤️ Ajouter aux favoris pour y revenir plus tard
- 📤 Partager le shot avec ses proches
- 📖 Accéder au quiz pour découvrir le verset original

### 2. Calendrier Hebdomadaire
**Visualisation de la progression :**
- Affichage de la semaine en cours avec points quotidiens
- Indicateur visuel pour chaque jour (gris si non joué, couleur si joué)
- Points affichés sous chaque jour pour suivre ses performances
- Aide à maintenir une routine quotidienne

### 3. Quiz Biblique Interactif

**Système à 3 niveaux de difficulté :**

1. **Simple (🟢)**
   - Textes bibliques affichés en entier
   - Points gagnés : moins élevés mais accessibles

2. **Moyen (🟡)**
   - Seulement les livres bibliques affichés
   - Points gagnés : moyens

3. **Difficile (🔴)**
   - Références bibliques précises demandées
   - Points gagnés : maximum

**Déroulement du quiz :**
1. Présentation du shot du jour
2. Choix de la difficulté
3. 4 propositions de réponses
4. Validation et résultat immédiat
5. Affichage du verset complet et de sa référence

**Règles :**
- Une seule tentative par jour
- Points calculés selon la difficulté et le résultat
- Déverrouille la référence biblique du shot du jour

### 4. Statistiques Détaillées

**Métriques principales :**
- **Taux de réussite** : Pourcentage de victoires (affiché en grand format)
- **Nombre de parties** : Total de quiz joués
- **Points totaux** : Score cumulé
- **Série actuelle** : Nombre de jours consécutifs avec quiz
- **Record de série** : Plus longue série de jours consécutifs
- **Jours consécutifs** : Utilisation quotidienne de l'app

**Historique récent :**
- Date de chaque tentative
- Difficulté choisie (avec indicateur visuel)
- Résultat (réussite/échec)
- Points gagnés
- Shot du jour correspondant

### 5. Shots Favoris

**Bibliothèque personnelle :**
- Navigation par swipe entre les shots favoris
- Affichage élégant en plein écran
- Compteur de favoris (ex: "2 / 15")
- Possibilité de retirer des favoris
- Partage direct depuis la collection

### 6. Personnalisation Visuelle

**7 thèmes disponibles :**

1. **Classique**
   - Clair et épuré
   - Couleur principale : #5FA3D0 (bleu doux)
   - Idéal pour la lecture en journée

2. **Sombre**
   - Repose les yeux en faible luminosité
   - Fond noir (#000000)
   - Accents gris élégants

3. **Nord**
   - Palette froide et apaisante
   - Inspiré du thème Nordic
   - Couleurs : bleus et gris froids (#81B6D1)

4. **Océan**
   - Profondeurs marines apaisantes
   - Bleus aquatiques (#2E86AB)
   - Évoque la sérénité

5. **Forêt**
   - Nature verdoyante et ressourçante
   - Verts naturels (#4A7C59)
   - Sensation de calme

6. **Lavande**
   - Douceur spirituelle et méditative
   - Violets pastel (#8B7AA8)
   - Ambiance contemplative

7. **Aurore**
   - Premières lueurs du jour
   - Tons rosés et chauds (#E89AAB)
   - Évoque l'espoir

### 7. Notifications Quotidiennes (Optionnelles)

**Rappels personnalisables :**
- Notification à l'heure choisie
- Message : "Découvre ton shot biblique du jour !"
- Configurable dès l'onboarding
- Peut être activée/désactivée à tout moment

---

## 🎨 Design et Expérience Utilisateur

### Principes de Design

**Minimalisme spirituel :**
- Interface épurée sans distraction
- **Pas de titres de pages** - l'identité vient des icônes de navigation
- Focus sur le contenu (le shot, le quiz, les statistiques)
- Espaces blancs généreux pour la respiration visuelle

**Typographie :**
- Polices système iOS (SF Pro)
- Hiérarchie claire : titres en bold, contenus en regular
- Tailles adaptées pour la lisibilité sur iPhone

**Icônes :**
- SF Symbols natifs iOS pour un look professionnel
- Exemples : gamecontroller.fill, star.fill, flame.fill, trophy.fill, calendar
- Cohérence visuelle avec l'écosystème Apple

**Couleurs :**
- Palette adaptée à chaque thème
- Couleurs primaires pour les CTAs
- Couleurs de statut (vert succès, rouge erreur, orange warning)
- Transitions douces entre les thèmes

**Animations :**
- Reanimated 4 pour des animations fluides
- Transitions douces entre les pages
- Feedback visuel sur les interactions
- Animations de fade-in pour le contenu

### Navigation

**Structure à 2 onglets principaux :**
1. **Accueil** (icône maison)
   - Shot quotidien
   - Calendrier hebdomadaire
   - Bouton vers le quiz

2. **Quiz** (icône puzzle)
   - Lancement du quiz du jour
   - Sélection de difficulté
   - Résultats

**Accès via profil (bouton flottant) :**
- Thème
- Notifications
- Statistiques
- Shots favoris
- À propos
- Aide et support
- Conditions d'utilisation
- Politique de confidentialité

### Responsive Design
- **Optimisé pour iPhone uniquement**
- Support des différentes tailles d'écran iPhone
- Safe Area respectée (encoches, Dynamic Island)
- Mode portrait uniquement

---

## 📊 Données et Contenu

### Base de données de shots
- **Format** : JSON structuré
- **Contenu** :
  - ID unique
  - Référence biblique (ex: "Jean 3:16")
  - Verset complet
  - Punchline (le shot)
- **Volume** : Collection extensible de shots bibliques
- **Renouvellement** : Sélection aléatoire quotidienne

### Stockage local
- **AsyncStorage** pour les préférences utilisateur
- Historique des quiz
- Statistiques cumulées
- Liste des favoris
- Thème sélectionné
- Configuration des notifications

---

## 🎯 Public Cible

### Utilisateur Idéal

**Profil démographique :**
- Chrétiens pratiquants ou en recherche spirituelle
- 18-45 ans principalement
- Utilisateurs iPhone
- Francophones

**Besoins et motivations :**
- Cherche à intégrer la foi dans sa routine quotidienne
- Veut une approche moderne de la lecture biblique
- Apprécie les défis intellectuels
- Valorise le design et l'expérience utilisateur

**Comportements :**
- Consulte l'app le matin (moment d'inspiration)
- Session courte : 2-5 minutes
- Revient quotidiennement pour le nouveau shot
- Partage les shots qui les touchent

---

## 💎 Points Forts et Différenciation

### Avantages Concurrentiels

1. **Format "Shot"**
   - Messages courts et percutants
   - Faciles à mémoriser et appliquer
   - Alternative moderne aux versets traditionnels

2. **Gamification intelligente**
   - Quiz stimulant sans être compétitif
   - Progression visible (séries, points, statistiques)
   - Pas de pression sociale ou classements

3. **Design Premium**
   - Qualité de l'interface digne d'Apple
   - Attention aux détails
   - 7 thèmes soignés
   - Animations fluides

4. **Respect de l'utilisateur**
   - Une seule tentative par jour (pas de spam)
   - Notifications optionnelles
   - Pas de publicité
   - Pas de contenu premium caché (app payante d'emblée)

5. **Simplicité d'usage**
   - Onboarding clair et rapide
   - Navigation intuitive
   - Pas de configuration complexe

### Ce qui rend BibleShot unique
- Combine inspiration spirituelle et défi intellectuel
- Design moderne sans sacrifier le respect du texte biblique
- Encourage une pratique quotidienne sans culpabilisation
- Favorise la mémorisation naturelle par le format court

---

## 🚀 Parcours Utilisateur

### 1. Première Utilisation (Onboarding)

**Étape 1 : Bienvenue**
> "Veux-tu commencer ta journée avec un **shot** de Parole vivante ?"

**Étape 2 : Valeur proposée**
- Explication du concept de "shot biblique"
- Présentation du format court et impactant

**Étape 3 : Quiz quotidien**
- Introduction au système de quiz
- Explication des niveaux de difficulté

**Étape 4 : Niveaux de difficulté**
- Détail des 3 modes (Simple, Moyen, Difficile)
- Systèmes de points

**Étape 5 : Introduction au quiz interactif**
- Comment fonctionne le quiz
- Une tentative par jour

**Étape 6 : Récompenses et suivi**
- Présentation des statistiques
- Séries et badges
- Historique

**Étape 7 : Personnalisation**
- Configuration des notifications quotidiennes
- Choix de l'heure de rappel

**Étape 8 : Prêt !**
- Accès direct à l'application

### 2. Utilisation Quotidienne

**Matin (notification optionnelle)**
1. Réception de la notification "Découvre ton shot du jour !"
2. Ouverture de l'app

**Page d'accueil**
1. Visualisation du calendrier hebdomadaire
2. Découverte du shot quotidien
3. Possibilité d'ajouter aux favoris ou partager
4. Invitation à faire le quiz

**Quiz (facultatif)**
1. Rappel du shot à identifier
2. Choix de la difficulté
3. Réponse aux questions (4 choix)
4. Résultat immédiat avec points
5. Découverte du verset complet
6. Option de voir les statistiques

**Consultation des favoris (optionnel)**
- Navigation dans la collection personnelle
- Relecture des shots marquants
- Partage

### 3. Utilisation Hebdomadaire/Mensuelle

**Consultation des statistiques**
- Voir sa progression
- Analyser son taux de réussite
- Consulter l'historique récent
- Suivre ses séries

**Personnalisation**
- Changer de thème selon l'humeur
- Ajuster les notifications
- Explorer les différents visuels

---

## 📱 Architecture Technique (Info pour développeurs)

### Stack Technique
- **React Native 0.81** avec React 19
- **Expo SDK 54** (nouvelle architecture)
- **TypeScript** en mode strict
- **Expo Router** (navigation basée sur fichiers)
- **Reanimated 4** (animations performantes)
- **AsyncStorage** (persistance)

### Structure de l'App
- Services (gestion de la logique métier)
- Contextes React (thèmes, onboarding)
- Composants réutilisables
- Hooks personnalisés

### Optimisations
- Nouvelle architecture React Native activée
- Animations natives (60 FPS)
- Chargement optimisé des données
- Gestion efficace de la mémoire

---

## 🎨 Éléments Visuels pour la Landing Page

### Screenshots Recommandés

1. **Hero Image** : Page d'accueil avec un shot inspirant
2. **Calendrier** : Vue du calendrier hebdomadaire avec points
3. **Quiz** : Interface de quiz avec les 3 niveaux
4. **Statistiques** : Dashboard des stats avec les icônes professionnelles
5. **Thèmes** : Carrousel montrant les 7 thèmes disponibles
6. **Favoris** : Collection de shots favoris en navigation swipe
7. **Résultat Quiz** : Écran de victoire avec points et verset

### Palette de Couleurs Principale (Thème Classique)
- **Background** : #F2F2F7 (gris très clair)
- **Surface** : #FAF9F6 (blanc cassé)
- **Primaire** : #5FA3D0 (bleu doux)
- **Accent** : #7BC67E (vert tendre)
- **Texte** : #1D1D1F (presque noir)
- **Succès** : #5FAF5F (vert)
- **Erreur** : #FF8080 (rouge doux)

### Mots-Clés et Tags
- Application biblique moderne
- Dévotion quotidienne
- Quiz biblique
- Inspiration chrétienne
- Shot de Parole
- Versets bibliques quotidiens
- Méditation biblique
- Croissance spirituelle
- iPhone
- Premium

---

## 💰 Modèle Économique

### Application Gratuite avec Soutien Volontaire
- **Entièrement gratuite** : Toutes les fonctionnalités accessibles sans frais
- **Abonnement de soutien optionnel** : Pour ceux qui souhaitent contribuer au développement
- **Pas de publicité** : Expérience pure et sans distraction
- **Pas de restriction** : Aucune fonctionnalité verrouillée derrière un paywall

### Valeur Offerte
- Design premium et soigné
- 7 thèmes personnalisés
- Contenu biblique de qualité
- Mises à jour régulières
- Support client
- Pas de monétisation de l'attention
- Accessible à tous, indépendamment des moyens financiers

---

## 📈 Proposition de Valeur

### Pour l'Utilisateur

**Bénéfices Émotionnels :**
- Commence la journée avec inspiration
- Se sent connecté à sa foi quotidiennement
- Progresse dans la connaissance biblique
- Partage des moments inspirants

**Bénéfices Pratiques :**
- Gagne du temps (format court)
- Apprend de manière ludique
- Suit sa progression facilement
- Accède à ses favoris rapidement

**Bénéfices Sociaux :**
- Partage facilement avec ses proches
- Contenu adapté au format mobile moderne
- Design dont on n'a pas honte de montrer

### Messages Marketing Clés

**Slogan Principal :**
> "Un shot de Parole vivante chaque jour"

**Messages Secondaires :**
- "Transforme ta routine spirituelle"
- "La Bible dans un format moderne"
- "Inspire-toi, défie-toi, progresse"
- "365 shots pour nourrir ta foi"

**Call-to-Actions :**
- "Télécharge maintenant"
- "Commence ton premier shot"
- "Rejoins des milliers d'utilisateurs"
- "Essaie ton premier quiz"

---

## 🎯 Objectifs de la Landing Page

### Objectifs Principaux
1. **Expliquer clairement** le concept unique de "shot biblique"
2. **Montrer visuellement** l'interface et les fonctionnalités
3. **Convaincre** de la valeur de l'application
4. **Convertir** les visiteurs en téléchargements

### Structure Recommandée

**1. Hero Section**
- Titre accrocheur
- Sous-titre explicatif
- CTA principal "Télécharger sur l'App Store"
- Visuel de l'app (mockup iPhone avec shot du jour)

**2. Concept**
- Qu'est-ce qu'un "shot biblique" ?
- Exemples concrets de shots
- Explication du renouvellement quotidien

**3. Fonctionnalités Principales** (avec screenshots)
- Shot quotidien + calendrier
- Quiz à 3 niveaux
- Statistiques et progression
- Favoris
- Personnalisation (thèmes)

**4. Design & Personnalisation**
- Carrousel des 7 thèmes
- Emphase sur la qualité visuelle
- Screenshots comparatifs

**5. Pour Qui ?**
- Description du public cible
- Témoignages (si disponibles)
- Cas d'usage typiques

**6. Pourquoi BibleShot ?**
- Points de différenciation
- Avantages compétitifs
- Engagement qualité

**7. FAQ**
- Questions courantes
- Réponses rassurantes

**8. Footer**
- CTA final
- Liens légaux (CGU, Confidentialité)
- Contact/Support
- Réseaux sociaux

---

## 📱 Informations Techniques App Store

### Métadonnées Suggérées

**Nom de l'app :**
BibleShot - Shot Biblique Quotidien

**Sous-titre :**
Inspiration quotidienne et quiz biblique

**Description Courte :**
Découvre chaque jour un shot biblique inspirant et défie-toi avec des quiz pour approfondir ta connaissance de la Parole.

**Mots-Clés :**
bible, versets, quotidien, inspiration, quiz, chrétien, dévotion, spiritualité, foi, parole

**Catégories :**
- Principale : Éducation
- Secondaire : Style de vie

**Âge :**
4+ (contenu adapté à tous)

---

## 🎨 Assets Nécessaires

### Pour la Landing Page
- Logo BibleShot (différentes tailles)
- Icon de l'app (1024x1024)
- Screenshots iPhone (6-10 images)
- Mockups 3D de l'app
- Vidéo de démonstration (optionnel, 30-60 sec)
- Icônes des fonctionnalités
- Badge "Télécharger sur l'App Store"

### Pour le Marketing
- Bannières réseaux sociaux
- Images pour publicités
- Screenshots annotés
- GIFs animés des fonctionnalités clés

---

## 📊 Métriques de Succès

### KPIs à Suivre
- Taux de conversion landing page → App Store
- Nombre de téléchargements
- Rétention J1, J7, J30
- Taux d'utilisation quotidienne
- Nombre moyen de quiz par utilisateur
- Taux de complétion de l'onboarding
- Notes et avis App Store

### Objectifs
- Taux de rétention J7 > 40%
- Utilisation quotidienne > 60%
- Note App Store > 4.5/5

---

## 🔮 Vision Future

### Fonctionnalités Potentielles
- Plus de langues (anglais, espagnol, etc.)
- Plans de lecture thématiques
- Communauté et partages
- Widgets iOS
- Apple Watch companion
- Version iPad
- Plus de thèmes visuels
- Audio des versets
- Badges et achievements supplémentaires

### Engagement Utilisateur
- Programme de parrainage
- Défis mensuels
- Événements spéciaux (Pâques, Noël)
- Nouveaux packs de shots

---

## ✨ Conclusion

BibleShot est bien plus qu'une simple application biblique. C'est un compagnon quotidien qui allie **inspiration spirituelle**, **design moderne** et **gamification intelligente** pour encourager une pratique de foi régulière et enrichissante.

L'application se distingue par :
- Son **format unique** de "shots" bibliques courts et impactants
- Son **design premium** avec 7 thèmes soignés
- Son **système de quiz** engageant à 3 niveaux de difficulté
- Son **respect de l'utilisateur** (une interaction par jour, pas de spam)
- Sa **qualité iOS native** (animations fluides, SF Symbols, respect des conventions Apple)

**BibleShot transforme la lecture biblique en une expérience moderne, accessible et quotidienne.**

---

*Document créé pour la conception de la landing page GitHub Pages de BibleShot*
*Dernière mise à jour : Octobre 2025*
