import {authSlice} from "./slice";

const {actions: slice} = authSlice;


export const loginAction = (phone) => (dispatch) => {
    dispatch(slice.setLogin(phone))
};

export const logoutAction = () => (dispatch) => {
    dispatch(slice.setLogout())
};

export const getDataAction = () => (dispatch) => {
   // dispatch(slice.setLogin(phone))
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            if(response.ok) {
                response.json()
            } else {
                console.log("Something went wrong")
            }
        })
        .then(json => dispatch(slice.setData(json)))
        .catch(err => console.error(err))
};