import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar';
import HomePage from '../../pages/Home';
import youtube from '../../apis/youtube';


function App() {
  const [search, setSearch] = useState('Wizeline');
  const [videos, setVideos] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };



  useEffect(() => {
    async function fetchData() {
      const response = await youtube.get('/search', {
        params: {
          q: search,
        },
      });
      console.log(response.data.items);
      setVideos(response.data.items);
    }
    fetchData();
  }, [search]);
  console.log(videos);
  return (
    <div>
      <NavBar search={handleSearch} />
      <HomePage videos={videos} />
    </div>
  );
}

export default App;
