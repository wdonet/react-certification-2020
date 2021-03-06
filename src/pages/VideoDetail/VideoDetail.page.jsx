import React from 'react';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router';
import { AUTH_STORAGE_KEY } from '../../utils/constants';
import { storage } from '../../utils/storage';
import VideosList from '../../components/VideosList';
import {
  Player,
  VideoDetail,
  VideoInfo,
  List,
  VideoDescription,
  AddFavorites,
} from './styled';

function VideoDetailPage({ videos }) {
  const isLogged = storage.get(AUTH_STORAGE_KEY);
  const history = useHistory();
  const [video, setVideo] = React.useState(history.location.state.video);
  const { snippet, id } = video;
  const addFavorites = <AddFavorites>AGREGAR A FAVORITOS</AddFavorites>;

  React.useEffect(() => {
    setVideo(video);
  }, [video]);

  return (
    <VideoDetail>
      <Player>
        <ReactPlayer
          width="100%"
          height="80%"
          url={`https://www.youtube.com/embed/${id.videoId}`}
        />
        <VideoInfo>
          <VideoDescription>
            <h2>{snippet.title}</h2>
            <p>{snippet.description}</p>
          </VideoDescription>
          {isLogged ? addFavorites : ''}
        </VideoInfo>
      </Player>
      <List>
        <VideosList videos={videos} setVideo={setVideo} />
      </List>
    </VideoDetail>
  );
}

export default VideoDetailPage;
