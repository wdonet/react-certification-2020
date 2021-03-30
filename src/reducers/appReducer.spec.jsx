import { appReducer } from './appReducer';
import { userMockedData } from '../utils/';
import {
    SET_IS_FIRST_LOAD,
    SET_VIDEOS_LIST,
    SWITCH_THEME,
    SET_SESSION,
} from './actionTypes';

const USER_SESSION_KEY = "user_session";
const deepCopy = (stateObject) => JSON.parse(JSON.stringify(stateObject));
const originalState = {
    videosList: [],
    currentVideoId: undefined,
    isLightTheme: true,
    isFirstLoad: true,
};

describe("app reducer", () => {

    it('mutates `isFirstLoad` only',() => {
        const stateCopy = deepCopy(originalState);
        const EXPECTED_RESULT = false;
        const action = { type: SET_IS_FIRST_LOAD, payload: EXPECTED_RESULT };
        let objectResult = appReducer(stateCopy, action);

        expect(objectResult.videosList).toEqual(originalState.videosList);
        expect(objectResult.currentVideoId).toEqual(originalState.currentVideoId);
        expect(objectResult.isLightTheme).toEqual(originalState.isLightTheme);
        expect(objectResult.isFirstLoad).toEqual(EXPECTED_RESULT);
    });

    it('mutates `videosList` only',() => {
        const stateCopy = deepCopy(originalState);
        const EXPECTED_RESULT = [1, 2, 3, 4];
        const action = { type: SET_VIDEOS_LIST, payload: EXPECTED_RESULT };
        let objectResult = appReducer(stateCopy, action);

        expect(objectResult.videosList).toEqual(EXPECTED_RESULT);
        expect(objectResult.currentVideoId).toEqual(originalState.currentVideoId);
        expect(objectResult.isLightTheme).toEqual(originalState.isLightTheme);
        expect(objectResult.isFirstLoad).toEqual(originalState.isFirstLoad);
    });

    it('switches `isLightTheme` only',() => {
        const stateCopy = deepCopy(originalState);
        const EXPECTED_RESULT = !stateCopy.isLightTheme;
        const action = { type: SWITCH_THEME };
        let objectResult = appReducer(stateCopy, action);

        expect(objectResult.videosList).toEqual(originalState.videosList);
        expect(objectResult.currentVideoId).toEqual(originalState.currentVideoId);
        expect(objectResult.isLightTheme).toEqual(EXPECTED_RESULT);
        expect(objectResult.isFirstLoad).toEqual(originalState.isFirstLoad);
    }); 

    it('returns orignal state when action type is not recognized',() => {
        const stateCopy = deepCopy(originalState);
        const action = { type: '?' };
        let objectResult = appReducer(stateCopy, action);
        expect(JSON.stringify(objectResult)).toEqual(JSON.stringify(originalState))
    });

    it('mutates `sessionData` storing session data on window only',() => {
        const stateCopy = deepCopy(originalState);
        const EXPECTED_SESSION_DATA = userMockedData;
        const action = { type: SET_SESSION, payload: EXPECTED_SESSION_DATA };
        let objectResult = appReducer(stateCopy, action);

        expect(objectResult.videosList).toEqual(originalState.videosList);
        expect(objectResult.currentVideoId).toEqual(objectResult.currentVideoId);
        expect(objectResult.isLightTheme).toEqual(originalState.isLightTheme);
        expect(objectResult.isFirstLoad).toEqual(originalState.isFirstLoad);
        expect(objectResult.userSession).toEqual(EXPECTED_SESSION_DATA);
        expect(window.sessionStorage.getItem(USER_SESSION_KEY)).toBe(JSON.stringify(EXPECTED_SESSION_DATA));
    });

    it('clears `sessionData` when passing "null"',() => {
        const stateCopy = deepCopy(originalState);
        const EXPECTED_SESSION_DATA = null;
        const action = { type: SET_SESSION, payload: EXPECTED_SESSION_DATA };
        let objectResult = appReducer(stateCopy, action);

        expect(objectResult.videosList).toEqual(originalState.videosList);
        expect(objectResult.currentVideoId).toEqual(objectResult.currentVideoId);
        expect(objectResult.isLightTheme).toEqual(originalState.isLightTheme);
        expect(objectResult.isFirstLoad).toEqual(originalState.isFirstLoad);
        expect(objectResult.userSession).toEqual(EXPECTED_SESSION_DATA);
        expect(window.sessionStorage.getItem(USER_SESSION_KEY)).toBe(null);
    });
});