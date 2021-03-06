import React, { useState } from 'react';
import HomePage from '../../views/Home';
import Header from '../Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VideoDetails from '../../views/VideoDetails';

function App() {

  const [search, setSearch] = useState("");

  function handleSearch(searchValue) {
    setSearch(searchValue);
  }

  return (
    <BrowserRouter>
      <Header handleSearch={handleSearch} />
      <Switch>
        <Route path="/" exact render={(props) => (
          <HomePage {...props} search={search}></HomePage>
        )}/>
        <Route path="/:videoId" component={VideoDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
