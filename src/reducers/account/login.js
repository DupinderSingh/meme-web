const initialState = {
    auth: {
        // isAuthenticated: !!getCookie("token")
        isAuthenticated: true
    }
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }

}
