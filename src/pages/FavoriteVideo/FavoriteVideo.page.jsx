import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

import ContentDetails from '../../components/ContentDetails';

import { useCustom } from '../../providers/Custom';

function VideoPage() {
  const params = useParams();
  const { favoriteVideos, findFavoriteVideo } = useCustom();

  const item = findFavoriteVideo(params.videoId);
  const relatedItems = favoriteVideos.filter(
    ({ id: { videoId } }) => videoId !== params.videoId
  );

  const componentToRender = item ? (
    <section className="favoritevideopage">
      <ContentDetails item={item} relatedItems={relatedItems} />
    </section>
  ) : (
    <Redirect to="/" />
  );

  return componentToRender;
}

export default VideoPage;
