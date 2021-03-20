import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardContent, CardTitle, CardDescription } from './styled';
import ThemeContext from '../../state/ThemeContext';

const VideoCard = ({ video }) => {
  const { snippet, id } = video;
  const { stateTheme } = useContext(ThemeContext);
  const { theme } = stateTheme;

  return (
    <Link to={{ pathname: `/${id.videoId}`, state: { video } }}>
      <Card data-testid="card">
        <CardImg img={snippet.thumbnails.medium.url} />
        <CardContent>
          <CardTitle theme={theme}>{snippet.title}</CardTitle>
          <CardDescription theme={theme}>{snippet.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
