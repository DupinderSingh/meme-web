import {
    CHANGE_GIF_NAVIGATION,
    CHANGE_GIF_SEARCH,
    GET_GIPHY_FAILURE,
    GET_GIPHY_REQUEST,
    GET_GIPHY_SUCCESS
} from "../../types/dashboard/gify";

const initialState = {
    gifSearch: "reactions",
    gifPageLoading: false,
    gifError: false,
    gifStatus: "",
    gifMessage: "",
    gifs: [],
    gifNavigation: "reactions"
};

export default function gifsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_GIPHY_REQUEST:
            return {
                ...state,
                gifPageLoading: true
            };
        case GET_GIPHY_SUCCESS:

            return {
                ...state,
                gifPageLoading: false,
                gifError: false,
                gifStatus: 200,
                gifMessage: "",
                gifs: action.response.data.data
            };
        case GET_GIPHY_FAILURE:
            return {
                ...state,
                gifPageLoading: false,
                gifError: true,
                gifStatus: action.response.status,
                gifMessage: "Something went wrong!!",
                gifs: []
            };
        case CHANGE_GIF_NAVIGATION:
            return {
                ...state,
                gifNavigation: action.nav
            };
        case CHANGE_GIF_SEARCH:
            return {
                ...state,
                gifSearch: action.search
            };
        default:
            return state
    }

}
