function random(limit) {
  return Math.floor(Math.random() * limit);
}

function filterVideoType(data, type) {
  return data.filter(({ id: { kind } }) => kind === `youtube#${type}`);
}

export default { random, filterVideoType };
