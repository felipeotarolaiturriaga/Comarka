'use strict';

// EDITA ESTOS VALORES. No se necesitan instalaciones ni servicios externos.
const CONFIG = {
  // Fecha y hora del evento con zona horaria explícita en formato ISO 8601.
  // Ejemplo de formato: '2026-12-31T23:59:00-03:00'.
  // Dejar vacío muestra «Fecha por confirmar» y no inventa una fecha.
  eventDate: '2027-03-26T00:00:00-03:00',
  eventLabel: 'NOS ENCONTRAMOS EN',
  completedLabel: '¡El momento ha llegado!',
  contactEmail: '', // Reemplaza por tu dirección real para activar el correo.
};

const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Abrir menú');
  navigation.classList.remove('open');
}
menu.addEventListener('click', () => {
  const isOpen = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!isOpen));
  menu.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  navigation.classList.toggle('open', !isOpen);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
const links = [...navigation.querySelectorAll('a')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) links.forEach(link => {
        const active = link.hash === `#${entry.target.id}`;
        link.classList.toggle('active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, {rootMargin: '-10% 0px -60% 0px', threshold: 0});
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}

function getRemainingTime(target, now = Date.now()) {
  const total = Math.max(0, Math.floor((target - now) / 1000));
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor(total / 3600) % 24,
    minutes: Math.floor(total / 60) % 60,
    seconds: total % 60,
    complete: target <= now,
  };
}
const targetDate = CONFIG.eventDate ? Date.parse(CONFIG.eventDate) : NaN;
if (Number.isFinite(targetDate)) {
  document.querySelector('#countdown-label').textContent = CONFIG.eventLabel;
  let countdownTimer;
  function updateCountdown() {
    const remaining = getRemainingTime(targetDate);
    ['days', 'hours', 'minutes', 'seconds'].forEach(unit => {
      document.getElementById(unit).textContent = String(remaining[unit]).padStart(2, '0');
    });
    if (remaining.complete) {
      document.querySelector('#countdown-status').textContent = CONFIG.completedLabel;
      if (countdownTimer) window.clearInterval(countdownTimer);
    }
    return remaining.complete;
  }
  if (!updateCountdown()) countdownTimer = window.setInterval(updateCountdown, 1000);
}

const email = CONFIG.contactEmail.trim();
if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  const contactLink = document.querySelector('#contact-email');
  contactLink.href = `mailto:${email}?subject=${encodeURIComponent('Contacto · Comarka 2026')}`;
  contactLink.hidden = false;
  document.querySelector('#contact-pending').hidden = true;
  const address = document.querySelector('#contact-address');
  address.textContent = email;
  address.hidden = false;
}
