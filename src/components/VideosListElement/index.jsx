import React, { useContext } from 'react';
import { ListElement, Image, Detail, Description } from './styled';
import ThemeContext from '../../state/ThemeContext';

const VideosListElement = ({ snippet }) => {
  const { stateTheme } = useContext(ThemeContext);
  const { theme } = stateTheme;

  return (
    <ListElement>
      <Image img={snippet.thumbnails.medium.url} />
      <Detail>
        <Description theme={theme}>{snippet.title}</Description>
      </Detail>
    </ListElement>
  );
};

export default VideosListElement;
