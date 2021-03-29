import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, mount, fireEvent, getByTestId } from '@testing-library/react';
import App from './components/App';
import StoreProvider from './contexts/Store'
import { MemoryRouter ,Router} from "react-router-dom";
import HeaderBar from './components/HeaderBar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFound from './pages/NotFound';
import { createMemoryHistory } from "history";

jest.mock('./pages/HomePage');
jest.mock('./pages/DetailPage');
jest.mock('./pages/AboutPage');
jest.mock('./pages/LoginPage');
jest.mock('./pages/FavoritesPage');
jest.mock('./pages/NotFound');
jest.mock('./components/HeaderBar');


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
    HeaderBar.mockImplementation(() => <div>HeaderBarMock</div>);
    HomePage.mockImplementation(() => <div>HomePageMock</div>);
    LoginPage.mockImplementation(() => <div>LoginPage</div>);
    FavoritesPage.mockImplementation(() => <div>FavoritesPage</div>);
    DetailPage.mockImplementation(() => <div>DetailPage</div>);
    AboutPage.mockImplementation(() => <div>AboutPage</div>);
    NotFound.mockImplementation(() => <div>NotFound</div>);
    render(
      <MemoryRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
      </MemoryRouter>
    );
  });

  it('renders pageheader and homepage on default route', async () => {
    HeaderBar.mockImplementation(() => <div>HeaderBarMock</div>);
    HomePage.mockImplementation(() => <div>HomePageMock</div>);
    LoginPage.mockImplementation(() => <div>LoginPage</div>);
    FavoritesPage.mockImplementation(() => <div>FavoritesPage</div>);
    DetailPage.mockImplementation(() => <div>DetailPage</div>);
    AboutPage.mockImplementation(() => <div>AboutPage</div>);
    NotFound.mockImplementation(() => <div>NotFound</div>);
    render(
      <MemoryRouter>
        <StoreProvider>
            <App />
        </StoreProvider>
      </MemoryRouter>
    );
    // Assert
    expect(screen.getByText("HeaderBarMock")).toBeInTheDocument();
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
  });

  it('renders pageheader and notfound route', async () => {
    HeaderBar.mockImplementation(() => <div>HeaderBarMock</div>);
    HomePage.mockImplementation(() => <div>HomePageMock</div>);
    LoginPage.mockImplementation(() => <div>LoginPage</div>);
    FavoritesPage.mockImplementation(() => <div>FavoritesPageMock</div>);
    DetailPage.mockImplementation(() => <div>DetailPageMock</div>);
    NotFound.mockImplementation(() => <div>NotFoundMock</div>);
    render(
      <MemoryRouter initialEntries={['/article/1']}>
        <StoreProvider>
            <App />
        </StoreProvider>
      </MemoryRouter>
    );
    // Assert
    expect(screen.getByText("HeaderBarMock")).toBeInTheDocument();
    expect(screen.getByText("NotFoundMock")).toBeInTheDocument();
  });

  it('renders pageheader and  login when accessing a private route', async () => {
    HeaderBar.mockImplementation(() => <div>HeaderBarMock</div>);
    HomePage.mockImplementation(() => <div>HomePageMock</div>);
    LoginPage.mockImplementation(() => <div>LoginPage</div>);
    FavoritesPage.mockImplementation(() => <div>FavoritesPageMock</div>);
    DetailPage.mockImplementation(() => <div>DetailPageMock</div>);
    NotFound.mockImplementation(() => <div>NotFoundMock</div>);
    render(
      <MemoryRouter initialEntries={['/favorites']}>
        <StoreProvider>
            <App />
        </StoreProvider>
      </MemoryRouter>
    );
    // Assert
    expect(screen.getByText("HeaderBarMock")).toBeInTheDocument();
    expect(screen.getByText("LoginPage")).toBeInTheDocument();
  });

});
