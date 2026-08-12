// Deliberate, once-only motion (03-ART-DIRECTION §7).
// Reveal on entry, plate settle, RiskLadder draw-in. Nothing loops.
// Fully inert when the user prefers reduced motion.
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // The hidden initial states only apply under html.js, so content is never
  // invisible if this script fails to load.
  document.documentElement.classList.add('js');
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal, .plate-zoom, .riskladder').forEach((el) => el.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll('.reveal, .plate-zoom, .riskladder').forEach((el) => io.observe(el));
})();
