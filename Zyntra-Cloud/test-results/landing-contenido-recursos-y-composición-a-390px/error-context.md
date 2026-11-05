# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.js >> contenido, recursos y composición a 390px
- Location: tests/browser/landing.spec.js:4:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false

Call Log:
- Timeout 5000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Saltar al contenido" [ref=e2] [cursor=pointer]:
    - /url: "#contenido"
  - banner [ref=e3]:
    - generic [ref=e4]:
      - link "Zyntra Cloud — Inicio" [ref=e5] [cursor=pointer]:
        - /url: "#inicio"
        - img "Zyntra Cloud" [ref=e6]
      - paragraph [ref=e7]: Cloud & software Construido a tu medida.
      - button "Abrir menú de navegación" [ref=e8] [cursor=pointer]:
        - generic [ref=e9]: Menú
  - main [ref=e12]:
    - region [ref=e13]:
      - generic [ref=e15]:
        - paragraph [ref=e16]: Zyntra Cloud
        - heading "La nube, a la medida de tu visión." [level=1] [ref=e17]
        - paragraph [ref=e18]: El mundo evoluciona. Tu tecnología también. Cloud y software que se adaptan a tu negocio, pieza a pieza.
        - generic [ref=e19]:
          - link "Hablemos de tu proyecto" [ref=e20] [cursor=pointer]:
            - /url: "#contacto"
          - link "Explorar soluciones" [ref=e23] [cursor=pointer]:
            - /url: "#soluciones"
        - list "Valores de Zyntra Cloud" [ref=e26]:
          - listitem [ref=e27]: Adaptabilidad
          - listitem [ref=e28]: / Evolución
          - listitem [ref=e29]: / Modularidad
      - generic [ref=e30]:
        - paragraph [ref=e31]: Un universo de posibilidades
        - paragraph [ref=e33]: Cada pieza. Una posibilidad.
    - generic [ref=e34]:
      - paragraph [ref=e35]: Tecnología con sentido
      - list [ref=e36]:
        - listitem [ref=e37]: + Cloud a medida
        - listitem [ref=e38]: + Software conectado
        - listitem [ref=e39]: + Arquitectura modular
    - region [ref=e40]:
      - paragraph [ref=e41]: 01 / La idea de Zyntra
      - generic [ref=e42]:
        - heading "Tu negocio tiene su propia lógica. Tu tecnología también debería." [level=2] [ref=e43]
        - generic [ref=e44]:
          - paragraph [ref=e45]: Hay una forma más flexible de construir. En Zyntra Cloud unimos infraestructura cloud y desarrollo de software a medida para crear un ecosistema que responda a tus procesos.
          - paragraph [ref=e46]: Partimos de lo que tu empresa necesita hoy, con espacio para lo que vendrá mañana. Esa es nuestra manera de entender la tecnología.
    - region [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e49]:
          - generic [ref=e50]:
            - paragraph [ref=e51]: 02 / Soluciones
            - heading "Dos capacidades. Un mismo ecosistema." [level=2] [ref=e52]
          - paragraph [ref=e53]: Infraestructura y software, conectados por la realidad de tu negocio.
        - article [ref=e54]:
          - generic [ref=e55]:
            - generic [aria-hidden] [ref=e56]: "01"
            - heading "Cloud a tu medida." [level=3] [ref=e57]
          - generic [ref=e58]:
            - paragraph [ref=e59]: Diseñamos servicios cloud con una arquitectura modular, preparada para adaptarse a las necesidades de tu operación y evolucionar con la demanda.
            - list "Enfoque cloud" [ref=e60]:
              - listitem [ref=e61]: Flexibilidad
              - listitem [ref=e62]: Escalabilidad
              - listitem [ref=e63]: Seguridad
            - group [ref=e64]:
              - generic "Conocer el enfoque cloud" [ref=e65] [cursor=pointer]
        - article [ref=e68]:
          - generic [ref=e69]:
            - generic [aria-hidden] [ref=e70]: "02"
            - heading "Software que habla tu idioma." [level=3] [ref=e71]
          - generic [ref=e72]:
            - paragraph [ref=e73]: Desarrollamos software que responde a tus procesos. Piezas conectadas que acompañan la forma de trabajar de tu empresa y pueden crecer con ella.
            - list "Enfoque software" [ref=e74]:
              - listitem [ref=e75]: A medida
              - listitem [ref=e76]: Integración
              - listitem [ref=e77]: Evolución
            - group [ref=e78]:
              - generic "Conocer el enfoque de software" [ref=e79] [cursor=pointer]
    - region [ref=e82]:
      - generic [ref=e83]:
        - generic [ref=e84]:
          - paragraph [ref=e85]: 03 / Arquitectura modular
          - heading [level=2] [ref=e86]:
            - text: Pensar en grande. Construir
            - emphasis [ref=e87]: pieza a pieza.
          - paragraph [ref=e88]: Una base sólida no tiene por qué ser rígida. Conectamos módulos que pueden integrarse, crecer o transformarse a medida que cambian tus necesidades.
          - list [ref=e89]:
            - listitem [ref=e90]:
              - generic [ref=e91]: "01"
              - text: Una estructura adaptada a tu operación.
            - listitem [ref=e92]:
              - generic [ref=e93]: "02"
              - text: Piezas conectadas, con espacio para evolucionar.
            - listitem [ref=e94]:
              - generic [ref=e95]: "03"
              - text: Una visión de negocio que guía la tecnología.
          - link "Conversemos sobre tu arquitectura" [ref=e96] [cursor=pointer]:
            - /url: "#contacto"
        - figure "Esquema conceptual. Cada solución se define según el proyecto." [ref=e99]:
          - img "El negocio ocupa el centro de una arquitectura que conecta infraestructura cloud, software a medida e integración, con espacio para nuevos módulos." [ref=e100]:
            - paragraph [aria-hidden] [ref=e101]: Sistema modular / Vista conceptual
            - generic [aria-hidden] [ref=e102]:
              - generic [ref=e103]: EL PUNTO DE PARTIDA
              - strong [ref=e104]: Tu negocio
              - generic [ref=e105]: Visión + procesos + personas
            - generic [aria-hidden] [ref=e106]:
              - generic [ref=e107]:
                - generic [ref=e108]: "01"
                - strong [ref=e109]: Cloud
                - generic [ref=e110]: Infraestructura
              - generic [ref=e111]:
                - generic [ref=e112]: "02"
                - strong [ref=e113]: Software
                - generic [ref=e114]: A medida
              - generic [ref=e115]:
                - generic [ref=e116]: "03"
                - strong [ref=e117]: Conexión
                - generic [ref=e118]: Integración
            - generic [aria-hidden] [ref=e119]:
              - generic [ref=e120]: +
              - text: Espacio para lo que viene
    - region [ref=e122]:
      - generic [ref=e123]:
        - generic [ref=e124]:
          - paragraph [ref=e125]: 04 / Lo que importa
          - heading "Menos rigidez. Más libertad para avanzar." [level=2] [ref=e126]
        - paragraph [ref=e127]: "Decisiones técnicas con un propósito: que tu tecnología acompañe tu crecimiento."
      - generic [ref=e128]:
        - article [ref=e129]:
          - text: 01 /
          - heading "Tu operación, en el centro." [level=3] [ref=e130]
          - paragraph [ref=e131]: Entender tus procesos permite diseñar una solución que encaje con la realidad de tu empresa.
        - article [ref=e132]:
          - text: 02 /
          - heading "Crecer sin perder flexibilidad." [level=3] [ref=e133]
          - paragraph [ref=e134]: Una arquitectura por módulos facilita incorporar nuevas piezas a medida que aparecen nuevas necesidades.
        - article [ref=e135]:
          - text: 03 /
          - heading "Una base pensada para continuar." [level=3] [ref=e136]
          - paragraph [ref=e137]: Seguridad, eficiencia y continuidad operativa como criterios para orientar el diseño del ecosistema.
    - region [ref=e138]:
      - generic [ref=e139]:
        - generic [ref=e140]:
          - generic [ref=e141]:
            - paragraph [ref=e142]: 05 / Del contexto a la solución
            - heading "Todo empieza por entender tu negocio." [level=2] [ref=e143]
          - paragraph [ref=e144]:
            - generic [ref=e145]: Propuesta de trabajo
            - text: Ruta orientativa pendiente de validación comercial.
        - list [ref=e146]:
          - listitem [ref=e147]:
            - text: "01"
            - heading "Entender" [level=3] [ref=e148]
            - paragraph [ref=e149]: Conocer tus procesos, necesidades y objetivos para definir el punto de partida.
          - listitem [ref=e150]:
            - text: "02"
            - heading "Diseñar" [level=3] [ref=e151]
            - paragraph [ref=e152]: Dar forma a una arquitectura modular y acordar las prioridades del proyecto.
          - listitem [ref=e153]:
            - text: "03"
            - heading "Construir" [level=3] [ref=e154]
            - paragraph [ref=e155]: Desarrollar e integrar las piezas, verificando su relación con el objetivo definido.
          - listitem [ref=e156]:
            - text: "04"
            - heading "Evolucionar" [level=3] [ref=e157]
            - paragraph [ref=e158]: Revisar las nuevas necesidades y planificar los siguientes pasos del ecosistema.
    - region [ref=e159]:
      - generic [ref=e160]:
        - paragraph [ref=e161]: 06 / Somos Zyntra Cloud
        - paragraph [ref=e162]:
          - text: La tecnología se adapta.
          - emphasis [ref=e163]: Las ideas avanzan.
        - generic [ref=e164]: Adaptabilidad. Evolución. Modularidad.
      - generic [ref=e165]:
        - heading "Una convicción que nos conecta." [level=2] [ref=e166]
        - paragraph [ref=e167]: "Nacimos con una idea clara: la nube debe moldearse a la visión de tu negocio."
        - paragraph [ref=e168]: Trabajamos en la unión entre infraestructura cloud y desarrollo de software a medida. Nuestro enfoque modular busca transformar la complejidad tecnológica en soluciones ágiles, seguras y preparadas para evolucionar.
        - paragraph [ref=e169]: Nos dirigimos a líderes de tecnología, responsables de operaciones y fundadores que necesitan construir con flexibilidad.
        - generic [ref=e170]:
          - generic [ref=e171]: Nuestra visión
          - paragraph [ref=e172]: Un futuro en el que ninguna empresa tenga que limitar sus ideas por una infraestructura rígida.
    - region [ref=e173]:
      - generic [ref=e174]:
        - generic [ref=e175]:
          - paragraph [ref=e176]: 07 / La próxima pieza
          - heading [level=2] [ref=e177]:
            - text: Tu próxima idea merece una base
            - emphasis [ref=e178]: a su medida.
          - paragraph [ref=e179]: Cuéntanos qué quieres construir. El primer paso es entenderlo.
        - generic [ref=e180]:
          - heading "Empecemos por tu visión." [level=3] [ref=e181]
          - paragraph [ref=e182]: "Para una primera conversación, piensa en tres cosas:"
          - list [ref=e183]:
            - listitem [ref=e184]: ¿Qué necesita resolver tu negocio?
            - listitem [ref=e185]: ¿Cómo funciona hoy tu operación?
            - listitem [ref=e186]: ¿Qué te gustaría poder hacer mañana?
          - generic [ref=e187]:
            - generic [ref=e188]: Canal de contacto por confirmar
            - paragraph [ref=e189]: El correo comercial estará disponible aquí cuando sea confirmado por Zyntra Cloud.
          - link "Descargar guía para tu proyecto" [ref=e190] [cursor=pointer]:
            - /url: /assets/documentos/guia-de-proyecto.txt
          - paragraph [ref=e193]: Una plantilla de texto para ordenar tus ideas. Sin registro.
  - contentinfo [ref=e194]:
    - generic [ref=e195]:
      - generic [ref=e196]:
        - link "Zyntra Cloud — Volver al inicio" [ref=e197] [cursor=pointer]:
          - /url: "#inicio"
          - img "Zyntra Cloud" [ref=e198]
        - paragraph [ref=e199]: Cloud y software a medida. Una arquitectura para lo que viene.
      - navigation "Navegación del pie de página" [ref=e200]:
        - link "Soluciones" [ref=e201] [cursor=pointer]:
          - /url: "#soluciones"
        - link "Arquitectura" [ref=e202] [cursor=pointer]:
          - /url: "#arquitectura"
        - link "Nosotros" [ref=e203] [cursor=pointer]:
          - /url: "#nosotros"
        - link "Contacto" [ref=e204] [cursor=pointer]:
          - /url: "#contacto"
      - link "Volver arriba" [ref=e205] [cursor=pointer]:
        - /url: "#inicio"
    - generic [ref=e208]:
      - paragraph [ref=e209]: © 2026 Zyntra Cloud.
      - paragraph [ref=e210]: Adaptabilidad por principio. Modularidad por diseño.
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
  4   |   test(`contenido, recursos y composición a ${width}px`, async ({ page }, testInfo) => {
  5   |     const errors = [];
  6   |     page.on('pageerror', (error) => errors.push(error.message));
  7   |     page.on('console', (message) => {
  8   |       if (['error', 'warning'].includes(message.type())) errors.push(message.text());
  9   |     });
  10  |     page.on('response', (response) => {
  11  |       if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
  12  |     });
  13  |     page.on('requestfailed', (request) => errors.push(`Solicitud fallida: ${request.url()}`));
  14  |     await page.setViewportSize({ width, height: 960 });
  15  |     await page.goto('/');
  16  |     await expect(page.getByRole('heading', { level: 1 })).toHaveText('La nube, a la medida de tu visión.');
  17  |     await page.locator('.site-footer').scrollIntoViewIfNeeded();
  18  |     await expect.poll(() => page.locator('img').evaluateAll((images) => images.every((img) => img.complete && img.naturalWidth > 0))).toBe(true);
  19  |     expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  20  |     const heroVideo = page.locator('.hero-background');
  21  |     await expect(heroVideo.locator('source')).toHaveAttribute('src', /\/assets\/Videos\/animacion_hero\.webm$/);
  22  |     await expect(heroVideo).toHaveAttribute('autoplay', '');
  23  |     await expect(heroVideo).toHaveAttribute('muted', '');
  24  |     await expect(heroVideo).toHaveAttribute('loop', '');
  25  |     await expect(heroVideo).toHaveAttribute('playsinline', '');
> 26  |     await expect.poll(() => heroVideo.evaluate((video) => video.readyState >= 2 && !video.paused && video.currentTime > 0)).toBe(true);
      |                                                                                                                             ^ Error: expect(received).toBe(expected) // Object.is equality
  27  |     expect(await page.locator('img[src*="Hero_section.png"]').count()).toBe(0);
  28  | 
  29  |     const badAnchors = await page.locator('a[href^="#"]').evaluateAll((links) => links.filter((link) => !document.getElementById(link.hash.slice(1))).map((link) => link.hash));
  30  |     expect(badAnchors).toEqual([]);
  31  |     await page.locator('#inicio').scrollIntoViewIfNeeded();
  32  |     await page.screenshot({ path: testInfo.outputPath(`landing-${width}.png`), fullPage: true, animations: 'disabled' });
  33  |     expect(errors).toEqual([]);
  34  |   });
  35  | }
  36  | 
  37  | test('menú móvil: teclado, Escape, destino y cambio de tamaño', async ({ page }) => {
  38  |   await page.setViewportSize({ width: 390, height: 844 });
  39  |   await page.goto('/');
  40  |   const toggle = page.locator('[data-menu-toggle]');
  41  |   await toggle.focus();
  42  |   await page.keyboard.press('Enter');
  43  |   await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  44  |   await page.keyboard.press('Tab');
  45  |   await expect(page.getByRole('navigation', { name: 'Navegación principal' }).getByRole('link', { name: 'Soluciones', exact: true })).toBeFocused();
  46  |   await page.keyboard.press('Escape');
  47  |   await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  48  |   await expect(toggle).toBeFocused();
  49  |   await toggle.click();
  50  |   await page.locator('#primary-navigation a[href="#arquitectura"]').click();
  51  |   await expect(page).toHaveURL(/#arquitectura$/);
  52  |   await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  53  |   await expect(page.locator('#arquitectura')).toBeFocused();
  54  |   await page.setViewportSize({ width: 1440, height: 960 });
  55  |   await expect(page.locator('#primary-navigation')).toBeVisible();
  56  | });
  57  | 
  58  | test('detalles de servicio accesibles y acciones con destino', async ({ page }) => {
  59  |   await page.goto('/');
  60  |   const details = page.locator('details').first();
  61  |   await details.locator('summary').focus();
  62  |   await page.keyboard.press('Enter');
  63  |   await expect(details).toHaveAttribute('open', '');
  64  |   await expect(details.getByText(/La infraestructura se organiza/)).toBeVisible();
  65  |   await page.keyboard.press('Enter');
  66  |   await expect(details).not.toHaveAttribute('open', '');
  67  |   for (const href of ['#soluciones', '#contacto']) {
  68  |     await page.locator(`.hero a[href="${href}"]`).click();
  69  |     await expect(page).toHaveURL(new RegExp(`${href}$`));
  70  |   }
  71  |   await expect(page.locator('[data-contact-pending]')).toBeVisible();
  72  |   await expect(page.locator('[data-contact-ready]')).toBeHidden();
  73  |   const downloadPromise = page.waitForEvent('download');
  74  |   await page.getByRole('link', { name: 'Descargar guía para tu proyecto' }).click();
  75  |   const download = await downloadPromise;
  76  |   expect(download.suggestedFilename()).toBe('guia-de-proyecto-zyntra-cloud.txt');
  77  |   expect(await download.failure()).toBeNull();
  78  | });
  79  | 
  80  | test('el enlace de salto y el movimiento reducido respetan el teclado', async ({ page }) => {
  81  |   await page.emulateMedia({ reducedMotion: 'reduce' });
  82  |   await page.goto('/');
  83  |   await page.keyboard.press('Tab');
  84  |   await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();
  85  |   await page.keyboard.press('Enter');
  86  |   await expect(page.locator('#contenido')).toBeFocused();
  87  |   expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  88  |   expect(await page.locator('.is-entering').count()).toBe(0);
  89  | });
  90  | 
  91  | test('contenido y navegación siguen disponibles sin JavaScript', async ({ browser }) => {
  92  |   const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } });
  93  |   const page = await context.newPage();
  94  |   await page.goto('http://127.0.0.1:4173/');
  95  |   await expect(page.locator('#primary-navigation')).toBeVisible();
  96  |   await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  97  |   await page.locator('#primary-navigation a[href="#soluciones"]').click();
  98  |   await expect(page).toHaveURL(/#soluciones$/);
  99  |   await expect(page.locator('[data-contact-pending]')).toBeVisible();
  100 |   expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  101 |   await context.close();
  102 | });
  103 | 
```