/* ===== Glosario: filtro en vivo (Bootstrap-friendly) ===== */
(function () {
  const input = document.getElementById("glossary-search");
  if (!input) return; // corre solo en glosario

  const clear = document.getElementById("glossary-clear");
  const counter = document.getElementById("glossary-count");

  // Cada tarjeta + su columna contenedora (cualquier col-* dentro de .row)
  const items = Array.from(document.querySelectorAll(".g-card")).map((card) => {
    const col =
      card.closest(".row > [class*='col']") || // .col, .col-12, .col-md-6, etc.
      card.parentElement; // fallback por si acaso
    // Texto a matchear (prioriza data-term si lo tenés en el HTML)
    const text = () => card.getAttribute("data-term") || card.textContent || "";
    return { col, card, text };
  });

  const TOTAL = items.length;

  // Normaliza: minúsculas + elimina tildes
  const norm = (s) =>
    (s || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  const setCount = (visible) => {
    if (!counter) return;
    counter.textContent = `${visible} / ${TOTAL}`;
    counter.className = `badge ${
      visible ? "text-bg-secondary" : "text-bg-danger"
    }`;
  };

  const runFilter = () => {
    const q = norm(input.value);
    let visible = 0;

    items.forEach(({ col, text }) => {
      const show = !q || norm(text()).includes(q);
      col.classList.toggle("d-none", !show); // usamos utilidades de BS
      if (show) visible++;
    });

    setCount(visible);
  };

  // Eventos
  input.addEventListener("input", runFilter);
  clear?.addEventListener("click", () => {
    input.value = "";
    runFilter();
    input.focus();
  });

  // Estado inicial
  setCount(TOTAL);
})();
