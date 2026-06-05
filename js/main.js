'use strict';

document.addEventListener('DOMContentLoaded', () => {

  // 1. HAMBURGER MENU TOGGLE
  const hamburger = document.querySelector('button.hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      });
    });

    document.addEventListener('click', (e) => {
      const nav = document.getElementById('site-nav');
      if (nav && !nav.contains(e.target)) {
        hamburger.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      }
    });
  }

  // 2. STICKY NAV SCROLL CLASS
  const siteNav = document.getElementById('site-nav');

  if (siteNav) {
    window.addEventListener('scroll', () => {
      siteNav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  // 3. SMOOTH SCROLL FOR ALL ANCHOR LINKS
  const NAV_HEIGHT = 72;

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // 4. BEFORE/AFTER IMAGE TOGGLE
  document.querySelectorAll('.before-after').forEach(container => {
    const btn = container.querySelector('.ba-toggle');
    if (!btn) return;

    btn.addEventListener('click', () => {
      const showingAfter = container.classList.toggle('show-after');
      btn.textContent = showingAfter ? 'Show Before' : 'Show After';
      btn.setAttribute('aria-pressed', String(showingAfter));
    });
  });

  // 5. FORM VALIDATION
  const form = document.getElementById('quote-form');

  if (form) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\+\-\(\)]{7,}$/;

    const clearFieldState = (field) => {
      field.classList.remove('error');
      const errEl = field.parentElement.querySelector('.field-error');
      if (errEl) errEl.classList.remove('visible');
    };

    const setFieldError = (field) => {
      field.classList.add('error');
      const errEl = field.parentElement.querySelector('.field-error');
      if (errEl) errEl.classList.add('visible');
    };

    form.querySelectorAll('input, select, textarea').forEach(field => {
      field.addEventListener('input', () => clearFieldState(field));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('[name="name"]');
      const phone = form.querySelector('[name="phone"]');
      const email = form.querySelector('[name="email"]');
      const service = form.querySelector('[name="service"]');
      const formStatus = document.getElementById('form-status');

      const fields = [name, phone, email, service].filter(Boolean);
      fields.forEach(clearFieldState);

      const errors = [];

      if (name && !name.value.trim()) { setFieldError(name); errors.push(name); }
      if (phone && !phoneRegex.test(phone.value.trim())) { setFieldError(phone); errors.push(phone); }
      if (email && !emailRegex.test(email.value.trim())) { setFieldError(email); errors.push(email); }
      if (service && !service.value) { setFieldError(service); errors.push(service); }

      if (errors.length > 0) {
        const top = errors[0].getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }

      if (formStatus) {
        formStatus.className = 'success';
        formStatus.textContent = "Thank you! We'll be in touch shortly.";
        form.reset();
        const top = formStatus.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  }

  // 6. INTERSECTION OBSERVER FADE-IN
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeEls.forEach(el => observer.observe(el));
  } else {
    fadeEls.forEach(el => el.classList.add('visible'));
  }

  // 7. ACTIVE NAV LINK HIGHLIGHT
  const sections = document.querySelectorAll('#services, #who-we-serve, #approach, #projects, #about, #contact');
  const navLinks = document.querySelectorAll('#nav-menu a[href^="#"]');

  window.addEventListener('scroll', () => {
    const midpoint = window.innerHeight / 2;
    let active = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= midpoint) active = section.id;
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').slice(1);
      link.classList.toggle('active', href === active);
    });
  }, { passive: true });

});
