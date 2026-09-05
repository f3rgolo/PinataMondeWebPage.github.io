# Piñata Monde - Sitio Web Oficial

Sitio web oficial y catálogo interactivo para **Piñata Monde** (Zapopan, Jalisco, México).  
Diseñado para brindar una experiencia de usuario ágil, limpia y sin fricciones, adaptada tanto para **familias (fiestas infantiles)** como para **clientes corporativos (B2B)**.

---

## Estructura de Archivos y Páginas

```text
PiñataMondeWebPage/
│
├── index.html                  # Página de inicio (Hero, Cómo funciona, 8 Piñatas destacadas, Cotizador, Reseñas, FAQ, Contacto)
├── pinatas.html                # Catálogo completo por categorías (Personajes, Números, Centros de mesa, Temáticas, Festividades)
├── empresas.html               # Soluciones Corporativas & B2B (Logos 3D, Centros de mesa para posadas, Alianzas)
├── nosotros.html               # Sobre Nosotros (Historia, Fundadores, Equipo artesanal, Misión, Visión, Objetivo)
│
├── css/
│   └── style.css               # Hoja de estilos central con la identidad visual oficial (sin emojis, tipografías Playfair & Raleway)
├── js/
│   └── main.js                 # Lógica interactiva (cotizador WhatsApp, filtros por categoría, acordeón FAQ, modal de reseñas)
│
├── foto_inicio_pagina.webp     # Fotografía del hero (textura de papel flecado artesanal)
├── fotonosotros1.webp          # Fotografía de los fundadores (papá e hija)
├── fotonosotros2.webp          # Fotografía del equipo de artesanas en el taller
│
├── Logo Horizontal.svg         # Imagotipo horizontal para encabezados y pies de página
├── Logo Isotipo.svg            # Isotipo para favicon y detalles de marca
├── Logo Normal.svg             # Logotipo completo estándar
├── Logo Centrado.svg           # Versión centrada
│
└── README.md                   # Esta guía
```

---

## Resumen de Cambios y Funcionalidades

1. **Página de Inicio (`index.html`):**
   - Métricas: *"100% hechas por manos artesanas"*, *"Personalizado (Diseño y alta calidad)"*, *"MX / USA Envíos asegurados"*.
   - Muestra 8 piñatas principales y un botón para navegar al catálogo completo.
   - Tamaños simplificados a: **Estándar** y **Personalizado**.
   - Sección de **Reseñas de Clientes** con calificaciones de 5 estrellas y botón para dejar comentarios.
   - **Preguntas Frecuentes (FAQ):** Rango de precios promedio de **$600 a $900 pesos** y aclaración de fabricación artesanal bajo pedido.

2. **Catálogo Completo (`pinatas.html`):**
   - Filtrado por categorías: Personajes, Números, Centros de mesa, Temáticas y Festividades.
   - Espacios preparados para recibir todas las fotos de piñatas.
   - Exclusión de logotipos de empresas privadas para proteger la privacidad comercial de los clientes.

3. **Sección Empresas (`empresas.html`):**
   - Acceso exclusivo desde el menú superior para no desviar la atención de los padres de familia.
   - Enfoque en logotipos 3D, centros de mesa para cenas/posadas y capacidad de colaboración con Playgrounds ZMG, De la Rosa, Duty Free, Calaverandia, Navidalia, Hard Rock Hotel y Rosewood.

4. **Sobre Nosotros (`nosotros.html`):**
   - Acceso exclusivo desde el menú superior.
   - Integración de las fotos oficiales de los fundadores (`fotonosotros1.webp`) y del taller (`fotonosotros2.webp`).
   - Textos oficiales de historia, Visión, Misión y Objetivo (sin etiquetas burbuja ni emojis).

5. **Redes Sociales Integradas:**
   - WhatsApp: `+52 33 1263 3202`
   - Instagram: `@pinatamonde`
   - Facebook: `profile.php?id=100041994589896`
   - YouTube: `@PiñataMondeOficial/shorts`
   - TikTok: `@pinatamonde`

---

## Cómo Probar o Publicar el Sitio

- **Prueba local:** Abre [index.html](file:///Users/fernanadogomezlopez/PiñataMondeWebPage/index.html) con doble clic en tu navegador.
- **Publicación:** Sube esta carpeta directamente a Netlify, Vercel o GitHub Pages y el sitio estará en línea al instante.
