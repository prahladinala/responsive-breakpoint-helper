const breakpoints = {
  mobile: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
};

const isMobile = () => window.innerWidth <= breakpoints.mobile;
const isTablet = () =>
  window.innerWidth > breakpoints.mobile &&
  window.innerWidth <= breakpoints.tablet;
const isLaptop = () =>
  window.innerWidth > breakpoints.tablet &&
  window.innerWidth <= breakpoints.laptop;
const isDesktop = () => window.innerWidth > breakpoints.laptop;

module.exports = {
  isMobile,
  isTablet,
  isLaptop,
  isDesktop,
};
