import {
    SET_SIDEBAR_OPEN,
    SET_AVATAR_MENU_OPEN,
    SET_LOGIN_FORM_OPEN,
} from './actionTypes'
import { headerReducer } from './headerReducer';

const initialState = {
    sidebarOpen: false,
    avatarMenuOpen: false,
    loginFormOpen: false,
}

const deepCopy = (value) => JSON.parse(JSON.stringify(value))

describe('headerReducer', () => {
    it('mutates "sidebarOpen" only', () => {
        const EXPECTED_VALUE = true;
        const passedState = deepCopy(initialState);
        const stateResult = headerReducer(passedState, { type: SET_SIDEBAR_OPEN, payload: EXPECTED_VALUE });
        expect(stateResult.sidebarOpen).toBe(EXPECTED_VALUE);
        expect(stateResult.avatarMenuOpen).toBe(passedState.avatarMenuOpen);
        expect(stateResult.loginFormOpen).toBe(passedState.loginFormOpen);
    });

    it('mutates "avatarMenuOpen" only', () => {
        const EXPECTED_VALUE = true;
        const passedState = deepCopy(initialState);
        const stateResult = headerReducer(passedState, { type: SET_AVATAR_MENU_OPEN, payload: EXPECTED_VALUE });
        expect(stateResult.sidebarOpen).toBe(passedState.sidebarOpen);
        expect(stateResult.avatarMenuOpen).toBe(EXPECTED_VALUE);
        expect(stateResult.loginFormOpen).toBe(passedState.loginFormOpen);
    });

    it('mutates "loginFormOpen" only', () => {
        const EXPECTED_VALUE = true;
        const passedState = deepCopy(initialState);
        const stateResult = headerReducer(passedState, { type: SET_LOGIN_FORM_OPEN, payload: EXPECTED_VALUE });
        expect(stateResult.sidebarOpen).toBe(passedState.sidebarOpen);
        expect(stateResult.avatarMenuOpen).toBe(passedState.avatarMenuOpen);
        expect(stateResult.loginFormOpen).toBe(EXPECTED_VALUE);
    });

    it('Does not mutate anyting when action type is not recognized', () => {
        const EXPECTED_VALUE = true;
        const passedState = deepCopy(initialState);
        const stateResult = headerReducer(passedState, { type: '?', payload: EXPECTED_VALUE });
        expect(stateResult.sidebarOpen).toBe(passedState.sidebarOpen);
        expect(stateResult.avatarMenuOpen).toBe(passedState.avatarMenuOpen);
        expect(stateResult.loginFormOpen).toBe(passedState.loginFormOpen);
    });
});