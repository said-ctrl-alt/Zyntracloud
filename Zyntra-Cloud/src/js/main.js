import { initNavigation } from './components/navigation.js';
import { initReveal } from './modules/reveal.js';
import { initContact } from './modules/contact.js';

initNavigation();
initReveal();
initContact();

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
