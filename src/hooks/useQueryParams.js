import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const useQueryParams = () => {
  const [searchedText, setSearchedText] = useState('');
  const [videoId, setVideoId] = useState('');
  const location = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    setSearchedText(query.get('searchedText'));
    setVideoId(query.get('id'));
  }, [location]);

  return { searchedText, videoId };
};

export default useQueryParams;
