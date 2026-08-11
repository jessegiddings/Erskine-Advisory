// Mobile nav toggle — the only JavaScript on the site.
// Lives as a static file (rather than an Astro inline script) so the
// Content-Security-Policy can stay `script-src 'self'` with no inline allowance.
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-nav');
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.textContent = open ? 'Menu' : 'Close';
    if (menu) {
      menu.hidden = open;
      menu.classList.toggle('hidden', open);
    }
  });
});
