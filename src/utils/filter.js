function filterByYear(videoList, year) {
  if (year === '') {
    return videoList;
  }
  return videoList.filter((video) => {
    return video.snippet.publishTime.indexOf(year) >= 0;
  });
}

export default filterByYear;
