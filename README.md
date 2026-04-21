# REINA - Angi Reina

Landing page personal de **Angi Reina**, disenadora grafica y community manager radicada en Rosario, Argentina. El sitio presenta su propuesta de valor, servicios, planes, caso de estudio, portfolio, preguntas frecuentes y canales de contacto.

---

## Que hace este sitio

La pagina funciona como herramienta de presentacion y captacion para la marca personal de Angi. La experiencia esta pensada para llevar al visitante desde la propuesta de valor hasta la resolucion de dudas frecuentes y el contacto directo por WhatsApp o email, con una narrativa visual consistente y una UX cuidada en desktop, tablet y mobile.

### Secciones

| Seccion | Descripcion |
|---|---|
| **Nav** | Navegacion principal con links a servicios, redes, tienda, caso, portfolio, sobre mi y FAQ; incluye menu hamburguesa en mobile, toggle de tema y estado sticky solo en desktop |
| **Hero** | Presentacion principal con titular, descripcion, estadisticas y CTAs |
| **El problema real** | Seccion editorial con citas que conectan con dolores concretos del cliente ideal |
| **Servicios** | Seis cards de servicio con modal contextual, entregables, CTA, visual propio por servicio y contenido editable debajo de cada card |
| **Gestion de Redes** | Servicio a medida para redes sociales con estrategia, calendario, piezas, historias, optimizacion e informe mensual |
| **Tienda Online** | Servicio a medida para tienda en Tiendanube con diseno, productos, pagos, envios, dominio, correo y SEO basico |
| **Caso de estudio** | Caso real con comparativa antes/despues para TikTok, metricas organicas, banda de resultado 60x y cards con embed externo |
| **Portfolio** | Grilla asimetrica con modal por proyecto y media ampliada |
| **Sobre mi** | Bio personal ampliada, filosofia de trabajo, postura profesional y disponibilidad |
| **FAQ** | Acordeon de cinco preguntas frecuentes sobre tiempos, inicio del proceso, revisiones, pagos y acompanamiento |
| **Contacto (CTA)** | Bloque final full-height con invitacion a conversar 15 minutos por WhatsApp o email |
| **Footer** | Navegacion secundaria, marca y datos de contacto |

---

## Interacciones y UX

- El sitio arranca en **modo claro por defecto**. Si existe una preferencia previa en `localStorage` (`reina-theme`), se respeta.
- El toggle de tema actualiza `data-theme`, sincroniza `aria-label` y `aria-pressed`, y evita flash inicial con un script en el `<head>`.
- En mobile hay un boton flotante para **volver arriba** cuando el usuario ya hizo scroll.
- El menu mobile usa apertura/cierre animado con CSS Grid, mantiene los links en Poppins y agrega feedback `:active`.
- Los links internos calculan el offset del navbar y del menu mobile abierto antes de hacer scroll, para que las secciones no queden tapadas al navegar desde el menu.
- El navbar deja de comportarse como sticky en mobile; el estado `scrolled` queda reservado a desktop.
- En dispositivos touch, los hover de cards se limitan a desktop y los botones responden con estados `:active`.
- Las cards de video del caso de estudio se pueden abrir haciendo click en toda la card o con teclado (`Enter` / `Space`), con `role="button"` y `aria-label` dinamico.
- El modal de video del caso soporta enlaces de TikTok, YouTube y videos nativos; usa embeds externos cuando corresponde y posters locales cuando se definen.
- Los modales de servicios, portfolio y video integran historial del navegador en mobile: el gesto o boton de **back** cierra primero el popup abierto.
- Los modales de servicios y portfolio fueron ajustados para mejorar legibilidad, scroll y espacio util en mobile.
- La seccion de **FAQ** funciona como acordeon accesible: solo una respuesta queda abierta a la vez, con `aria-expanded` y `aria-hidden` sincronizados.
- Los CTAs principales a WhatsApp tienen `href` directo con mensaje prearmado y mantienen `data-wa-msg` para que JavaScript pueda regenerar el enlace contextual.

---

## SEO / SEM y performance

El proyecto incluye configuracion base para indexacion, previews sociales y conversion:

- **SEO basico en `<head>`**: `title`, `description`, `keywords`, `author`, `robots`, `theme-color` y `canonical` apuntando a `https://angireina.com/`.
- **Open Graph y Twitter Cards**: tags para Facebook, WhatsApp, LinkedIn y X, usando `img/og-cover.jpg` como imagen social principal.
- **Schema.org**: datos estructurados `ProfessionalService` para la marca/servicios y `FAQPage` para las preguntas frecuentes.
- **Crawling**: `robots.txt` permite el rastreo y referencia `sitemap.xml`; el sitemap declara la home canonica con `lastmod`, `changefreq` y `priority`.
- **Performance SEO**: preconnect a hosts de imagenes, preload de la imagen hero con `fetchpriority="high"`, `width`/`height` en imagenes clave y `loading="lazy"` en media no critica.
- **SEM / conversion**: los enlaces de WhatsApp tienen mensajes codificados en el `href` como fallback sin JS, utiles para trafico de anuncios, previews y navegadores con scripts limitados.

---

## Tecnologias

El sitio esta construido integramente con tecnologias web nativas, sin frameworks ni dependencias externas:

- **HTML5** para estructura semantica
- **CSS3** para layout responsive, variables, animaciones, estados y theming
- **JavaScript vanilla** para scroll reveal, menu mobile, modales, embeds de video externos, FAQ acordeon, WhatsApp contextual, tema claro/oscuro, boton mobile de volver arriba e integracion con History API en modales mobile
- **Fuentes auto-hospedadas**: Playfair Display y Poppins servidas como `.woff2` desde `fonts/`, incluyendo Poppins Italic para enfasis editorial

No requiere build. Se puede abrir `index.html` directamente en el navegador.

---

## Estructura de archivos

```text
landing-vanilla/
|-- index.html         - estructura principal de la pagina
|-- styles.css         - estilos globales, responsive, temas y estados
|-- main.js            - interacciones, modales, tema y comportamiento mobile
|-- img/
|   |-- logo_reina.svg - logo usado en nav y footer
|   |-- favicon.svg    - favicon principal
|   |-- favicon.png    - fallback PNG
|   |-- apple-touch-icon.png - icono 180x180 para iOS y accesos guardados
|   |-- og-cover.jpg   - imagen 1200x630 para Open Graph y Twitter Cards
|   |-- antes-herradura.jpg   - poster del video original del caso de estudio
|   |-- despues-herradura.jpg - poster del reel editado del caso de estudio
|   `-- combo.jpg      - asset historico de portada del caso
|-- fonts/             - Playfair Display y Poppins en `.woff2`, incluida Poppins Italic
|-- robots.txt         - reglas de rastreo y referencia al sitemap
|-- sitemap.xml        - sitemap publico de la landing
|-- README.md
`-- CHANGELOG.md
```

---

## Personalizacion rapida

### Cambiar imagenes

Reemplaza el `src` de las etiquetas `<img>` en `index.html`.

- Hero: buscar `class="hero-portrait-img"`
- Sobre mi: buscar `data-testid="about-portrait"`

### Cambiar mensajes de WhatsApp

Cada boton usa `data-wa-msg` con el texto a enviar y tambien un `href` directo a `https://wa.me/...` con el mensaje codificado.

Cuando cambies un CTA, actualiza ambos valores:

- `data-wa-msg` para el comportamiento JavaScript
- `href` para fallback sin JavaScript, previews, crawlers y trafico de campanas

### Editar contenido de los modales de servicios

Cada card de servicio tiene ahora su bloque editable justo debajo en `index.html`, usando esta estructura:

```html
<article class="service-card">...</article>

<!-- MODAL CARD X -->
<template class="service-modal-template">
  ...
</template>
```

Dentro de cada `template` vas a encontrar comentarios y nodos separados para editar el modal de esa card sin tocar JavaScript:

- `data-service-modal-type`
- `data-service-modal-hook`
- `data-service-modal-name`
- `data-service-modal-desc`
- `data-service-modal-includes`
- `data-service-modal-ideal`
- `data-service-modal-approach`
- `data-service-modal-tags`
- `data-service-modal-wa-msg`

`main.js` toma el contenido del `template` que esta inmediatamente debajo de cada card y lo inyecta en el modal global al hacer click.

### Ajustar visuales de los servicios

Los mini visuales del modal de servicios se construyen en `index.html` dentro de `#smodalPreview` y se estilizan en `styles.css` con prefijos `.svisual-*` y `.smodal-*`.

### Agregar imagenes o videos al portfolio

Cada item del portfolio usa `data-media` con un array JSON:

```json
[
  { "type": "image", "src": "img/proyecto.jpg", "alt": "descripcion" },
  { "type": "video", "src": "video/proyecto.mp4", "poster": "img/thumbnail.jpg" }
]
```

### Actualizar videos o embeds del caso de estudio

Cada card comparativa usa `data-video-src` y, opcionalmente, `data-video-poster`. `main.js` detecta enlaces de TikTok, YouTube o archivos de video nativos:

- TikTok: URL publica del video, convertida a `https://www.tiktok.com/player/v1/...`
- YouTube: URL normal, `youtu.be`, Shorts o embed, convertida a `youtube-nocookie.com`
- Video nativo: archivo `.mp4` u otro recurso reproducible por `<video>`

Las cards se inicializan como botones accesibles desde `main.js`, por lo que pueden abrir el modal con click, `Enter` o `Space`.

Ejemplo:

```html
<div
  class="cv-card cv-card--after"
  data-video-src="https://www.tiktok.com/@muebleriabravovgg/video/7611299540032949524"
  data-video-platform="tiktok"
  data-video-poster="img/despues-herradura.jpg">
</div>
```

Si no se define `data-video-poster`, `main.js` usa thumbnail de YouTube cuando corresponde o genera una portada editorial automatica.

### Actualizar metricas del caso de estudio

Las metricas visibles del caso viven en `index.html`, dentro de `#caso`:

- `.cs-post-summary` para las metricas de cada pieza antes/despues: vistas, likes, guardados y compartidos
- `.cs-result-band` para el resultado principal, actualmente `60x mas vistas`
- `.cs-context-grid` para explicar punto de partida y trabajo realizado
- `.cs-quote-block` para el cierre estrategico y CTA

Si cambias el caso, actualiza tambien los tags del header (`.cs-tag`) y los textos del modal de video que se toman desde los contenidos visibles de cada card.

### Actualizar Gestion de Redes y Tienda Online

Las secciones `#planes-contenido` y `#tienda-online` ya no muestran planes cerrados con precios fijos. Funcionan como bloques comerciales a medida:

- `#planes-contenido` usa clases `.social-*` para Gestion de Redes, visual de dashboard, lista de entregables y CTA contextual.
- `#tienda-online` usa clases `.shop-*` para Tienda Online, mockup de tienda, checklist de configuracion y CTA contextual.

Para cambiar el alcance, edita los items de `.social-features-grid` o `.shop-features-grid`. Para cambiar la consulta de WhatsApp, actualiza el `href` y el `data-wa-msg` del CTA correspondiente.

### Editar Sobre mi y CTA final

La bio vive en `#sobre-mi`, dentro de `.about-bio`. Actualmente funciona como una narracion personal ampliada: origen, llegada a Rosario, primeros pasos con herramientas de diseno, mirada critica sobre estrategia y forma de acompanamiento.

El CTA final vive en `#contacto` y esta pensado como cierre directo:

- Eyebrow: `— ULTIMO PASO —`
- Headline: invitacion a arrancar
- Subtexto: conversacion de 15 minutos
- WhatsApp: mensaje prearmado para coordinar por donde empezar

Si cambias el texto del CTA, actualiza tanto el `href` codificado de WhatsApp como `data-wa-msg`.

### Editar preguntas frecuentes

La seccion vive en `index.html` dentro de `#faq`. Cada pregunta usa un bloque `.faq-item` con:

- Un boton `.faq-question` con `aria-expanded`
- Un panel `.faq-answer` con `aria-hidden`
- IDs emparejados entre `aria-controls` y `aria-labelledby`

Si agregas o quitas preguntas, manten la numeracion visual (`.faq-number`) y los IDs de trigger/panel unicos para conservar la accesibilidad del acordeon.

Si modificas el contenido de la FAQ visible, replica el cambio en el JSON-LD `FAQPage` dentro del `<head>` para que los datos estructurados sigan coincidiendo con la pagina.

### Actualizar SEO, redes y buscadores

Los metadatos principales viven en el `<head>` de `index.html`.

Revisa estos bloques cuando cambie el dominio, la propuesta comercial o la imagen social:

- `SEO BASICO`: titulo, descripcion, keywords, robots, theme-color y canonical
- `OPEN GRAPH`: `og:title`, `og:description`, `og:url`, `og:image`, dimensiones y alt
- `TWITTER / X`: card, titulo, descripcion e imagen
- `SCHEMA.ORG: ProfessionalService`: datos de marca, contacto, ubicacion y catalogo de servicios
- `SCHEMA.ORG: FAQPage`: preguntas y respuestas visibles en `#faq`

Si cambia la URL final del sitio, actualiza tambien `robots.txt`, `sitemap.xml`, `og:url`, `og:image`, `canonical` y las URLs absolutas del JSON-LD.

### Cambiar imagen social

La imagen de preview social esta en `img/og-cover.jpg` y se referencia desde Open Graph, Twitter Cards y Schema.org. Mantenla en proporcion **1200x630** para evitar recortes raros en WhatsApp, LinkedIn, Facebook y X.

### Actualizar sitemap

El sitemap vive en `sitemap.xml`. Si se publica una nueva version relevante, actualiza:

- `<lastmod>` con fecha ISO (`YYYY-MM-DD`)
- `<loc>` si cambia el dominio canonico
- `robots.txt` si cambia la ubicacion del sitemap

### Cambiar colores

Las variables principales viven en `styles.css`:

```css
--reina-ivory:        #fffeec
--reina-dark:         #1a1a2e
--reina-violet:       #9f78ff
--reina-violet-dark:  #6d4dbc
--reina-pear:         #cbd83b
--reina-pear-pastel:  #eaf48e
--reina-eggplant:     #4c2e7a
--reina-carbon:       #2b2b2b
```

### Cambiar el tema por defecto

El sitio arranca en modo claro cuando no hay preferencia guardada. Si queres modificarlo, revisa el script inline del `<head>` en `index.html`.

```js
var storedTheme = localStorage.getItem('reina-theme');
var theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'light';
```

---

## Contacto

- WhatsApp: [+54 9 341 783 6449](https://wa.me/5493417836449)
- Email: `hola@angireina.com`
- Instagram: [@reinabyangi](https://instagram.com/reinabyangi)
