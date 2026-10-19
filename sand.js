(() => {
  'use strict';
  document.documentElement.classList.add('js');

  const milkControl = document.querySelector('[data-milk-control]');
  if (document.body.dataset.variant === 'b' && milkControl) {
    const slider = milkControl.querySelector('input');
    const output = milkControl.querySelector('output');
    const hero = document.querySelector('.hero');
    const storageKey = 'verschoenerei-milk-strength-v1';
    let strength = Number(slider.value);
    try {
      const stored = localStorage.getItem(storageKey);
      if (stored !== null && stored.trim() !== '' && Number.isFinite(Number(stored))) {
        strength = Number(stored);
      }
    } catch { /* The slider also works when browser storage is unavailable. */ }
    const applyMilk = value => {
      const amount = Math.min(100, Math.max(0, Math.round(Number(value))));
      const factor = amount / 100;
      slider.value = String(amount);
      slider.setAttribute('aria-valuetext', `${amount} Prozent`);
      output.value = `${amount} %`;
      hero.style.setProperty('--milk-opacity', String(.62 * factor));
      hero.style.setProperty('--milk-blur', `${12 * factor}px`);
      hero.style.setProperty('--milk-saturation', String(1 - .35 * factor));
      hero.style.setProperty('--milk-grain', String(.075 * factor));
    };
    applyMilk(strength);
    milkControl.hidden = false;
    slider.addEventListener('input', () => applyMilk(slider.value));
    slider.addEventListener('change', () => {
      try { localStorage.setItem(storageKey, slider.value); } catch { /* Keep the current preview usable. */ }
    });
  }

  const toggle = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-menu]');
  const closeMenu = () => {
    if (!toggle || !navigation) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Menü öffnen');
    navigation.classList.remove('is-open');
  };

  if (toggle && navigation) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
      navigation.classList.toggle('is-open', open);
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    const desktop = window.matchMedia('(min-width: 721px)');
    desktop.addEventListener('change', closeMenu);
  }

  const info = document.querySelector('[data-proposal-info]');
  const dialog = document.querySelector('.proposal-dialog');
  if (info && dialog) {
    info.hidden = false;
    info.addEventListener('click', () => dialog.showModal());
    dialog.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
        dialog.close();
      }
    });
  }
})();
