function filterByYear(videoList, year) {
  // console.log(`videoList: ${videoList}`)
  if (year === '') {
    console.log('returns same videolist');
    return videoList;
  }
  
  let newVidList =  videoList.filter((video) => {
    return video.snippet.publishTime.indexOf(year) >= 0;
  });

  console.log(`newVidList: ${newVidList}`)
  console.log('returns filtered  videolist');
  return newVidList;

}

export default filterByYear;
