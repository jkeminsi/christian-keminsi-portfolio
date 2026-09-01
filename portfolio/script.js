const header = document.querySelector(".site-header");
const toggle = document.querySelector(".menu-toggle");

toggle?.addEventListener("click", () => {
  const open = header.classList.toggle("menu-open");
  toggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach((a) =>
  a.addEventListener("click", () => header.classList.remove("menu-open"))
);

const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
  { threshold: 0.08 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const data = {
  ai: {
    category: "AI / HEALTHCARE",
    title: "AI Bacterial Resistance Prediction",
    description:
      "Plateforme d'aide à la prédiction de la résistance bactérienne combinant données génotypiques, phénotypiques et modèles de Machine Learning. Le projet explore également la simulation d'antibiogrammes, la visualisation des résultats et l'export des analyses.",
    tags: [
      "FastAPI",
      "Angular",
      "Python",
      "Random Forest",
      "SVM",
      "XGBoost",
      "PostgreSQL",
      "Docker",
    ],
  },
  afos: {
    category: "SPORTS / PLATFORM",
    title: "AFOS Sports Ecosystem",
    description:
      "Écosystème sportif connecté pensé pour les athlètes, coachs, clubs et recruteurs. L'architecture met l'accent sur l'offline-first, la synchronisation distribuée, la télémétrie GPS et l'intégration d'appareils.",
    tags: [
      "Offline-first",
      "SQLite",
      "Cloud",
      "Microservices",
      "Event-driven",
      "GPS",
    ],
  },
  mesdoh: {
    category: "FINTECH / BUSINESS",
    title: "MesDoh",
    description:
      "Écosystème de gestion financière et opérationnelle combinant paiements, POS, gestion de stock, facturation et outils de pilotage pour les activités commerciales.",
    tags: ["Angular", "APIs", "POS", "Stock", "PDF", "Business"],
  },
  pharma: {
    category: "HEALTH / SAAS",
    title: "PharmaProxi",
    description:
      "Plateforme digitale orientée services pharmaceutiques, conçue autour d'un frontend moderne, d'APIs métier et d'une architecture backend structurée.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "REST APIs"],
  },
  education: {
    category: "EDTECH",
    title: "Education Management",
    description:
      "Système de gestion académique couvrant classes, matières, coefficients, emplois du temps et tableaux de bord. L'objectif est de transformer des opérations scolaires complexes en workflows simples.",
    tags: ["Angular", "FullCalendar", "APIs", "Dashboards"],
  },
  talent: {
    category: "SPORT / TALENT",
    title: "Football & Talent Platform",
    description:
      "Plateforme reliant joueurs, clubs et recruteurs avec des fonctionnalités de profils, publications, analytics, terrains, signalements et gestion opérationnelle.",
    tags: ["Angular", "Analytics", "Recruitment", "Sports"],
  },
};

const modal = document.getElementById("projectModal");
document.querySelectorAll(".project").forEach((card) =>
  card.addEventListener("click", () => {
    const d = data[card.dataset.project];
    if (!d) return;
    document.getElementById("modalCategory").textContent = d.category;
    document.getElementById("modalTitle").textContent = d.title;
    document.getElementById("modalDescription").textContent = d.description;
    document.getElementById("modalTags").innerHTML = d.tags
      .map((t) => `<b>${t}</b>`)
      .join("");
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
  })
);

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

modal.querySelectorAll("[data-close]").forEach((x) =>
  x.addEventListener("click", closeModal)
);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

document.querySelectorAll('a[href^="#"]').forEach((a) =>
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id.length > 1) {
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  })
);
