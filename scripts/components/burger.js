export const initBurger = () => {
  const burgerButton = document.querySelector('.js-toggle-burger-menu');
  const burgerMenu = document.querySelector('.js-burger-menu');

  if (!burgerButton || !burgerMenu) return;

  const closeBurgerMenuByOutClick = (evt) => {
    if (
      !evt.target.closest('.js-burger-menu') &&
      !evt.target.closest('.js-toggle-burger-menu')
    ) {
      closeBurgerMenu();
    }
  };

  const openBurgerMenu = () => {
    document.addEventListener('click', closeBurgerMenuByOutClick);
    burgerMenu.classList.add('active');
    burgerButton.classList.add('active');
  };

  const closeBurgerMenu = () => {
    document.removeEventListener('click', closeBurgerMenuByOutClick);
    burgerMenu.classList.remove('active');
    burgerButton.classList.remove('active');
  };

  burgerButton.addEventListener('click', (evt) => {
    evt.currentTarget.classList.contains('active')
      ? closeBurgerMenu()
      : openBurgerMenu();
  });
};
