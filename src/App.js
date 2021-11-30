import './App.css';
import Auth from './Component/Auth'
import BasePage from './Component/BasePage'
import React from "react";
import {useSelector} from "react-redux";

function App() {
  const auth = useSelector(state => state.auth);

  return (
    <div className="App">
      {auth.isAuth ? <BasePage /> : <Auth />}
    </div>
  );
}

export default App;
