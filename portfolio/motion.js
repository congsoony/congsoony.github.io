(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const selector = [
    '#profile .identity-row', '#profile .contacts', '#profile .intro',
    '#profile .proof-strip', '#profile .scope-note', '#profile .featured-header',
    '#profile .project-figure', '#profile .project-links', '.section-heading',
    '.architecture', '.responsibility article', '.tech-table',
    '.case-row', '.decision', '.comparison', '.results-table', '.test-condition',
    '.subheading', '.transaction-steps', '.code-block', '.inline-results',
    '.stream-path', '.project-entry', '.internship', '.education-entry',
    '.fit-entry', '.credential', '.closing',
  ].join(',');
  const items = [...document.querySelectorAll(selector)].filter((item) => !item.parentElement.closest('.project-entry, .education-entry'));
  let observer;
  function revealAll() {
    observer?.disconnect();
    items.forEach((item) => {
      item.classList.remove('reveal-pending');
      item.classList.add('is-visible');
    });
  }
  document.documentElement.dataset.design = 'refined';
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('reveal-pending');
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.04, rootMargin: '0px 0px -20px 0px' });
    items.forEach((item) => {
      item.classList.add('reveal-item', 'reveal-pending');
      observer.observe(item);
    });
  }
  window.addEventListener('beforeprint', revealAll);
  reducedMotion.addEventListener('change', (event) => { if (event.matches) revealAll(); });
  document.addEventListener('focusin', (event) => {
    const target = event.target.closest('.reveal-pending');
    if (target) {
      target.classList.remove('reveal-pending');
      target.classList.add('is-visible');
    }
  });
})();
