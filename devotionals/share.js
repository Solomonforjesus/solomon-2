(() => {
  const button = document.getElementById('share-devotional');
  const status = document.getElementById('share-status');
  const fallback = document.getElementById('share-fallback');
  const input = document.getElementById('share-url');
  if (!button || !status || !fallback || !input) return;
  const url = document.querySelector('link[rel="canonical"]').href;
  const title = document.querySelector('h1').textContent.trim();
  button.addEventListener('click', async () => {
    status.textContent = '';
    fallback.hidden = true;
    if (navigator.share) {
      try { await navigator.share({ title, url }); return; }
      catch (error) { if (error.name === 'AbortError') return; }
    }
    try {
      await navigator.clipboard.writeText(url);
      status.textContent = 'Link copied. Ready to share!';
    } catch {
      fallback.hidden = false;
      input.value = url;
      input.focus();
      input.select();
      status.textContent = 'Select and copy the link below.';
    }
  });
})();
