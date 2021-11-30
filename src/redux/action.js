import {authSlice} from "./slice";

const {actions: slice} = authSlice;


export const loginAction = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone))
};