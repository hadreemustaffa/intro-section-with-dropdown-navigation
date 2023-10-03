const toggleBtn = document.querySelector('.btn-toggle');
const navigationBar = document.querySelector('nav');
const dropdownItems = document.querySelectorAll('.dropdown__item');

const menuOpenUrl = '/assets/images/icon-menu.svg';
const menuCloseUrl = '/assets/images/icon-close-menu.svg';

const resetDropdown = (itemSelector, list, icon) => {
  itemSelector.setAttribute('aria-expanded', 'false');
  list.classList.remove('flex');
  list.style.visibility = 'hidden';
  list.removeAttribute('style');
  icon.style.transform = 'rotate(0)';
  icon.removeAttribute('style');
};

const expandDropdown = (itemSelector, list, icon) => {
  itemSelector.setAttribute('aria-expanded', 'true');
  list.classList.add('flex');
  list.style.visibility = 'visible';
  icon.style.transform = 'rotate(180deg)';
};

const toggleNavigationBar = () => {
  if (toggleBtn.getAttribute('aria-expanded') === 'false') {
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.firstElementChild.src = menuCloseUrl;
  } else {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.firstElementChild.src = menuOpenUrl;
    dropdownItems.forEach((item) => {
      resetDropdown(item, item.nextElementSibling, item.firstElementChild);
    });
  }
  navigationBar.classList.toggle('open');
  navigationBar.style.transition = 'transform 0.25s ease-in-out';
};

toggleBtn.addEventListener('click', () => {
  toggleNavigationBar();
});

navigationBar.addEventListener('transitionend', () => {
  navigationBar.removeAttribute('style');
});

dropdownItems.forEach((item) => {
  const list = item.nextElementSibling;
  const arrow = item.firstElementChild;

  item.addEventListener('click', () => {
    if (item.getAttribute('aria-expanded') !== 'true') {
      expandDropdown(item, list, arrow);
    } else {
      resetDropdown(item, list, arrow);
    }
  });

  item.addEventListener('blur', () => {
    if (window.innerWidth >= 992) {
      resetDropdown(item, list, arrow);
    }
  });
});
