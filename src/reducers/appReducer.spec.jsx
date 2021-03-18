import { appReducer } from './appReducer'
import {
    SET_CURRENT_VIDEO_PLAYBACK,
    SET_IS_FIRST_LOAD,
    SET_VIDEOS_LIST,
    SWITCH_THEME
} from './actionTypes'

const deepCopy = (stateObject) => JSON.parse(JSON.stringify(stateObject));
const originalState = {
    videosList: [],
    currentVideoId: undefined,
    isLightTheme: true,
    isFirstLoad: true,
};

describe("app reducer", () => {
    it('mutates `currentVideoId` only',() => {
        const stateCopy = deepCopy(originalState);
        const EXPECTED_ID = "nmXMgqjQzls";
        const action = { type: SET_CURRENT_VIDEO_PLAYBACK, payload: EXPECTED_ID };
        let objectResult = appReducer(stateCopy, action);

        expect(objectResult.videosList).toEqual(originalState.videosList);
        expect(objectResult.currentVideoId).toEqual(EXPECTED_ID);
        expect(objectResult.isLightTheme).toEqual(originalState.isLightTheme);
        expect(objectResult.isFirstLoad).toEqual(originalState.isFirstLoad);
    });

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
});