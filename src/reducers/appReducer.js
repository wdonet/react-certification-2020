import {
    SET_IS_FIRST_LOAD,
    SET_SESSION,
    SET_VIDEOS_LIST,
    SWITCH_THEME
} from './actionTypes'

const USER_SESSION_KEY = "user_session";
export const appReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_IS_FIRST_LOAD:
            return ({ ...state, isFirstLoad: payload }); 
        case SET_VIDEOS_LIST:
            return ({ ...state, videosList: payload }); 
        case SWITCH_THEME: { 
            let isLightTheme = !state.isLightTheme;
            return ({ ...state, isLightTheme }); 
        };
        case SET_SESSION: 
            if(payload === null){
                window.sessionStorage.removeItem(USER_SESSION_KEY);
            } else {
                window.sessionStorage.setItem(USER_SESSION_KEY, JSON.stringify(payload));
            }
            return ({ ...state, userSession: JSON.parse(window.sessionStorage.getItem(USER_SESSION_KEY)) });
        default: return state;
    } 
}