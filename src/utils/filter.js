function filterByYear(videoList, year) {
  if (year === '') {
    return videoList;
  }
  
  let newVidList =  videoList.filter((video) => {
    return video.snippet.publishTime.indexOf(year) >= 0;
  });
  return newVidList;

}

export default filterByYear;
