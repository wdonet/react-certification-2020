export const getVisibleVideos = (videos, filter) =>
  videos.filter((video) => {
    if (filter === 'videos' && video.id.kind === 'youtube#video') {
      return true;
    }

    if (filter === 'channels' && video.id.kind === 'youtube#channel') {
      return true;
    }

    if (!filter || filter === 'none') {
      return true;
    }

    return false;
  });
