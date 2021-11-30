import './App.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {loginAction} from "./redux/action"

function App() {

  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h3>Login</h3>
      <input name="phone" type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone" />
      <button onClick={() => dispatch(loginAction(phone))}>Login</button>
    </div>
  );
}

export default App;
