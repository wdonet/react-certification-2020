import React, { useContext } from 'react';
import VideoGrid from '../../components/VideoGrid';
import { Welcome } from './styled';
import ThemeContext from '../../state/ThemeContext';

function HomePage({ videos }) {
  const { stateTheme } = useContext(ThemeContext);
  const { theme } = stateTheme;

  return (
    <section>
      <Welcome theme={theme}>Welcome</Welcome>
      <VideoGrid videos={videos} />
    </section>
  );
}

export default HomePage;
