window.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  accordion();
}

function accordion() {
  const acc = document.querySelectorAll('.acc');

  acc.forEach((item) => {
    item.addEventListener('click', (elem) => {
      acc.forEach((item) => {
        item.classList.remove('active', 'animate__slideInLeft');
        item.nextElementSibling.style.maxHeight = null;
      });
      elem.target.classList.add('active', 'animate__slideInLeft');
      const panel = elem.target.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + 'px';
    });
  });
}
