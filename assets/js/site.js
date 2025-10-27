/* ===== MENU: Toggle hamburguesa ===== */
(function () {
  console.log("[site.js] cargado");

  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#primary-nav");

  if (!btn) {
    console.warn("No se encontró .nav-toggle");
    return;
  }
  if (!nav) {
    console.warn("No se encontró #primary-nav");
    return;
  }

  function openMenu() {
    nav.classList.add("is-open");
    btn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    nav.classList.contains("is-open") ? closeMenu() : openMenu();
  }

  // Toggle
  btn.addEventListener("click", toggleMenu);

  // Cerrar al clickear un link
  nav.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "A") closeMenu();
  });

  // Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Cerrar clic fuera
  document.addEventListener("click", (e) => {
    const clickDentro = nav.contains(e.target) || btn.contains(e.target);
    if (!clickDentro && nav.classList.contains("is-open")) closeMenu();
  });
})();

// ===== Submenú Uvas (click para abrir/cerrar en mobile) =====
const subToggles = document.querySelectorAll(".submenu-toggle");

subToggles.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Evita que el hover desktop interfiera en mobile
    const parent = btn.closest(".has-submenu");
    const isOpen = parent.classList.contains("open");

    // Cerrar otros submenús
    document.querySelectorAll(".has-submenu.open").forEach((n) => {
      if (n !== parent) n.classList.remove("open");
      const t = n.querySelector(".submenu-toggle");
      if (t) t.setAttribute("aria-expanded", "false");
    });

    // Toggle actual
    parent.classList.toggle("open", !isOpen);
    btn.setAttribute("aria-expanded", String(!isOpen));
  });
});

// Cerrar submenú si se hace click fuera
document.addEventListener("click", (e) => {
  const anyOpen = document.querySelector(".has-submenu.open");
  if (!anyOpen) return;
  const inside = anyOpen.contains(e.target);
  if (!inside) {
    anyOpen.classList.remove("open");
    const t = anyOpen.querySelector(".submenu-toggle");
    if (t) t.setAttribute("aria-expanded", "false");
  }
});

/* ===== Glosario: filtro en vivo ===== */
(function () {
  const searchInput = document.getElementById("glossary-search");
  if (!searchInput) return; // solo corre en glosario

  const clearBtn = document.getElementById("glossary-clear");
  const counterEl = document.getElementById("glossary-count");

  // Obtenemos cada tarjeta + su columna contenedora (para ocultar/mostrar)
  const cols = Array.from(document.querySelectorAll(".g-card")).map((card) => ({
    col: card.closest(".col-12, .col-md-6, .col-lg-4"),
    card,
  }));

  const total = cols.length;

  // Normaliza texto (quita tildes/acentos) para búsquedas en español
  const norm = (s) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .trim();

  const updateCounter = (visible) => {
    if (!counterEl) return;
    counterEl.textContent = `${visible} / ${total}`;
    counterEl.className = `badge ${
      visible ? "text-bg-secondary" : "text-bg-danger"
    }`;
  };

  const runFilter = () => {
    const q = norm(searchInput.value || "");
    let visible = 0;

    cols.forEach(({ col, card }) => {
      const hay = q === "" || norm(card.innerText).includes(q);
      col.classList.toggle("d-none", !hay);
      if (hay) visible++;
    });

    updateCounter(visible);
  };

  // Eventos
  searchInput.addEventListener("input", runFilter);
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      runFilter();
      searchInput.focus();
    });
  }

  // Estado inicial
  updateCounter(total);
})();
