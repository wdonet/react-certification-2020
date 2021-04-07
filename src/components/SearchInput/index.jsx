import React, { useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StyledInput, SearchInputContainer, InputAdornment } from './styled';
import { useYoutubeData } from '../../providers/YoutubeData';
import Icon from '../Icon';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const [focused, setFocused] = useState(false);

  const { fetchVideos } = useYoutubeData();

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;

    setSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetchVideos(search);
    }
  };
  return (
    <SearchInputContainer focused={focused}>
      <StyledInput
        placeHolder="Search"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <InputAdornment onClick={() => fetchVideos(search)}>
        <Icon icon={faSearch} size="xsmall" />
      </InputAdornment>
    </SearchInputContainer>
  );
};

export default SearchInput;
