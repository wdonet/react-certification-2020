import React, { useContext } from 'react';
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
import ThemeContext from '../../state/ThemeContext';

function VideoDetailPage({ videos }) {
  const isLogged = storage.get(AUTH_STORAGE_KEY);
  const history = useHistory();
  const [video, setVideo] = React.useState(history.location.state.video);
  const [vids, setVideos] = React.useState(videos);
  const { snippet, id } = video;
  const { stateTheme } = useContext(ThemeContext);
  const { theme } = stateTheme;
  const addFavorites = <AddFavorites theme={theme}>AGREGAR A FAVORITOS</AddFavorites>;

  React.useEffect(() => {
    setVideo(video);
  }, [video]);

  return (
    <VideoDetail theme={theme}>
      <Player>
        <ReactPlayer
          width="100%"
          height="80%"
          url={`https://www.youtube.com/embed/${id.videoId}`}
        />
        <VideoInfo>
          <VideoDescription theme={theme}>
            <h2>{snippet.title}</h2>
            <p>{snippet.description}</p>
          </VideoDescription>
          {isLogged ? addFavorites : ''}
        </VideoInfo>
      </Player>
      <List>
        <VideosList videos={vids} setVideo={setVideo} setVideos={setVideos} />
      </List>
    </VideoDetail>
  );
}

export default VideoDetailPage;
