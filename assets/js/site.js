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
