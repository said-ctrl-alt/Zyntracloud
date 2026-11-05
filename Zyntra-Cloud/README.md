# Zyntra Cloud

Landing corporativa con Vite, HTML semántico, CSS organizado y JavaScript modular. Sin framework ni dependencias de ejecución. Sigue el manual y la composición del Hero proporcionados.

**Estado:** implementación creada; pruebas de lógica y revisión estática realizadas. La instalación de dependencias, el arranque de Vite, la revisión visual en navegador y la compilación de producción están pendientes por las restricciones del entorno. No se presenta como una versión validada para producción. Ver [el informe de validación](docs/validacion.md).

## Ejecutar

Requiere Node.js 22.12+ de la rama 22, o Node.js 24+, npm y acceso al registro npm durante la instalación.

```bash
npm install
npm run dev
```

Abrir la URL local que muestre Vite, normalmente `http://127.0.0.1:5173`. No abrir `index.html` directamente desde el explorador: los módulos y los recursos públicos se sirven mediante Vite.

```bash
npm run build
npm run preview
```

`build` produce `dist/`; `preview` permite revisar esa compilación. La configuración presupone despliegue en la raíz de un dominio. Si se utiliza una subruta, ajustar `base` en `vite.config.js` y verificar todos los recursos y la descarga.

La instalación debe generar `package-lock.json`. No se ha inventado un lockfile durante la restricción de red; conservar el generado por npm y usar después `npm ci` para instalaciones reproducibles.

## Probar

```bash
npm test
npx playwright install chromium
npm run test:browser
```

- `npm test`: cinco pruebas con el runner integrado de Node; no necesita paquetes instalados. Comprueba ausencia de contacto, direcciones válidas e inválidas, codificación del asunto e intentos de añadir destinatarios o cabeceras. Usa un solo proceso para ser compatible con entornos que restringen IPC.
- `test:browser`: Playwright compila e inicia automáticamente la vista de producción. Comprueba recursos, enlaces, desbordamientos a 320, 375, 390, 768, 1024, 1440 y 1920 px, menú móvil, teclado, Escape, cambio de tamaño, detalles, descarga, movimiento reducido y funcionamiento sin JavaScript. Genera capturas de página completa en `test-results/` para revisión humana.
- La suite de navegador está preparada pero **no ejecutada con éxito en este entorno**. Sus capturas y la consola requieren revisión antes de dar por terminada la validación visual.

## Contenido y decisiones

El Hero utiliza `Fondo_Hero_section.jpeg` como imagen real y `Hero_section.png` como referencia de composición. El fondo original pesa 15,6 KB y se precarga: no se recomprime un recurso ya pequeño ni se inventa detalle mediante ampliación. Su resolución de origen, 739 × 415, limita la nitidez en monitores grandes.

El logotipo es el SVG negro original, sin filtros, recoloración ni cambios de proporción. Se coloca sobre superficies claras. El elemento modular azul es un recurso distinto. La captura de referencia y el PDF se conservan; no se muestran como partes de la interfaz.

La página contiene Hero, presentación, dos servicios documentados, arquitectura modular, beneficios, proceso propuesto, empresa, contacto y footer. No incluye clientes, estadísticas, certificaciones ni alianzas inventadas. El proceso tiene una indicación visible de que es una propuesta pendiente de validación comercial.

Los titulares usan Georgia/Times New Roman y la interfaz Arial/Helvetica, con Courier New en etiquetas. Son **sustituciones provisionales**, no fuentes corporativas identificadas. Se cambian desde `src/css/variables.css` cuando se reciban los archivos oficiales.

## Configurar el contacto

Editar `src/js/config.js` y rellenar `contactEmail` únicamente con un correo confirmado. El módulo valida el destinatario y activa un enlace que abre la aplicación de correo. Un correo vacío o no válido mantiene el aviso «Canal de contacto por confirmar».

Los CTA llevan a la sección de contacto real. No se simula un envío ni existe un formulario que recopile información. La guía descargable funciona sin registro y no transmite datos. Con JavaScript desactivado se conserva el aviso de disponibilidad pendiente.

Antes de publicar, confirmar el canal comercial, el proceso, las fuentes, el dominio y los datos legales. Cuando exista dominio definitivo, añadir URL canónica y URLs absolutas de Open Graph. No hay analítica, cookies de seguimiento ni enlaces externos de terceros incorporados.

## Organización

```text
index.html                      Contenido y estructura semántica
package.json                    Comandos y dependencias de desarrollo
vite.config.js                  Configuración de compilación
playwright.config.js            Pruebas sobre la vista de producción
src/
  css/
    main.css                    Entrada de estilos
    variables.css               Colores, tipografía, espacios y radios
    reset.css                   Base y preferencias de movimiento
    layout.css                  Contenedores, títulos, foco y entradas
    components/
      buttons.css               Jerarquía y estados de acciones
      header.css                Navegación y menú
      hero.css                  Composición de referencia
      sections.css              Secciones editoriales y footer
    responsive.css              Adaptación de composición
  js/
    main.js                     Inicialización
    config.js                   Configuración comercial
    components/navigation.js    Menú, teclado y sección activa
    modules/reveal.js           Entradas discretas y progresivas
    modules/contact.js          Estado de disponibilidad del contacto
    utils/contact.js            Creación segura del enlace de correo
public/assets/
  logos/                        Los cuatro recursos originales, intactos
  documentos/guia-de-proyecto.txt
tests/
  contact.test.js                Pruebas de lógica
  browser/landing.spec.js        Pruebas funcionales y capturas
docs/
  manual-de-marca.pdf            Original intacto
  guia-de-identidad.md           Original intacto
  criterios-de-diseno.md         Fuentes, composición y decisiones
  validacion.md                 Evidencia y límites de las verificaciones
```

Se modificaron este README y `.gitignore`. Se crearon los archivos de aplicación, configuración, pruebas, guía descargable y dos documentos técnicos anteriores. `AGENTS.md`, manual, guía de identidad y recursos visuales originales se preservaron. No se creó un repositorio Git: el directorio `.git` disponible no contiene un repositorio utilizable.

## Ampliar

El contenido principal permanece en HTML para ser accesible e indexable sin JavaScript. Los módulos añaden comportamiento de forma progresiva. Los botones comparten clases y estados; no hay acciones destructivas en esta página. Una nueva sección reutiliza los tokens y componentes existentes. Añadir una nueva página no requiere migrar a un framework; Vite permite entradas HTML adicionales.

Referencias técnicas: [guía de Vite](https://vite.dev/guide/) y [servidor de pruebas de Playwright](https://playwright.dev/docs/test-webserver).
