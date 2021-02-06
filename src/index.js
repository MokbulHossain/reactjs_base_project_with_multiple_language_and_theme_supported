import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; //react-bootstrap css...
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import LockScreen from "react-lock-screen";


const getLockScreenUi = setLock => {
  return (
    <div className="react-lock-screen__ui">
      <img
        width="32"
        src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/102-256.png"
        alt="lock"
      />
      <p>Just to be safe, we locked the screen</p>
      <button onClick={() => setLock(false)}>unlock</button>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <LockScreen timeout={5000} ui={getLockScreenUi}>
       <App />
    </LockScreen>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
