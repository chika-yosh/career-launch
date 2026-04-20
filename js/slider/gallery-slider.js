/**
 * 画像ギャラリースライダー
 */
export const initializeCultureGallery = () => {
  // .js-recruit-culture-gallery がないページでは即 return
  const galleryElement = document.querySelector(".js-recruit-culture-gallery");
  if (!galleryElement) return;

  const autoScrollExtension = window.splide?.Extensions;
  if (!autoScrollExtension) return;

  const recruitCultureGallery = new Splide(".js-recruit-culture-gallery", {
    type: "loop",
    perPage: 3,
    arrows: false,
    pagination: false,
    gap: "32rem",
    padding: { left: "112rem", right: "140rem" },
    autoScroll: {
      speed: 1,
      pauseOnHover: false,
    },
    breakpoints: {
      899: {
        perPage: 1,
        gap: "10rem",
        padding: { left: "10rem", right: "142rem" },
        autoScroll: {
          speed: 0.6,
          pauseOnHover: false,
        },
      },
    },
  });

  if (!recruitCultureGallery) return;

  recruitCultureGallery.mount(autoScrollExtension);
};
