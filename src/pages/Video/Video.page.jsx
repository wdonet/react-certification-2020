import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import ContentDetails from '../../components/ContentDetails';

import { useCustom } from '../../providers/Custom';

function VideoPage() {
  const params = useParams();
  const {
    searchResult: { items },
  } = useCustom();

  let itemFound = null;
  const relatedItems = [...items].reduce((acc, item) => {
    if (item.id.videoId === params.videoId) {
      itemFound = item;
      return acc;
    }

    return [...acc, item];
  }, []);

  const componentToRender = itemFound ? (
    <section className="videopage">
      <ContentDetails item={itemFound} relatedItems={relatedItems} />
    </section>
  ) : (
    <Redirect to="/" />
  );

  return componentToRender;
}

export default VideoPage;
