import React, { useEffect, useState } from 'react';
import VideoCard from '../VideoCard';
import { VideoGridContainer } from './VideoGrid.styled';
import { useYouTube } from '../../providers/YouTubeAPI';

function VideoGrid({ searchQuery, relatedToVideoId }) {
  const [searchResult, setSearchResult] = useState([]);
  const { searchVideos, searchRelated } = useYouTube();

  useEffect(() => {
    if (relatedToVideoId) {
      searchRelated(relatedToVideoId).then((result) => {
        setSearchResult(result.items);
      });
    } else {
      searchVideos(searchQuery).then((result) => {
        setSearchResult(result.items);
      });
    }
  }, [searchVideos, searchQuery, searchRelated, relatedToVideoId]);

  return (
    <VideoGridContainer>
      {searchResult.map(({ id, snippet }) => (
        <VideoCard
          key={id.videoId}
          image={snippet.thumbnails.medium.url}
          title={snippet.title}
          description={snippet.description}
          videoId={id.videoId}
          noDescription={Boolean(relatedToVideoId)}
        />
      ))}
    </VideoGridContainer>
  );
}

export default VideoGrid;
