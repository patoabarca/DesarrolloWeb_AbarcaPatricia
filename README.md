# 🍷 Guía de Vinos para Principiantes

### Pre-Entrega 3 — SASS + Responsive + Animaciones + Estructura final

**Proyecto:** PreEntrega3_Abarca  
**Demo online:** https://patoabarca.github.io/DesarrolloWeb_AbarcaPatricia/

---

## Descripción

Este proyecto forma parte de la **Pre-Entrega 3** del curso **Desarrollo Web – Coderhouse**.

Incluye:

- Estructura final completa del sitio web.
- Diseño **responsive** para mobile, tablet y desktop.
- Implementación total de **SASS** (variables, mixins, placeholders, maps, nesting).
- Agregado de **transiciones** y **animaciones** en elementos clave.
- Publicación en **GitHub Pages**.

El sitio es una guía introductoria para personas que quieren aprender lo básico del mundo del vino.

---

## Estructura general del sitio

Páginas incluidas:

- Inicio
- Uvas tintas
- Uvas blancas
- Regiones
- Maridajes
- Glosario
- **Vendimia** (nueva en esta entrega)

Cada página utiliza una estructura semántica:

`header`, `nav`, `main`, `section`, `article`, `footer`.

---

## SASS — Implementación completa

El CSS fue migrado a una arquitectura **SCSS modular**:

scss/
│── abstracts/ → variables, mixins, placeholders, maps

│── base/ → reset y estilos base

│── layout/ → header, footer

│── components/ → cards, botones, elementos reutilizables

│── pages/ → estilos por página (uvas, glosario, vendimia, index)

│── style.scss → archivo principal que compila al CSS final

### ✔ Elementos de SASS utilizados

- **Variables** para colores, sombras y tamaños.
- **Maps** para mantener la paleta centralizada y usar todo vía `map.get()`.
- **Mixins personalizados:**
  - `smooth-transition`
  - `flex-col`
  - `object-cover`
- **Extend (%placeholders)**
  - `%card-base` para unificar el estilo base de todas las cards.
- **Nesting** ordenado en header, footer, cards e intro.
- **Media queries por rangos de dispositivo**, definidas dentro de los partials correspondientes:
  - Mobile (≤480px)
  - Tablet (≤991px)

### ✔ Gradiente personalizado (Intro)

La sección _Intro_ del Home usa un gradiente propio:

- Construido con tres colores del mapa usando `linear-gradient()`.
- Le da contraste y profundidad al bloque principal de bienvenida.

---

## Transiciones y animaciones

### - Cards (home, glosario, vendimia)

- **Cards destacadas de la home**  
  (“Conocé las uvas”, “Explorá regiones”, “Maridajes simples”):

  - Elevación con `transform: translateY(...)`.
  - Sombra más marcada al hacer _hover_.
  - Zoom suave de la imagen (`transform: scale(1.03)` en la figura).

- **Cards de glosario y vendimia**:
  - Elevación más sutil.
  - Sombra suave para marcar jerarquía.

### Navbar

- Hover suave
- Cambio de color, fondo y borde
- `smooth-transition(all, 0.2s)`

### Botones y enlaces

- Subrayado con transición
- Cambio de color suave

---

## Responsive Design

### Mobile (≤480px)

- Cards en una sola columna.
- Navbar reducida.
- Intro centrada con figura más pequeña.
- Vendimia en formato vertical.

### Tablet (481–991px)

- Ajuste de grillas y tipografías.
- Vendimia reorganizada.
- Mayor separación visual.

### Desktop (≥992px)

- Layout amplio.
- Vendimia horizontal.
- Fichas de Uvas en 2 columnas.
- Intro equilibrada con mayor altura.

---

## Uso de Bootstrap, Flex y Grid

### Bootstrap

- Navbar responsive
- Sistema de grillas
- Utilidades de espaciado
- Proporciones (`ratio 16x9`, `ratio 4x3`)

### CSS Grid

- Fichas de Uvas
- Etapas de Vendimia

### Flexbox

- Header
- Footer
- Cards
- Intro del Home

---

## Optimización

- Imágenes con `object-fit: cover`
- CSS final ordenado y limpio
- Código SCSS estructurado por responsabilidad
- Paleta centralizada vía map
- Animaciones livianas y no invasivas

---

## Git y GitHub

El repositorio contiene:

- Todos los archivos del proyecto
- `.gitignore` configurado
- Historial claro de commits
- GitHub Pages activado
- Carpeta SCSS completa

  **Repositorio:**  
  https://github.com/patoabarca/DesarrolloWeb_AbarcaPatricia

---

**Patricia Abarca**  
Curso: _Desarrollo Web – Coderhouse_  
Entrega: _PreEntrega 3 — SASS + Responsive + Animaciones + Maquetado Final_  
Año: **2025**
