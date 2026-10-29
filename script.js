const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

function closeMenu() {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}

toggle.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  nav.classList.toggle('open', !expanded);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

document.getElementById('year').textContent = new Date().getFullYear();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = `Portfolio inquiry: ${data.get('service')}`;
  const body = [
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email')}`,
    `Service: ${data.get('service')}`,
    '',
    'Message:',
    data.get('message'),
  ].join('\n');

  formStatus.textContent = 'Your email application should open with the message prepared. Please send it there to complete your inquiry.';
  window.location.href = `mailto:alfredtackiequaye@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
