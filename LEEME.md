# Comarka 2026

Abre `index.html` en un navegador. No requiere instalación, frameworks, servicios de pago ni conexión para cargar su diseño y sus imágenes.

## Archivos

- `index.html`: contenido, título, navegación y secciones.
- `styles.css`: colores, tipografía y diseño adaptable.
- `script.js`: menú móvil, navegación, contador y correo de contacto.
- `assets/sparta-hero.png`: imagen de fondo. Conserva la carpeta `assets` junto a los tres archivos principales.

## Personalización

La cuenta regresiva está configurada para el **26 de marzo de 2027 a las 00:00, hora de Chile continental (UTC−03:00)**. El título se mantiene como **Comarka 2026**, según lo solicitado.

Edita el objeto `CONFIG` al inicio de `script.js`:

- `eventDate`: fecha y hora ISO 8601 con zona horaria explícita. Mientras esté vacío, el contador indica «Fecha por confirmar». Ejemplo de formato: `2026-12-31T23:59:00-03:00` (solo ilustrativo).
- `eventLabel`: texto situado encima de la cuenta regresiva.
- `completedLabel`: mensaje al llegar a cero.
- `contactEmail`: correo real que recibirá los mensajes. Al completarlo se habilita un enlace `mailto:` que abre la aplicación de correo del visitante; la web no envía mensajes por sí sola.

La presentación y los proyectos contienen textos provisionales claramente editables en `index.html`. No hay formularios de envío.

## Imagen

Imagen creada con la herramienta integrada de generación de imágenes. Prompt utilizado:

> Use case: stylized-concept. Asset type: cinematic website hero background, ultrawide landscape. Create a dark majestic scene of ancient Greek temples and Spartan warriors at night. A monumental weathered Doric temple on the right background, three imposing Spartan hoplites with bronze Corinthian helmets, circular shields, long spears and dark crimson capes in the right half foreground. Atmospheric smoke, subtle ember particles, antique bronze torchlight against nearly black charcoal shadows. Rich photographic concept art, realistic marble and patinated bronze, restrained premium cinematic look. Composition: left 45 percent remains dark atmospheric negative space for website heading, subjects on right, no text, no logos, no watermark, no graphic design. Wide 16:9 framing. Black, desaturated bronze, muted burgundy palette.
