const menuBtn = document.getElementById('menuBtn');
const menuContent = document.querySelector('nav');
const menuItem = document.querySelectorAll('.nav__item');

const menuUrl = '/assets/images/icon-menu.svg';
const menuCloseUrl = '/assets/images/icon-close-menu.svg';
const arrowUpUrl = '/assets/images/icon-arrow-up.svg';
const arrowDownUrl = '/assets/images/icon-arrow-down.svg';

menuBtn.addEventListener('click', () => {
  if (menuContent.classList.contains('hidden')) {
    menuBtn.firstElementChild.src = menuCloseUrl;
    menuContent.classList.remove('hidden');
  } else {
    menuBtn.firstElementChild.src = menuUrl;
    menuContent.classList.add('hidden');
  }
});

Array.from(menuItem).forEach((item) => {
  const input = item.querySelector('input');
  const arrow = item.querySelector('.arrow');
  const list = item.querySelector('ul');

  input?.addEventListener('click', () => {
    if (list.classList.contains('hidden')) {
      arrow.src = arrowDownUrl;
      list.classList.remove('hidden');
    } else {
      arrow.src = arrowUpUrl;
      list.classList.add('hidden');
    }
  });
});
