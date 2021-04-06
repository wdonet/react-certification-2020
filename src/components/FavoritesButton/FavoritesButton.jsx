import React, { useEffect, useState } from 'react';
import { Loading, StyledFavoritesButton } from './FavoritesButton.styled';
import useFavorites from './useFavorites';

const FavoritesButton = ({ videoId }) => {
  const { favorites, updateFavorites, isLoading } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);
  const [label, setLabel] = useState();

  useEffect(() => {
    const found = favorites.some((id) => id === videoId);
    setLabel(found ? 'Remove from Favorites' : 'Add to Favorites');
    setIsFavorite(found);
  }, [favorites, videoId]);

  const handleClick = (event) => {
    event.stopPropagation();

    const newFavorites = isFavorite
      ? favorites.filter((id) => id !== videoId)
      : [...favorites, videoId];

    updateFavorites(newFavorites);
  };

  if (isLoading || !label) return <Loading>Loading...</Loading>;

  return <StyledFavoritesButton onClick={handleClick}>{label}</StyledFavoritesButton>;
};

export default FavoritesButton;
