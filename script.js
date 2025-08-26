// Drag-and-drop uploader behavior for section pages
(function () {
  const dropzones = document.querySelectorAll('[data-dropzone]');
  if (!dropzones.length) return;

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(zone) {
    zone.classList.add('is-dragover');
  }

  function unhighlight(zone) {
    zone.classList.remove('is-dragover');
  }

  function handleDrop(zone, files) {
    unhighlight(zone);
    if (!files || !files.length) return;

    const list = Array.from(files).filter((f) => f.type === 'audio/mpeg' || f.name.toLowerCase().endsWith('.mp3'));
    if (!list.length) {
      alert('Please drop an MP3 file.');
      return;
    }
    const file = list[0];
    const label = zone.querySelector('[data-file-label]');
    if (label) label.textContent = `Selected: ${file.name}`;
  }

  dropzones.forEach((zone) => {
    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
      zone.addEventListener(eventName, preventDefaults, false);
    });

    ;['dragenter', 'dragover'].forEach((eventName) => {
      zone.addEventListener(eventName, () => highlight(zone), false);
    });
    ;['dragleave', 'drop'].forEach((eventName) => {
      zone.addEventListener(eventName, () => unhighlight(zone), false);
    });

    zone.addEventListener('drop', (e) => {
      handleDrop(zone, e.dataTransfer.files);
    });

    const input = zone.closest('.uploader')?.querySelector('input[type="file"]');
    if (input) {
      input.addEventListener('change', (e) => {
        handleDrop(zone, e.target.files);
      });
    }
  });
})();


