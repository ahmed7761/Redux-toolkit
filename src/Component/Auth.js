import React, {useState} from 'react';
import {loginAction} from "../redux/action";
import {useDispatch} from "react-redux";

const Auth = () => {
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Login</h3>
            <input name="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone" />
            <button onClick={() => dispatch(loginAction(phone))}>Login</button>
        </div>
    );
};

export default Auth;