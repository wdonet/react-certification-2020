const random = (limit) => {
  return Math.floor(Math.random() * limit);
};

const toggle = (state) => {
  return !state;
};

const shortenCount = (count) => {
  let shortCount = Number(count);
  let pos = 0;
  const units = ['', 'K', 'M', 'B'];

  while (shortCount >= 999) {
    shortCount /= 1000;
    pos += 1;
  }

  return Number(shortCount.toPrecision(2)) + units[pos];
};

export { random, shortenCount, toggle };
