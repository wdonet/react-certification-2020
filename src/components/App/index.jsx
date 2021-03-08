import React, { useEffect, useState }from 'react';
import HeaderBar from '../HeaderBar';
import Content from '../Content';
import { items } from '../../assets/mockdata/mockdata.json';
import VideoCard from '../VideoCard';
import filterByYear from '../../utils/filter';

function App() {
  const [recent, setRecent] = useState([]);
  const [searchString, setSearchString] = useState("wizeline");

  useEffect(() => { 
      console.log('useEffect');
      fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY2}&q=wizeline&part=snippet&maxResults=50&order=date`)
      .then((res) => res.json())
      .then((res) => {
        if (res.items) {
          setRecent(res.items);
        } else {
          setRecent(items);
        }
        
      }
    ).catch((emAll) => {});
  }, []);
  
  const UpdateQuery = (text) => {
    console.log(`New query: ${text}`);
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY2}&q=${text}&part=snippet&maxResults=50&order=date`)
      .then((res) => res.json())
      .then((res) => {
        if (res.items) {
          setRecent(res.items);
        } else {
          setRecent(items);
        }
      });
  }

  return (
    <React.StrictMode>
      <HeaderBar updateQuery={ UpdateQuery } />
      <Content>{recent ?
        recent.map((video) => {
          return (
            <VideoCard
              key={video.etag}
              title={video.snippet.title}
              description={video.snippet.description}
              image={video.snippet.thumbnails.high.url}
            />
          )
        })
      :null}
      </Content>
    </React.StrictMode>
  );
}

export default App;
