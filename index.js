const toggleBtn = document.querySelector('.btn-toggle');
const navigationBar = document.querySelector('nav');
const dropdownItems = Array.from(document.querySelectorAll('[aria-haspopup]'));

const menuOpenUrl = '/assets/images/icon-menu.svg';
const menuCloseUrl = '/assets/images/icon-close-menu.svg';

toggleBtn.addEventListener('click', () => {
  if (toggleBtn.getAttribute('aria-expanded') === 'false') {
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.firstElementChild.src = menuCloseUrl;
  } else {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.firstElementChild.src = menuOpenUrl;
  }
  navigationBar.classList.toggle('open');
  navigationBar.style.transition = 'transform 0.25s ease-in-out';
});
console.log(navigationBar);
navigationBar.addEventListener('transitionend', () => {
  navigationBar.removeAttribute('style');
});

dropdownItems.forEach((item) => {
  item.addEventListener('click', () => {
    const itemList = item.nextElementSibling;
    const arrow = item.firstElementChild;

    if (item.getAttribute('aria-expanded') !== 'true') {
      item.setAttribute('aria-expanded', 'true');
      itemList.classList.add('flex');
      itemList.style.visibility = 'visible';
      arrow.style.transform = 'rotate(180deg)';
    } else {
      item.setAttribute('aria-expanded', 'false');
      itemList.classList.remove('flex');
      itemList.style.visibility = 'hidden';
      itemList.removeAttribute('style');
      arrow.style.transform = 'rotate(0)';
    }
  });
});
