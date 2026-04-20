/**
 * スタッフスライダー
 */
export const initializeAboutStaffSlider = () => {
  const aboutStaffSlider = new Splide(".js-about-staff-slider", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 3000,
    gap: "40rem",
    padding: { left: "172rem", right: "259rem" },
    breakpoints: {
      899: {
        perPage: 1,
        gap: "32rem",
        padding: { left: "20rem", right: "125rem" },
      },
    },
  });

  if (!aboutStaffSlider) return;

  aboutStaffSlider.mount();
};
