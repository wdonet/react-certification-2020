import React from 'react';
import Video from '../Video';

import { items } from '../../../json/data.json';

const VideoList = () => {
  const listofvideos = items.slice(1);

  return (
    <table className="list-videos">
      {listofvideos.map((video) => (
        <tr>
          <Video info={video} />
        </tr>
      ))}
    </table>
  );
};

export default VideoList;
