(() => {
  const section = document.querySelector('.salon-lights');
  if (!section) return;

  const base = 'assets/salon-20261019/';
  const photos = [
    { file: '20-empfang-logo.jpeg', title: 'Unser Empfang', caption: 'Warmes Holz, sanftes Licht und die Verschönerei an der Wand.', alt: 'Empfang der Verschönerei mit beleuchteter Holztheke, gläsernen Pendelleuchten und Salonlogo', position: '50% 48%', width: 1067, height: 1600 },
    { file: '03-friseurstuhl.jpeg', title: 'Dein Platz vor dem Spiegel', caption: 'Helle Sessel und warmes Holz im Friseurbereich.', alt: 'Beiger Friseurstuhl vor einem großen Spiegel und einer Ablage aus hellem Holz', position: '50% 48%', width: 1067, height: 1600 },
    { file: '06-pendelleuchten-hell.jpeg', title: 'Unser Lieblingslicht', caption: 'Die gläsernen Pendelleuchten gehören zur Verschönerei.', alt: 'Gläserne Pendelleuchten mit warm leuchtenden Glühfäden vor dem hellen Salonfenster', position: '50% 30%', width: 1067, height: 1600 },
    { file: '17-boutique-kleidung-detail.jpeg', title: 'Etwas Schönes entdecken', caption: 'Kleidung und Accessoires in unserer kleinen Boutique.', alt: 'Kleiderstange mit Kleidung in Naturtönen und Accessoires im Boutique-Bereich', position: '50% 54%', width: 1067, height: 1600 },
    { file: '21-boutique-pflege-deko.jpeg', title: 'Die kleinen Dinge', caption: 'Pflege, weiche Textilien und ausgewählte Details.', alt: 'Holzregale mit Pflegeprodukten, gefalteten Textilien und Dekoration', position: '50% 50%', width: 1067, height: 1600 },
    { file: '01-lounge-fenster.jpeg', title: 'Die Lounge am Fenster', caption: 'Ein Platz zum Ankommen zwischen Pflanzen und Tageslicht.', alt: 'Heller Loungesessel am großen Fenster mit Pflanzen, Pampasgras und einem runden schwarzen Tisch', position: '49% 54%', width: 1067, height: 1600 },
    { file: '04-eingang-glasschrift.jpeg', title: 'Ein erster Blick nach drinnen', caption: 'Durch die Glastür geht es direkt in unsere Verschönerei.', alt: 'Blick durch die Eingangstür mit dem Schriftzug Verschönerei Weinheim in den Salon', position: '50% 45%', width: 1067, height: 1600 },
    { file: '12-waschplaetze-quer.jpeg', title: 'Ein Moment für dich', caption: 'Die Waschplätze in unserem ruhigeren Salonbereich.', alt: 'Dunkle Waschplätze mit bequemen Sesseln unter warmer indirekter Beleuchtung', position: '50% 48%', width: 1600, height: 1067 },
  ];

  const mainLink = section.querySelector('[data-lights-open]');
  const mainImage = section.querySelector('[data-lights-main]');
  const photoTitle = section.querySelector('[data-lights-title]');
  const photoCaption = section.querySelector('[data-lights-caption]');
  const count = section.querySelector('[data-lights-count]');
  const announcer = section.querySelector('[data-lights-announcer]');
  const pendants = [...section.querySelectorAll('[data-lights-pendant]')];
  const motionButton = section.querySelector('[data-lights-motion]');
  const motionLabel = section.querySelector('[data-lights-motion-label]');
  const dialog = section.querySelector('.lights-dialog');
  const dialogImage = dialog.querySelector('[data-lights-dialog-image]');
  const dialogCaption = dialog.querySelector('[data-lights-dialog-caption]');
  const dialogCount = dialog.querySelector('[data-lights-dialog-count]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let userPaused = false;
  let inView = false;

  const wrap = value => (value + photos.length) % photos.length;
  const setImage = (image, photo) => {
    image.alt = photo.alt;
    image.width = photo.width;
    image.height = photo.height;
    image.style.setProperty('--lights-position', photo.position);
    image.src = base + photo.file;
  };

  const renderDialog = () => {
    const photo = photos[index];
    setImage(dialogImage, photo);
    dialogCaption.textContent = `${photo.title}. ${photo.caption}`;
    dialogCount.textContent = `${index + 1} / ${photos.length}`;
  };

  const render = (nextIndex, announce = false) => {
    index = wrap(nextIndex);
    const photo = photos[index];
    setImage(mainImage, photo);
    mainLink.href = base + photo.file;
    mainLink.setAttribute('aria-label', `${photo.title}: Foto groß ansehen`);
    photoTitle.textContent = photo.title;
    photoCaption.textContent = photo.caption;
    count.textContent = `${index + 1} / ${photos.length}`;
    pendants.forEach((pendant, offset) => {
      const nextPhoto = photos[wrap(index + offset + 1)];
      const button = pendant.querySelector('button');
      setImage(pendant.querySelector('img'), nextPhoto);
      button.setAttribute('aria-label', `${nextPhoto.title} in der Galerie ansehen`);
      pendant.querySelector('.lights-pendant-label').textContent = nextPhoto.title;
    });
    if (dialog.open) renderDialog();
    if (announce) announcer.textContent = `Foto ${index + 1} von ${photos.length}: ${photo.title}.`;
  };

  const syncMotion = () => {
    const reduced = reducedMotion.matches;
    const paused = userPaused || reduced;
    section.dataset.lightsMoving = String(!paused && inView && !document.hidden && !dialog.open);
    motionButton.disabled = reduced;
    motionButton.setAttribute('aria-pressed', String(paused));
    motionLabel.textContent = reduced ? 'Bewegung reduziert' : userPaused ? 'Bewegung fortsetzen' : 'Bewegung anhalten';
  };

  section.querySelectorAll('[data-lights-enhanced]').forEach(element => { element.hidden = false; });
  section.querySelector('[data-lights-previous]').addEventListener('click', () => render(index - 1, true));
  section.querySelector('[data-lights-next]').addEventListener('click', () => render(index + 1, true));
  pendants.forEach((pendant, offset) => {
    pendant.querySelector('button').addEventListener('click', () => render(index + offset + 1, true));
  });
  motionButton.addEventListener('click', () => { userPaused = !userPaused; syncMotion(); });
  mainLink.addEventListener('click', event => {
    if (typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    renderDialog();
    dialog.showModal();
    syncMotion();
  });
  dialog.querySelector('[data-lights-close]').addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-lights-dialog-previous]').addEventListener('click', () => render(index - 1, true));
  dialog.querySelector('[data-lights-dialog-next]').addEventListener('click', () => render(index + 1, true));
  dialog.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      render(index + (event.key === 'ArrowRight' ? 1 : -1), true);
    }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener('close', syncMotion);
  document.addEventListener('visibilitychange', syncMotion);
  reducedMotion.addEventListener('change', syncMotion);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inView = entries[0].isIntersecting;
      syncMotion();
    }, { threshold: .12 }).observe(section.querySelector('.lights-stage'));
  } else {
    inView = true;
  }
  render(0);
  syncMotion();
})();
