# 🍷 Guía de Vinos para Principiantes

### Proyecto Final – Desarrollo Web (Coderhouse)

**Demo online (GitHub Pages):**  
https://patoabarca.github.io/DesarrolloWeb_AbarcaPatricia/

**Demo online (Hosting externo):**  
https://vinoparaprincipiantes.42web.io/

---

## Descripción

Proyecto Final del curso **Desarrollo Web – Coderhouse**.

Este proyecto cumple con la consigna de desarrollar un sitio web con **múltiples secciones**, en archivos HTML separados, aplicando:

- Estructura HTML completa y semántica.
- Diseño **responsive** (mobile, tablet y desktop).
- Implementación total de **SASS** (variables, mixins, placeholders, maps, nesting).
- Uso de **Grids**, **Flexbox** y **Bootstrap** como framework.
- Aplicación de **SEO básico** y buenas prácticas de accesibilidad.
- Agregado de **transiciones** y **animaciones** en elementos clave.
- Publicación en **GitHub Pages** y subida a un hosting externo.

El sitio es una **guía introductoria** para personas que quieren aprender lo básico del mundo del vino, con foco en claridad, estética y una navegación amigable.

---

## Estructura general del sitio

Páginas incluidas:

- **Inicio**
- **Uvas tintas**
- **Uvas blancas**
- **Regiones**
- **Maridajes**
- **Glosario**
- **Vendimia**

Cada página utiliza una estructura semántica basada en:

- `header`, `nav`, `main`, `section`, `article`, `footer`.

Además:

- Todas las páginas referencian el **mismo CSS compilado** a partir de SASS.
- Comparten un **header y footer coherentes** para mantener identidad visual y navegación consistente.

---

## SASS — Implementación completa

El CSS fue migrado a una arquitectura **SCSS modular**, siguiendo una estructura por responsabilidad:

- `scss/abstracts/` → variables, mixins, placeholders, maps
- `scss/base/` → reset y estilos base
- `scss/layout/` → header, footer
- `scss/components/` → cards, botones, elementos reutilizables
- `scss/pages/` → estilos por página (uvas, glosario, vendimia, index, etc.)
- `scss/style.scss` → archivo principal que compila al CSS final

### ✔ Elementos de SASS utilizados

- **Variables**  
  Para colores, sombras, tamaños y espaciados.

- **Maps**  
  Paleta centralizada utilizando `map.get()` para obtener colores como `tinto`, `rose`, `wash`, `header-bg`, etc.

- **Mixins personalizados**

  - `smooth-transition` → transiciones reutilizables en botones, links y cards.
  - `flex-col` → layouts en columna con `gap` controlado.
  - `object-cover` → helper para imágenes que deben ocupar todo el contenedor sin deformarse.

- **Extend (%placeholders)**

  - `%card-base` → estilo base de todas las cards, para mantener coherencia y evitar repetición de código.

- **Nesting**  
  Utilizado de forma ordenada en `header`, `footer`, cards e intro, respetando niveles lógicos.

- **Media queries por rangos de dispositivo**, ubicadas dentro de los partials relevantes:
  - Mobile (≤ 480px)
  - Tablet (≤ 991px)
  - Ajustes finos para desktop cuando corresponde.

### ✔ Gradiente personalizado (Intro)

La sección _Intro_ del Home utiliza un **gradiente personalizado** construido con tres colores del mapa de SASS mediante `linear-gradient()`.

Este gradiente aporta:

- Profundidad visual.
- Contraste con el contenido textual.
- Una primera impresión coherente con la estética del vino.

---

## Uso de Bootstrap, Flex y Grid

### Bootstrap

El proyecto utiliza **Bootstrap 5** como framework principal:

- Navbar responsive con menú colapsable.
- Sistema de grillas (`container`, `row`, `col-*`) para el layout general.
- Utilidades de espaciado (`g-*`, `mb-*`, `pt-*`, etc.).
- Clases para proporciones (`ratio-16x9`, `ratio-4x3`) en imágenes clave.

### CSS Grid

Se utiliza **CSS Grid** en situaciones donde la maquetación por filas/columnas es más natural, por ejemplo:

- Fichas de **Uvas**.
- Distribución de las etapas de **Vendimia**, especialmente en versiones desktop y tablet.

### Flexbox

**Flexbox** se emplea para:

- Alinear elementos dentro del **header** y **navbar**.
- Organizar contenido en el **footer** (texto + redes sociales).
- Definir la estructura interna de las **cards** (contenido en columna).
- Ajustar la presentación del **Intro** del Home, combinando grid de Bootstrap (`row` + `col-*`) con flex para centrar texto e imagen animada.

---

## SEO y accesibilidad

Se aplicaron prácticas básicas de **SEO** y **accesibilidad**:

- `lang="es"` en el elemento `<html>`.
- Títulos jerárquicos (`h1`, `h2`, `h3`) por página.
- `<title>` y `<meta name="description">` específicos por página (en las principales).
- Atributos `alt` descriptivos en todas las imágenes.
- Contrastes adecuados entre texto y fondo.
- Navegación clara, con estructura semántica y elementos repetidos (header/nav/footer) consistentes.
- Uso de CDN para el framework (Bootstrap), mejorando la carga percibida.

---

## Transiciones, animaciones e interactividad

### Imagen animada del Intro (copa)

- Animación `float-wine` creada con `@keyframes`.
- Movimiento vertical suave + leve zoom.
- Borde circular y sombra decorativa para resaltar la imagen principal.

### Cards (Home, Glosario, Vendimia)

**Cards destacadas de la home**  
(“Conocé las uvas”, “Explorá regiones”, “Maridajes simples”):

- Elevación con `transform: translateY(...)` en hover.
- Sombra más marcada (`box-shadow`) al pasar el cursor.
- Zoom suave de la imagen (`transform: scale(1.03)`) en la figura.

**Cards de glosario y vendimia**:

- Elevación más sutil.
- Sombra ligera para marcar jerarquía y mejorar la lectura visual.

### Navbar

- Hover con cambio de color, fondo y borde.
- Uso del mixin `smooth-transition(all, 0.2s)` para mantener coherencia en las animaciones.

### Botones y enlaces

- Subrayado y cambio de color con transición suave.
- Efectos que refuerzan la interacción sin recargar la interfaz.

---

## Responsive Design

El sitio fue diseñado y probado para ser **responsive**, contemplando distintos tamaños de pantalla.

### Mobile (≤ 480px)

- Cards a **una sola columna**, para mantener legibilidad.
- Navbar reducida con menú colapsable.
- Intro centrada, con figura más pequeña y texto ajustado.
- Sección Vendimia reestructurada en formato vertical.
- Ajuste de márgenes y espaciados para evitar `overflow-x`.

### Tablet (481–991px)

- Ajuste de grillas y tipografías.
- Vendimia reorganizada para mantener claridad en columnas.
- Mayor separación visual entre secciones.

### Desktop (≥ 992px)

- Layout amplio y aireado.
- Vendimia en formato horizontal, aprovechando la pantalla.
- Fichas de Uvas distribuidas en **2 o más columnas** según la sección.
- Intro equilibrada, con el texto y la imagen animada compartiendo el espacio.

---

## Optimización y buenas prácticas

Se tuvieron en cuenta criterios de **optimización** y eficiencia:

### Imágenes

- Redimensionadas a tamaños acordes al diseño (por ejemplo, 16:9, 4:3 o cuadradas según la sección).
- Uso de `object-fit: cover` para evitar deformaciones.
- Reutilización de estilos y clases para no duplicar reglas de CSS.

### CSS / SASS

- Código SCSS dividido por responsabilidad (abstracts, base, layout, components, pages).
- **Reciclado de código** mediante mixins, placeholders y variables.
- Compilación a un solo archivo CSS final para producción, minimizando la cantidad de recursos que cargar.

### Framework y recursos externos

- Uso del CDN oficial de **Bootstrap**, lo que mejora tiempos de carga percibidos.
- Librerías sólo en las páginas que las necesitan, evitando sobrecarga innecesaria.

### SEO técnico (sitemap y robots)

- Se agregó un archivo **`sitemap.xml`** en la raíz del sitio, listando las páginas principales:  
  `index.html`, `uvas_tintas.html`, `uvas_blancas.html`, `regiones.html`, `vendimia.html`, `maridajes.html`, `glosario.html`.
- Se configuró **`robots.txt`** para:
  - Permitir el acceso a todo el sitio a los buscadores.
  - Declarar explícitamente la ubicación del sitemap:  
    `Sitemap: https://vinoparaprincipiantes.42web.io/sitemap.xml`

Con esto se facilita el rastreo y la indexación del contenido por parte de los buscadores.

### Performance general

- Animaciones livianas y no invasivas (sin abusar de sombras pesadas o transformaciones continuas).
- Estructura HTML clara y sin anidar elementos innecesarios.

---

## Publicación y hosting

- ✅ **GitHub Pages** activado y funcionando:

  **Demo online:**  
  https://patoabarca.github.io/DesarrolloWeb_AbarcaPatricia/

- ✅ **Hosting externo** configurado y en funcionamiento:

  **Demo online (hosting):**  
  https://vinoparaprincipiantes.42web.io/

El archivo principal del sitio se llama `index.html`, respetando el estándar esperado por los servicios de hosting.

---

## Git y GitHub

El repositorio incluye:

- Todos los archivos del proyecto (HTML, SCSS, CSS compilado, imágenes, assets).
- Archivo `.gitignore` configurado.
- Historial de commits con mensajes claros, reflejando:
  - Estructura inicial del sitio.
  - Migración a SASS.
  - Ajustes de responsive.
  - Incorporación de animaciones.
  - Optimización y correcciones finales.
- Carpeta `scss/` completa, junto al CSS compilado utilizado en producción.
- GitHub Pages configurado directamente desde el repositorio.

**Repositorio:**  
https://github.com/patoabarca/DesarrolloWeb_AbarcaPatricia

---

## Ajustes realizados tras la devolución de la Pre-Entrega 3

Luego del feedback, revisé el uso de **Flexbox** en el proyecto. Eliminé el único caso donde no cumplía una función útil —el contenedor principal de _Vendimia_— y lo reemplacé por **CSS Grid**, más adecuado para estructurar una lista de tarjetas en columna.

Los demás usos de Flexbox permanecen porque cumplen funciones reales y necesarias dentro del layout:

- **Navbar y header:** alineación horizontal del logo, título y menú.
- **Footer:** orden y alineación de columnas e íconos de redes.
- **Cards:** estructura en columna para mantener coherencia interna.
- **Glosario:** uso del mixin `flex-col` para separar elementos y mantener ritmo visual.
- **Intro del Home:** combinación del grid de Bootstrap (`row` + `col-*`) con Flexbox para centrar el texto y la imagen animada dentro de la sección.

Además, mejoré detalles en **mobile (≤ 480px)**: centrado del texto, ajuste de márgenes y optimización de lectura en pantallas pequeñas.

Con estos cambios, el proyecto queda más ordenado, semántico y alineado con todos los puntos marcados en la devolución.

---

**Patricia Abarca**  
Curso: _Desarrollo Web – Coderhouse_  
Entrega: _Proyecto Final — Sitio web completo_  
Año: **2025**
