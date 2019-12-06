import {GET_TEMPLATES_FAILURE, GET_TEMPLATES_REQUEST, GET_TEMPLATES_SUCCESS} from "../../types/dashboard/templates";

const initialState = {
    templateSearch: "new",
    templatesPageLoading: false,
    templatesError: false,
    templatestatus: "",
    templatesMessage: "",
    templates: []
};

export default function templatesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TEMPLATES_REQUEST:
            return {
                ...state,
                templatesPageLoading: true
            };
        case GET_TEMPLATES_SUCCESS:

            return {
                ...state,
                templatesPageLoading: false,
                templatesError: false,
                templatestatus: 200,
                templatesMessage: "",
                templates: action.response.data.data
            };
        case GET_TEMPLATES_FAILURE:
            return {
                ...state,
                templatesPageLoading: false,
                templatesError: true,
                templatestatus: action.response.status,
                templatesMessage: "Something went wrong!!",
                templates: []
            };
        default:
            return state
    }

}
