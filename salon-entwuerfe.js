(() => {
  'use strict';
  const hero = document.querySelector('[data-preview-hero]');
  if (hero) {
    const slides = [...hero.querySelectorAll('[data-hero-slide]')];
    const dots = [...hero.querySelectorAll('[data-hero-select]')];
    const caption = hero.querySelector('[data-hero-caption]');
    const counter = hero.querySelector('[data-hero-counter]');
    const announcement = hero.querySelector('[data-hero-announcement]');
    const playback = hero.querySelector('[data-hero-playback]');
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let index = 0;
    let paused = media.matches;
    let inView = true;
    let timer;
    const updatePlayback = () => {
      playback.setAttribute('aria-label', paused ? 'Diashow abspielen' : 'Diashow anhalten');
      playback.textContent = paused ? '▷' : 'Ⅱ';
    };
    const syncTimer = () => {
      window.clearInterval(timer);
      if (!paused && inView && !document.hidden) timer = window.setInterval(() => show(index + 1, false), 7000);
      updatePlayback();
    };
    const show = (next, manual = true) => {
      index = (next + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle('is-active', i === index);
        slide.setAttribute('aria-hidden', String(i !== index));
      });
      dots.forEach((dot, i) => dot.setAttribute('aria-pressed', String(i === index)));
      const title = slides[index].dataset.title;
      caption.textContent = title;
      counter.textContent = `${index + 1} / ${slides.length}`;
      if (manual) {
        paused = true;
        announcement.textContent = `${title}, Bild ${index + 1} von ${slides.length}`;
        syncTimer();
      }
    };
    hero.querySelector('[data-hero-previous]').addEventListener('click', () => show(index - 1));
    hero.querySelector('[data-hero-next]').addEventListener('click', () => show(index + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => show(i)));
    playback.addEventListener('click', () => { paused = !paused; syncTimer(); });
    hero.addEventListener('focusin', event => {
      if (event.target !== playback) { paused = true; syncTimer(); }
    });
    media.addEventListener('change', () => { paused = media.matches; syncTimer(); });
    document.addEventListener('visibilitychange', syncTimer);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        inView = entries[0].isIntersecting;
        syncTimer();
      }, { threshold: .3 }).observe(hero);
    }
    show(0, false);
    syncTimer();
  }

  const gallery = document.querySelector('[data-calm-gallery]');
  if (gallery) {
    const items = JSON.parse(gallery.querySelector('[data-calm-items]').textContent);
    const dialog = gallery.querySelector('[data-calm-dialog]');
    const image = dialog.querySelector('[data-calm-image]');
    const caption = dialog.querySelector('[data-calm-caption]');
    const counter = dialog.querySelector('[data-calm-counter]');
    let current = 0;
    let opener;
    const show = next => {
      current = (next + items.length) % items.length;
      const item = items[current];
      image.src = item.src;
      image.alt = item.alt;
      caption.textContent = item.title;
      counter.textContent = `${current + 1} / ${items.length}`;
    };
    gallery.querySelectorAll('[data-calm-open]').forEach(button => {
      button.addEventListener('click', event => {
        if (typeof dialog.showModal !== 'function') return;
        event.preventDefault();
        opener = button;
        show(Number(button.dataset.calmOpen));
        dialog.showModal();
      });
    });
    dialog.querySelector('[data-calm-close]').addEventListener('click', () => dialog.close());
    dialog.querySelector('[data-calm-previous]').addEventListener('click', () => show(current - 1));
    dialog.querySelector('[data-calm-next]').addEventListener('click', () => show(current + 1));
    dialog.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        show(current + (event.key === 'ArrowRight' ? 1 : -1));
      }
    });
    dialog.addEventListener('click', event => {
      const box = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => opener?.focus());
  }
})();
