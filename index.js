const toggleBtn = document.querySelector('.btn-toggle');
const mainMenu = document.querySelector('.main-menu');
const dropdownItems = document.querySelectorAll('.dropdown__item');

const menuOpenUrl = '/assets/images/icon-menu.svg';
const menuCloseUrl = '/assets/images/icon-close-menu.svg';

const collapseDropdown = (itemSelector, list, icon) => {
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

const toggleMainMenu = () => {
  if (toggleBtn.getAttribute('aria-expanded') === 'false') {
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.firstElementChild.src = menuCloseUrl;
  } else {
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.firstElementChild.src = menuOpenUrl;
    dropdownItems.forEach((item) => {
      collapseDropdown(item, item.nextElementSibling, item.firstElementChild);
    });
  }
  mainMenu.classList.toggle('open');
  mainMenu.style.transition = 'transform 0.25s ease-in-out';
};

toggleBtn.addEventListener('click', () => {
  toggleMainMenu();
});

mainMenu.addEventListener('transitionend', () => {
  mainMenu.removeAttribute('style');
});

dropdownItems.forEach((item) => {
  const list = item.nextElementSibling;
  const arrow = item.firstElementChild;

  item.addEventListener('click', () => {
    if (item.getAttribute('aria-expanded') !== 'true') {
      expandDropdown(item, list, arrow);
    } else {
      collapseDropdown(item, list, arrow);
    }
  });

  list.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      collapseDropdown(item, list, arrow);
      item.focus({ focusVisible: true });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      collapseDropdown(item, list, arrow);
    }
  });
});
