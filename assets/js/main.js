// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const links  = document.querySelector('.nav__links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// FAQ accordion
document.querySelectorAll('.faq__item').forEach(item => {
  const q = item.querySelector('.faq__q');
  if (!q) return;
  q.addEventListener('click', () => {
    const open = item.classList.toggle('open');
    q.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
});

// Tabs (report page)
document.querySelectorAll('[data-tabs]').forEach(group => {
  const tabs   = group.querySelectorAll('.tab');
  const panels = group.querySelectorAll('[data-panel]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.toggle('is-active', t === tab));
      panels.forEach(p => p.hidden = (p.dataset.panel !== target));
    });
  });
});

// Light form handler (demo only — replace with real endpoint)
document.querySelectorAll('form[data-demo]').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const status = form.querySelector('.form__status');
    if (status) {
      status.textContent = 'Thank you. Your inquiry has been received — our team will contact you within one business day.';
      status.style.color = 'var(--c-brand)';
    }
    form.reset();
  });
});
