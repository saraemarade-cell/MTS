/* MTS Motorsport Technical School — Scripts */

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// Smooth scroll for anchors (override default for offset)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = navbar.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Intersection observer — fade-up animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Apply to key elements
const animTargets = [
  '.section-header',
  '.corso-card',
  '.perche-card',
  '.testi-card',
  '.gallery-item',
  '.chi-siamo-text',
  '.chi-siamo-visuals',
  '.target-list li',
  '.stat',
].join(',');

document.querySelectorAll(animTargets).forEach((el, i) => {
  el.classList.add('fade-up');
  // Stagger cards in grids
  const delay = (i % 4) * 80;
  el.style.transitionDelay = `${delay}ms`;
  observer.observe(el);
});

// Form submission handler
const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = leadForm.querySelector('[type="submit"]');
    const fields = leadForm.querySelectorAll('[required]');
    let valid = true;

    fields.forEach(field => {
      field.style.borderColor = '';
      if (!field.value || (field.type === 'checkbox' && !field.checked)) {
        field.style.borderColor = '#D72E1F';
        valid = false;
      }
    });

    if (!valid) return;

    btn.textContent = 'Invio in corso...';
    btn.disabled = true;

    // Simulate send
    setTimeout(() => {
      btn.textContent = 'Richiesta Inviata!';
      btn.style.background = 'linear-gradient(135deg, #1a7a1a, #2ea82e)';
      leadForm.querySelectorAll('input, select, textarea').forEach(f => f.value = '');
      setTimeout(() => {
        btn.textContent = 'Voglio Ricevere Informazioni';
        btn.style.background = '';
        btn.disabled = false;
      }, 3500);
    }, 900);
  });
}

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

function setActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navItems.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
  });
}

window.addEventListener('scroll', setActiveNav, { passive: true });
