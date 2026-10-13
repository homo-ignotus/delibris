/* De Libris. No framework or hosting service required.
   The Markdown content is built into HTML by GitHub Pages / Jekyll. */
(() => {
  // The window remains cream-white until you add assets/images/window-view.jpg,
  // .jpeg, .png or .webp. Existing windows can be changed by replacing the file.
  const room = document.querySelector('.room[data-window-prefix]');
  if (room) {
    const slot = room.querySelector('.window-photo');
    const prefix = room.dataset.windowPrefix;
    const formats = ['jpg', 'jpeg', 'png', 'webp'];
    const tryNext = (index) => {
      if (index >= formats.length) return;
      const candidate = `${prefix}.${formats[index]}`;
      const test = new Image();
      test.onload = () => {
        slot.style.backgroundImage = `url("${candidate}")`;
      };
      test.onerror = () => tryNext(index + 1);
      test.src = candidate;
    };
    tryNext(0);
  }

  // Same-site page-turn. Standard anchors remain fully functional without JS.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let turning = false;
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href]');
    if (!anchor || event.defaultPrevented || turning ||
      event.button !== 0 || event.metaKey || event.ctrlKey ||
      event.shiftKey || event.altKey || anchor.hasAttribute('download') ||
      (anchor.target && anchor.target !== '_self')) return;
    const target = new URL(anchor.href, location.href);
    if (target.origin !== location.origin || (target.pathname === location.pathname && target.search === location.search && target.hash)) return;
    event.preventDefault();
    turning = true;
    document.body.classList.add('page-turning');
    window.setTimeout(() => { location.href = target.href; }, 500);
  });
})();
