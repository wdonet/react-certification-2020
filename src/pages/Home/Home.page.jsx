import React, { useRef, useEffect, useState } from 'react';
import VideoList from '../../components/VideoList';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import { filterItemsByKind } from '../../utils/contenFilter';

function HomePage() {
  const sectionRef = useRef(null);
  const { searchResult, loading } = useYoutubeAPI('wizeline');
  const [items, setItems] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    console.log('---- HOMEPAGE ----');
    console.log(searchResult);
    setItems(searchResult?.items);
    if (items) {
      setFilteredList(filterItemsByKind(items, 'video'));
    }
  }, [searchResult, items]);

  if (loading) return <p>Loading ....</p>;

  return (
    <section className="container" ref={sectionRef} data-testid="Home">
      <h1>Hello stranger! {process.env.YOUTUBE_API}</h1>
      <VideoList items={filteredList} />
    </section>
  );
}

export default HomePage;
