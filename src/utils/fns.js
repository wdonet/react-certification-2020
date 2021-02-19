const random = (limit) => {
  return Math.floor(Math.random() * limit);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

export { random, formatDate };
