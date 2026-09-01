# Documentation Interne des Métriques du CV & Portfolio
> **Note confidentielle / Préparation aux entretiens techniques**
> *Ce document détaille la méthodologie, les outils de mesure et le contexte d'ingénierie de chaque métrique chiffrée présente sur le CV et le portfolio.*

---

## 1. Jetcamer / MesDoh : Réduction de 35% du temps de réponse API (-35% Latence)

### Contexte Technique
- **Problème initial :** Les requêtes d'encaissement du terminal POS et de consultation d'historique de stock souffraient de goulots d'étranglement lors des heures de pointe (pics de transactions simultanées), avec des temps de réponse moyens oscillant entre **450ms et 650ms** dus à des jointures SQL non indexées et des allers-retours excessifs avec la base relationnelle.
- **Actions d'optimisation menées :**
  1. **Profiling des requêtes lentes :** Utilisation de `EXPLAIN ANALYZE` sur PostgreSQL et mise en place d'index composites sur les tables `transactions(created_at, store_id)` et `inventory(sku, location_id)`.
  2. **Mise en cache Redis :** Mise en cache des catalogues de produits et tables de tarification avec invalidation événementielle (TTL court).
  3. **Backend Asynchrone :** Découplage des écritures d'audit et de journalisation via des endpoints asynchrones FastAPI (`async def` + `BackgroundTasks`).
- **Outil de mesure :** Benchmarks exécutés avec **k6** et **Postman** (scénarios de 100 requêtes/seconde).
- **Résultat vérifiable :** Temps moyen de réponse ramené de **~520ms à ~330ms** (gain net de **~36%**, arrondi à **-35%**).

---

## 2. BioClin & GestPlus : Réduction de 60% des erreurs manuelles de saisie (-60% Erreurs)

### Contexte Technique
- **Problème initial :** Dans les laboratoires et entreprises clientes de GestPlus, les techniciens et gestionnaires reportaient les résultats d'analyses et mouvements de stock sur des fiches papier et des tableurs Excel disparates. Cela générait des doublons, des fautes de frappe de références et des incohérences lors de la consolidation de fin de mois.
- **Actions d'optimisation menées :**
  1. **Validation stricte à la saisie :** Formulaires Angular avec schémas de validation stricts (bornes numériques automatiques, détection des formats de codes-barres).
  2. **Génération PDF automatisée :** Remplacement de la rédaction manuelle des comptes-rendus par un moteur de génération automatisé (PDFMake / DomPDF) alimenté directement par les données en base de données.
- **Outil de mesure :** Audit opérationnel interne avant/après déploiement (comparaison du registre des anomalies et corrections de fin de mois sur un trimestre).
- **Résultat vérifiable :** Nombre d'incidents de saisie et de corrections de facturation/dossiers diminué de **plus de moitié** (environ **60% d'incidents en moins** signalés par les équipes de gestion).

---

## 3. ONG FACHAWO : Chargement 4,2s → 1,6s & +40% de Trafic Organique

### Contexte Technique
- **Problème initial :** Le site initial sous thème lourd non optimisé mettait **4,2 secondes** à charger sur mobile/3G, avec un score Google PageSpeed inférieur à 45/100 et un taux de rebond élevé.
- **Actions d'optimisation menées :**
  1. **Refonte UI/UX :** Architecture légère HTML5 + Tailwind CSS sans scripts tiers bloquants.
  2. **Optimisation des médias :** Conversion des images en WebP/AVIF avec attributs `srcset` et `loading="lazy"`.
  3. **SEO Technique :** Structuration des balises sémantiques (H1-H3), données structurées Schema.org, sitemap XML dynamique et optimisation des Core Web Vitals (LCP < 2,0s, CLS = 0).
- **Outils de mesure :** **Google Lighthouse** (mobile) et **Google Search Console** (mesure sur une période de 4 mois post-déploiement).
- **Résultats vérifiables :** 
  - Largest Contentful Paint (LCP) passé de **4,2s à 1,6s**.
  - Trafic organique Google mesuré en hausse de **+40% d'impressions et clics** en 4 mois.

---

## 4. CITIS Formation & Royal High School : +35% de Visibilité SEO

### Contexte Technique
- **Problème initial :** Catalogues de formations et pages d'admission mal indexés, absence de métadonnées multilingues claires (`hreflang`), structure d'URL non optimisée pour les requêtes locales ("formation professionnelle Yaoundé", "collège bilingue Nyom").
- **Actions d'optimisation menées :**
  1. **Architecture multilingue propre :** Implémentation de routes canoniques et balises `hreflang` (FR/EN).
  2. **SEO sémantique :** Optimisation des fiches de formation et formulaires d'admission.
  3. **Performance web :** Temps de chargement rapide et design responsive adapté aux smartphones.
- **Outil de mesure :** **Google Search Console** (comparaison des impressions sur 6 mois avant vs après refonte).
- **Résultat vérifiable :** Augmentation de **+35% des impressions de recherche** et requêtes de marque.

---

## 5. AI Bacterial Resistance Prediction (RAM) : Latence d'inférence < 120ms

### Contexte Technique
- **Problème initial :** Les antibiogrammes phénotypiques en laboratoire de microbiologie nécessitent **48h à 72h** de culture bactérienne. L'objectif était de fournir une prédiction de sensibilité/résistance quasi-instantanée basée sur les mutations génétiques et les concentrations minimales inhibitrices (CMI).
- **Actions d'ingénierie menées :**
  1. **Prétraitement & Feature Engineering :** Encodage One-Hot et normalisation vectorielle des marqueurs génomiques.
  2. **Ensemble supervisé optimisé :** Modèles Random Forest, SVM et XGBoost exportés en binaires sérialisés (Joblib) et chargés en mémoire vive au démarrage du serveur FastAPI.
  3. **Validation EUCAST :** Moteur de règles en mémoire comparant instantanément les diamètres de zone d'inhibition aux seuils cliniques européens officiels.
- **Outil de mesure :** Tests de charge locaux exécutés via scripts Python `timeit` et `pytest-benchmark` sur des batchs de 1 000 profils bactériens.
- **Résultat vérifiable :** Temps moyen de prédiction unitaire de **~85ms à 110ms** (soit **< 120ms** avec validation des seuils et mise en forme de la réponse JSON).
