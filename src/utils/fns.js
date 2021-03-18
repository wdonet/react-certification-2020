function random(limit) {
  return Math.floor(Math.random() * limit);
}

const getYoutubeEmbedLink = (id) => `https://www.youtube.com/embed/${id}`;

export { random, getYoutubeEmbedLink };
