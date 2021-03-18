import React, { useReducer } from 'react';
import NavBar from '../NavBar';
import HomePage from '../../pages/Home';
import SearchContext from '../../state/SearchContext';
import SearchReducer from '../../state/SearchReducer';
import LocalThemeProvider from '../../state/ThemeContext.provider';

function App() {
  // const [search, setSearch] = useState('Wizeline');
  const [state, dispatch] = useReducer(SearchReducer, {
    search: 'Wizeline',
  });

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    dispatch({
      type: 'SEARCH_VIDEOS',
      payload: {
        search: searchValue,
      },
    });
  };

  return (
    <div>
      <LocalThemeProvider>
        <SearchContext.Provider value={{ state, dispatch }}>
          <NavBar search={handleSearch} />
          <HomePage />
        </SearchContext.Provider>
      </LocalThemeProvider>
    </div>
  );
}

export default App;
