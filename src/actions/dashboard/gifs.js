import {GET_API_WITHOUT_TOKEN} from "../../middleware/without_token/get-api";
import {GET_GIPHY_FAILURE, GET_GIPHY_REQUEST, GET_GIPHY_SUCCESS} from "../../types/dashboard/gify.js";

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
