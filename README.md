# REINA - Angi Reina

Landing page personal de **Angi Reina**, disenadora grafica y community manager radicada en Rosario, Argentina. El sitio presenta su propuesta de valor, servicios, planes, caso de estudio, portfolio y canales de contacto.

---

## Que hace este sitio

La pagina funciona como herramienta de presentacion y captacion para la marca personal de Angi. La experiencia esta pensada para llevar al visitante desde la propuesta de valor hasta el contacto directo por WhatsApp o email, con una narrativa visual consistente y una UX cuidada en desktop, tablet y mobile.

### Secciones

| Seccion | Descripcion |
|---|---|
| **Nav** | Navegacion principal con menu hamburguesa en mobile, toggle de tema y estado sticky solo en desktop |
| **Hero** | Presentacion principal con titular, descripcion, estadisticas y CTAs |
| **El problema real** | Seccion editorial con citas que conectan con dolores concretos del cliente ideal |
| **Servicios** | Seis cards de servicio con modal contextual, entregables, CTA, visual propio por servicio y contenido editable debajo de cada card |
| **Planes - Contenido** | Tres planes mensuales para gestion de redes |
| **Tienda Online - Planes** | Tres planes para armado de tienda en Tiendanube o Shopify |
| **Caso de estudio** | Caso real con comparativa antes/despues, narrativa, resultados y cards de video |
| **Portfolio** | Grilla asimetrica con modal por proyecto y media ampliada |
| **Sobre mi** | Bio, filosofia de trabajo y disponibilidad |
| **Contacto (CTA)** | Bloque final de cierre con acceso directo a WhatsApp y email |
| **Footer** | Navegacion secundaria, marca y datos de contacto |

---

## Interacciones y UX

- El sitio arranca en **modo claro por defecto**. Si existe una preferencia previa en `localStorage` (`reina-theme`), se respeta.
- El toggle de tema actualiza `data-theme`, sincroniza `aria-label` y `aria-pressed`, y evita flash inicial con un script en el `<head>`.
- En mobile hay un boton flotante para **volver arriba** cuando el usuario ya hizo scroll.
- El navbar deja de comportarse como sticky en mobile; el estado `scrolled` queda reservado a desktop.
- En dispositivos touch, los hover de cards se limitan a desktop y los botones responden con estados `:active`.
- Los modales de servicios, portfolio y video integran historial del navegador en mobile: el gesto o boton de **back** cierra primero el popup abierto.
- Los modales de servicios y portfolio fueron ajustados para mejorar legibilidad, scroll y espacio util en mobile.

---

## Tecnologias

El sitio esta construido integramente con tecnologias web nativas, sin frameworks ni dependencias externas:

- **HTML5** para estructura semantica
- **CSS3** para layout responsive, variables, animaciones, estados y theming
- **JavaScript vanilla** para scroll reveal, menu mobile, modales, WhatsApp contextual, tema claro/oscuro, boton mobile de volver arriba e integracion con History API en modales mobile
- **Fuentes auto-hospedadas**: Playfair Display y Poppins servidas como `.woff2` desde `fonts/`

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
|   `-- combo.jpg      - portada real usada en el caso de estudio
|-- fonts/             - Playfair Display y Poppins en `.woff2`
|-- video/             - assets puntuales de video
|-- videos/
|   `-- caso/
|       `-- README.txt - nombres esperados para placeholders y clips del caso
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

Cada boton usa `data-wa-msg` con el texto a enviar. Se edita directamente en `index.html`.

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

### Actualizar videos del caso de estudio

Cada card comparativa usa `data-video-src` y, opcionalmente, `data-video-poster`.

Ejemplo:

```html
<div
  class="cv-card cv-card--after"
  data-video-src="video/combo.mp4"
  data-video-poster="img/combo.jpg">
</div>
```

Si no se define `data-video-poster`, `main.js` genera una portada editorial automatica.

### Actualizar precios

Los importes se editan en `index.html` dentro de `<span class="pricing-price">` en las secciones `#planes-contenido` y `#tienda-online`.

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
