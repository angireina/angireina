# REINA · Angi Reina

Landing page personal de **Angi Reina**, diseñadora gráfica y community manager radicada en Rosario, Argentina. El sitio presenta su propuesta de valor, servicios, planes de precios, caso de estudio, portfolio y canales de contacto.

---

## ¿Qué hace este sitio?

La página está pensada como herramienta de captación y presentación de marca personal. Su objetivo es comunicar claramente quién es Angi, qué hace y por qué vale la pena trabajar con ella — guiando al visitante desde la presentación hasta el contacto directo por WhatsApp.

### Secciones

| Sección | Descripción |
|---|---|
| **Nav** | Barra de navegación fija con scroll suave, menú hamburguesa en mobile y botón de acceso directo al contacto |
| **Hero** | Presentación principal con titular, descripción, estadísticas de experiencia (+6 años, +40 marcas) y llamados a la acción |
| **El problema real** | Sección de identificación con el cliente ideal a través de citas que reflejan sus dolores |
| **Servicios** | Seis servicios: Identidad Visual, Gestión de Redes, Estrategia de Marca, Producción Audiovisual, Tienda Online y Diseño Gráfico. Cada card abre un modal con información ampliada, entregables, CTA y mini mockup propio |
| **Planes · Contenido** | Tres planes mensuales de gestión de redes: Presencia, Crecimiento y Expansión |
| **Tienda Online · Planes** | Tres planes de tienda e-commerce: Básica, Pro y Completa (Tiendanube / Shopify) |
| **Caso de estudio** | Caso real (Mueblería Bravo) con comparación editorial Antes/Después de contenido, métricas de resultado, contexto narrativo, cita de cliente y cards de video que abren un visor vertical centrado con controles nativos |
| **Portfolio** | Grilla asimétrica con trabajos recientes. Cada item abre un modal con información detallada del proyecto y media ampliada |
| **Sobre mí** | Presentación personal con bio, filosofía de trabajo y estado de agenda |
| **Contacto (CTA)** | Llamado a la acción final con acceso directo a WhatsApp y email |
| **Footer** | Logo SVG, navegación secundaria y datos de contacto completos |

---

## Tecnologías

El sitio está construido íntegramente con tecnologías web nativas, sin frameworks ni dependencias:

- **HTML5** — estructura semántica
- **CSS3** — variables custom, CSS Grid, animaciones, transiciones y diseño responsive
- **JavaScript vanilla** — scroll reveal con IntersectionObserver, menú mobile, modales de servicios/portfolio/video, mensajes de WhatsApp contextuales y toggle de tema claro/oscuro con persistencia en `localStorage`
- **Fuentes auto-hospedadas** — Playfair Display y Poppins servidas como `.woff2` desde `fonts/`, sin dependencia a Google Fonts

No requiere instalación, build ni servidor. Se abre directamente en el navegador.

---

## Estructura de archivos

```
landing-vanilla/
├── index.html         — estructura de la página
├── styles.css         — todos los estilos
├── main.js            — interacciones y animaciones
├── img/
│   ├── logo_reina.svg — logo (usado en nav y footer)
│   ├── favicon.svg    — ícono del navegador
│   ├── favicon.png    — fallback para navegadores sin soporte SVG
│   └── combo.jpg      — portada real usada en una card del caso de estudio
├── fonts/             — Playfair Display y Poppins en formato .woff2
├── video/             — videos puntuales usados por cards del caso de estudio
├── videos/
│   └── caso/
│       └── README.txt — nombres esperados para placeholders / clips del caso
└── CHANGELOG.md
```

Abrí `index.html` directamente en tu navegador. No necesita servidor local.

---

## Personalización rápida

### Cambiar imágenes
Reemplazá el `src` de las etiquetas `<img>` en `index.html`:
- **Hero** → buscar `class="hero-portrait-img"`
- **Sobre mí** → buscar `data-testid="about-portrait"`

### Cambiar mensajes de WhatsApp
Cada botón tiene un atributo `data-wa-msg` con el texto que se envía. Editalo directamente en el HTML.

### Ampliar la información de Servicios
Cada card de servicio expone su contenido del popup mediante atributos `data-service-*` en `index.html`.
Podés editar ahí:
- título y subtítulo
- descripción ampliada
- entregables
- enfoque de trabajo
- tags
- variante visual / mockup

### Agregar imágenes al modal de portfolio
Cada item del portfolio tiene un atributo `data-media` con un array JSON:
```json
[
  { "type": "image", "src": "img/proyecto.jpg", "alt": "descripción" },
  { "type": "video", "src": "video/proyecto.mp4", "poster": "img/thumbnail.jpg" }
]
```

### Actualizar videos del caso de estudio
Cada card comparativa usa atributos `data-video-src` y, opcionalmente, `data-video-poster`.

Ejemplo:
```html
<div
  class="cv-card cv-card--after"
  data-video-src="video/combo.mp4"
  data-video-poster="img/combo.jpg">
</div>
```

Si no definís `data-video-poster`, `main.js` genera una portada editorial automáticamente.
El video se abre en un modal centrado con controles nativos y volumen inicial configurado al 35%.

### Actualizar precios
Los precios están directamente en el HTML dentro de `<span class="pricing-price">`. Buscá las secciones `#planes-contenido` y `#tienda-online`.

### Cambiar colores
Las variables de color están en `styles.css`:
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
El tema inicial se detecta desde la preferencia del sistema (`prefers-color-scheme`). Para forzar uno:
```js
// En el script del <head> en index.html
var theme = storedTheme || 'light'; // 'light' o 'dark'
```

---

## Contacto

- WhatsApp: [+54 9 341 783 6449](https://wa.me/5493417836449)
- Email: hola@angireina.com
- Instagram: [@reinabyangi](https://instagram.com/reinabyangi)
