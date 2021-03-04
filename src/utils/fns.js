function random(limit) {
  return Math.floor(Math.random() * limit);
}

const debounce = (fn, wait) => {
  let timeout = null;

  return (...args) => {
    const callback = () => {
      timeout = null;

      fn(...args);
    };

    clearTimeout(timeout);

    timeout = setTimeout(callback, wait);

    return { cancel: () => clearTimeout(timeout) };
  };
};

const getYoutubeEmbedLink = (id) => `https://www.youtube.com/embed/${id}`;

export { random, debounce, getYoutubeEmbedLink };
