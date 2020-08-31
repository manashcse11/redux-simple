import {ADD_USER_DATA} from "./actionTypes";

export const addUserData = user => ({
    type: ADD_USER_DATA,
    payload: {
        user
    }
});