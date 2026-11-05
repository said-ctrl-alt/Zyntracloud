export function initNavigation() {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('#primary-navigation');
  if (!header || !toggle || !nav) return;

  const mobile = window.matchMedia('(max-width: 760px)');
  const links = [...nav.querySelectorAll('a[href^="#"]')];

  function setOpen(open, restoreFocus = false) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    nav.classList.toggle('is-open', open);
    if (restoreFocus) toggle.focus();
  }

  header.classList.add('is-enhanced');
  toggle.classList.add('is-enhanced');
  nav.classList.add('is-collapsible');
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false, true);
  });
  document.addEventListener('click', (event) => {
    if (!header.contains(event.target)) setOpen(false);
  });
  header.addEventListener('focusout', (event) => {
    if (mobile.matches && !header.contains(event.relatedTarget)) setOpen(false);
  });
  links.forEach((link) => link.addEventListener('click', () => {
    setOpen(false);
    if (!mobile.matches) return;
    // El destino continúa siendo un enlace nativo; solo se gestiona el foco.
    const section = document.querySelector(link.hash);
    if (section) {
      section.setAttribute('tabindex', '-1');
      section.focus({ preventScroll: true });
      section.addEventListener('blur', () => section.removeAttribute('tabindex'), { once: true });
    }
  }));
  mobile.addEventListener('change', () => setOpen(false));

  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  links.forEach((link) => {
    const target = document.querySelector(link.hash);
    if (target) observer.observe(target);
  });
}
