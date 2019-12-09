import {GET_API_WITHOUT_TOKEN} from "../../middleware/without_token/get-api";
import {
    CHANGE_GIF_NAVIGATION,
    GET_GIPHY_FAILURE,
    GET_GIPHY_REQUEST,
    GET_GIPHY_SUCCESS,
    CHANGE_GIF_SEARCH
} from "../../types/dashboard/gify.js";

export function getGifs(search) {
    return {
        [GET_API_WITHOUT_TOKEN]: {
            endpoint: process.env.REACT_APP_GIPHY_API + process.env.REACT_APP_GIPHY_KEY + "&q=" + search + "&limit=20",
            types: [GET_GIPHY_REQUEST,
                GET_GIPHY_SUCCESS,
                GET_GIPHY_FAILURE]
        }
    }
}

export const changeGifSearch = (search) => {
    return {type: CHANGE_GIF_SEARCH, search}
};


export const changeGifNav = (nav) => {
    return {type: CHANGE_GIF_NAVIGATION, nav}
};

