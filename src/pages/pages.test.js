import React from 'react';
import { MemoryRouter ,Router} from "react-router-dom";
import { render, screen, mount, fireEvent, getByTestId } from '@testing-library/react';
import ReactTestUtils, { act } from 'react-dom/test-utils'; // ES6
import StoreProvider, { StoreContext }from '../contexts/Store'
import App from '../components/App'
import AboutPage from './AboutPage'
import LoginPage from './LoginPage';
import DetailPage from './DetailPage';
import Content from './HomePage';
import Avatar from '../components/HeaderBar/Avatar';
import loginApi from '../login.api';
jest.useFakeTimers();
jest.setTimeout(5000);
test('About page with loggedin false', () => {
  render(<MemoryRouter initialEntries={['/about']}>
        <StoreProvider >
            <App />
        </StoreProvider>
      </MemoryRouter>)
  expect(screen.getByText(/.*loggedin:.*false/)).toHaveTextContent(
    'loggedin: false'
  )
})



const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <StoreContext.Provider value={providerProps}>{ui}</StoreContext.Provider>,
    renderOptions
  )
}

test('About page with loggedin true', () => {
    const dispatchAction = () => { };
    const providerProps = {
        squery: ['wizeline', dispatchAction],
        sdetailId: [undefined, dispatchAction],
        loggedIn: [true, dispatchAction],
        sessionData: [undefined, dispatchAction],
        menuOpen: [false, dispatchAction],
        favorites: [{}, dispatchAction]
    }
    customRender(<AboutPage />, { providerProps })
    expect(screen.getByText(/.*loggedin:/)).toHaveTextContent(
        'loggedin: true'
    )
});

test('LoginPage render ', () => {
    const dispatchAction = () => { };
    const providerProps = {
        squery: ['wizeline', dispatchAction],
        sdetailId: [undefined, dispatchAction],
        loggedIn: [false, dispatchAction],
        sessionData: [undefined, dispatchAction],
        menuOpen: [false, dispatchAction],
        favorites: [{}, dispatchAction]
    }
    customRender(<MemoryRouter><LoginPage /></MemoryRouter>, { providerProps })
    expect(screen.getByText(/.*Log in/)).toHaveTextContent(
        'Log in'
    )
    expect(screen.getByText(/.*Enter/)).toHaveTextContent(
        'Enter'
    )
});

describe("Login Page", () => {

    describe("when login without values", () => {
      
        it("displays error", () => {
             act(() => {
               jest.useFakeTimers();
                const { getByTestId, getByText } = render(<MemoryRouter><StoreProvider ><LoginPage  /></StoreProvider></MemoryRouter>);
                const enterButton = getByText("Enter");
                const usernameText = getByTestId("username-input")
                const passwordText = getByTestId("password-input")
                fireEvent.change(usernameText, { target: { value: 'asdfds' } })
                fireEvent.change(passwordText, { target: { value: 'asdfds' } })
                fireEvent.click(enterButton);
            });
        });
  });
});


test('Detail page with loggedin true', () => {
    const dispatchAction = () => { };
    const providerProps = {
        squery: ['wizeline', dispatchAction],
        sdetailId: [undefined, dispatchAction],
        loggedIn: [true, dispatchAction],
        sessionData: [undefined, dispatchAction],
        menuOpen: [false, dispatchAction],
        favorites: [{}, dispatchAction]
    }
    customRender(<MemoryRouter initialEntries={['/video/nmXMgqjQzls']} ><StoreProvider ><DetailPage /> </StoreProvider></MemoryRouter>, { providerProps })
    expect(screen.getByText(/Go/)).toHaveTextContent(
        'Go'
    )
});

test('Content page with loggedin true', () => {
    const dispatchAction = () => { };
    const providerProps = {
        squery: ['wizeline', dispatchAction],
        sdetailId: [undefined, dispatchAction],
        loggedIn: [true, dispatchAction],
        sessionData: [undefined, dispatchAction],
        menuOpen: [false, dispatchAction],
        favorites: [{}, dispatchAction]
    }
    customRender(<MemoryRouter initialEntries={['/']} ><StoreProvider ><Content /> </StoreProvider></MemoryRouter>, { providerProps })
    expect(screen.getByText(/Welcome/)).toHaveTextContent(
        'Welcome'
    )
});


test('Avatar test', () => {
    const dispatchAction = () => { };
    const providerProps = {
        squery: ['wizeline', dispatchAction],
        sdetailId: [undefined, dispatchAction],
        loggedIn: [true, dispatchAction],
        sessionData: [undefined, dispatchAction],
        menuOpen: [false, dispatchAction],
        favorites: [{}, dispatchAction]
    }
    customRender(<MemoryRouter initialEntries={['/']} ><StoreProvider ><Avatar /> </StoreProvider></MemoryRouter>, { providerProps })
});
