// Kedar Mahajan Portfolio — main.js

// Lightbox
document.addEventListener('DOMContentLoaded', function () {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbClose = document.getElementById('lb-close');

  if (!lb) return;

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function () {
      lbImg.src = this.src;
      lb.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLb() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (lbClose) lbClose.addEventListener('click', closeLb);
  lb.addEventListener('click', function (e) {
    if (e.target === lb) closeLb();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLb();
  });
});

// Intersection Observer for card reveal
const cards = document.querySelectorAll('.project-card');
if (cards.length) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${i * 0.08}s`;
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  cards.forEach(c => observer.observe(c));
}
