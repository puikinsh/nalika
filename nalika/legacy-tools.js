document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('#preview-load');
  if (loader) {
    loader.addEventListener('click', () => {
      loader.disabled = true;
      const status = document.querySelector('#load-status');
      status.textContent = 'Loading…';
      status.classList.add('preview-loading');
      window.setTimeout(() => {
        status.textContent = 'Demo loaded.';
        status.classList.remove('preview-loading');
        loader.disabled = false;
        loader.focus();
      }, 900);
    });
  }
  const map = document.querySelector('#demo-map-coordinates');
  if (map) {
    const link = document.querySelector('#demo-map-link');
    const viewport = document.querySelector('#demo-map');
    const refresh = () => {
      const choice = map.selectedOptions[0];
      const [x, y] = choice.value.split(',').map(Number);
      link.href = `https://www.openstreetmap.org/?mlat=${y}&mlon=${x}#map=13/${y}/${x}`;
      if (viewport.hidden) return;
      const box = [x - .045, y - .027, x + .045, y + .027].join(',');
      viewport.src = 'https://www.openstreetmap.org/export/embed.html?layer=mapnik&bbox=' + encodeURIComponent(box);
    };
    map.addEventListener('change', refresh);
    document.querySelector('#show-demo-map').addEventListener('click', () => {
      viewport.hidden = false;
      refresh();
    });
    refresh();
  }
  const region = document.querySelector('#demo-region');
  if (region) {
    region.addEventListener('change', () => {
      const option = region.selectedOptions[0];
      document.querySelector('#region-name').textContent = option.textContent;
      document.querySelector('#region-orders').textContent = option.value;
      document.querySelector('#region-fulfillment').value = Number(option.dataset.fulfillment);
      document.querySelector('#region-fulfillment-label').textContent = option.dataset.fulfillment + '% of orders fulfilled';
    });
  }
  const editor = document.querySelector('#in-place-editor');
  if (editor) {
    editor.addEventListener('submit', event => {
      event.preventDefault();
      document.querySelector('#record-title').textContent = editor.elements.title.value.trim();
      document.querySelector('#record-status').textContent = editor.elements.status.selectedOptions[0].textContent;
      document.querySelector('#record-saved').textContent = 'Changes saved for this demo session.';
    });
  }
});
