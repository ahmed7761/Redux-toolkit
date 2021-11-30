import React, {useEffect} from 'react';
import {logoutAction, getDataAction} from "../redux/action";
import {useDispatch, useSelector} from "react-redux";

const BasePage = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    useEffect(() =>  {
        dispatch(getDataAction())
    },[]);

    return (
        <div>
            <p>Welcome</p>
            <p>Phone: {auth.phone}</p>
            <p>Title: {auth?.data?.title}</p>
            <p>ID: {auth?.data?.id}</p>
            <button onClick={() => dispatch(logoutAction())}>Logout</button>
        </div>
    );
};

export default BasePage;