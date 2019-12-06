import {CALL_POST_API} from "../../middleware/token/post-api";
import {GET_TEMPLATES_FAILURE, GET_TEMPLATES_REQUEST, GET_TEMPLATES_SUCCESS} from "../../types/dashboard/templates";

export function getTemplates(body) {
    return {
        [CALL_POST_API]: {
            endpoint: process.env.REACT_APP_TEMPLATES_API,
            types: [GET_TEMPLATES_REQUEST, GET_TEMPLATES_SUCCESS, GET_TEMPLATES_FAILURE],
            body: body
        }
    }
}
