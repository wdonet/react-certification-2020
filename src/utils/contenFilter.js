export const filterItemsByKind = (items, filter) =>
  items.filter(({ id }) => {
    if (filter === 'video' && id.kind === 'youtube#video') {
      return true;
    }
    if (filter === 'channel' && id.kind === 'youtube#channel') {
      return true;
    }
    if (!filter || filter === 'none') {
      return true;
    }

    return false;
  });
