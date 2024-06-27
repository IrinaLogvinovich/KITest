export const initPopup = () => {
  const popup = document.querySelector('.js-popup');
  if (!popup) return;

  const openPopupButtons = Array.from(
    document.querySelectorAll('.js-popup-open')
  );
  const closePopupButton = popup.querySelector('.js-popup-close');

  const disableBodyScroll = () => {
    document.body.style.position = 'relative';
    document.body.style.width = '100%';
  };

  const enableBodyScroll = () => {
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('width');
  };

  const openPopup = () => {
    popup.classList.add('active');
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      disableBodyScroll();
    }
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    popup.classList.remove('active');
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
      enableBodyScroll();
    }
    document.body.style.overflow = 'auto';
  };

  const closePopupByOverlay = (evt) => {
    if (evt.target === evt.currentTarget) closePopup();
  };

  const closePopupByEsc = (evt) => {
    if (evt.key === 'Escape') closePopup();
  };

  popup.addEventListener('click', closePopupByOverlay);
  document.addEventListener('keydown', closePopupByEsc);
  openPopupButtons.forEach((button) => {
    button.addEventListener('click', openPopup);
  });
  closePopupButton.addEventListener('click', closePopup);
};
