# Dirección de diseño y fuentes de contenido

## Referencias examinadas

Se leyó AGENTS.md, la guía y el texto completo del manual. Se revisaron visualmente filosofía, construcción, tipografía, variantes, seguridad, usos y aplicaciones. El PDF es una página continua de 1920 × 27342 puntos.

| Archivo original | Uso |
| --- | --- |
| `public/assets/logos/Hero_section.png` (1206 × 592) | Referencia de composición; no se muestra como fondo ni como interfaz. |
| `public/assets/logos/Fondo_Hero_section.jpeg` (739 × 415) | Imagen real del Hero, sin deformación. |
| `public/assets/logos/logo-original.svg` (50 × 60) | Símbolo negro original, sobre superficie clara; también favicon. |
| `public/assets/logos/elemento_grafico_herosection.svg` (60 × 60) | Elemento modular azul del Hero y de la sección corporativa. No sustituye al logotipo. |

No se entregaron variantes independientes del logotipo completo ni archivos de fuentes. Las variantes positiva, negativa y de color del manual se estudiaron, pero no se reconstruyeron. El símbolo original no se recolorea, filtra ni transforma; se rodea de espacio libre. El nombre en textos editoriales no constituye una reconstrucción del logotipo.

## Composición autorizada por el encargo

Panel verde a la izquierda, escena cloud a la derecha, elemento modular arriba, titular serif y acción azul. Se conserva una pequeña pieza translúcida sobre la imagen. La jerarquía se adapta con un titular de propuesta de valor y dos acciones claramente subordinadas. Los logotipos Next.js, Vercel y Turbo de la referencia no se incluyen: no acreditan alianzas, y tampoco describen el stack solicitado.

El resto de la página extiende esa dirección con fondos claros, una sección azul oscuro para arquitectura, filas de servicios y composiciones editoriales. Sin estadísticas, clientes, certificaciones, testimonios, stock ni efectos de movimiento continuo.

## Sistema

- Marca: `#D2E4C4`, `#006992`, `#001D4A`, `#020300`. Blanco y mezclas de estos valores para superficies y bordes.
- Fuentes **provisionales, no corporativas**: Georgia/Times New Roman para titulares; Arial/Helvetica para interfaz; Courier New para pequeñas etiquetas técnicas. Fuentes de sistema sin descargas externas. Sustituir en `src/css/variables.css` cuando se entreguen las familias oficiales.
- Espaciado: escala de 4 px, contenedor máximo de 1280 px, ritmo entre secciones de 80–112 px en escritorio y 64 px en móvil.
- Botones: altura mínima 48 px, radio 6 px, iconos 20 px; primario azul, secundario de contorno, terciario ligero. En fondo oscuro, primario verde. Foco con contorno doble, hover y active discretos. Disabled y busy definidos sin simular acciones inexistentes. No hay acciones destructivas en esta landing; no se introduce un color de peligro no autorizado ni un botón sin uso.
- Navegación progresiva: enlaces nativos, menú móvil accesible, cierre con Escape y al elegir sección. Sin JavaScript, la navegación sigue visible.
- Móvil: panel de texto y escena separados verticalmente, sin ocultar el motivo de la nube; filas y columnas pasan a una lectura lineal. Objetivos de interacción de al menos 44 px.
- Movimiento: entradas cortas de una sola ejecución, nunca necesarias para leer; `prefers-reduced-motion` desactiva movimiento y scroll suave.

## Veracidad y configuración

Cloud, software a medida, modularidad, misión, visión y público proceden del manual (páginas impresas 06–11) y de la guía. Los beneficios se expresan como objetivos de diseño, sin garantías numéricas ni SLA.

El proceso en cuatro pasos es una **propuesta editorial pendiente de validación**, identificada junto a la sección. No hay correo, teléfono, dominio, redes ni dirección confirmados. `src/js/config.js` permite introducir un correo validado. Mientras esté vacío, la sección de contacto explica la disponibilidad pendiente y no simula envíos. Los CTA conducen a esa sección real.

La plantilla de proyecto descargable funciona localmente y no recoge datos. No se introduce un formulario, cookies ni un backend ficticio. Los metadatos no inventan URL canónica ni identidad legal; están pendientes el dominio, datos legales y textos comerciales finales antes de publicación.

## Arquitectura y verificación

Vite + HTML estático semántico + CSS por responsabilidad + módulos ES. El contenido importante existe en HTML, es indexable y se conserva sin JavaScript. Los comportamientos independientes se inicializan desde `src/js/main.js`. Sin framework, paquetes de iconos ni dependencias de ejecución.

La organización sigue la [guía oficial de Vite](https://vite.dev/guide/). Pruebas de los enlaces de contacto con Node y revisión de navegador aislado: tamaños, enlaces, recursos, teclado, menú, movimiento reducido y errores. La compilación de Vite se informa separadamente de la revisión estática si el entorno impide instalar dependencias.
