import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from './components/App';
import StoreProvider from './contexts/Store'
import { MemoryRouter as Router } from "react-router-dom";
// test if the app renders correctly (shallow?)
// test if there is a welcome message
// test if there are N number of videocard components based on the number of videos in the mockapi
// test if the user and darkmode components disappera on certain width
// test if it's responsive
// test if pressing the x on the search box after writing something there, deletes the search box
// test if pressing the hamburguer if the menú is displayed
// test if the menú has at least 5 components
// test if clicking on the x on an open menú, closes it
// test if the with and height of the videocard is preserved even if the description text is too big
// test if the videocard doesn't breaks with invalid image urls
// test if the videocard doesn't breaks with an empty title and description and url  (probably it shoudlnt display)
// test if clicking on the darkmode switch changes the value in the component
// test if clicking on the darkmode actually changes the theme (once it is implemented )
// test if an error waiting for video data returns an empty array and console.logs the error



describe('App', () => {
 
  it('renders App component', async () => {
    render(
      <Router>
        <StoreProvider>
            <App />
        </StoreProvider>
    </Router>
    );
  });
});
