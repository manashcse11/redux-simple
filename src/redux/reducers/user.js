import {ADD_USER_DATA} from "../actionTypes";

const initialState = {
    user: null
};
const User = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER_DATA: {
            const { user } = action.payload;
            return {
                ...state,
                user: user
            };
        }
        default:
            return state;
    }
}

export default User;