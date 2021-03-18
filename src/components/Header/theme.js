const base = {
  easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  colorWhite: 'rgb(255, 255, 255)',
  colorBlack: 'rgb(0, 0, 0)',
};

const dark = {
  id: 'dark',
  ...base,
  backgroundColor: '#333',
  textColor: 'black',
};

const light = {
  id: 'light',
  ...base,
  backgroundColor: '#666',
  textColor: 'white',
};

export const theme = { dark, light };
