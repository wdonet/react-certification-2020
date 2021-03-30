import {
    SET_SIDEBAR_OPEN,
    SET_AVATAR_MENU_OPEN,
    SET_LOGIN_FORM_OPEN,
} from './actionTypes'

export const headerReducer = (state, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_SIDEBAR_OPEN:
            return { ...state, sidebarOpen: payload }; 
        case SET_AVATAR_MENU_OPEN:
            return { ...state, avatarMenuOpen: payload }; 
        case SET_LOGIN_FORM_OPEN:
            return { ...state, loginFormOpen: payload };
        default: return state;
    } 
}