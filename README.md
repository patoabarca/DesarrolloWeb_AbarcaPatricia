# 🍷 **Guía de Vinos para Principiantes**

**Proyecto:** PreEntrega2_Abarca  
🔗 **Demo online:** [patoabarca.github.io/DesarrolloWeb_AbarcaPatricia](https://patoabarca.github.io/DesarrolloWeb_AbarcaPatricia/)

---

## **Descripción**

Este proyecto corresponde a la **Pre-Entrega 2** del curso **Desarrollo Web (Coderhouse)**.  
Se avanza a una **estructura avanzada**, **diseño responsive** y **aplicación de Bootstrap**.

**Objetivo:** maquetar, estilizar y optimizar la web usando **Bootstrap 5**, **Grid CSS**, **Flexbox** y **CSS personalizado**.

---

## **Estructura general**

Secciones del sitio:

- **Inicio:** presentación y acceso a todas las páginas.
- **Uvas tintas** y **Uvas blancas:** fichas (imagen + texto + descriptor).
- **Regiones:** zonas vitivinícolas argentinas.
- **Maridajes:** combinaciones sugeridas.
- **Glosario:** términos básicos del vino.

Toda página sigue una estructura semántica con `header`, `nav`, `main`, `section`, `article`, `footer`.

---

## **Uso de tecnologías y frameworks**

### **Bootstrap 5.3.8**

Implementado como framework principal para:

- **Navbar** responsive (`.navbar-expand-lg` + botón hamburguesa).
- **Grillas utilitarias**: `.container`, `.row`, `.col-*`, `.g-*`.
- **Utilidades de espaciado y alineación**: `my-4`, `p-3`, `gap-2`, `align-items-center`, `ms-auto`.
- **Botones sociales**: `btn`, `rounded-circle`, `border`.
- **Proporción de imágenes**: `ratio ratio-4x3`.

### 💠 **CSS Grid**

Usado manualmente en **Uvas tintas/blancas**:

- **Layout externo** (`.fichas-grid`):
  - **Desktop (≥992px):** `grid-template-columns: repeat(3, 1fr);`
  - **Tablet (≤991px):** `repeat(2, 1fr)`
  - **Mobile (≤480px):** `1fr`
- **Layout interno por ficha** (`.ficha-grid`):
  - **Desktop/Tablet:** `grid-template-columns: 5fr 7fr` (imagen | texto)
  - **Mobile:** `1fr` (apilado)

### **Flexbox**

- **Estructura vertical de página**: `body.d-flex.flex-column.min-vh-100` (footer pegado abajo).
- **Brand en navbar**: `.d-flex.align-items-center.gap-2` (logo + título).
- **Footer**: filas de iconos/contacto con `.d-flex` y `gap-2`.
- **Dentro de `.card-body`** (CSS propio): `display:flex; flex-direction:column;` para empujar acciones al final.

### **CSS personalizado** (`/assets/css/styles.css`)

- **Paleta** con variables: `--tinto`, `--rose`, `--card`, `--wash`.
- **Tipografía**: _Lora_ (títulos) + _Roboto_ (cuerpo).
- **Ajustes visuales de Bootstrap** (hover, bordes, foco accesible).
- **Breakpoints por rango**
  - Tablet: `@media (max-width: 991px)`
  - Mobile: `@media (max-width: 480px)`

---

## **Diseño responsive**

El sitio se adapta a distintos dispositivos manteniendo coherencia visual y legibilidad:

- **Desktop (≥992 px):**  
  En las secciones generales (Inicio, Regiones, Maridajes, Glosario) el contenido se distribuye con grillas y contenedores amplios.  
  En **Uvas tintas y blancas**, se muestran **2 fichas por fila**, con disposición horizontal (imagen | texto).

- **Tablet (481–991 px):**  
  El layout ajusta márgenes y tipografías para mantener equilibrio.  
  En las páginas de **Uvas**, se muestra **1 ficha por fila** con estructura interna de dos columnas (imagen a la izquierda, texto a la derecha).

- **Mobile (≤480 px):**  
  Todos los contenidos se apilan verticalmente para favorecer la lectura.  
  En **Uvas**, cada ficha muestra **imagen sobre texto**, mientras que la marca del encabezado se compacta.

Además, las imágenes implementan `loading="lazy"` y `object-fit: cover` para optimizar el rendimiento y mantener proporciones correctas.

---

## **Tecnologías**

- **HTML5**, **CSS3** (variables + media queries).
- **Bootstrap 5**, **Flexbox**, **CSS Grid**.
- **Font Awesome 6**.
- **VS Code**, **Git/GitHub**.
- **JavaScript** (buscador en Glosario)

Función: filtro en vivo de términos del glosario.

---

## **Autoría**

👩‍💻 **Patricia Abarca**  
Curso: _Desarrollo Web – Coderhouse_  
Entrega: _PreEntrega 2 — Estructura avanzada + Bootstrap + Grid + Flexbox_  
Año: 2025
