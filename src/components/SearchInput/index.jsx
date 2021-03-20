import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Input } from './styled';
import SearchWordContext from '../../state/SearchWordContext';

const SearchInput = () => {
  const { state, dispatch } = useContext(SearchWordContext);
  const [searchWord, setSearchWord] = React.useState(state.word);
  const history = useHistory();

  const triggerChange = () => {
    dispatch({
      type: 'SET_WORD',
      payload: searchWord,
    });

    history.push('/');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      triggerChange();
    }
  };

  const handleChange = ({ target: { value } }) => setSearchWord(value);

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
