import React, { useContext } from 'react';
import Video from '../Video';
import YoutubeContext from '../../../context/YoutubeContext.jsx';

const VideoList = () => {
  const listofvideos = useContext(YoutubeContext).slice(1);

  const videos = listofvideos.map((video) => (
    <Video key={video.id.videoId} info={video} />
  ));

  return (
    <table className="list-videos">
      <tbody>{videos}</tbody>
    </table>
  );
};

export default VideoList;
