# 🍷 Guía de Vinos para Principiantes

### 🧪 Pre-Entrega 3 — SASS + Responsive + Estructura final

**Proyecto:** PreEntrega3_Abarca  
**Demo online:** https://patoabarca.github.io/DesarrolloWeb_AbarcaPatricia/

---

## Descripción

Este proyecto forma parte de la **Pre-Entrega 3** del curso **Desarrollo Web – Coderhouse**.  
En esta instancia se desarrolló:

- La estructura final del sitio web.
- El diseño responsive completo para mobile, tablet y desktop.
- La implementación total de **SASS**: variables, mixins, extend, maps y nesting.
- Transiciones y animaciones aplicadas a elementos destacados.
- Optimización general.
- Publicación en GitHub Pages.

El sitio es una guía introductoria al mundo del vino, creada para principiantes.

---

## Estructura general

Secciones del sitio:

- **Inicio**
- **Uvas tintas**
- **Uvas blancas**
- **Regiones argentinas**
- **Maridajes**
- **Glosario**
- **Vendimia** (nueva sección en esta entrega)

Todas las páginas comparten una estructura semántica con:

`header`, `nav`, `main`, `section`, `article`, `footer`.

---

## SASS — Implementación completa

Todo el CSS fue migrado a una arquitectura SCSS modular:

```
scss/
│── abstracts/      → variables, mixins, placeholders, maps
│── base/           → reset y estilos base
│── layout/         → header, footer
│── components/     → cards, botones, elementos reutilizables
│── pages/          → estilos por página
│── style.scss      → archivo principal que compila al CSS final
```

### Elementos de SASS utilizados

- Variables: paleta de colores, sombras, tamaños.
- Maps: uso de `map.get()` para colores globales.
- Mixins personalizados:
  - `smooth-transition`
  - `flex-col`
  - `object-cover`
- Extend (%placeholders):
  - `%card-base` para tarjetas reutilizables.
- Nesting limpio para header, footer, main y páginas.
- Media queries anidadas:
  - Mobile (≤480px)
  - Tablet (≤991px)
- Transiciones y animaciones:
  - Hover en cards
  - Zoom leve en imágenes
- Gradiente personalizado:
  - Implementado en la sección **Intro** de la página de Inicio.
  - Generado mediante `linear-gradient()` usando colores obtenidos desde el mapa global (`map.get(vars.$colors, ...)`), garantizando coherencia visual.

---

## Responsive design

### Mobile (≤480px)

- Cards apiladas en una sola columna.
- Navbar compacta.
- Textos reducidos.
- Sección Vendimia en formato vertical.

### Tablet (481–991px)

- Grillas ajustadas.
- Vendimia reorganizada para lectura fluida.
- Adecuación de márgenes y tipografías.

### Desktop (≥992px)

- Grillas amplias.
- Fichas de Uvas en 2 columnas.
- Vendimia en tarjetas horizontales.
- Layout limpio y espacioso.

---

## Transiciones y animaciones aplicadas

El proyecto incluye transiciones y animaciones sutiles para mejorar la experiencia visual:

- **Cards**

  - Elevación con `transform: translateY()`
  - Sombras dinámicas
  - Zoom suave de imágenes en el hover
  - Transición unificada mediante el mixin `smooth-transition`

- **Imagen animada del Intro (Home)**

  - Animación personalizada `float-wine`
  - Movimiento suave alternado con `@keyframes`
  - Aplicada a `<img>` dentro de `.intro-figure`

- **Navbar**

  - Transición en color, fondo y borde de los links (`hover` y `active`)
  - Implementada con `smooth-transition(all, .2s)`

- **Botones y enlaces**
  - Cambio de color y subrayado con transición suave

---

## Nueva sección: Vendimia

En esta entrega se rediseñó completamente la vista:

- Ahora utiliza **tarjetas responsivas**.
- Cada etapa incluye:
  - Imagen 16:9
  - Texto claro
  - Sombra + transición suave
- Perfecta compatibilidad entre mobile/tablet/desktop.
- Diseño accesible y uniforme con el resto del sitio.

---

## Uso de Bootstrap, Flex y Grid

### Bootstrap

- Navbar responsive (`navbar-expand-lg`)
- Grillas (`row`, `col-*`)
- Utilidades de espaciado
- Proporciones de imágenes (`ratio`)

### Grid

- Fichas de uvas
- Etapas de Vendimia

### Flexbox

- Header
- Footer
- Cards

---

## Optimización

- Imágenes optimizadas y centradas con `object-fit: cover`.
- Carga eficiente y coherencia visual.
- Código SCSS ordenado y limpio.
- CSS final compilado y minificado.

---

## Git y GitHub

El repositorio incluye:

- Todos los archivos necesarios para la visualización.
- `.gitignore` correctamente configurado.
- Historial de commits claro.
- Publicación activa en GitHub Pages.
- Arquitectura SCSS visible en `/scss`.

### Repositorio

https://github.com/patoabarca/DesarrolloWeb_AbarcaPatricia

---

## Autoría

**Patricia Abarca**  
Curso: Desarrollo Web – Coderhouse  
Entrega: PreEntrega 3 — SASS + Responsive + Maquetado Final  
Año: 2025
