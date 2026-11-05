# Informe de validación — 30 de octubre de 2026

## Resultado real

La implementación está creada. La validación de producción **no está completa**: el entorno restringe acceso al registro npm y sockets, impidiendo instalar Vite y Playwright, servir HTTP local y arrancar Chromium. No se afirma que exista una compilación exitosa, capturas finales, consola limpia o verificación visual realizada.

## Verificaciones ejecutadas

| Comprobación | Resultado |
| --- | --- |
| Lectura de AGENTS.md, guía y manual completo | Realizada; además se examinaron visualmente todas las secciones del manual. |
| Identificación de referencia, fondo, logo y elemento modular | Los cuatro archivos fueron inspeccionados; la referencia no se utiliza como fondo. |
| Integridad de recursos | SHA-256 antes/después: manual, guía y cuatro recursos visuales idénticos. |
| Sintaxis JavaScript | `node --check` en los módulos y las configuraciones: sin errores. |
| Pruebas de lógica | `npm test`: 5/5 pasan; sin pruebas omitidas. |
| Regresión detectada y corregida | Se rechazaron direcciones con puntos iniciales, finales o consecutivos después de reproducir el fallo en una prueba. |
| Estructura HTML | Un H1; jerarquía H2/H3 sin saltos; etiquetas cerradas e IDs únicos. |
| Destinos internos | 17 referencias de navegación a IDs existentes. |
| Recursos | 11 referencias locales de HTML resueltas contra archivos presentes. Importaciones CSS y JS presentes. |
| Separación de responsabilidades | Sin CSS, JavaScript ni manejadores de eventos inline en HTML. |
| Imágenes | Atributos `alt`, ancho y alto explícitos; fondo prioritario, imágenes inferiores con lazy loading. |
| Contenido | Dos servicios basados en el manual; proceso marcado como propuesta; sin contacto ni pruebas sociales inventadas. |

## Contraste calculado

Ratios de luminancia sRGB para los pares sólidos principales. Este cálculo no sustituye una auditoría del renderizado, de fondos translúcidos ni del texto sobre la fotografía.

| Texto / fondo | Ratio |
| --- | --- |
| Blanco / azul corporativo | 6,11:1 |
| Azul oscuro / verde claro | 12,27:1 |
| Negro / verde claro | 15,39:1 |
| Verde claro / azul oscuro | 12,27:1 |
| Azul corporativo / verde claro | 4,55:1 |
| Azul oscuro / blanco | 16,48:1 |

## Intentos bloqueados

- `npm install --cache /tmp/zyntra-npm-cache --fetch-retries=0 --fetch-timeout=15000`: error `EAI_AGAIN` al resolver `registry.npmjs.org`.
- `npm run dev` y `npm run build`: `vite: command not found`, consecuencia de la instalación bloqueada.
- `npm run test:browser`: `playwright: command not found` por la misma causa.
- Comprobación de servidor HTTP en `127.0.0.1`: `EPERM` al abrir un socket.
- Navegadores Thorium y Brave, en perfiles temporales aislados para archivos locales: fallo al inicializar sockets internos (`Operation not permitted`). No se utilizó el perfil personal del usuario.

No hay `package-lock.json` generado, artefactos de producción ni resultados de Playwright. No se han fabricado sustitutos de Vite ni un informe de éxito.

## Revisión de interfaz realizada sobre el código

- Primario azul sobre claro y verde sobre oscuro; secundario de contorno disponible; terciario ligero. Enlaces con destino y detalles con controles nativos.
- Header con un CTA principal y navegación acotada. Menú móvil con ARIA, Escape, cierre al seleccionar, foco en destino y restablecimiento al cambiar de ancho.
- Sin JavaScript, navegación y contenidos siguen presentes y el header deja de ser fijo para no tapar los destinos.
- El Hero separa texto e imagen en móvil. El esquema modular se apila por debajo de 420 px. El proceso pasa de cuatro a dos y una columna.
- Fuentes provisionales documentadas; paleta oficial centralizada; logotipo sobre claro sin modificaciones. El logo pequeño del Hero conserva la relación 5:6.
- Contenido visible por defecto. Las entradas no ocultan contenido si falla JavaScript; movimiento reducido desactiva animación y scroll suave.
- Sin formularios, rastreadores, dependencias de ejecución, recursos remotos o datos personales enviados.

## Para completar la validación

En un entorno con red, sockets locales y navegador disponibles:

```bash
npm install
npm test
npx playwright install chromium
npm run test:browser
npm run dev
```

La suite de navegador ejecuta primero `npm run build`, inicia la vista de producción y recorre 320, 375, 390, 768, 1024, 1440 y 1920 px. Verifica imágenes, enlaces, menú, teclado, detalles, descarga y ausencia de errores. También cubre JavaScript desactivado y movimiento reducido. Examinar las capturas generadas en `test-results/` y compararlas con `public/assets/logos/Hero_section.png`.

Revisar en navegador real la jerarquía, el encuadre, el texto sobre imagen, los focos, el zoom al 200 % y la consola. Medir LCP, CLS y comportamiento con red lenta; no existen mediciones de rendimiento ni puntuación Lighthouse en este informe.

Antes de publicar, confirmar correo, fuentes, proceso, dominio y datos legales. La publicación no formó parte de este trabajo.
