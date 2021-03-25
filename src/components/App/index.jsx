import React, { useEffect, useState, useContext }from 'react';
import HeaderBar from '../HeaderBar';
import Content from '../Content';
import { items } from '../../assets/mockdata/mockdata.json';
import VideoCard from '../VideoCard';
import filterByYear from '../../utils/filter';
import Theme from "../../Theme";
import { ThemeStore } from "../../contexts/ThemeStore";
import { useFetch } from '../../hooks/useFetch';
import { StoreContext } from '../../contexts/Store'
function App() {
  const [recent, setRecent] = useState([]);
  const [inDetail, setInDetail] = useState(false);
  const [detailVideoId, setDetailVideoId] = useState("");
  const [detailTitle, setDetailTitle] = useState("");
  const [detailDescription, setDetailDescription] = useState("");
  const {
    ["squery"]: [squery, setSquery],
  } = React.useContext(StoreContext)

  const url = squery && `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&q=${squery}&part=snippet&maxResults=50&order=date&type=video`;
	const { status, data, error } = useFetch(url);
  const theme = "light";
  
  
  // console.log(`squery: ${squery}`)
  

  const changeDetail = (indetail=false, videoId, title, description) => {
    // setInDetail(inDetail ? false : true);
    // console.log(`title: ${title}`);
    // console.log(`description: ${description}`);
    setInDetail(indetail);
    setDetailVideoId(videoId);
    setDetailTitle(title);
    setDetailDescription(description);
  };

  return (
    <React.StrictMode>
      <ThemeStore>
        <Theme>
          <HeaderBar  />
            <Content inDetail={inDetail} detailVideoId={detailVideoId} gotodetail={changeDetail} detailTitle={detailTitle} detailDescription={ detailDescription}>{data.items ?
              data.items.map((video) => {
                return (
                  <VideoCard
                    key={video.etag}
                    videoId ={video.id.videoId}
                    title={video.snippet.title}
                    description={video.snippet.description}
                    image={video.snippet.thumbnails.high.url}
                    gotodetail={ changeDetail }
                  />
                )
              })
            :null}
            </Content>
        </Theme>
      </ThemeStore>
    </React.StrictMode>
  );
}

export default App;
