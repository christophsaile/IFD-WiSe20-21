window.addEventListener('DOMContentLoaded', () => {
  init();
});

function init() {
  accordion();
}

function accordion() {
  const acc = document.querySelectorAll('.acc');
  const allPanel = document.querySelectorAll('.panel');

  acc.forEach((item) => {
    item.addEventListener('click', function () {
      acc.forEach((item) => {
        item.classList.remove('active', 'animate__slideInLeft');
        allPanel.forEach((elem) => {
          elem.style.maxHeight = null;
        });
      });
      this.classList.add('active', 'animate__slideInLeft');
      let panel = this.nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + 'px';
    });
  });
}
