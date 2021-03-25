import React from 'react';

import Content from '../../components/Content';

import { useCustom } from '../../providers/Custom';

const Favorite = () => {
  const { favoriteVideos } = useCustom();

  return (
    <section className="favoritePage">
      <Content data={favoriteVideos} />
    </section>
  );
};

export default Favorite;
