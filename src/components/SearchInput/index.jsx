import React from 'react';
import { useHistory } from 'react-router';
import { Input } from './styled';

const SearchInput = ({ initSearchWord, onChange }) => {
  const [searchWord, setSearchWord] = React.useState(initSearchWord);
  const history = useHistory();

  const triggerChange = () => {
    onChange(searchWord);
    history.push('/');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      triggerChange();
    }
  };

  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <Input
      type="text"
      placeholder="Search ..."
      value={searchWord}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;
