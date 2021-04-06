import { useLocalStorage } from '../../utils/useLocalStorage';

const useFavorites = () => {
  const { data: favorites, mutation, isLoading } = useLocalStorage({
    cacheKey: 'favorites',
    initialData: [],
  });

  return { favorites, updateFavorites: mutation.mutate, isLoading };
};

export default useFavorites;
