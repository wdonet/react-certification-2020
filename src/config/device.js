const size = {
  mobileSm: 320,
  mobileMd: 425,
  mobileLg: 600,
  tablet: 768,
  laptop: 1024,
  laptopLg: 1440,
  desktop: 1600,
};

const device = {
  mobileSm: `screen and (min-width: ${size.mobileSm}px)`,
  mobileMd: `screen and (min-width: ${size.mobileMd}px)`,
  mobileLg: `screen and (min-width: ${size.mobileLg}px)`,
  tablet: `screen and (min-width: ${size.tablet}px)`,
  laptop: `screen and (min-width: ${size.laptop}px)`,
  laptopLg: `screen and (min-width: ${size.laptopLg}px)`,
  desktop: `screen and (min-width: ${size.desktop}px)`,
  onlySm: `screen and (max-width: ${size.laptop - 1}px)`,
};

export default device;
