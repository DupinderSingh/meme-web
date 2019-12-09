import {CHANGE_EDITOR_BACKGROUND, CHANGE_TEXT_NAVIGATION} from "../../types/dashboard/text.js";

const initialState = {
    textNavigation: "colors",
    background: {color: '#fff', type: 'color'},
    finalBackground: {color: '#fff', type: 'color'}
};

export default function textReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TEXT_NAVIGATION:
            return {
                ...state,
                textNavigation: action.nav
            };
        case CHANGE_EDITOR_BACKGROUND:
            return {
                ...state,
                background: action.newState.background,
                finalBackground: action.newState.finalBackground
            };
        default:
            return state
    }

}
