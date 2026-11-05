import { siteConfig } from '../config.js';
import { createContactHref } from '../utils/contact.js';

export function initContact() {
  const href = createContactHref(siteConfig.contactEmail, siteConfig.contactSubject);
  const ready = document.querySelector('[data-contact-ready]');
  const pending = document.querySelector('[data-contact-pending]');
  const link = document.querySelector('[data-contact-link]');
  if (!href || !ready || !pending || !link) return;
  link.href = href;
  ready.hidden = false;
  pending.hidden = true;
}
