import './App.css';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loginAction} from "./redux/action"

function App() {

  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  console.log(auth);

  return (
    <div className="App">
      {auth.isAuth ? (
          <div>
            <p>Welcome</p>
            <p>Phone: {auth.phone}</p>
          </div>
      )

      : (
          <div>
            <h3>Login</h3>
            <input name="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone" />
            <button onClick={() => dispatch(loginAction(phone))}>Login</button>
          </div>
      )

      }
    </div>
  );
}

export default App;
