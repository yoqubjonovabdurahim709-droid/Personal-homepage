// ---------- Theme toggle with persistence ----------
(function () {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const STORAGE_KEY = 'ay-theme';

  // Load saved theme (or respect system preference on first visit)
  const saved = localStorage.getItem(STORAGE_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = saved || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  toggleBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEY, next);
  });
})();

// ---------- Mobile menu ----------
(function () {
  const menuBtn = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');

  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.classList.toggle('open', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a nav link is clicked (mobile)
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();

// ---------- Dynamic year in footer ----------
document.getElementById('year').textContent = new Date().getFullYear();