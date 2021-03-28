import React from 'react';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';
import YoutubeContext from '../../context/YoutubeContext.jsx';
import { items } from '../../json/data.json';

function App() {
  return (
    <YoutubeContext.Provider value={items}>
      <Header />
      <Content />
      <Footer />
    </YoutubeContext.Provider>
  );
}

export default App;
