import { Project, Capability, PipelineStep, ArchitectureLabItem, TechCategory } from '@/types';
import { Language } from '@/context/LanguageContext';

export interface PortfolioDataset {
  personalInfo: {
    name: string;
    shortName: string;
    title: string;
    focus: string;
    tagline: string;
    heroHeadline: {
      greeting: string;
      part1: string;
      part1Highlight: string;
      part2: string;
      part2Highlight: string;
    };
    heroSub: string;
    heroPills: string[];
    bio: string[];
    status: {
      available: boolean;
      text: string;
      subtext: string;
    };
    links: {
      github: string;
      linkedin: string;
      email: string;
      portfolio: string;
    };
    stats: { label: string; value: string }[];
    ui: {
      exploreWork: string;
      viewGithub: string;
      viewLive: string;
      inspectSystem: string;
      available: string;
      quickSearch: string;
      nav: {
        about: string;
        work: string;
        expertise: string;
        pipeline: string;
        architecture: string;
        stack: string;
        contact: string;
      };
      caseStudies: {
        title: string;
        badge: string;
        subtitle: string;
        inspectButton: string;
        viewLiveButton: string;
        filterAll: string;
        tier1Title: string;
        tier1Subtitle: string;
        tier2Title: string;
        tier2Subtitle: string;
        tier3Title: string;
        tier3Subtitle: string;
        lookingForSource: string;
        lookingForSourceSub: string;
        exploreRepos: string;
      };
      pipeline: {
        badge: string;
        title: string;
        subtitle: string;
        stageLabel: string;
        coreDeliverables: string;
        strictVerification: string;
        prev: string;
        next: string;
      };
      lab: {
        badge: string;
        title: string;
        subtitle: string;
        sequenceLabel: string;
        guaranteesLabel: string;
      };
      stack: {
        badge: string;
        title: string;
        subtitle: string;
      };
      contact: {
        badge: string;
        titlePart1: string;
        titleHighlight: string;
        subtitle: string;
        directEmail: string;
        copy: string;
        copied: string;
        githubProfile: string;
        linkedinProfile: string;
        formTitle: string;
        formSubtitle: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        msgLabel: string;
        msgPlaceholder: string;
        submitBtn: string;
        sentNotice: string;
      };
      footer: {
        rights: string;
        status: string;
        backToTop: string;
      };
    };
  };
  capabilities: Capability[];
  featuredProjects: Project[];
  pipelineSteps: PipelineStep[];
  architectureLabItems: ArchitectureLabItem[];
  techCategories: TechCategory[];
}

export const portfolioDataFR: PortfolioDataset = {
  personalInfo: {
    name: "Christian Jordan Keminsi",
    shortName: "Christian J. Keminsi",
    title: "Full-Stack Software Engineer",
    focus: "Software Architecture · AI-Powered Products",
    tagline: "Je conçois et développe des produits numériques complets, de l'idée à l'architecture technique, avec une attention particulière portée à l'expérience utilisateur, à la scalabilité et à l'intégration de l'intelligence artificielle.",
    heroHeadline: {
      greeting: "Bonjour, je suis Christian Jordan Keminsi.",
      part1: "Je conçois des produits numériques",
      part1Highlight: "scalables et robustes",
      part2: "des plateformes métier complexes aux",
      part2Highlight: "applications pilotées par l'IA"
    },
    heroSub: "Ingénieur Logiciel Full-Stack dédié à la transformation d'exigences métier complexes en architectures résilientes, backends haute performance et interfaces modernes.",
    heroPills: ["Architecture Logicielle", "Intégration IA & ML", "Product Engineering", "Systèmes Offline-First"],
    bio: [
      "Je suis un Ingénieur Logiciel Full-Stack dédié à la conception et au développement de produits numériques complets, scalables et à fort impact.",
      "Mon travail va bien au-delà de la simple intégration d'interfaces. J'aime transformer des exigences complexes en produits structurés — de l'architecture système et des services backend aux interfaces utilisateur modernes et aux fonctionnalités d'intelligence artificielle.",
      "Au fil des années, j'ai travaillé sur des projets dans de multiples domaines : plateformes financières, santé, éducation, technologies sportives, systèmes administratifs et intelligence artificielle.",
      "J'interviens sur l'ensemble du cycle de vie du produit : Product thinking → UX/UI → Architecture → Frontend → Backend → Données → IA → Déploiement.",
      "Mon intérêt principal réside dans la résolution de problèmes complexes et la construction de systèmes techniquement solides et réellement utiles."
    ],
    status: {
      available: true,
      text: "Disponible pour de nouvelles opportunités",
      subtext: "Ouvert aux collaborations techniques & produits à fort impact"
    },
    links: {
      github: "https://github.com/jkeminsi",
      linkedin: "https://www.linkedin.com/in/christian-keminsi-376479215/",
      email: "jkeminsi06@gmail.com",
      portfolio: "https://christiankeminsi.dev"
    },
    stats: [
      { label: "Domaines Clés", value: "5+" },
      { label: "Projets Déployés & Lab", value: "9" },
      { label: "Cycle de Produit", value: "0 à 1" },
      { label: "Maîtrise Technique", value: "Full-Stack" }
    ],
    ui: {
      exploreWork: "Explorer mes réalisations",
      viewGithub: "Voir GitHub",
      viewLive: "Voir le site en direct ↗",
      inspectSystem: "Inspecter le système",
      available: "Disponible",
      quickSearch: "Recherche Rapide",
      nav: {
        about: "À Propos",
        work: "Projets",
        expertise: "Expertise",
        pipeline: "Pipeline",
        architecture: "Architecture",
        stack: "Stack",
        contact: "Contact"
      },
      caseStudies: {
        title: "Sélection de Réalisations & Projets",
        badge: "// PORTFOLIO & ARCHITECTURES",
        subtitle: "Structuré en 3 volets : architectures logicielles & IA signatures, plateformes clientes publiées en production, et systèmes métier approfondis.",
        inspectButton: "Inspecter le Système",
        viewLiveButton: "Voir le site ↗",
        filterAll: "Tous les Projets (9)",
        tier1Title: "SELECTED WORK — Architectures Signatures & Systèmes IA",
        tier1Subtitle: "Conceptions approfondies de systèmes complexes, modèles prédictifs de santé, synchronisation offline-first et moteurs financiers.",
        tier2Title: "CLIENT & PRODUCTION WORK — Plateformes Publiées en Ligne",
        tier2Subtitle: "Produits réels développés et actuellement en ligne pour des établissements et entreprises clientes.",
        tier3Title: "OTHER PROJECTS — Systèmes Métier & Laboratoire",
        tier3Subtitle: "Architectures spécialisées dans la santé géolocalisée, la gestion académique et les écosystèmes sportifs.",
        lookingForSource: "Vous recherchez les dépôts sources et la documentation technique ?",
        lookingForSourceSub: "Tous les schémas d'architecture, configurations Docker Compose et modèles de machine learning sont organisés sur GitHub.",
        exploreRepos: "Explorer les Dépôts →"
      },
      pipeline: {
        badge: "// PIPELINE DE CRÉATION & INGÉNIERIE",
        title: "Comment Je Construis : Du Problème à la Production",
        subtitle: "L'ingénierie logicielle est avant tout la création de produits utiles. J'interviens sur l'ensemble du cycle de vie de 0 à 1 avec une exigence stricte de robustesse technique et de clarté UX.",
        stageLabel: "ÉTAPE",
        coreDeliverables: "Livrables Principaux de l'Étape",
        strictVerification: "Vérification Stricte",
        prev: "← Précédent",
        next: "Suivant :"
      },
      lab: {
        badge: "// LABORATOIRE D'ARCHITECTURE SYSTÈME",
        title: "Schémas & Blueprints Techniques",
        subtitle: "Blueprints interactifs illustrant la synchronisation offline-first, les pipelines d'inférence machine learning et les topologies microservices.",
        sequenceLabel: "Séquence d'Exécution Étape par Étape :",
        guaranteesLabel: "Garanties d'Architecture & Compromis Techniques Gérés"
      },
      stack: {
        badge: "// OUTILLAGE & STACK TECHNIQUE SÉLECTIONNÉE",
        title: "Technologies & Écosystème Maîtrisé",
        subtitle: "Sélection rigoureuse d'outils appliqués en environnement de production, sans logos superflus."
      },
      contact: {
        badge: "// CONTACT & ÉCHANGE TECHNIQUE",
        titlePart1: "Bâtissons quelque chose de ",
        titleHighlight: "remarquable ensemble.",
        subtitle: "Que vous souhaitiez concevoir un produit numérique de A à Z, bâtir un backend haute performance ou intégrer des capacités d'IA concrètes, je suis ouvert à la discussion.",
        directEmail: "E-mail Direct",
        copy: "Copier",
        copied: "Copié !",
        githubProfile: "Profil GitHub",
        linkedinProfile: "LinkedIn",
        formTitle: "Envoyer un Message Direct",
        formSubtitle: "Réponse garantie sous 24h ouvrées.",
        nameLabel: "Votre Nom",
        namePlaceholder: "ex. Marc Dupont",
        emailLabel: "Votre E-mail",
        emailPlaceholder: "ex. marc@entreprise.com",
        msgLabel: "Détails de votre Projet ou Opportunité",
        msgPlaceholder: "Décrivez vos besoins produit, vos défis d'architecture ou l'opportunité...",
        submitBtn: "Transmettre le Message",
        sentNotice: "✓ Client e-mail déclenché. Au plaisir d'échanger prochainement !"
      },
      footer: {
        rights: "Tous droits réservés.",
        status: "Systèmes Opérationnels",
        backToTop: "Haut de page"
      }
    }
  },
  capabilities: [
    {
      id: "product-engineering",
      number: "01",
      title: "Product Engineering",
      tagline: "Concevoir des produits numériques complets, du cadrage à la mise en production.",
      description: "Approche globale alliant compréhension métier, parcours utilisateurs, design systems et exécution rapide de MVP scalables.",
      technologies: ["Cadrage Produit", "Parcours Utilisateurs", "Spécifications MVP", "Design Systems"],
      keyOutputs: ["Spécifications Produit", "Prototypes Systèmes", "Bases Scalables"],
      icon: "Boxes"
    },
    {
      id: "fullstack-engineering",
      number: "02",
      title: "Full-Stack Engineering",
      tagline: "Interfaces modernes réactives, APIs haute performance et infrastructure robuste.",
      description: "Développement complet d'applications web & mobiles typées, microservices modulaires, persistance fiable et pipelines d'automatisation.",
      technologies: ["TypeScript", "Next.js", "Angular", "FastAPI / Python", "Node.js", "PostgreSQL", "Docker", "GitHub Actions"],
      keyOutputs: ["Applications Web & Mobile", "APIs Haute Performance", "Pipelines CI/CD"],
      icon: "Server"
    },
    {
      id: "ai-architecture",
      number: "03",
      title: "IA & Architecture",
      tagline: "Pipelines d'apprentissage automatique appliqués et architectures distribuées résilientes.",
      description: "Conception de systèmes offline-first avec synchronisation bidirectionnelle, intégration de modèles ML supervisés et requêtes optimisées.",
      technologies: ["Scikit-learn", "XGBoost", "Systèmes Offline-First", "Microservices", "Synchronisation Distribuée", "Optimisation SQL"],
      keyOutputs: ["Modèles ML Cliniques & Métier", "Persistance Edge & Sync", "Topologies Résilientes"],
      icon: "Brain"
    }
  ],
  featuredProjects: [
    // ─────────────── TIER 1: SELECTED WORK (Flagship & AI) ───────────────
    {
      id: "bacterial-resistance-ai",
      slug: "bacterial-resistance-ai",
      title: "AI Bacterial Resistance Prediction",
      badge: "Projet Signature IA",
      projectTier: "flagship",
      isSignature: true,
      keyTech: "FastAPI + Scikit-learn",
      screenshotAlt: "Interface de prédiction d'antibiorésistance et seuils cliniques EUCAST",
      // [TODO: fournir capture d'écran desktop 16:9 pour AI Bacterial Resistance Prediction ou mockup anonymisé Figma]
      metricLine: "< 120ms — Latence d'inférence en temps réel & validation EUCAST",
      role: "Lead Full-Stack & ML Architect",
      shortSubtitle: "Plateforme d'aide à la décision clinique prédisant la résistance bactérienne via ML et seuils EUCAST.",
      category: "ai-ml",
      categoryLabel: "AI / Healthcare / Machine Learning",
      summary: "Une plateforme médicale intelligente prédisant les profils d'antibiorésistance par l'analyse de données génomiques et phénotypiques, avec simulation d'antibiogramme et validation des seuils cliniques EUCAST.",
      description: "La résistance aux antimicrobiens (RAM) constitue une menace critique pour la santé publique mondiale. Les tests phénotypiques traditionnels en laboratoire requièrent 48 à 72 heures de culture, obligeant les médecins à administrer des traitements empiriques à large spectre. Cette plateforme exploite des modèles de Machine Learning supervisé entraînés sur des mutations génomiques et des données phénotypiques (CMI) pour fournir une prédiction de résistance instantanée, visualiser les zones d'inhibition par rapport aux seuils EUCAST et générer des rapports cliniques complets.",
      problem: "L'obtention des résultats d'antibiogrammes phénotypiques nécessite plusieurs jours d'incubation, provoquant une latence thérapeutique dangereuse dans les infections sévères. Les biologistes et cliniciens ont besoin de prédictions rapides, explicables et confrontées aux référentiels médicaux.",
      solution: "Développement d'un outil d'intelligence clinique complet reposant sur un backend Python FastAPI exploitant un ensemble de modèles (Random Forest, SVM, XGBoost). Interface Angular générant des visualisations radiales des zones d'inhibition, confrontant les mesures aux seuils officiels EUCAST et exportant des dossiers cliniques en PDF et CSV.",
      architectureHighlights: [
        "Pipeline ML multi-modèle avec prétraitement des mutations génomiques et des données phénotypiques CMI.",
        "Moteur de règles EUCAST vérifiant dynamiquement les seuils cliniques européens et internationaux.",
        "Endpoints asynchrones FastAPI haute performance pour l'inférence temps réel et le traitement par lots.",
        "Visualisateur canvas interactif des zones d'inhibition bactérienne avec code couleur de résistance.",
        "Génération automatisée de dossiers d'analyse clinique au format PDF et CSV avec traçabilité complète."
      ],
      keyFeatures: [
        "Classification de résistance bactérienne (Sensible, Intermédiaire, Résistant)",
        "Ingestion et normalisation des données génomiques et phénotypiques",
        "Simulateur interactif d'antibiogramme avec cartographie visuelle des zones d'inhibition",
        "Comparaison automatisée avec les seuils cliniques officiels EUCAST",
        "Export en 1 clic de rapports de validation clinique (PDF / CSV)",
        "Interface d'administration de laboratoire avec journal d'audit",
        "Conteneurisation complète via Docker & Docker Compose"
      ],
      technologies: [
        "FastAPI",
        "Python",
        "Angular",
        "TypeScript",
        "Scikit-learn",
        "Random Forest",
        "SVM",
        "XGBoost",
        "PostgreSQL",
        "Docker"
      ],
      metrics: [
        { label: "Latence Inférence", value: "< 120ms" },
        { label: "Modèles ML", value: "3 Ensembles" },
        { label: "Normes", value: "EUCAST Ready" },
        { label: "Architecture", value: "REST Async + ML" }
      ],
      systemSchema: {
        title: "Pipeline de Prédiction RAM & Décision Clinique",
        flow: "Ingestion Labo → Moteur ML Inférence → Validation EUCAST → UI Angular",
        nodes: [
          { id: "1", label: "Données Labo", sub: "Génomique / Phénotypique", type: "client" },
          { id: "2", label: "FastAPI Gateway", sub: "REST Async & Validation", type: "gateway" },
          { id: "3", label: "Pipeline Features", sub: "Normalisation & Encodage", type: "service" },
          { id: "4", label: "Ensemble ML", sub: "RF · SVM · XGBoost", type: "ai" },
          { id: "5", label: "Moteur EUCAST", sub: "Vérification des Seuils", type: "service" },
          { id: "6", label: "PostgreSQL", sub: "Historique & Dossiers", type: "db" }
        ]
      },
      githubUrl: "https://github.com/jkeminsi/bacterial-resistance-ai",
      liveDemoUrl: "#"
    },
    {
      id: "afos-sports-platform",
      slug: "afos-sports-platform",
      title: "AFOS Sports Ecosystem",
      badge: "Architecture Distribuée",
      projectTier: "flagship",
      isSignature: false,
      keyTech: "Offline-First + SQLite",
      screenshotAlt: "Tableau de bord de télémétrie sportive offline-first AFOS",
      // [TODO: fournir capture d'écran desktop 16:9 pour AFOS Sports Ecosystem ou mockup anonymisé Figma]
      metricLine: "0% perte de données — Synchronisation locale SQLite vers Cloud",
      role: "Systems & Distributed Architect",
      shortSubtitle: "Écosystème sportif connecté avec télémétrie offline-first, synchronisation distribuée et gestion de club.",
      category: "enterprise-architecture",
      categoryLabel: "Sports / Distributed Systems",
      summary: "Une plateforme complète de performance sportive bâtie sur une architecture offline-first pour capturer les données GPS, la télémétrie biométrique et les évaluations tactiques même en absence de réseau.",
      description: "Les complexes sportifs, terrains d'entraînement et stades souffrent régulièrement d'une connectivité réseau instable ou inexistante. AFOS a été conçu avec une architecture distribuée offline-first : les appareils de bord de terrain et applications mobiles enregistrent la télémétrie GPS haute fréquence et les évaluations de match dans des bases SQLite locales. Dès qu'une connexion est rétablie, un moteur de synchronisation asynchrone opère une réconciliation bidirectionnelle avec les microservices cloud.",
      problem: "Les entraîneurs et staffs techniques ont besoin de collecter des données en direct sur le terrain où la 4G/5G ou le Wi-Fi sont imprévisibles. Une application purement SaaS cloud classique perd des données lors des déconnexions.",
      solution: "Conception d'une architecture edge offline-first basée sur SQLite embarqué côté client, couplée à un moteur de synchronisation événementiel avec résolution de conflits via horloges vectorielles. Backend microservices, streaming Kafka et base PostgreSQL pour l'analyse globale.",
      architectureHighlights: [
        "Architecture offline-first avec persistance locale SQLite et réconciliation par horloges vectorielles.",
        "File d'attente de synchronisation différentielle bidirectionnelle avec reprise automatique sur incident.",
        "Pipeline d'ingestion télémétrique supportant les coordonnées GPS, la fréquence cardiaque et la charge d'entraînement.",
        "Écosystème multi-rôles pour Athlètes, Entraîneurs, Dirigeants de club et Recruteurs.",
        "Intégration matérielle NFC pour l'émargement instantané et l'appairage d'équipements."
      ],
      keyFeatures: [
        "Enregistrement de séances et matchs en mode 100% hors ligne",
        "Suivi GPS et télémétrie d'effort athlétique en direct",
        "Application tablette coach pour annotations tactiques et évaluations",
        "Portail de recrutement et de détection avec filtrage multicritères",
        "Gestion des contrats, licences sportives et suivis médicaux de club",
        "Intégration NFC pour le pointage rapide des joueurs",
        "Synchronisation cloud automatique avec résolution des conflits"
      ],
      technologies: [
        "Offline-first",
        "Angular",
        "Ionic",
        "FastAPI / Node.js",
        "SQLite",
        "PostgreSQL",
        "Kafka / Event-Driven",
        "Docker",
        "AWS"
      ],
      metrics: [
        { label: "Résilience Offline", value: "0% Perte de Données" },
        { label: "Latence Sync", value: "Sub-seconde" },
        { label: "Base Client", value: "SQLite Embarqué" },
        { label: "Cible", value: "Pro & Académies" }
      ],
      systemSchema: {
        title: "Architecture de Synchronisation Distribuée Offline-First",
        flow: "App Terrain (SQLite) → File Outbox → Moteur Sync → Microservices Cloud → PostgreSQL",
        nodes: [
          { id: "1", label: "App Coach Terrain", sub: "Client Ionic / Angular", type: "client" },
          { id: "2", label: "SQLite Local", sub: "Persistance Zéro-Latence", type: "db" },
          { id: "3", label: "Moteur Sync", sub: "File Delta & Horloges Vectorielles", type: "service" },
          { id: "4", label: "API Gateway", sub: "Auth Token & Routage", type: "gateway" },
          { id: "5", label: "Bus d'Événements (Kafka)", sub: "File de Messages Distribuée", type: "event" },
          { id: "6", label: "PostgreSQL Cloud", sub: "Entrepôt de Données", type: "db" }
        ]
      },
      githubUrl: "https://github.com/jkeminsi/afos-platform",
      liveDemoUrl: "#"
    },
    {
      id: "mesdoh-fintech",
      slug: "mesdoh-fintech",
      title: "MesDoh",
      badge: "FinTech & Business",
      projectTier: "flagship",
      isSignature: false,
      keyTech: "FastAPI + PostgreSQL ACID",
      screenshotAlt: "Terminal point de vente POS et grand livre comptable MesDoh",
      // [TODO: fournir capture d'écran desktop 16:9 pour MesDoh ou mockup anonymisé Figma]
      metricLine: "< 2s — Temps moyen d'encaissement POS avec intégrité ACID",
      role: "Full-Stack Engineer & Database Architect",
      shortSubtitle: "Écosystème financier digital combinant POS, facturation automatisée, gestion de stock et transactions.",
      category: "fintech",
      categoryLabel: "FinTech / Business",
      summary: "Une plateforme unifiée de gestion financière et commerciale intégrant encaissement point de vente (POS), grand livre en partie double, suivi des stocks et génération dynamique de factures PDF.",
      description: "MesDoh centralise les opérations de vente au détail, de distribution et de services au sein d'un moteur financier sécurisé. La plateforme combine caisse enregistreuse tactile, déduction automatique des stocks en temps réel, émission instantanée de factures et bilans financiers conformes.",
      problem: "Les PME font face à des pertes d'efficacité et à des erreurs de caisse dues à la fragmentation entre logiciel de point de vente, tableurs de stock et outils de facturation manuels.",
      solution: "Développement d'une suite financière garantissant l'intégrité transactionnelle ACID, des écritures comptables automatiques en partie double, un terminal POS ultra-réactif et un générateur serveur de documents PDF certifiés.",
      architectureHighlights: [
        "Transactions relationnelles conformes ACID assurant la stricte cohérence du grand livre comptable.",
        "Terminal de caisse POS optimisé pour les lecteurs de codes-barres et raccourcis clavier.",
        "Gestion multi-magasins et alertes automatiques de réapprovisionnement de stock.",
        "Moteur de génération dynamique de documents PDF certifiés pour factures et bons de livraison."
      ],
      keyFeatures: [
        "Terminal POS tactile avec impression de reçus et envoi digital",
        "Gestion multi-devises et passerelle de paiement sécurisée",
        "Suivi de stock temps réel avec seuils d'alerte configurables",
        "Comptes clients, suivi des créances et rappels automatiques",
        "Génération instantanée de factures, devis et états financiers en PDF",
        "Gestion granulaire des rôles (Caissier, Gérant, Comptable, Administrateur)"
      ],
      technologies: [
        "Angular",
        "FastAPI / Node.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "PDF Generation",
        "Docker"
      ],
      metrics: [
        { label: "Intégrité Données", value: "Garantie ACID" },
        { label: "Encaissement POS", value: "< 2s Moyen" },
        { label: "Moteur Doc", value: "PDF Dynamique" },
        { label: "Sécurité", value: "RBAC & Audit Trail" }
      ],
      githubUrl: "https://github.com/jkeminsi/mesdoh",
      liveDemoUrl: "#"
    },

    // ─────────────── TIER 2: CLIENT & PRODUCTION WORK (Live Published) ───────────────
    {
      id: "citis-formation",
      slug: "citis-formation",
      title: "CitisFormation / PowerBache",
      badge: "En Ligne · Production",
      projectTier: "production",
      isLiveProduction: true,
      liveUrl: "https://citisformation.com/fr",
      keyTech: "Next.js Multilingue",
      screenshotUrl: "/projects/citis-formation.png",
      screenshotAlt: "Plateforme web et catalogue de formation CitisFormation",
      // [TODO: fournir capture d'écran desktop 16:9 haute résolution pour CitisFormation si mise à jour]
      // [TODO: métrique chiffrée d'usage/trafic précise à fournir ultérieurement]
      metricLine: "100% bilingue — Catalogue dynamique et flux d'admissions en ligne",
      role: "Développement Web & Expérience Multilingue",
      shortSubtitle: "Plateforme web institutionnelle et catalogue de formations professionnelles avec parcours multilingue.",
      category: "edtech",
      categoryLabel: "Education / Web Platform",
      summary: "Plateforme web institutionnelle et catalogue de formations professionnelles, avec parcours de formation, spécialités certifiantes, admissions en ligne, actualités, galerie et expérience multilingue.",
      description: "CitisFormation / PowerBache propose des parcours de formation professionnelle d'excellence. La plateforme a été conçue pour structurer l'ensemble de l'offre académique, simplifier les candidatures d'admission et offrir une navigation multilingue rapide et accessible.",
      problem: "Les centres de formation professionnelle requièrent une vitrine digitale claire pour exposer des catalogues denses de spécialités, gérer les flux de candidatures et communiquer leurs actualités.",
      solution: "Conception et déploiement d'une plateforme web moderne intégrant le catalogue dynamique des filières, un module de demande d'admission, une médiathèque et une gestion multilingue optimisée pour le référencement naturel.",
      architectureHighlights: [
        "Architecture d'information optimisée pour un catalogue dense de spécialités et de modules de cours.",
        "Gestionnaire de parcours d'admission en ligne avec formulaires de contact directs.",
        "Système multilingue fluide adapté au public international et sous-régional.",
        "Optimisation de la vitesse de chargement et des métadonnées SEO pour le référencement."
      ],
      keyFeatures: [
        "Catalogue interactif des formations et spécialités certifiantes",
        "Formulaires de candidature et d'admission en ligne",
        "Section actualités, événements et galerie médias",
        "Support multilingue (Français / Anglais)",
        "Expérience mobile fluide et responsive",
        "Déploiement en production et maintenance opérationnelle"
      ],
      technologies: [
        "Web Architecture",
        "TypeScript / JavaScript",
        "Modern UI Systems",
        "Multilingual Engine",
        "Responsive Design",
        "Cloud Hosting"
      ],
      metrics: [
        { label: "Statut", value: "En Ligne" },
        { label: "Catalogue", value: "Multi-Filières" },
        { label: "Langues", value: "Bilingue FR/EN" },
        { label: "Type", value: "Client Réel" }
      ],
      liveDemoUrl: "https://citisformation.com/fr"
    },
    {
      id: "royal-high-school-nyom",
      slug: "royal-high-school-nyom",
      title: "Royal High School Nyom",
      badge: "En Ligne · Production",
      projectTier: "production",
      isLiveProduction: true,
      liveUrl: "https://royalschoolnyom.com",
      keyTech: "Web Institutionnel",
      screenshotUrl: "/projects/royal-high-school-nyom.png",
      screenshotAlt: "Portail institutionnel bilingue Royal High School Nyom",
      // [TODO: fournir capture d'écran desktop 16:9 haute résolution pour Royal High School Nyom si mise à jour]
      // [TODO: métrique chiffrée d'inscriptions à fournir ultérieurement]
      metricLine: "Double cursus FR/EN — Portail officiel d'admission et informations familles",
      role: "Ingénierie Web & Conception Institutionnelle",
      shortSubtitle: "Site institutionnel pour une école bilingue privée à Yaoundé, avec accès aux informations parents/élèves.",
      category: "edtech",
      categoryLabel: "Education / Institutional Website",
      summary: "Site institutionnel pour un établissement scolaire bilingue privé de référence à Yaoundé, centralisant la présentation du projet éducatif, les inscriptions et les ressources pratiques.",
      description: "La Royal High School Nyom est un collège et lycée bilingue privé à Yaoundé. Le site web officiel sert de vitrine pédagogique et de portail d'information essentiel reliant la direction de l'école, le corps professoral, les parents et les élèves.",
      problem: "Les établissements scolaires bilingues d'excellence nécessitent un portail clair et rassurant pour guider les familles dans les formalités d'admission et diffuser les calendriers académiques.",
      solution: "Création d'une plateforme web institutionnelle valorisant les deux sections (anglophone et francophone), les infrastructures scolaires, les formalités d'admission et les contacts directs de l'établissement.",
      architectureHighlights: [
        "Présentation claire du double cursus bilingue anglophone et francophone.",
        "Architecture d'accès rapide aux informations pour les familles et élèves.",
        "Conception responsive soignée adaptée aux consultations sur smartphones.",
        "Intégration d'outils de contact et de prise de renseignement scolaire."
      ],
      keyFeatures: [
        "Présentation détaillée des cycles d'études et programmes bilingues",
        "Informations d'admissions, frais et calendrier scolaire",
        "Espace d'informations pratiques pour les parents",
        "Galerie photos des infrastructures et de la vie scolaire",
        "Optimisation de la vitesse et de la compatibilité mobile",
        "Site déployé et accessible en production"
      ],
      technologies: [
        "Web Development",
        "Responsive CSS",
        "Institutional CMS Architecture",
        "SEO Optimization",
        "Cloud Deployment"
      ],
      metrics: [
        { label: "Statut", value: "En Ligne" },
        { label: "Section", value: "Bilingue Privée" },
        { label: "Localisation", value: "Yaoundé" },
        { label: "Type", value: "Client Réel" }
      ],
      liveDemoUrl: "https://royalschoolnyom.com"
    },
    {
      id: "gestplus-platform",
      slug: "gestplus-platform",
      title: "GestPlus",
      badge: "En Ligne · Production",
      projectTier: "production",
      isLiveProduction: true,
      liveUrl: "https://gestplus-sn.com",
      keyTech: "Solutions B2B",
      screenshotUrl: "/projects/gestplus-platform.png",
      screenshotAlt: "Plateforme de gestion d'entreprise GestPlus",
      // [TODO: fournir capture d'écran desktop 16:9 haute résolution pour GestPlus si mise à jour]
      // [TODO: métrique chiffrée de conversion à fournir ultérieurement]
      metricLine: "Services B2B — Architecture de présentation et formulaires de devis",
      role: "Développement Web & Solutions Métier",
      shortSubtitle: "Projet web orienté gestion d'entreprise, services professionnels et solutions organisationnelles.",
      category: "business",
      categoryLabel: "Business / Web Platform",
      summary: "Plateforme web professionnelle dédiée à la présentation de solutions de gestion, de prestations d'accompagnement d'entreprise et d'outils opérationnels.",
      description: "GestPlus offre des services de gestion et des solutions professionnelles pour optimiser l'organisation des entreprises. La plateforme en ligne présente la gamme de prestations, les méthodologies de travail et facilite la prise de contact pour les audits et missions de conseil.",
      problem: "Les cabinets de gestion et prestataires de services B2B ont besoin d'une présence digitale structurée pour crédibiliser leur expertise et acquérir des mandats clients.",
      solution: "Développement d'une vitrine web épurée et professionnelle présentant les expertises métier, les modules de service et intégrant des points de conversion clairs.",
      architectureHighlights: [
        "Structure de contenu orientée proposition de valeur B2B et lisibilité métier.",
        "Interface sobre et professionnelle renforçant la crédibilité des services.",
        "Formulaires de contact qualifiés pour les demandes d'intervention d'entreprise."
      ],
      keyFeatures: [
        "Présentation structurée des solutions et services de gestion",
        "Formulaire de contact et de demande de devis",
        "Design moderne et responsive adapté à tous les écrans",
        "Optimisation technique et hébergement sécurisé"
      ],
      technologies: [
        "Full-Stack Web",
        "Tailwind CSS / Modern UI",
        "Responsive Design",
        "Business Workflows",
        "Production Deployment"
      ],
      metrics: [
        { label: "Statut", value: "En Ligne" },
        { label: "Domaine", value: "Gestion Entreprise" },
        { label: "Cible", value: "B2B Services" },
        { label: "Type", value: "Client Réel" }
      ],
      liveDemoUrl: "https://gestplus-sn.com"
    },

    // ─────────────── TIER 3: OTHER PROJECTS (Systems Lab) ───────────────
    {
      id: "pharmaproxi-health",
      slug: "pharmaproxi-health",
      title: "PharmaProxi",
      badge: "Santé & Géolocalisation",
      projectTier: "lab",
      isSignature: false,
      keyTech: "FastAPI + PostGIS",
      screenshotAlt: "Interface de recherche géolocalisée de pharmacies PharmaProxi",
      // [TODO: fournir capture d'écran desktop 16:9 pour PharmaProxi]
      metricLine: "< 80ms — Latence de recherche spatiale de pharmacies",
      role: "Full-Stack Engineer",
      shortSubtitle: "Réseau de santé digital facilitant la recherche de médicaments disponibles et l'accès aux pharmacies.",
      category: "healthtech",
      categoryLabel: "Healthcare / Geolocation",
      summary: "Une plateforme moderne de santé reliant patients et officines via la recherche géolocalisée de médicaments en stock, la réservation sécurisée et la transmission d'ordonnances.",
      description: "Trouver des médicaments spécifiques en urgence occasionne souvent des trajets inutiles d'une pharmacie à une autre. PharmaProxi apporte une solution cartographiée et temps réel permettant aux patients de localiser les officines détenant le traitement prescrit et de réserver leur ordonnance en amont.",
      problem: "Le manque de visibilité sur les stocks réels des pharmacies engendre des retards de traitement critiques et une surcharge logistique évitable pour les patients.",
      solution: "Développement d'une application Next.js et FastAPI avec indexation spatiale PostgreSQL (PostGIS) pour le calcul de proximité kilométrique, vérification d'inventaire en direct et portail dédié aux pharmaciens.",
      architectureHighlights: [
        "Requêtes géospatiales optimisées avec PostgreSQL/PostGIS pour recherche par rayon kilométrique.",
        "Backend FastAPI assurant des temps de réponse sous les 100ms sur le catalogue de médicaments.",
        "Interface Next.js pensée mobile-first pour une utilisation fluide en situation d'urgence.",
        "Espace pharmacien dédié pour validation rapide des ordonnances et mise à jour des stocks."
      ],
      keyFeatures: [
        "Recherche géolocalisée des pharmacies ouvertes et de garde",
        "Catalogue de médicaments et vérification des stocks en direct",
        "Téléchargement d'ordonnance et réservation sécurisée",
        "Tableau de bord de gestion pour les pharmaciens",
        "Itinéraire direct vers la pharmacie disposant du médicament"
      ],
      technologies: [
        "Next.js",
        "React",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Tailwind CSS",
        "APIs REST",
        "Docker"
      ],
      metrics: [
        { label: "Latence Recherche", value: "< 80ms" },
        { label: "Indexation Spatiale", value: "Rayon PostGIS" },
        { label: "Ergonomie", value: "Mobile First" },
        { label: "Sécurité", value: "Données de Santé" }
      ],
      githubUrl: "https://github.com/jkeminsi/pharmaproxi",
      liveDemoUrl: "#"
    },
    {
      id: "education-management",
      slug: "education-management",
      title: "Education Management Platform",
      badge: "Systèmes Académiques",
      projectTier: "lab",
      isSignature: false,
      keyTech: "Angular + FullCalendar",
      screenshotAlt: "Gestionnaire académique et planificateur d'emplois du temps",
      // [TODO: fournir capture d'écran desktop 16:9 pour Education Management Platform]
      metricLine: "0 collision — Moteur de planification et calcul de moyennes pondérées",
      role: "Full-Stack Software Engineer",
      shortSubtitle: "Système de gestion académique gérant les coefficients de notes, emplois du temps et dossiers scolaires.",
      category: "edtech",
      categoryLabel: "EdTech / Academic Systems",
      summary: "Une plateforme académique d'envergure conçue pour les établissements scolaires et universitaires, gérant les pondérations complexes de matières, les emplois du temps interactifs et les bulletins officiels.",
      description: "Les établissements d'enseignement nécessitent des outils administratifs spécialisés capables de traiter des règles de notation multi-filières, des coefficients variables, des détections de conflits de salles et la génération en masse de relevés de notes conformes.",
      problem: "Les écoles dépendent souvent de tableurs disparates générant des erreurs de calcul de moyennes et des chevauchements d'horaires dans les affectations de salles.",
      solution: "Conception d'un système d'exploitation académique complet doté d'un moteur de calcul de moyennes pondérées, d'un planificateur interactif FullCalendar et de tableaux de bord de suivi pédagogique.",
      architectureHighlights: [
        "Moteur de calcul sur-mesure gérant les coefficients dynamiques et moyennes pondérées.",
        "Planificateur interactif FullCalendar avec détection automatique des collisions de salles et d'enseignants.",
        "Génération en masse de bulletins scolaires PDF avec filigranes et appréciations officielles.",
        "Portail à accès cloisonné pour Administrateurs, Professeurs, Élèves et Parents."
      ],
      keyFeatures: [
        "Configuration flexible des classes, matières et coefficients de notation",
        "Gestion interactive des emplois du temps avec intégration FullCalendar",
        "Saisie des notes, calcul automatisé des moyennes et classements",
        "Génération en un clic des relevés de notes et bulletins officiels en PDF",
        "Suivi des absences, retards et communications aux parents",
        "Tableau de bord d'analyse de cohortes pour la direction"
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "Node.js",
        "Express",
        "FullCalendar API",
        "PostgreSQL",
        "Tailwind CSS",
        "PDFMake"
      ],
      metrics: [
        { label: "Moteur de Calcul", value: "Coefficients Dynamiques" },
        { label: "Emploi du Temps", value: "Zéro Collision" },
        { label: "Export Bulletins", value: "PDF par Lots" },
        { label: "Interface", value: "FullCalendar" }
      ],
      githubUrl: "https://github.com/jkeminsi/education-management",
      liveDemoUrl: "#"
    },
    {
      id: "football-talent-platform",
      slug: "football-talent-platform",
      title: "Football & Talent Platform",
      badge: "Détection & Sport",
      projectTier: "lab",
      isSignature: false,
      keyTech: "Next.js + Media Pipeline",
      screenshotAlt: "Plateforme de détection et recrutement de talents sportifs",
      // [TODO: fournir capture d'écran desktop 16:9 pour Football & Talent Platform]
      // [TODO: métrique d'engagement ou de volumétrie vidéo à fournir ultérieurement]
      metricLine: "Multi-critères — Profils athlétiques vérifiés et flux vidéo de highlights",
      role: "Full-Stack Engineer",
      shortSubtitle: "Écosystème digital de recrutement reliant joueurs, recruteurs accrédités et clubs sportifs.",
      category: "sportstech",
      categoryLabel: "SportsTech / Recruitment",
      summary: "Une plateforme digitale à fort impact visuel reliant les jeunes talents du football aux recruteurs, clubs et fédérations grâce à des profils sportifs certifiés et un flux vidéo de highlights.",
      description: "De nombreux talents sportifs émergents manquent d'exposition structurée auprès des recruteurs professionnels. Cette plateforme offre une vitrine technologique complète où les athlètes créent leur portfolio certifié, diffusent leurs vidéos de match, enregistrent leurs données biométriques et interagissent directement avec des recruteurs accrédités.",
      problem: "Le vivier de talents sportifs locaux souffre d'un manque de données athlétiques vérifiées et de canaux d'accès directs aux essais en club professionnel.",
      solution: "Développement d'une plateforme moderne intégrant profils certifiés, streaming vidéo compressé de highlights, fiches de match, réservation de terrains et vérification de licences sportives officielles.",
      architectureHighlights: [
        "Pipeline multimédia optimisé pour l'encodage et la diffusion fluide de résumés vidéo.",
        "Moteur de recherche pour recruteurs avec filtrage avancé (poste, âge, métriques physiques, notation tactique).",
        "Processus d'accréditation sécurisé et vérification des licences sportives fédérales.",
        "Gestionnaire d'événements et de détections avec calendriers interactifs."
      ],
      keyFeatures: [
        "Portfolio athlète certifié avec cartes de chaleur, mensurations et vidéos",
        "Moteur de recherche pour recruteurs avec listes de surveillance personnalisées",
        "Messagerie de recrutement et invitations officielles aux détections",
        "Contrôle de conformité et gestion des licences sportives",
        "Module de réservation de terrains et de planification de rencontres",
        "Fil d'actualité média et statistiques de performance"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Tailwind CSS",
        "Pipeline Média Cloud",
        "Docker"
      ],
      metrics: [
        { label: "Filtres Recruteurs", value: "Multicritères" },
        { label: "Pipeline Vidéo", value: "Streaming Adaptatif" },
        { label: "Détection", value: "Profils Certifiés" },
        { label: "Design", value: "UI Moderne & Premium" }
      ],
      githubUrl: "https://github.com/jkeminsi/football-talent-platform",
      liveDemoUrl: "#"
    }
  ],
  pipelineSteps: [
    {
      step: "01",
      title: "Comprendre",
      tagline: "Explorer l'espace du problème et cerner les contraintes techniques.",
      focus: "Besoins métier · Problèmes utilisateurs · Contraintes produit",
      deliverables: [
        "Cadrage du domaine & alignement avec les objectifs stratégiques",
        "Cartographie des parcours utilisateurs et des exigences fonctionnelles",
        "Identification des contraintes critiques (latence, mode hors ligne, conformité)"
      ]
    },
    {
      step: "02",
      title: "Concevoir",
      tagline: "Structurer les flux d'information et bâtir le design system.",
      focus: "Flux utilisateurs · Architecture de l'information · Systèmes UX/UI",
      deliverables: [
        "Design tokens accessibles et contrastés pour interfaces techniques",
        "Wireframes interactifs et prototypes cliquables",
        "Modélisation des états asynchrones et des machines à états UX"
      ]
    },
    {
      step: "03",
      title: "Architecturer",
      tagline: "Définir la topologie système, les contrats d'API et les modèles de données.",
      focus: "Modèles de données · APIs · Architecture système · Infrastructure",
      deliverables: [
        "Schémas de bases relationnelles normalisés et stratégies d'indexation",
        "Contrats d'API RESTful, spécifications OpenAPI & patterns d'authentification",
        "Modèles de synchronisation offline, bus d'événements et topologie Docker"
      ]
    },
    {
      step: "04",
      title: "Développer",
      tagline: "Implémentation rigoureuse, typée et modulaire sur l'ensemble de la stack.",
      focus: "Frontend · Backend · Intégrations · Modèles d'IA",
      deliverables: [
        "Frontend modulaire et performant avec TypeScript, Angular/Next.js et Tailwind",
        "Services backend haute cadence en FastAPI / Node.js / Symfony",
        "Ingénierie des features ML, entraînement des modèles & APIs d'inférence"
      ]
    },
    {
      step: "05",
      title: "Déployer",
      tagline: "Automatiser la livraison, conteneuriser et assurer l'observabilité.",
      focus: "Tests · Docker · Déploiement · Monitoring",
      deliverables: [
        "Suites de tests unitaires et d'intégration avec intégration continue CI/CD",
        "Conteneurisation Docker de production et provisioning cloud",
        "Observabilité, suivi de performance et boucle d'amélioration continue"
      ]
    }
  ],
  architectureLabItems: [
    {
      id: "offline-first",
      title: "Architecture Distribuée Offline-First",
      badge: "Systèmes Edge & Distribués",
      summary: "Une architecture garantissant zéro perte de données sur le terrain avec connectivité instable, exploitant SQLite embarqué, files d'attente transactionnelles, horloges vectorielles et réconciliation cloud asynchrone.",
      diagramTitle: "Flux de Réconciliation de Données Edge vers Cloud",
      flowSteps: [
        {
          number: "01",
          label: "Mutation sur le Client Edge",
          description: "L'utilisateur interagit avec l'application. Les écritures se font immédiatement dans la base SQLite locale embarquée avec un temps de réponse nul.",
          tech: "Ionic / Angular + SQLite"
        },
        {
          number: "02",
          label: "File d'Attente Outbox",
          description: "Une file d'attente locale immuable enregistre les événements transactionnels avec horodatage et identifiants d'horloges vectorielles.",
          tech: "Magasin d'Événements Local"
        },
        {
          number: "03",
          label: "Moniteur de Réseau",
          description: "Un écouteur de connectivité en tâche de fond détecte le retour du réseau et déclenche la synchronisation différentielle avec backoff exponentiel.",
          tech: "Network Service Worker"
        },
        {
          number: "04",
          label: "Résolution de Conflits",
          description: "Le moteur de réconciliation côté serveur analyse l'arbre de révision, résout les modifications concurrentes selon les règles métier et valide l'état.",
          tech: "Moteur FastAPI / Node"
        },
        {
          number: "05",
          label: "Base de Données Centrale",
          description: "L'état réconcilié est écrit dans la base PostgreSQL cloud principale et propagé aux autres clients abonnés.",
          tech: "PostgreSQL + Redis"
        }
      ],
      keyTakeaways: [
        "100% de disponibilité opérationnelle même sans connexion internet",
        "Aucun blocage ou freeze de l'interface utilisateur sur les requêtes réseau",
        "Résolution déterministe des conflits via horloges vectorielles et règles métier"
      ],
      stack: ["SQLite", "FastAPI", "Node.js", "PostgreSQL", "Kafka / Event Bus", "Docker"]
    },
    {
      id: "ai-prediction-pipeline",
      title: "Pipeline de Prédiction IA Génomique & Phénotypique",
      badge: "Machine Learning & Systèmes Cliniques",
      summary: "Un pipeline d'apprentissage automatique clinique de bout en bout transformant les données de variants génomiques et les concentrations minimales d'inhibition en prédictions d'antibiorésistance avec validation EUCAST.",
      diagramTitle: "Pipeline d'Inférence ML pour l'Antibiorésistance",
      flowSteps: [
        {
          number: "01",
          label: "Ingestion Clinique",
          description: "Les biologistes déposent des données brutes de mutations ou des mesures phénotypiques via l'interface ou des endpoints API sécurisés.",
          tech: "Ingestion FastAPI Async"
        },
        {
          number: "02",
          label: "Feature Engineering",
          description: "Nettoyage, encodage one-hot des mutations génétiques, mise à l'échelle numérique et préparation des matrices d'entrée.",
          tech: "Pandas / Scikit-learn"
        },
        {
          number: "03",
          label: "Ensemble de Modèles ML",
          description: "Les vecteurs de caractéristiques sont traités en parallèle par des classifieurs Random Forest, SVM et XGBoost avec vote pondéré.",
          tech: "Scikit-learn + XGBoost"
        },
        {
          number: "04",
          label: "Validation Règles EUCAST",
          description: "Les prédictions sont confrontées aux référentiels officiels de l'European Committee on Antimicrobial Susceptibility Testing.",
          tech: "Moteur de Règles EUCAST"
        },
        {
          number: "05",
          label: "Visualisation & Export",
          description: "Génération visuelle des zones d'inhibition radiales dans l'interface Angular et compilation du rapport médical PDF.",
          tech: "Angular Canvas + Moteur PDF"
        }
      ],
      keyTakeaways: [
        "Réduit l'estimation diagnostique de 48h à moins d'une seconde",
        "L'ensemble multi-modèle assure un score de confiance et une grande explicabilité",
        "Pleine conformité avec les référentiels internationaux de santé"
      ],
      stack: ["Python", "FastAPI", "Scikit-learn", "XGBoost", "Angular", "PostgreSQL"]
    },
    {
      id: "saas-architecture",
      title: "Architecture SaaS Multi-Tenant Modulaire",
      badge: "Cloud & Microservices",
      summary: "Une topologie cloud multi-tenant sécurisée et élastique conçue pour les plateformes d'entreprise à fort trafic, avec routage via API Gateway et workers asynchrones.",
      diagramTitle: "Topologie Microservices Entreprise",
      flowSteps: [
        {
          number: "01",
          label: "Edge Gateway & CDN",
          description: "Routage en périphérie pour terminaison TLS, limitation de débit (rate limiting) et mise en cache des assets statiques.",
          tech: "Edge CDN & Reverse Proxy"
        },
        {
          number: "02",
          label: "API Gateway & Sécurité",
          description: "Point d'entrée unifié assurant la vérification des jetons JWT, les permissions RBAC et le routage vers les microservices métier.",
          tech: "FastAPI / Express Gateway"
        },
        {
          number: "03",
          label: "Microservices Métier",
          description: "Services découplés traitant la logique métier (Facturation, Identité, Inventaire, Reporting) de façon autonome.",
          tech: "Microservices Dockerisés"
        },
        {
          number: "04",
          label: "Workers Asynchrones",
          description: "Les tâches lourdes (génération de PDF, imports massifs, notifications) sont déléguées à des files de messages d'arrière-plan.",
          tech: "Redis / Celery Workers"
        },
        {
          number: "05",
          label: "Persistance Polyglotte",
          description: "Données structurées sous PostgreSQL avec isolation de schémas par tenant, sessions sous Redis et médias sur stockage objet S3.",
          tech: "PostgreSQL + S3 Storage"
        }
      ],
      keyTakeaways: [
        "Modèle d'isolation par tenant garantissant la stricte confidentialité des données",
        "Scalabilité horizontale indépendante des tâches de traitement d'arrière-plan",
        "Isolation optimale des pannes entre microservices"
      ],
      stack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker Compose", "AWS"]
    }
  ],
  techCategories: [
    {
      category: "Frontend Engineering",
      description: "Interfaces utilisateur modernes, fluides, accessibles et typées.",
      items: ["Angular", "Next.js", "Ionic", "TypeScript", "Tailwind CSS", "React", "HTML5 / Modern CSS"]
    },
    {
      category: "Backend & Systèmes",
      description: "APIs RESTful performantes, moteurs de calcul et microservices.",
      items: ["Python", "FastAPI", "Symfony", "Node.js", "Express", "APIs REST", "OAuth2 / JWT"]
    },
    {
      category: "Données & Persistance",
      description: "Bases relationnelles, persistance embarquée et caches haute vitesse.",
      items: ["PostgreSQL", "MariaDB", "MongoDB", "SQLite", "Redis", "Optimisation SQL"]
    },
    {
      category: "Architecture & DevOps",
      description: "Systèmes distribués, conteneurisation et intégration continue.",
      items: ["Architecture Offline-First", "Docker", "Docker Compose", "GitHub Actions", "Microservices", "Event-Driven"]
    },
    {
      category: "Intelligence Artificielle",
      description: "Modèles d'apprentissage automatique et pipelines de décision.",
      items: ["Scikit-learn", "Random Forest", "SVM", "XGBoost", "Analytics Prédictif", "Feature Engineering"]
    }
  ]
};

export const portfolioDataEN: PortfolioDataset = {
  personalInfo: {
    name: "Christian Jordan Keminsi",
    shortName: "Christian J. Keminsi",
    title: "Full-Stack Software Engineer",
    focus: "Software Architecture · AI-Powered Products",
    tagline: "I build scalable digital products, from complex business platforms to AI-powered applications.",
    heroHeadline: {
      greeting: "Hi, I'm Christian Jordan Keminsi.",
      part1: "I build scalable",
      part1Highlight: "digital products",
      part2: "from complex systems to",
      part2Highlight: "AI applications"
    },
    heroSub: "Full-Stack Software Engineer focused on turning complex business requirements into resilient architectures, high-performance backends, and modern interfaces.",
    heroPills: ["Software Architecture", "AI & ML Integration", "Product Engineering", "Offline-First Systems"],
    bio: [
      "I'm a Full-Stack Software Engineer focused on building complete, scalable and high-impact digital products.",
      "My work goes beyond implementing interfaces. I enjoy transforming complex requirements into structured products — from system architecture and backend services to modern user interfaces and AI-powered features.",
      "Over the years, I have worked on projects across multiple domains, including financial platforms, healthcare, education, sports technology, administration systems and artificial intelligence.",
      "I work across the entire product lifecycle: Product thinking → UX/UI → Architecture → Frontend → Backend → Data → AI → Deployment.",
      "My main interest lies in solving complex problems and building systems that are both technically solid and genuinely useful."
    ],
    status: {
      available: true,
      text: "Available for opportunities",
      subtext: "Open to technical collaborations & high-impact products"
    },
    links: {
      github: "https://github.com/jkeminsi",
      linkedin: "https://www.linkedin.com/in/christian-keminsi-376479215/",
      email: "jkeminsi06@gmail.com",
      portfolio: "https://christiankeminsi.dev"
    },
    stats: [
      { label: "Core Domains", value: "5+" },
      { label: "Deployed & Lab Projects", value: "9" },
      { label: "Lifecycle Coverage", value: "0 to 1" },
      { label: "Tech Stack Mastery", value: "Full-Stack" }
    ],
    ui: {
      exploreWork: "Explore my work",
      viewGithub: "View GitHub",
      viewLive: "View Live ↗",
      inspectSystem: "Inspect System",
      available: "Available",
      quickSearch: "Quick Search",
      nav: {
        about: "About",
        work: "Work",
        expertise: "Expertise",
        pipeline: "Pipeline",
        architecture: "Architecture",
        stack: "Stack",
        contact: "Contact"
      },
      caseStudies: {
        title: "Selected Work & Engineering Projects",
        badge: "// PORTFOLIO & ARCHITECTURES",
        subtitle: "Structured across 3 distinct tiers: flagship AI & software architectures, live client platforms in production, and specialized domain systems.",
        inspectButton: "Inspect System",
        viewLiveButton: "View Live ↗",
        filterAll: "All Projects (9)",
        tier1Title: "SELECTED WORK — Flagship Architectures & AI Systems",
        tier1Subtitle: "Deep engineering architectures, clinical healthcare AI, offline-first sync engines, and financial transactional suites.",
        tier2Title: "CLIENT & PRODUCTION WORK — Live Published Platforms",
        tier2Subtitle: "Production-grade applications and platforms deployed and operating live for clients and institutions.",
        tier3Title: "OTHER PROJECTS — Specialized Systems & Lab",
        tier3Subtitle: "Domain platforms spanning spatial healthcare, academic management, and sports recruitment media.",
        lookingForSource: "Looking for full source repositories & architectural documentation?",
        lookingForSourceSub: "All core schemas, Docker Compose setups, and machine learning models are organized on GitHub.",
        exploreRepos: "Explore Repositories →"
      },
      pipeline: {
        badge: "// PRODUCT & ENGINEERING PIPELINE",
        title: "How I Build: From Ambiguity to Production",
        subtitle: "Software engineering is product creation. I operate across the entire 0-to-1 lifecycle with strict attention to architecture, data flow, and user experience.",
        stageLabel: "STAGE",
        coreDeliverables: "Core Stage Deliverables",
        strictVerification: "Strict Verification",
        prev: "← Previous",
        next: "Next:"
      },
      lab: {
        badge: "// ARCHITECTURE & ENGINEERING LAB",
        title: "Systems & Architecture Blueprints",
        subtitle: "Interactive blueprints showcasing offline-first synchronization, machine learning clinical inference pipelines, and scalable multi-tenant topologies.",
        sequenceLabel: "Step-by-Step Execution Sequence:",
        guaranteesLabel: "Architectural Guarantees & Trade-Offs Handled"
      },
      stack: {
        badge: "// CURATED TOOLING & STACK",
        title: "Selected Technical Stack",
        subtitle: "Strictly curated technologies applied in production environments, avoiding unnecessary logo clutter."
      },
      contact: {
        badge: "// GET IN TOUCH",
        titlePart1: "Let's build something ",
        titleHighlight: "meaningful.",
        subtitle: "Whether you need to architect a digital product from scratch, build a high-performance backend, or integrate practical AI features, I'm open to discussing new opportunities.",
        directEmail: "Direct Email",
        copy: "Copy",
        copied: "Copied!",
        githubProfile: "GitHub Profile",
        linkedinProfile: "LinkedIn",
        formTitle: "Send a Direct Message",
        formSubtitle: "Fastest response within 24 business hours.",
        nameLabel: "Your Name",
        namePlaceholder: "e.g. Alex Morgan",
        emailLabel: "Your Email",
        emailPlaceholder: "e.g. alex@company.com",
        msgLabel: "Project or Inquiry Details",
        msgPlaceholder: "Describe your product requirements, architecture challenges, or opportunity...",
        submitBtn: "Transmit Message",
        sentNotice: "✓ Mail client triggered. Looking forward to our conversation!"
      },
      footer: {
        rights: "All rights reserved.",
        status: "Systems Operating Normally",
        backToTop: "Back to top"
      }
    }
  },
  capabilities: [
    {
      id: "product-engineering",
      number: "01",
      title: "Product Engineering",
      tagline: "Designing complete digital products from scoping to production release.",
      description: "Holistic approach bridging business requirements, user journeys, design systems, and rapid MVP delivery.",
      technologies: ["Product Discovery", "User Journeys", "MVP Specifications", "Design Systems"],
      keyOutputs: ["Product Specs", "System Prototypes", "Scalable Foundations"],
      icon: "Boxes"
    },
    {
      id: "fullstack-engineering",
      number: "02",
      title: "Full-Stack Engineering",
      tagline: "Modern reactive interfaces, high-throughput backend APIs, and reliable infrastructure.",
      description: "End-to-end web & mobile engineering with strict TypeScript, modular microservices, resilient persistence, and CI/CD pipelines.",
      technologies: ["TypeScript", "Next.js", "Angular", "FastAPI / Python", "Node.js", "PostgreSQL", "Docker", "GitHub Actions"],
      keyOutputs: ["Web & Mobile Apps", "High-Throughput APIs", "CI/CD Pipelines"],
      icon: "Server"
    },
    {
      id: "ai-architecture",
      number: "03",
      title: "AI & Software Architecture",
      tagline: "Applied Machine Learning pipelines and resilient distributed systems.",
      description: "Designing offline-first systems with bidirectional sync, supervised ML model integration, and optimized queries.",
      technologies: ["Scikit-learn", "XGBoost", "Offline-First Systems", "Microservices", "Distributed Sync", "SQL Optimization"],
      keyOutputs: ["Clinical & Domain ML Models", "Edge Persistence & Sync", "Resilient Topologies"],
      icon: "Brain"
    }
  ],
  featuredProjects: [
    // ─────────────── TIER 1: SELECTED WORK (Flagship & AI) ───────────────
    {
      id: "bacterial-resistance-ai",
      slug: "bacterial-resistance-ai",
      title: "AI Bacterial Resistance Prediction",
      badge: "Signature AI Project",
      projectTier: "flagship",
      isSignature: true,
      keyTech: "FastAPI + Scikit-learn",
      screenshotAlt: "Clinical decision support platform predicting antimicrobial resistance and EUCAST breakpoints",
      // [TODO: provide desktop 16:9 screenshot for AI Bacterial Resistance Prediction or anonymized Figma mockup]
      metricLine: "< 120ms — Real-time inference latency & EUCAST validation",
      role: "Lead Full-Stack & ML Architect",
      shortSubtitle: "Clinical decision support platform predicting antimicrobial resistance via ML and EUCAST standards.",
      category: "ai-ml",
      categoryLabel: "AI / Healthcare / Machine Learning",
      summary: "An intelligent healthcare platform that predicts bacterial resistance profiles by analyzing genomic and phenotypic datasets, featuring real-time antibiogram simulation and EUCAST breakpoint validation.",
      description: "Antimicrobial resistance (AMR) represents one of the greatest threats to global public health. Traditional phenotypic lab culture testing can take 48 to 72 hours, forcing physicians to rely on broad-spectrum empiric treatments. This platform leverages supervised machine learning models trained on genomic markers and phenotypic minimum inhibitory concentrations (MIC) to provide instant clinical resistance predictions, visual inhibition zone comparisons against EUCAST standards, and automated diagnostic reports.",
      problem: "Phenotypic antibiogram results require days of bacterial cultivation, creating dangerous treatment latency in critical infections. Clinicians need rapid, accurate, and explainable computational predictions coupled with clinical standard thresholds.",
      solution: "Engineered a full-stack clinical intelligence tool powered by a FastAPI Python backend utilizing an ensemble of Random Forest, Support Vector Machines (SVM), and XGBoost models. Built an Angular frontend that renders dynamic radial inhibition zones, compares MICs against official EUCAST guidelines, and exports compliant PDF and CSV clinical dossiers.",
      architectureHighlights: [
        "Multi-model ensemble ML pipeline with feature preprocessing for both genomic mutations and phenotypic MIC data.",
        "Dynamic EUCAST rules engine verifying clinical breakpoints for European and international antimicrobial standards.",
        "High-performance FastAPI async endpoints for real-time inference and batch lab processing.",
        "Interactive radial canvas visualizer for bacterial inhibition zones with color-coded resistance grading.",
        "Automated clinical dossier generation in PDF and CSV format with complete audit history."
      ],
      keyFeatures: [
        "Bacterial resistance classification (Sensitive, Intermediate, Resistant)",
        "Genotypic and phenotypic data ingestion & normalization",
        "Interactive Antibiogram simulator with visual inhibition zone mapping",
        "Automated comparison with official EUCAST clinical breakpoints",
        "One-click export of clinical validation reports (PDF / CSV)",
        "Role-based laboratory administration & audit trail",
        "Containerized deployment via Docker & Docker Compose"
      ],
      technologies: [
        "FastAPI",
        "Python",
        "Angular",
        "TypeScript",
        "Scikit-learn",
        "Random Forest",
        "SVM",
        "XGBoost",
        "PostgreSQL",
        "Docker"
      ],
      metrics: [
        { label: "Inference Latency", value: "< 120ms" },
        { label: "ML Classifiers", value: "3 Ensembles" },
        { label: "Standards", value: "EUCAST Ready" },
        { label: "Architecture", value: "Async REST + ML" }
      ],
      systemSchema: {
        title: "AMR Prediction & Clinical Decision Pipeline",
        flow: "Lab Ingestion → ML Inference Engine → EUCAST Validation → Angular UI",
        nodes: [
          { id: "1", label: "Lab Data Input", sub: "Genomic / Phenotypic Data", type: "client" },
          { id: "2", label: "FastAPI Gateway", sub: "Async REST & Validation", type: "gateway" },
          { id: "3", label: "Feature Pipeline", sub: "Normalization & Encoding", type: "service" },
          { id: "4", label: "ML Ensemble", sub: "RF · SVM · XGBoost", type: "ai" },
          { id: "5", label: "EUCAST Engine", sub: "Breakpoint Verification", type: "service" },
          { id: "6", label: "PostgreSQL", sub: "Lab History & Dossiers", type: "db" }
        ]
      },
      githubUrl: "https://github.com/jkeminsi/bacterial-resistance-ai",
      liveDemoUrl: "#"
    },
    {
      id: "afos-sports-platform",
      slug: "afos-sports-platform",
      title: "AFOS Sports Ecosystem",
      badge: "Distributed Architecture",
      projectTier: "flagship",
      isSignature: false,
      keyTech: "Offline-First + SQLite",
      screenshotAlt: "AFOS offline-first pitch telemetry & scouting dashboard",
      // [TODO: provide desktop 16:9 screenshot for AFOS Sports Ecosystem or anonymized Figma mockup]
      metricLine: "100% Zero-loss — Local SQLite to Cloud synchronization",
      role: "Systems & Distributed Architect",
      shortSubtitle: "Connected sports ecosystem with offline-first telemetry, distributed sync, and club management.",
      category: "enterprise-architecture",
      categoryLabel: "Sports / Distributed Systems",
      summary: "A comprehensive sports performance platform built with an offline-first architecture to capture GPS telemetry, biometric data, coaching feedback, and scouting workflows even in remote field conditions.",
      description: "Athletic facilities, training camps, and sports arenas frequently experience intermittent or absent network connectivity. AFOS was engineered with an offline-first distributed architecture: local edge devices and mobile apps record high-frequency GPS tracking, biometric telemetry, and match ratings into embedded SQLite stores. When a network connection is detected, an event-driven synchronization engine handles bidirectional reconciliation with cloud microservices, preventing data collision.",
      problem: "Coaches and athletic staff need real-time data capture on the pitch where 4G/5G or Wi-Fi is unreliable. Traditional cloud-only SaaS apps fail or lose telemetry under intermittent connectivity.",
      solution: "Designed an offline-first edge architecture utilizing local embedded SQLite storage on client devices paired with an event-driven sync engine. Backed by cloud microservices, PostgreSQL, and event streaming to support athlete tracking, NFC check-in, scouting dossiers, and club administration.",
      architectureHighlights: [
        "Offline-first architecture with local SQLite persistence and vector clock conflict resolution.",
        "Bidirectional delta synchronization queue with automatic retry, backoff, and idempotent endpoints.",
        "Telemetry ingestion pipeline supporting GPS coordinates, heart rate zones, and physical workload metrics.",
        "Multi-role ecosystem for Athletes, Coaches, Club Directors, and Scouts.",
        "NFC tap-in hardware integration for attendance and equipment tracking."
      ],
      keyFeatures: [
        "Offline-first match & training session recording",
        "Real-time GPS tracking & athletic workload telemetry",
        "Coach tablet app for tactical notes and live player evaluation",
        "Scouting & recruitment portal with benchmark filtering",
        "Club asset, contract, and medical clearance management",
        "NFC integration for instant player check-in and hardware pairing",
        "Automated cloud synchronization with conflict resolution"
      ],
      technologies: [
        "Offline-first",
        "Angular",
        "Ionic",
        "FastAPI / Node.js",
        "SQLite",
        "PostgreSQL",
        "Kafka / Event-Driven",
        "Docker",
        "AWS"
      ],
      metrics: [
        { label: "Offline Resilience", value: "100% Zero-Loss" },
        { label: "Sync Latency", value: "Sub-second" },
        { label: "Client DB", value: "Embedded SQLite" },
        { label: "Target Ecosystem", value: "Pro & Grassroots" }
      ],
      systemSchema: {
        title: "Offline-First Distributed Sync Architecture",
        flow: "Pitch Device (SQLite) → Local Queue → Sync Engine → Cloud Microservices → PostgreSQL",
        nodes: [
          { id: "1", label: "Coach Pitch App", sub: "Ionic / Angular Client", type: "client" },
          { id: "2", label: "Local SQLite DB", sub: "Zero-Latency Persistence", type: "db" },
          { id: "3", label: "Sync Engine", sub: "Delta Queue & Vector Clocks", type: "service" },
          { id: "4", label: "API Gateway", sub: "Token Auth & Routing", type: "gateway" },
          { id: "5", label: "Event Bus (Kafka)", sub: "Distributed Message Queue", type: "event" },
          { id: "6", label: "Cloud PostgreSQL", sub: "Enterprise Data Lake", type: "db" }
        ]
      },
      githubUrl: "https://github.com/jkeminsi/afos-platform",
      liveDemoUrl: "#"
    },
    {
      id: "mesdoh-fintech",
      slug: "mesdoh-fintech",
      title: "MesDoh",
      badge: "FinTech & Business Suite",
      projectTier: "flagship",
      isSignature: false,
      keyTech: "FastAPI + PostgreSQL ACID",
      screenshotAlt: "MesDoh point of sale POS terminal and accounting ledger",
      // [TODO: provide desktop 16:9 screenshot for MesDoh or anonymized Figma mockup]
      metricLine: "< 2s — Average POS transaction latency with ACID compliance",
      role: "Full-Stack Engineer & Database Architect",
      shortSubtitle: "Digital financial ecosystem combining POS, automated billing, multi-store stock, and transactions.",
      category: "fintech",
      categoryLabel: "FinTech / Business",
      summary: "An integrated business and financial management platform featuring real-time POS processing, double-entry transaction ledgers, inventory tracking, and dynamic PDF invoice generation.",
      description: "MesDoh streamlines retail, service, and wholesale business operations into a unified financial hub. It combines point-of-sale checkout with real-time stock deductions, automated invoice generation, customer accounts, and financial statement exports.",
      problem: "Small and medium enterprises suffer from manual reconciliations, fragmented tools between POS and accounting, and slow document generation.",
      solution: "Engineered a robust financial management suite with transactional integrity, automated double-entry accounting records, low-latency POS interface, and server-side PDF generation for invoices, receipts, and tax summaries.",
      architectureHighlights: [
        "ACID-compliant relational transactions ensuring accurate double-entry ledger bookkeeping.",
        "High-speed POS checkout optimized for barcode scanners and keyboard shortcuts.",
        "Multi-location inventory tracking with automatic reorder alert triggers.",
        "High-fidelity server-side PDF document generation for branded invoices and delivery notes."
      ],
      keyFeatures: [
        "Unified POS terminal with instant receipt printing & digital sharing",
        "Multi-currency transaction handling and payment gateway integration",
        "Real-time stock management with low-inventory automated alerts",
        "Customer credit tracking, payment terms, and automated reminders",
        "Instant PDF generation for invoices, quotes, and financial statements",
        "Multi-role user permissions (Cashier, Manager, Accountant, Owner)"
      ],
      technologies: [
        "Angular",
        "FastAPI / Node.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "PDF Generation",
        "Docker"
      ],
      metrics: [
        { label: "Transaction Integrity", value: "ACID Guaranteed" },
        { label: "POS Checkout", value: "< 2s Avg" },
        { label: "Document Engine", value: "PDF Dynamic Gen" },
        { label: "Security", value: "RBAC & Audit Trail" }
      ],
      githubUrl: "https://github.com/jkeminsi/mesdoh",
      liveDemoUrl: "#"
    },
    // ─────────────── TIER 2: CLIENT & PRODUCTION WORK (Live Published) ───────────────
    {
      id: "citis-formation",
      slug: "citis-formation",
      title: "CitisFormation / PowerBache",
      badge: "Live · Production",
      projectTier: "production",
      isLiveProduction: true,
      liveUrl: "https://citisformation.com/fr",
      keyTech: "Next.js Multilingual",
      screenshotUrl: "/projects/citis-formation.png",
      screenshotAlt: "CitisFormation vocational catalog and admission portal",
      // [TODO: provide desktop 16:9 screenshot for CitisFormation if updated]
      // [TODO: missing numeric usage/traffic metric to be provided later]
      metricLine: "100% Multilingual — Dynamic vocational catalog & admission pipeline",
      role: "Web Engineering & Multilingual Experience",
      shortSubtitle: "Institutional web platform & professional training catalog with a multilingual journey.",
      category: "edtech",
      categoryLabel: "Education / Web Platform",
      summary: "An institutional web platform and vocational training catalog featuring interactive specialties, online admissions, institutional news, media gallery, and a seamless bilingual experience.",
      description: "CitisFormation / PowerBache provides professional training and certifications. The platform was built to structure a dense academic catalog, streamline student admission applications, and deliver a high-speed multilingual user experience.",
      problem: "Vocational education centers need a high-clarity web showcase to display complex course catalogs, manage candidate inquiries, and communicate events.",
      solution: "Engineered and deployed a modern institutional web platform featuring an interactive course catalog, direct admission inquiry workflows, media gallery, and search engine optimization.",
      architectureHighlights: [
        "Information architecture designed for high-density vocational course catalogs.",
        "Online admission candidate submission workflows with direct notification.",
        "Fluid bilingual localization engine (French / English).",
        "Fast page loads and optimized OpenGraph & SEO tags."
      ],
      keyFeatures: [
        "Interactive professional course and certification catalog",
        "Online candidate application & admission workflows",
        "Institutional news, events, and media gallery",
        "Bilingual architecture (French / English)",
        "Mobile-first responsive UX/UI",
        "Live production deployment and ongoing maintenance"
      ],
      technologies: [
        "Web Architecture",
        "TypeScript / JavaScript",
        "Modern UI Systems",
        "Multilingual Engine",
        "Responsive Design",
        "Cloud Hosting"
      ],
      metrics: [
        { label: "Status", value: "Live Online" },
        { label: "Catalog", value: "Multi-Track" },
        { label: "Language", value: "Bilingual FR/EN" },
        { label: "Type", value: "Client Platform" }
      ],
      liveDemoUrl: "https://citisformation.com/fr"
    },
    {
      id: "royal-high-school-nyom",
      slug: "royal-high-school-nyom",
      title: "Royal High School Nyom",
      badge: "Live · Production",
      projectTier: "production",
      isLiveProduction: true,
      liveUrl: "https://royalschoolnyom.com",
      keyTech: "Institutional Web",
      screenshotUrl: "/projects/royal-high-school-nyom.png",
      screenshotAlt: "Royal High School Nyom official bilingual portal",
      // [TODO: provide desktop 16:9 screenshot for Royal High School Nyom if updated]
      // [TODO: missing numeric enrollment metric to be provided later]
      metricLine: "Dual Curriculum FR/EN — Official bilingual admissions & parent portal",
      role: "Web Engineering & Institutional Design",
      shortSubtitle: "Institutional website for a private bilingual school in Yaoundé with parent and student resources.",
      category: "edtech",
      categoryLabel: "Education / Institutional Website",
      summary: "Official institutional website for a leading private bilingual school in Yaoundé, centralizing the educational mission, academic admissions, and practical resources for families.",
      description: "Royal High School Nyom is a private bilingual secondary school in Yaoundé. The official website serves as an essential digital bridge connecting the school administration, faculty, parents, and prospective students.",
      problem: "Bilingual schools require a clear and trustworthy online presence to guide prospective parents through admission requirements and publish academic schedules.",
      solution: "Engineered an institutional website presenting the dual Anglophone and Francophone academic sections, campus facilities, admission procedures, and direct communication channels.",
      architectureHighlights: [
        "Clear dual-section presentation for Anglophone and Francophone curricula.",
        "Rapid information architecture for families and student inquiries.",
        "Mobile-optimized responsive design tailored for smartphones.",
        "Integrated direct contact and admission request endpoints."
      ],
      keyFeatures: [
        "Detailed curriculum presentation for both academic sub-systems",
        "Admission criteria, tuition structure, and school calendar",
        "Practical resources portal for parents and students",
        "Campus facilities photo and event gallery",
        "Performance optimization and mobile compatibility",
        "Live production deployment and uptime monitoring"
      ],
      technologies: [
        "Web Development",
        "Responsive CSS",
        "Institutional CMS Architecture",
        "SEO Optimization",
        "Cloud Deployment"
      ],
      metrics: [
        { label: "Status", value: "Live Online" },
        { label: "Curriculum", value: "Bilingual Private" },
        { label: "Location", value: "Yaoundé" },
        { label: "Type", value: "Client Platform" }
      ],
      liveDemoUrl: "https://royalschoolnyom.com"
    },
    {
      id: "gestplus-platform",
      slug: "gestplus-platform",
      title: "GestPlus",
      badge: "Live · Production",
      projectTier: "production",
      isLiveProduction: true,
      liveUrl: "https://gestplus-sn.com",
      keyTech: "B2B Solutions",
      screenshotUrl: "/projects/gestplus-platform.png",
      screenshotAlt: "GestPlus corporate management & consulting platform",
      // [TODO: provide desktop 16:9 screenshot for GestPlus if updated]
      // [TODO: missing conversion metric to be provided later]
      metricLine: "B2B Consulting — Business management solutions & quotation pipeline",
      role: "Full-Stack Web Development & Business Solutions",
      shortSubtitle: "Business & management web platform providing enterprise services and organizational solutions.",
      category: "business",
      categoryLabel: "Business / Web Platform",
      summary: "A professional web platform dedicated to enterprise business management services, consulting workflows, and operational solutions.",
      description: "GestPlus provides business management services and professional operational solutions. The digital platform showcases consulting offerings, operational methodologies, and facilitates client proposal requests.",
      problem: "B2B management consulting firms require a structured digital presence to demonstrate expertise and capture corporate client leads.",
      solution: "Developed a clean, professional web platform presenting domain consulting services, engagement models, and direct quote inquiry workflows.",
      architectureHighlights: [
        "B2B value-proposition content architecture with high domain clarity.",
        "Professional high-contrast interface reinforcing corporate credibility.",
        "Qualified quote request and client communication forms."
      ],
      keyFeatures: [
        "Structured catalog of business management solutions",
        "Direct inquiry and quotation request form",
        "Modern responsive design across all devices",
        "Technical performance and secure cloud hosting"
      ],
      technologies: [
        "Full-Stack Web",
        "Tailwind CSS / Modern UI",
        "Responsive Design",
        "Business Workflows",
        "Production Deployment"
      ],
      metrics: [
        { label: "Status", value: "Live Online" },
        { label: "Domain", value: "Enterprise Mgmt" },
        { label: "Target", value: "B2B Services" },
        { label: "Type", value: "Client Platform" }
      ],
      liveDemoUrl: "https://gestplus-sn.com"
    },
    {
      id: "pharmaproxi-health",
      slug: "pharmaproxi-health",
      title: "PharmaProxi",
      badge: "Healthcare & Geolocation",
      projectTier: "lab",
      isSignature: false,
      keyTech: "FastAPI + PostGIS",
      screenshotAlt: "PharmaProxi geospatial pharmacy lookup UI",
      // [TODO: provide desktop 16:9 screenshot for PharmaProxi]
      metricLine: "< 80ms — Spatial index lookup latency for nearby dispensaries",
      role: "Full-Stack Engineer",
      shortSubtitle: "Healthcare digital network improving citizen access to medicine stocks and pharmacy services.",
      category: "healthtech",
      categoryLabel: "Healthcare / Geolocation",
      summary: "A modern healthcare platform bridging the gap between patients and pharmacies through geolocation-based medicine search, verified stock availability, and prescription routing.",
      description: "Finding critical prescribed medication during medical emergencies or chronic treatments often results in wasted hours traveling between pharmacies. PharmaProxi provides an intuitive, high-speed discovery platform allowing patients to search verified local pharmacy inventories, reserve medicines, and locate the nearest open emergency dispensaries.",
      problem: "Lack of visibility into real-time pharmaceutical stock leads to treatment delays, medication non-adherence, and logistical friction during health emergencies.",
      solution: "Developed a modern Next.js and FastAPI application with spatial indexing for nearby pharmacy queries, live stock status indicators, and dedicated dashboards for pharmacy managers.",
      architectureHighlights: [
        "Geospatial queries powered by PostgreSQL for radius-based pharmacy lookup.",
        "FastAPI backend delivering lightning-fast medication catalog searches.",
        "Modern, accessible Next.js frontend with mobile-first UI for rapid patient access.",
        "Pharmacist portal with rapid prescription verification and stock updates."
      ],
      keyFeatures: [
        "Geolocation search for open pharmacies and emergency dispensaries",
        "Real-time medication catalog and inventory verification",
        "Digital prescription upload and pharmacist reservation flow",
        "Pharmacy administration dashboard for stock adjustments",
        "Direct navigation and routing to confirmed stock locations"
      ],
      technologies: [
        "Next.js",
        "React",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Tailwind CSS",
        "REST APIs",
        "Docker"
      ],
      metrics: [
        { label: "Search Latency", value: "< 80ms" },
        { label: "Spatial Indexing", value: "PostGIS Radius" },
        { label: "Design", value: "Mobile First" },
        { label: "Compliance", value: "Health Data Privacy" }
      ],
      githubUrl: "https://github.com/jkeminsi/pharmaproxi",
      liveDemoUrl: "#"
    },
    {
      id: "education-management",
      slug: "education-management",
      title: "Education Management Platform",
      badge: "Academic Systems",
      projectTier: "lab",
      isSignature: false,
      keyTech: "Angular + FullCalendar",
      screenshotAlt: "Academic management operating system and schedule builder",
      // [TODO: provide desktop 16:9 screenshot for Education Management Platform]
      metricLine: "0 scheduling collisions — Weighted grading engine and planner",
      role: "Full-Stack Software Engineer",
      shortSubtitle: "Academic operating system managing weighted grading, timetables, and student progress.",
      category: "edtech",
      categoryLabel: "EdTech / Academic Systems",
      summary: "A comprehensive academic management system engineered for schools and universities to manage complex weighted grading systems, interactive timetables, and student transcripts.",
      description: "Academic institutions require sophisticated administrative systems capable of handling multi-branch curriculum requirements, varying subject coefficients, dynamic timetable conflict checks, and compliant student report card exports.",
      problem: "Schools often depend on disconnected spreadsheets that produce calculation errors in grade point averages and scheduling collisions in classroom allocations.",
      solution: "Engineered an integrated academic management platform featuring a flexible evaluation calculation engine, interactive FullCalendar schedule builder, and comprehensive grade dashboards.",
      architectureHighlights: [
        "Custom evaluation engine supporting dynamic subject coefficients and weighted averages.",
        "Interactive drag-and-drop schedule planner with automated room and teacher collision detection.",
        "Bulk report card PDF generation with institution watermarks and grading breakdown.",
        "Multi-tier dashboard for Administrators, Teachers, Students, and Parents."
      ],
      keyFeatures: [
        "Dynamic classroom, subject, and coefficient configuration",
        "Interactive timetable management with FullCalendar integration",
        "Grade recording, GPA calculations, and academic ranking",
        "Automated generation of official transcript and report card PDFs",
        "Attendance tracking, disciplinary records, and parental notifications",
        "Administrative overview dashboards with cohort performance metrics"
      ],
      technologies: [
        "Angular",
        "TypeScript",
        "Node.js",
        "Express",
        "FullCalendar API",
        "PostgreSQL",
        "Tailwind CSS",
        "PDFMake"
      ],
      metrics: [
        { label: "Evaluation Engine", value: "Dynamic Weights" },
        { label: "Scheduler", value: "Zero Collision" },
        { label: "Report Gen", value: "Bulk PDF" },
        { label: "Interface", value: "FullCalendar" }
      ],
      githubUrl: "https://github.com/jkeminsi/education-management",
      liveDemoUrl: "#"
    },
    {
      id: "football-talent-platform",
      slug: "football-talent-platform",
      title: "Football & Talent Platform",
      badge: "Sports Scouting",
      projectTier: "lab",
      isSignature: false,
      keyTech: "Next.js + Media Pipeline",
      screenshotAlt: "Sports talent discovery and certified athletic portfolio portal",
      // [TODO: provide desktop 16:9 screenshot for Football & Talent Platform]
      // [TODO: missing engagement or video volume metric to be provided later]
      metricLine: "Multi-criteria — Verified athletic scouting profiles and video feeds",
      role: "Full-Stack Engineer",
      shortSubtitle: "Digital recruitment and scouting ecosystem connecting athletes, recruiters, and clubs.",
      category: "sportstech",
      categoryLabel: "SportsTech / Recruitment",
      summary: "A high-impact digital recruitment ecosystem connecting rising football athletes, verified scouts, clubs, and sports organizations through athletic profiles and media feeds.",
      description: "Young athletic talent in developing regions often lacks formal visibility to professional scouts and international clubs. This platform provides a centralized, media-rich scouting showcase where players build verified athletic portfolios, upload match highlights, track physical attributes, and connect directly with accredited scouts and club directors.",
      problem: "Grassroots sports talent suffers from a lack of verified athletic data, fragmented scouting networks, and missed professional trial opportunities.",
      solution: "Built a visually stunning, media-rich platform featuring verified athletic profiles, video highlight streams, match performance logs, pitch booking, and federation sports licensing.",
      architectureHighlights: [
        "Rich media asset management with optimized video streaming and image compression.",
        "Scout search engine with multi-faceted filtering (position, age, physical stats, tactical ratings).",
        "Secure athlete verification workflows and digital federation sports license validation.",
        "Interactive match report and event scheduler for trials and showcase matches."
      ],
      keyFeatures: [
        "Verified player portfolio with biometric data, position heatmaps, and highlight clips",
        "Scout discovery engine with advanced talent filtering and watchlists",
        "Club recruitment messaging and official trial invitation system",
        "Digital sports licensing and federation compliance tracking",
        "Sports facility and pitch booking system with availability calendars",
        "News, media feed, and match analytics dashboard"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "FastAPI",
        "Python",
        "PostgreSQL",
        "Tailwind CSS",
        "Cloud Media Pipeline",
        "Docker"
      ],
      metrics: [
        { label: "Scout Filtering", value: "Multi-parameter" },
        { label: "Media Pipeline", value: "Adaptive Stream" },
        { label: "Talent Discovery", value: "Verified Profiles" },
        { label: "Design", value: "High-Impact UI" }
      ],
      githubUrl: "https://github.com/jkeminsi/football-talent-platform",
      liveDemoUrl: "#"
    }
  ],
  pipelineSteps: [
    {
      step: "01",
      title: "Understand",
      tagline: "Unpack problem space & technical boundaries.",
      focus: "Business requirements · User problems · Product constraints",
      deliverables: [
        "Domain discovery & stakeholder alignment",
        "User journey & functional requirement mapping",
        "Constraint identification (latency, offline, compliance)"
      ]
    },
    {
      step: "02",
      title: "Design",
      tagline: "Craft structured information flows & design systems.",
      focus: "User flows · Information architecture · UX/UI systems",
      deliverables: [
        "High-contrast, accessible UI component tokens",
        "Interactive wireframes and rapid clickable prototypes",
        "State-machine UX design for complex asynchronous states"
      ]
    },
    {
      step: "03",
      title: "Architect",
      tagline: "Build resilient system topology & data models.",
      focus: "Data models · APIs · System architecture · Infrastructure",
      deliverables: [
        "Normalized database schema & indexing strategies",
        "RESTful API contracts, OpenAPI specs & Auth patterns",
        "Offline sync models, event buses, and container topology"
      ]
    },
    {
      step: "04",
      title: "Build",
      tagline: "Clean, type-safe implementation across the stack.",
      focus: "Frontend · Backend · Integrations · AI models",
      deliverables: [
        "Modular Frontend with TypeScript, Angular/Next.js, Tailwind",
        "High-throughput Backend services in FastAPI / Node.js / Symfony",
        "ML feature engineering, model training & inference APIs"
      ]
    },
    {
      step: "05",
      title: "Ship",
      tagline: "Automate, containerize, and monitor in production.",
      focus: "Testing · Docker · Deployment · Monitoring",
      deliverables: [
        "Unit & integration test suites with CI/CD automation",
        "Production Docker containerization & cloud provisioning",
        "Observability, performance audit, and continuous iteration"
      ]
    }
  ],
  architectureLabItems: [
    {
      id: "offline-first",
      title: "Offline-First Distributed Sync Architecture",
      badge: "Edge & Distributed Systems",
      summary: "A zero-data-loss architecture designed for field operations with intermittent connectivity, utilizing embedded SQLite, local transactional queues, vector clocks, and asynchronous cloud reconciliation.",
      diagramTitle: "Edge-to-Cloud Data Reconciliation Flow",
      flowSteps: [
        {
          number: "01",
          label: "Edge Client Mutation",
          description: "User interacts with the client app. State mutations write immediately to the local embedded SQLite database for zero-latency execution.",
          tech: "Ionic / Angular + SQLite"
        },
        {
          number: "02",
          label: "Outbox Sync Queue",
          description: "An append-only outbox queue records transactional events with timestamps and vector clock sequence IDs.",
          tech: "Local Event Store"
        },
        {
          number: "03",
          label: "Connection Monitor",
          description: "Background network listener detects connectivity changes and initiates bidirectional delta synchronization with exponential backoff.",
          tech: "Network Service Worker"
        },
        {
          number: "04",
          label: "Conflict Resolution",
          description: "Server-side reconciliation engine evaluates revision trees, resolves concurrent updates deterministically, and applies changes.",
          tech: "FastAPI / Node Engine"
        },
        {
          number: "05",
          label: "Central Data Store",
          description: "Resolved states are committed to the primary cloud PostgreSQL database and broadcasted to subscribed clients.",
          tech: "PostgreSQL + Redis"
        }
      ],
      keyTakeaways: [
        "100% operational capability without active internet connection",
        "Zero UI freezing or blocking on network requests",
        "Deterministic conflict resolution via vector clocks and domain rules"
      ],
      stack: ["SQLite", "FastAPI", "Node.js", "PostgreSQL", "Kafka / Event Bus", "Docker"]
    },
    {
      id: "ai-prediction-pipeline",
      title: "AI Genomic & Phenotypic ML Prediction Pipeline",
      badge: "Machine Learning & Clinical Systems",
      summary: "An end-to-end clinical machine learning pipeline transforming raw genomic variant data and phenotypic minimum inhibitory concentrations into actionable antimicrobial resistance classifications with EUCAST validation.",
      diagramTitle: "Antimicrobial Resistance ML Inference Pipeline",
      flowSteps: [
        {
          number: "01",
          label: "Clinical Ingestion",
          description: "Lab analysts upload raw genomic mutation records or phenotypic zone measurements via structured CSV / API endpoints.",
          tech: "FastAPI Async Ingestion"
        },
        {
          number: "02",
          label: "Feature Engineering",
          description: "Data cleaning, categorical one-hot encoding, mutation matrix transformations, and numerical normalization pipelines.",
          tech: "Pandas / Scikit-learn"
        },
        {
          number: "03",
          label: "ML Model Ensemble",
          description: "Input features are processed concurrently through trained Random Forest, SVM, and XGBoost classifiers with weighted voting.",
          tech: "Scikit-learn + XGBoost"
        },
        {
          number: "04",
          label: "EUCAST Validation",
          description: "Predictions are validated against the official European Committee on Antimicrobial Susceptibility Testing breakpoint rulebook.",
          tech: "EUCAST Rules Engine"
        },
        {
          number: "05",
          label: "Visualization & Export",
          description: "Results render as interactive radial inhibition zones in Angular and compile into downloadable clinical PDF reports.",
          tech: "Angular Canvas + PDF Engine"
        }
      ],
      keyTakeaways: [
        "Reduces resistance diagnostic estimation from 48h to sub-second",
        "Ensemble modeling provides confidence scoring and explainability",
        "Full compliance with international medical susceptibility standards"
      ],
      stack: ["Python", "FastAPI", "Scikit-learn", "XGBoost", "Angular", "PostgreSQL"]
    },
    {
      id: "saas-architecture",
      title: "Modular Multi-Tenant SaaS Architecture",
      badge: "Cloud & Microservices",
      summary: "A scalable, secure multi-tenant cloud topology designed for high-availability enterprise applications, featuring API Gateway routing, isolated schema multitenancy, and event-driven worker queues.",
      diagramTitle: "Enterprise Microservices Topology",
      flowSteps: [
        {
          number: "01",
          label: "Edge Gateway / CDN",
          description: "Incoming requests pass through Cloudflare / Next.js edge routing for TLS termination, rate limiting, and static asset caching.",
          tech: "Edge CDN & Reverse Proxy"
        },
        {
          number: "02",
          label: "API Gateway & Auth",
          description: "Unified entry point handles JWT token verification, RBAC permissions, and routes traffic to downstream domain microservices.",
          tech: "FastAPI / Express Gateway"
        },
        {
          number: "03",
          label: "Domain Services",
          description: "Decoupled domain services handle business logic (Billing, Identity, Inventory, Reporting) independently.",
          tech: "Dockerized Microservices"
        },
        {
          number: "04",
          label: "Asynchronous Workers",
          description: "Heavy computation jobs (PDF compilation, batch imports, email notifications) are offloaded to background message queues.",
          tech: "Redis / Celery Workers"
        },
        {
          number: "05",
          label: "Polyglot Persistence",
          description: "Structured data resides in PostgreSQL with tenant isolation, while session caches and media assets use Redis and S3.",
          tech: "PostgreSQL + S3 Storage"
        }
      ],
      keyTakeaways: [
        "Isolated tenant data models guaranteeing privacy and compliance",
        "Independent scalability of resource-heavy background tasks",
        "Graceful degradation and high fault isolation across microservices"
      ],
      stack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Docker Compose", "AWS"]
    }
  ],
  techCategories: [
    {
      category: "Frontend Engineering",
      description: "Building responsive, accessible, and high-performance user interfaces.",
      items: ["Angular", "Next.js", "Ionic", "TypeScript", "Tailwind CSS", "React", "HTML5 / Modern CSS"]
    },
    {
      category: "Backend & Systems",
      description: "Developing scalable RESTful APIs, business engines, and microservices.",
      items: ["Python", "FastAPI", "Symfony", "Node.js", "Express", "REST APIs", "OAuth2 / JWT"]
    },
    {
      category: "Data & Persistence",
      description: "Designing relational databases, embedded stores, and caching layers.",
      items: ["PostgreSQL", "MariaDB", "MongoDB", "SQLite", "Redis", "Database Optimization"]
    },
    {
      category: "Architecture & DevOps",
      description: "Structuring distributed systems, containerization, and automated workflows.",
      items: ["Offline-First Architecture", "Docker", "Docker Compose", "GitHub Actions", "Microservices", "Event-Driven Systems"]
    },
    {
      category: "Artificial Intelligence",
      description: "Integrating machine learning models and predictive decision pipelines.",
      items: ["Scikit-learn", "Random Forest", "SVM", "XGBoost", "Predictive Analytics", "Feature Engineering"]
    }
  ]
};

export const getPortfolioData = (lang: Language): PortfolioDataset => {
  return lang === 'en' ? portfolioDataEN : portfolioDataFR;
};
