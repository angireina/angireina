# Changelog

Todos los cambios relevantes del proyecto se documentan en este archivo.
El formato esta basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/) y el proyecto sigue [Versionado Semantico](https://semver.org/lang/es/).

---

## [1.16.1] - 2026-04-21

### Corregido
- Los links internos ahora calculan el alto del navbar y del menu mobile abierto antes de hacer scroll, evitando que el destino quede tapado
- El menu mobile se cierra de forma centralizada al navegar por anchors internos y sincroniza siempre `aria-expanded`
- Las secciones con `id` tienen `scroll-margin-top` en desktop para mejorar el aterrizaje desde enlaces internos

---

## [1.16.0] - 2026-04-21

### Anadido
- Posters locales `img/antes-herradura.jpg` y `img/despues-herradura.jpg` para las cards del caso **Esquinero Herradura**
- Soporte en el modal del caso para reproducir enlaces externos de **TikTok** mediante iframe embebido
- Soporte en el modal del caso para URLs de **YouTube**, Shorts, `youtu.be` y `youtube-nocookie.com`
- Fallback para videos nativos con `<video>` cuando `data-video-src` apunta a un archivo reproducible
- Nuevos bloques visuales `.social-*` para presentar **Gestion de Redes** como servicio a medida
- Nuevos bloques visuales `.shop-*` para presentar **Tienda Online** como servicio a medida

### Cambiado
- La navegacion renombra **Planes** a **Redes** y **Paginas** a **Tienda** en desktop y mobile
- La seccion `#planes-contenido` deja de mostrar tres planes con precios fijos y pasa a una propuesta editorial de gestion de redes con dashboard, calendario, entregables y CTA contextual
- La seccion `#tienda-online` deja de mostrar tres planes con precios fijos y pasa a una propuesta de tienda lista para vender, con mockup de browser, checkout, checklist y presupuesto a medida
- El caso **Muebleria Bravo** ahora compara videos reales de TikTok para el producto **Esquinero Herradura**, usando metricas tomadas de TikTok y alcance multiplataforma
- Las metricas del caso ahora incluyen compartidos ademas de vistas, likes y guardados
- El modal de video del caso reemplaza el `<video>` fijo por un contenedor dinamico que inserta iframe o video nativo segun el origen
- El modal de video del caso se centra mejor en mobile y respeta `safe-area` con limites de alto para pantallas chicas
- Los estilos del caso se ajustaron para textos menos condensados, metricas en grilla y badges con lectura mas natural

### Eliminado
- Se removio `video/combo.mp4`; el caso ya no depende de un video local pesado
- Se removio `videos/caso/README.txt`; ya no se usan placeholders locales para clips del caso

### Corregido
- El reproductor del caso limpia iframes/videos al cerrar el modal, evitando que el audio o la reproduccion queden activos
- El modal pausa videos nativos cuando la pestana queda oculta

---

## [1.15.0] - 2026-04-20

### Anadido
- Fuente auto-hospedada `fonts/Poppins-Italic.woff2` y declaracion `@font-face` para usar Poppins en estilo italic
- Banda de resultado en **Caso de estudio** con KPI principal `60x mas vistas` y aclaracion de resultado organico sin publicidad pagada
- Resumenes de performance antes/despues para el caso de TikTok: vistas, likes y guardados visibles debajo de cada card
- Badge de plataforma **TikTok** en la card de reel producido
- Soporte para abrir cards de video del caso con click en toda la card o por teclado (`Enter` / `Space`), con `role="button"`, `tabindex` y `aria-label`

### Cambiado
- El caso **Muebleria Bravo** pasa a una narrativa mas especifica sobre el producto "Esquinero Julieta" y su transformacion en TikTok
- La comparativa del caso se simplifica a una pieza antes y una pieza despues, con metricas editoriales mas directas
- Se redisenaron los estilos del caso de estudio con layout responsive nuevo, cards mas compactas, banda violeta de resultado, citas con acentos y ajustes completos para modo oscuro
- El menu mobile ahora se despliega con transicion basada en CSS Grid, usa Poppins en los links y agrega feedback tactil en `:active`
- La generacion automatica de posters del caso diferencia mejor los estados antes/despues: patron neutro para material sin editar y gradiente editorial para reels producidos

### Corregido
- Las cards de video del caso ya no dependen solo del boton interno de play para abrir el modal
- Se mejoro la accesibilidad de las cards de video del caso al hacerlas enfocables y activables por teclado

---

## [1.14.0] - 2026-04-20

### Anadido
- Metadatos SEO basicos en el `<head>`: `title`, `description`, `keywords`, `author`, `robots`, `theme-color` y `canonical`
- Tags **Open Graph** y **Twitter Cards** para previews en WhatsApp, Facebook, LinkedIn y X
- Imagen social `img/og-cover.jpg` para usar como preview 1200x630 en redes y mensajeria
- Icono `img/apple-touch-icon.png` 180x180 para iOS y accesos guardados desde dispositivos Apple
- Datos estructurados **Schema.org** con `ProfessionalService` y `FAQPage`
- Archivos `robots.txt` y `sitemap.xml` para rastreo e indexacion del dominio canonico
- Hints de performance SEO: `preconnect`, `preload` de imagen hero, `fetchpriority`, dimensiones en imagenes clave y lazy loading en media no critica

### Cambiado
- La navegacion desktop y mobile ahora incluye accesos directos a **Planes**, **Paginas** y **FAQ**
- El breakpoint de navegacion desktop pasa a `1024px` para sostener mejor la nueva cantidad de links
- Los CTAs de WhatsApp ahora usan `href` directo con mensaje codificado, manteniendo `data-wa-msg` como fuente para el comportamiento JavaScript
- Las imagenes principales y de portfolio incorporan alt text mas descriptivo, `width`/`height` y carga diferida cuando corresponde
- Los items de portfolio pasan a actuar como disparadores de modal sin depender de enlaces vacios `#`

### Corregido
- Los principales puntos de conversion ya no dependen exclusivamente de JavaScript para abrir WhatsApp con el mensaje correcto
- Se removio el placeholder de video del primer item de portfolio para evitar una media inexistente en el modal

---

## [1.13.0] - 2026-04-19

### Anadido
- Seccion **FAQ** entre **Sobre mi** y **Contacto**, con cinco preguntas frecuentes sobre tiempos, requisitos iniciales, revisiones, pagos y acompanamiento
- Acordeon accesible para FAQ en `main.js`, con apertura exclusiva por item y sincronizacion de `aria-expanded` / `aria-hidden`
- Estilos responsive para FAQ en `styles.css`, incluyendo soporte visual para modo claro y modo oscuro

### Cambiado
- La experiencia de cierre ahora incorpora una instancia previa de resolucion de dudas antes del CTA final de contacto

---

## [1.12.1] - 2026-04-19

### Cambiado
- La seccion de **Servicios** ahora deja el contenido de cada modal en un `<template class="service-modal-template">` ubicado justo debajo de su card correspondiente
- `main.js` paso a leer el texto de cada modal desde esos templates, dejando la edicion mucho mas clara y localizada en `index.html`

### Corregido
- Se limpio la estructura HTML de la grilla de **Servicios** para que las seis cards y sus bloques de modal queden ordenados como `card -> modal -> siguiente card`

---

## [1.12.0] - 2026-04-19

### Anadido
- Boton flotante de **volver arriba** visible en mobile cuando el usuario supera cierto scroll
- Integracion con `History API` para que el gesto o boton de **back** en mobile cierre primero los modales abiertos de servicios, portfolio y video

### Cambiado
- El sitio ahora arranca en **modo claro por defecto** cuando no existe una preferencia previa en `localStorage`
- El navbar dejo de comportarse como sticky en mobile y conserva el estado `scrolled` solo en desktop
- Las cards centrales destacadas de **Planes de Contenido** y **Tienda Online** pasan a usar `--reina-violet-dark` en ambos temas
- La seccion de **CTA final** usa `--reina-violet` en modo claro y `--reina-violet-dark` en modo oscuro
- Los precios de las cards de **Planes de Contenido** y **Tienda Online** pasan a usar `Poppins`
- Los botones de cierre de modales fueron recalibrados en desktop, tablet y mobile para mantener visibilidad sin invadir el contenido
- Los visuales del modal de **Servicios** ganaron mas contraste interno, separacion de capas y mejores microtextos

### Corregido
- Hover desactivado en tablet/mobile para cards de servicios, pricing, portfolio y cards del caso; los botones touch ahora usan estados `:active`
- Legibilidad de las cards de servicios mejorada con mas contraste, mejor espaciado y tags mas claros
- Modales de servicios y portfolio ajustados en mobile para evitar contenido atrapado, scroll incomodo y zonas ilegibles
- El modal de portfolio ya no superpone el boton de cierre sobre el bloque superior de texto
- La posicion de scroll de los modales se resetea al abrir para evitar reentradas a mitad de contenido
- Las seis cards de servicios ahora muestran de forma consistente la linea violeta inferior

---

## [1.11.0] - 2026-04-19

### Anadido
- Toggle de **modo claro / oscuro** en la barra de navegacion: icono luna/sol con `aria-label` dinamico y atributo `aria-pressed` sincronizado
- Script anti-flash en el `<head>` que lee `localStorage` y aplica el tema antes del primer render, evitando el parpadeo al recargar
- Persistencia del tema seleccionado en `localStorage` con clave `reina-theme`
- Soporte de `color-scheme` a nivel de `<html>` para que el navegador adapte scrollbars y controles nativos al tema activo

---

## [1.10.0] - 2026-04-18

### Anadido
- Modal contextual para las cards de **Servicios**, con informacion ampliada, entregables, tags, CTA y navegacion por teclado
- Sistema de mini mockups por servicio dentro del modal, para reforzar visualmente cada propuesta
- Visor de video centrado para la seccion **Caso de estudio**, con controles nativos, soporte de fullscreen y volumen ajustable
- Soporte para vincular assets reales de video y portada en las cards del caso mediante `data-video-src` y `data-video-poster`

### Cambiado
- Las cards de **Servicios** ahora funcionan como disparadores interactivos del modal sin alterar la grilla base
- La experiencia de video del caso paso de mini reproductor inline a preview estatico + popup vertical mas grande, consistente en mobile, tablet y desktop
- La primera card de "Despues" del caso ahora usa `video/combo.mp4` con portada `img/combo.jpg`
- El volumen inicial del visor de video quedo configurado al 35%
- Hover de las cards de video del caso ajustado para responder mas rapido y con menos delay

### Corregido
- Se corrigio el bug de desktop en **Portfolio** donde las cards encogian al finalizar el reveal; la grilla ahora conserva correctamente el `span` definido por variable CSS
- Se elimino la falsa sensacion de reproduccion en el estado inicial de las cards del caso, removiendo la barra visual de progreso del preview
- El reveal del portfolio ya no depende de mutaciones de estilos inline que rompian el layout al completarse la animacion

---

## [1.9.0] - 2026-04-18

### Anadido
- Fuentes **auto-hospedadas**: Playfair Display (Regular, Italic, SemiBold) y Poppins (Regular, Medium, SemiBold, Bold) servidas como `.woff2` desde `fonts/` - eliminada la dependencia a Google Fonts
- Nuevas variables de color: `--reina-pear-pastel: #eaf48e`, `--reina-eggplant: #4c2e7a`, `--reina-carbon: #2b2b2b`
- Favicon PNG de respaldo (`img/favicon.png`) para navegadores que no soportan SVG

### Cambiado
- `--reina-violet` actualizado de `#a88aed` a `#9f78ff`; `--reina-violet-dark` de `#8f6fe0` a `#6d4dbc`
- Grid de servicios en tablet: pasa de 3 columnas a 2 columnas para mejor legibilidad
- `min-height` de las cards de servicio reducido de 380px a 320px
- Las cards de servicios y pricing tienen ahora transicion suave para transform, box-shadow y border-color

### Corregido
- Listener `transitionend` en `main.js` que resetea el `transitionDelay` a `0ms` tras el reveal, evitando que el delay de animacion interfiera con los hovers posteriores
- Imagen de portfolio usa `position: absolute; inset: 0` para cubrir correctamente el contenedor sin desbordarse

---

## [1.8.0] - 2026-04-18

### Anadido
- Seccion **Planes - Contenido** (`#planes-contenido`) con tres planes mensuales: Presencia ($220.000), Crecimiento ($300.000) y Expansion ($420.000)
- Seccion **Tienda Online - Planes** (`#tienda-online`) con tres planes de pago unico: Basica ($180.000), Pro ($230.000) y Completa ($280.000)
- Badge "Mas elegido" en las cards de plan destacado de cada seccion de precios
- CTA de WhatsApp contextual al pie de cada seccion de precios con mensaje propio
- Nota legal al pie de cada seccion de precios (viaticos, complementos)
- Carpeta `fonts/` al proyecto

### Cambiado
- Caso de estudio ampliado con seccion de contexto narrativo (`casestudy-context`): estadisticas de resultado (+180%, 3x, 4 meses), columnas "El contexto" / "La transformacion" y bloque de cita con CTA

---

## [1.7.0] - 2026-04-18

### Anadido
- Tres nuevos servicios: **Produccion Audiovisual** (/ 04), **Tienda Online** (/ 05) y **Diseno Grafico** (/ 06)
- Comparacion visual Antes/Despues en la seccion Caso de estudio: tarjetas de video estilizadas que muestran material original vs. reels producidos
- Contador de casos (`01 / 04`) en el eyebrow de la seccion de caso de estudio
- Tags de categoria (`cs-tag`) que reemplazan las estadisticas de resultados en el header del caso

### Cambiado
- Servicio 02 renombrado de "Contenido para Redes" a **"Gestion de Redes"** - nueva descripcion y tags (Instagram, TikTok, Community)
- Texto introductorio de Servicios: "Tres formas" -> "Seis formas de trabajar juntas"
- Seccion Caso de estudio redisenada por completo: se eliminaron las estadisticas de resultados (+180%, 3x) y el timeline horizontal de tres pasos; en su lugar una comparacion editorial Antes/Despues con cita de cliente y CTA
- Grid de servicios en desktop ahora muestra 3 columnas x 2 filas (antes era una sola fila de 3)

---

## [1.6.0] - 2026-04-18

### Anadido
- Logo SVG personalizado (`img/logo_reina.svg`) en navbar y footer
- Favicon SVG personalizado (`img/favicon.svg`) en el `<head>`
- Carpeta `img/` como ubicacion centralizada para assets estaticos

### Eliminado
- Texto "REINA" y subtitulo "Angi Reina" en tipografia como logo - reemplazados por imagen SVG

---

## [1.5.0] - 2026-04-18

### Anadido
- Mensajes de WhatsApp contextuales por seccion mediante atributo `data-wa-msg`
- Handler centralizado en `main.js` que construye la URL de WhatsApp dinamicamente
- Boton "Hablemos" del navbar redirige a la seccion `#contacto` en vez de abrir WhatsApp

### Cambiado
- Todos los links de WhatsApp usan la clase `.wa-link` y mensaje propio segun su ubicacion en la pagina

---

## [1.4.0] - 2026-04-18

### Anadido
- Modal de portfolio: al hacer click en cualquier item se abre un popup con informacion del proyecto
- Atributo `data-media` en cada item del portfolio con array JSON para imagenes y videos
- Atributo `data-name`, `data-type`, `data-year`, `data-desc` y `data-tags` en cada item
- Soporte para `type: "image"` y `type: "video"` en el array de media del modal
- Cierre del modal con boton X, click en overlay o tecla Escape
- Bloqueo de scroll del body mientras el modal esta abierto

---

## [1.3.0] - 2026-04-18

### Anadido
- Animacion de resaltado en la palabra "bien" del headline del hero
- El highlight verde (color pear) se dibuja de izquierda a derecha con `background-size` animado
- La animacion se dispara cuando el elemento hace reveal, con un delay de 500ms

---

## [1.2.0] - 2026-04-18

### Cambiado
- Hover de las cards de servicios: el fondo ahora se rellena con violeta de abajo hacia arriba usando un pseudo-elemento `::before`
- Textos de la card (titulo, descripcion, tags, numero) cambian a color ivory en el hover
- Todas las transiciones de las cards unificadas a 280ms
- Velocidad del lift (`translateY`) sincronizada con la velocidad del fill de color

---

## [1.1.0] - 2026-04-18

### Cambiado
- Seccion "Caso de estudio" redisenada con nuevo layout editorial
- Header de la seccion dividido en: introduccion (izquierda) + metricas de resultado (derecha)
- Timeline convertido de vertical a horizontal con linea punteada conectando los 3 pasos
- Grilla de imagenes reorganizada en 3 columnas iguales: Antes - Proceso - Despues
- Valores de metricas (+180%, 3x) en tipografia italic violeta; "4 meses" en tipografia regular
- Eliminados bordes redondeados en imagenes del caso

---

## [1.0.0] - 2026-04-18

### Anadido
- Landing page completa en HTML, CSS y JavaScript vanilla - sin frameworks ni dependencias
- Navegacion fija con efecto glassmorphism al hacer scroll y menu hamburguesa para mobile
- Seccion Hero con grilla de 12 columnas, foto con arch-frame, estadisticas y CTAs
- Seccion "El problema real" con citas y tipografia de display
- Seccion de Servicios con 3 cards y hover de elevacion
- Seccion "Caso de estudio" con timeline y galeria de imagenes
- Seccion Portfolio con grilla asimetrica y overlay en hover
- Seccion "Sobre mi" con layout editorial y tarjeta flotante
- Seccion de CTA final con fondo violeta y elementos decorativos
- Footer con 3 columnas: marca, navegacion y contacto
- Sistema de scroll reveal con `IntersectionObserver`
- Animacion de highlight en tipografia del hero
- Variables CSS para colores, tipografias y espaciados
- Diseno responsive para mobile, tablet y desktop
- Smooth scroll nativo via CSS
