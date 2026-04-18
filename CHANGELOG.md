# Changelog

Todos los cambios relevantes del proyecto se documentan en este archivo.
El formato está basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el proyecto sigue [Versionado Semántico](https://semver.org/lang/es/).

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
