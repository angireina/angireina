# REINA · Angi Reina

Landing page personal de **Angi Reina**, diseñadora gráfica y community manager radicada en Rosario, Argentina. El sitio presenta su propuesta de valor, servicios, caso de estudio, portfolio de trabajos y canales de contacto.

---

## ¿Qué hace este sitio?

La página está pensada como herramienta de captación y presentación de marca personal. Su objetivo es comunicar claramente quién es Angi, qué hace y por qué vale la pena trabajar con ella — guiando al visitante desde la presentación hasta el contacto directo por WhatsApp.

### Secciones

| Sección | Descripción |
|---|---|
| **Nav** | Barra de navegación fija con scroll suave, menú hamburguesa en mobile y botón de acceso directo al contacto |
| **Hero** | Presentación principal con titular, descripción, estadísticas de experiencia y llamados a la acción |
| **El problema real** | Sección de identificación con el cliente ideal a través de citas que reflejan sus dolores |
| **Servicios** | Tres servicios principales: Identidad Visual, Contenido para Redes y Estrategia de Marca |
| **Caso de estudio** | Caso real (Mueblería Bravo) con timeline horizontal, métricas de resultado e imágenes antes/después |
| **Portfolio** | Grilla asimétrica con trabajos recientes. Cada item abre un modal con información detallada del proyecto |
| **Sobre mí** | Presentación personal con bio, filosofía de trabajo y estado de agenda |
| **Contacto (CTA)** | Llamado a la acción final con acceso directo a WhatsApp y email |
| **Footer** | Logo, navegación secundaria y datos de contacto completos |

---

## Tecnologías

El sitio está construido íntegramente con tecnologías web nativas, sin frameworks ni dependencias:

- **HTML5** — estructura semántica
- **CSS3** — variables custom, CSS Grid, animaciones, transiciones y diseño responsive
- **JavaScript vanilla** — scroll reveal con IntersectionObserver, menú mobile, modales de portfolio y mensajes de WhatsApp contextuales

No requiere instalación, build ni servidor. Se abre directamente en el navegador.

---

## Cómo usar

```
landing-vanilla/
├── index.html         — estructura de la página
├── styles.css         — todos los estilos
├── main.js            — interacciones y animaciones
├── img/
│   ├── logo_reina.svg — logo (usado en nav y footer)
│   └── favicon.svg    — ícono del navegador
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

### Agregar imágenes al modal de portfolio
Cada item del portfolio tiene un atributo `data-media` con un array JSON:
```json
[
  { "type": "image", "src": "img/proyecto.jpg", "alt": "descripción" },
  { "type": "video", "src": "video.mp4", "poster": "thumbnail.jpg" }
]
```

### Cambiar colores
Las variables de color están en `styles.css`:
```css
--reina-ivory:       #fffeec
--reina-dark:        #1a1a2e
--reina-violet:      #a88aed
--reina-violet-dark: #8f6fe0
--reina-pear:        #cbd83b
```

---

## Contacto

- WhatsApp: [+54 9 341 783 6449](https://wa.me/5493417836449)
- Email: hola@angireina.com
- Instagram: [@reinabyangi](https://instagram.com/reinabyangi)
