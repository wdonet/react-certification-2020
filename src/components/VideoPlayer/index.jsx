import React, { useEffect } from 'react';
import { useYoutubeData } from '../../providers/YoutubeData';

const VideoPlayer = ({ videoId }) => {
  const { iframeApiReady, selectedVideo } = useYoutubeData();
  console.log({ selectedVideo });

  useEffect(() => {
    let done = false;
    if (iframeApiReady) {
      const player = new window.YT.Player('player', {
        height: '390',
        width: '640',
        videoId,
        events: {
          onReady: (event) => event.target.playVideo(),
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING && !done) {
              setTimeout(player.stopVideo, 6000);
              done = true;
            }
          },
        },
      });
    }
  }, [iframeApiReady]);

  return <div id="player" />;
};

export default VideoPlayer;
