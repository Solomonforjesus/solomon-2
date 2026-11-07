(() => {
  const preview = document.getElementById('dance-preview');
  const toggle = document.getElementById('dance-toggle');
  if (!preview || !toggle) return;

  const still = preview.getAttribute('src');
  const animation = preview.dataset.animation;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let playing = false;

  function setPlaying(value) {
    playing = value;
    preview.src = playing ? animation : still;
    toggle.textContent = playing ? 'Pause dance preview' : 'Play dance preview';
    toggle.setAttribute('aria-pressed', String(playing));
  }

  toggle.hidden = false;
  toggle.addEventListener('click', () => setPlaying(!playing));
  reducedMotion.addEventListener('change', event => {
    if (event.matches) setPlaying(false);
  });
  setPlaying(!reducedMotion.matches);
})();
