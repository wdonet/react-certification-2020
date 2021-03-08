import React, { useEffect, useRef } from 'react';
import { useYoutubeData } from '../../providers/YoutubeData';

const VideoPlayer = ({ videoId }) => {
  const { iframeAPIReady } = useYoutubeData();
  const player = useRef(null);

  useEffect(() => {
    let done = false;
    if (iframeAPIReady) {
      player.current = new window.YT.Player('player', {
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
  }, [iframeAPIReady]);

  useEffect(() => {
    if (player.current && player.current.loadVideoById)
      player.current.loadVideoById(videoId);
  }, [videoId]);

  return <div id="player" />;
};

export default VideoPlayer;
