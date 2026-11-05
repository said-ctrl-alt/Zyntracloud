import { test, expect } from '@playwright/test';

for (const width of [320, 375, 390, 768, 1024, 1440, 1920]) {
  test(`contenido, recursos y composición a ${width}px`, async ({ page }, testInfo) => {
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      if (['error', 'warning'].includes(message.type())) errors.push(message.text());
    });
    page.on('response', (response) => {
      if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`);
    });
    page.on('requestfailed', (request) => errors.push(`Solicitud fallida: ${request.url()}`));
    await page.setViewportSize({ width, height: 960 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('La nube, a la medida de tu visión.');
    await page.locator('.site-footer').scrollIntoViewIfNeeded();
    await expect.poll(() => page.locator('img').evaluateAll((images) => images.every((img) => img.complete && img.naturalWidth > 0))).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    const heroVideo = page.locator('.hero-background');
    await expect(heroVideo.locator('source')).toHaveAttribute('src', /\/assets\/Videos\/animacion_hero\.webm$/);
    await expect(heroVideo).toHaveAttribute('autoplay', '');
    await expect(heroVideo).toHaveAttribute('muted', '');
    await expect(heroVideo).toHaveAttribute('loop', '');
    await expect(heroVideo).toHaveAttribute('playsinline', '');
    await expect.poll(() => heroVideo.evaluate((video) => video.readyState >= 2 && !video.paused && video.currentTime > 0)).toBe(true);
    expect(await page.locator('img[src*="Hero_section.png"]').count()).toBe(0);

    const badAnchors = await page.locator('a[href^="#"]').evaluateAll((links) => links.filter((link) => !document.getElementById(link.hash.slice(1))).map((link) => link.hash));
    expect(badAnchors).toEqual([]);
    await page.locator('#inicio').scrollIntoViewIfNeeded();
    await page.screenshot({ path: testInfo.outputPath(`landing-${width}.png`), fullPage: true, animations: 'disabled' });
    expect(errors).toEqual([]);
  });
}

test('menú móvil: teclado, Escape, destino y cambio de tamaño', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.locator('[data-menu-toggle]');
  await toggle.focus();
  await page.keyboard.press('Enter');
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('navigation', { name: 'Navegación principal' }).getByRole('link', { name: 'Soluciones', exact: true })).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page.locator('#primary-navigation a[href="#arquitectura"]').click();
  await expect(page).toHaveURL(/#arquitectura$/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#arquitectura')).toBeFocused();
  await page.setViewportSize({ width: 1440, height: 960 });
  await expect(page.locator('#primary-navigation')).toBeVisible();
});

test('detalles de servicio accesibles y acciones con destino', async ({ page }) => {
  await page.goto('/');
  const details = page.locator('details').first();
  await details.locator('summary').focus();
  await page.keyboard.press('Enter');
  await expect(details).toHaveAttribute('open', '');
  await expect(details.getByText(/La infraestructura se organiza/)).toBeVisible();
  await page.keyboard.press('Enter');
  await expect(details).not.toHaveAttribute('open', '');
  for (const href of ['#soluciones', '#contacto']) {
    await page.locator(`.hero a[href="${href}"]`).click();
    await expect(page).toHaveURL(new RegExp(`${href}$`));
  }
  await expect(page.locator('[data-contact-pending]')).toBeVisible();
  await expect(page.locator('[data-contact-ready]')).toBeHidden();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('link', { name: 'Descargar guía para tu proyecto' }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('guia-de-proyecto-zyntra-cloud.txt');
  expect(await download.failure()).toBeNull();
});

test('el enlace de salto y el movimiento reducido respetan el teclado', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#contenido')).toBeFocused();
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto');
  expect(await page.locator('.is-entering').count()).toBe(0);
});

test('contenido y navegación siguen disponibles sin JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 375, height: 812 } });
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4173/');
  await expect(page.locator('#primary-navigation')).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await page.locator('#primary-navigation a[href="#soluciones"]').click();
  await expect(page).toHaveURL(/#soluciones$/);
  await expect(page.locator('[data-contact-pending]')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await context.close();
});
