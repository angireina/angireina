# Changelog

Todos los cambios relevantes del proyecto se documentan en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el proyecto sigue [Versionado Semántico](https://semver.org/lang/es/).

---

## [1.12.0] — 2026-04-19

### Añadido
- Botón flotante de **volver arriba** visible en mobile cuando el usuario supera cierto scroll
- Integración con `History API` para que el gesto o botón de **back** en mobile cierre primero los modales abiertos de servicios, portfolio y video

### Cambiado
- El sitio ahora arranca en **modo claro por defecto** cuando no existe una preferencia previa en `localStorage`
- El navbar dejó de comportarse como sticky en mobile y conserva el estado `scrolled` solo en desktop
- Las cards centrales destacadas de **Planes de Contenido** y **Tienda Online** pasan a usar `--reina-violet-dark` en ambos temas
- La sección de **CTA final** usa `--reina-violet` en modo claro y `--reina-violet-dark` en modo oscuro
- Los precios de las cards de **Planes de Contenido** y **Tienda Online** pasan a usar `Poppins`
- Los botones de cierre de modales fueron recalibrados en desktop, tablet y mobile para mantener visibilidad sin invadir el contenido
- Los visuales del modal de **Servicios** ganaron más contraste interno, separación de capas y mejores microtextos

### Corregido
- Hover desactivado en tablet/mobile para cards de servicios, pricing, portfolio y cards del caso; los botones touch ahora usan estados `:active`
- Legibilidad de las cards de servicios mejorada con más contraste, mejor espaciado y tags más claros
- Modales de servicios y portfolio ajustados en mobile para evitar contenido atrapado, scroll incómodo y zonas ilegibles
- El modal de portfolio ya no superpone el botón de cierre sobre el bloque superior de texto
- La posición de scroll de los modales se resetea al abrir para evitar reentradas a mitad de contenido
- Las seis cards de servicios ahora muestran de forma consistente la línea violeta inferior

---

## [1.11.0] — 2026-04-19

### Añadido
- Toggle de **modo claro / oscuro** en la barra de navegación: ícono luna/sol con `aria-label` dinámico y atributo `aria-pressed` sincronizado
- Script anti-flash en el `<head>` que lee `localStorage` y aplica el tema antes del primer render, evitando el parpadeo al recargar
- Persistencia del tema seleccionado en `localStorage` con clave `reina-theme`
- Soporte de `color-scheme` a nivel de `<html>` para que el navegador adapte scrollbars y controles nativos al tema activo

---

## [1.10.0] — 2026-04-18

### Añadido
- Modal contextual para las cards de **Servicios**, con información ampliada, entregables, tags, CTA y navegación por teclado
- Sistema de mini mockups por servicio dentro del modal, para reforzar visualmente cada propuesta
- Visor de video centrado para la sección **Caso de estudio**, con controles nativos, soporte de fullscreen y volumen ajustable
- Soporte para vincular assets reales de video y portada en las cards del caso mediante `data-video-src` y `data-video-poster`

### Cambiado
- Las cards de **Servicios** ahora funcionan como disparadores interactivos del modal sin alterar la grilla base
- La experiencia de video del caso pasó de mini reproductor inline a preview estático + popup vertical más grande, consistente en mobile, tablet y desktop
- La primera card de "Después" del caso ahora usa `video/combo.mp4` con portada `img/combo.jpg`
- El volumen inicial del visor de video quedó configurado al 35%
- Hover de las cards de video del caso ajustado para responder más rápido y con menos delay

### Corregido
- Se corrigió el bug de desktop en **Portfolio** donde las cards encogían al finalizar el reveal; la grilla ahora conserva correctamente el `span` definido por variable CSS
- Se eliminó la falsa sensación de reproducción en el estado inicial de las cards del caso, removiendo la barra visual de progreso del preview
- El reveal del portfolio ya no depende de mutaciones de estilos inline que rompían el layout al completarse la animación

---

## [1.9.0] — 2026-04-18

### Añadido
- Fuentes **auto-hospedadas**: Playfair Display (Regular, Italic, SemiBold) y Poppins (Regular, Medium, SemiBold, Bold) servidas como `.woff2` desde `fonts/` — eliminada la dependencia a Google Fonts
- Nuevas variables de color: `--reina-pear-pastel: #eaf48e`, `--reina-eggplant: #4c2e7a`, `--reina-carbon: #2b2b2b`
- Favicon PNG de respaldo (`img/favicon.png`) para navegadores que no soportan SVG

### Cambiado
- `--reina-violet` actualizado de `#a88aed` a `#9f78ff`; `--reina-violet-dark` de `#8f6fe0` a `#6d4dbc`
- Grid de servicios en tablet: pasa de 3 columnas a 2 columnas para mejor legibilidad
- `min-height` de las cards de servicio reducido de 380px a 320px
- Las cards de servicios y pricing tienen ahora transición suave para transform, box-shadow y border-color

### Corregido
- Listener `transitionend` en `main.js` que resetea el `transitionDelay` a `0ms` tras el reveal, evitando que el delay de animación interfiera con los hovers posteriores
- Imagen de portfolio usa `position: absolute; inset: 0` para cubrir correctamente el contenedor sin desbordarse

---

## [1.8.0] — 2026-04-18

### Añadido
- Sección **Planes · Contenido** (`#planes-contenido`) con tres planes mensuales: Presencia ($220.000), Crecimiento ($300.000) y Expansión ($420.000)
- Sección **Tienda Online · Planes** (`#tienda-online`) con tres planes de pago único: Básica ($180.000), Pro ($230.000) y Completa ($280.000)
- Badge "Más elegido" en las cards de plan destacado de cada sección de precios
- CTA de WhatsApp contextual al pie de cada sección de precios con mensaje propio
- Nota legal al pie de cada sección de precios (viáticos, complementos)
- Carpeta `fonts/` al proyecto

### Cambiado
- Caso de estudio ampliado con sección de contexto narrativo (`casestudy-context`): estadísticas de resultado (+180%, 3×, 4 meses), columnas "El contexto" / "La transformación" y bloque de cita con CTA

---

## [1.7.0] — 2026-04-18

### Añadido
- Tres nuevos servicios: **Producción Audiovisual** (/ 04), **Tienda Online** (/ 05) y **Diseño Gráfico** (/ 06)
- Comparación visual Antes/Después en la sección Caso de estudio: tarjetas de video estilizadas que muestran material original vs. reels producidos
- Contador de casos (`01 / 04`) en el eyebrow de la sección de caso de estudio
- Tags de categoría (`cs-tag`) que reemplazan las estadísticas de resultados en el header del caso

### Cambiado
- Servicio 02 renombrado de "Contenido para Redes" a **"Gestión de Redes"** — nueva descripción y tags (Instagram, TikTok, Community)
- Texto introductorio de Servicios: "Tres formas" → "Seis formas de trabajar juntas"
- Sección Caso de estudio rediseñada por completo: se eliminaron las estadísticas de resultados (+180%, 3×) y el timeline horizontal de tres pasos; en su lugar una comparación editorial Antes/Después con cita de cliente y CTA
- Grid de servicios en desktop ahora muestra 3 columnas × 2 filas (antes era una sola fila de 3)

---

## [1.6.0] — 2026-04-18

### Añadido
- Logo SVG personalizado (`img/logo_reina.svg`) en navbar y footer
- Favicon SVG personalizado (`img/favicon.svg`) en el `<head>`
- Carpeta `img/` como ubicación centralizada para assets estáticos

### Eliminado
- Texto "REINA" y subtítulo "Angi Reina" en tipografía como logo — reemplazados por imagen SVG

---

## [1.5.0] — 2026-04-18

### Añadido
- Mensajes de WhatsApp contextuales por sección mediante atributo `data-wa-msg`
- Handler centralizado en `main.js` que construye la URL de WhatsApp dinámicamente
- Botón "Hablemos" del navbar redirige a la sección `#contacto` en vez de abrir WhatsApp

### Cambiado
- Todos los links de WhatsApp usan la clase `.wa-link` y mensaje propio según su ubicación en la página

---

## [1.4.0] — 2026-04-18

### Añadido
- Modal de portfolio: al hacer click en cualquier item se abre un popup con información del proyecto
- Atributo `data-media` en cada item del portfolio con array JSON para imágenes y videos
- Atributo `data-name`, `data-type`, `data-year`, `data-desc` y `data-tags` en cada item
- Soporte para `type: "image"` y `type: "video"` en el array de media del modal
- Cierre del modal con botón X, click en overlay o tecla Escape
- Bloqueo de scroll del body mientras el modal está abierto

---

## [1.3.0] — 2026-04-18

### Añadido
- Animación de resaltado en la palabra "bien" del headline del hero
- El highlight verde (color pear) se dibuja de izquierda a derecha con `background-size` animado
- La animación se dispara cuando el elemento hace reveal, con un delay de 500ms

---

## [1.2.0] — 2026-04-18

### Cambiado
- Hover de las cards de servicios: el fondo ahora se rellena con violeta de abajo hacia arriba usando un pseudo-elemento `::before`
- Textos de la card (título, descripción, tags, número) cambian a color ivory en el hover
- Todas las transiciones de las cards unificadas a 280ms
- Velocidad del lift (`translateY`) sincronizada con la velocidad del fill de color

---

## [1.1.0] — 2026-04-18

### Cambiado
- Sección "Caso de estudio" rediseñada con nuevo layout editorial
- Header de la sección dividido en: introducción (izquierda) + métricas de resultado (derecha)
- Timeline convertido de vertical a horizontal con línea punteada conectando los 3 pasos
- Grilla de imágenes reorganizada en 3 columnas iguales: Antes · Proceso · Después
- Valores de métricas (+180%, 3×) en tipografía italic violeta; "4 meses" en tipografía regular
- Eliminados bordes redondeados en imágenes del caso

---

## [1.0.0] — 2026-04-18

### Añadido
- Landing page completa en HTML, CSS y JavaScript vanilla — sin frameworks ni dependencias
- Navegación fija con efecto glassmorphism al hacer scroll y menú hamburguesa para mobile
- Sección Hero con grilla de 12 columnas, foto con arch-frame, estadísticas y CTAs
- Sección "El problema real" con citas y tipografía de display
- Sección de Servicios con 3 cards y hover de elevación
- Sección "Caso de estudio" con timeline y galería de imágenes
- Sección Portfolio con grilla asimétrica y overlay en hover
- Sección "Sobre mí" con layout editorial y tarjeta flotante
- Sección de CTA final con fondo violeta y elementos decorativos
- Footer con 3 columnas: marca, navegación y contacto
- Sistema de scroll reveal con `IntersectionObserver`
- Animación de highlight en tipografía del hero
- Variables CSS para colores, tipografías y espaciados
- Diseño responsive para mobile, tablet y desktop
- Smooth scroll nativo via CSS
