import {CHANGE_TEXT_NAVIGATION, CHANGE_EDITOR_BACKGROUND} from "../../types/dashboard/text";

export const changeTextNav = (nav) => {
    return {type: CHANGE_TEXT_NAVIGATION, nav}
};

export const changeEditorBackground = (newState) => {
    return {type: CHANGE_EDITOR_BACKGROUND, newState}
};
