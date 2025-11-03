/* =========  Glosario: filtro en vivo (Bootstrap-friendly)  =========== */
(function () {
  /* —— refs a UI —— */
  const input = document.getElementById("glossary-search");
  if (!input) return; // corre solo en glosario
  const clear = document.getElementById("glossary-clear");
  const counter = document.getElementById("glossary-count");

  /* —— indexar tarjetas (g-card) y su columna col-* —— */
  const items = Array.from(document.querySelectorAll(".g-card")).map((card) => {
    const col =
      card.closest(".row > [class*='col']") || // .col, .col-12, .col-md-6, etc.
      card.parentElement; // fallback simple
    const text = () => card.getAttribute("data-term") || card.textContent || ""; // preferí data-term si existe
    return { col, card, text };
  });
  const TOTAL = items.length; // recuento fijo

  /* —— normalizador: minúsculas + sin tildes —— */
  const norm = (s) =>
    (s || "")
      .toString()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim();

  /* —— contador visible/total —— */
  const setCount = (visible) => {
    if (!counter) return;
    counter.textContent = `${visible} / ${TOTAL}`;
    counter.className = `badge ${
      visible ? "text-bg-secondary" : "text-bg-danger"
    }`; // rojo si 0 resultados
  };

  /* —— filtro principal: muestra/oculta columnas —— */
  const runFilter = () => {
    const q = norm(input.value);
    let visible = 0;

    items.forEach(({ col, text }) => {
      const show = !q || norm(text()).includes(q); // match parcial
      col.classList.toggle("d-none", !show); // utilidades BS para ocultar
      if (show) visible++;
    });

    setCount(visible);
  };

  /* —— eventos: input live + botón limpiar —— */
  input.addEventListener("input", runFilter);
  clear?.addEventListener("click", () => {
    input.value = ""; // reset
    runFilter(); // recontar
    input.focus(); // accesibilidad
  });

  /* —— estado inicial —— */
  setCount(TOTAL);
})();
