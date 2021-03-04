import { useContext } from 'react';
import { YoutubeDataContext } from './YoutubeDataProvider';

const useYoutubeData = () => {
  const context = useContext(YoutubeDataContext);
  if (!context) {
    throw new Error(`Can't use "useYoutubeData" without an YoutubeDataProvider!`);
  }
  return context;
};

export default useYoutubeData;
