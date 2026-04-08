/**
 * ハンバーガーメニュー
 */
export const initializeHamburgerMenu = () => {
  const menu = document.querySelector(".js-header-menu");
  const openButton = document.querySelector(".js-header-menu-open-button");
  const closeButton = document.querySelector(".js-header-menu-close-button");

  if (!menu || !openButton || !closeButton) return;

  openButton.addEventListener("click", (e) => {
    e.preventDefault();
    menu.showModal();
  });

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    menu.close();
  });
};
