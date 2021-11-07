import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Flightss from './components/Flightss';
import ConfirmButton from './components/ConfirmButton';
import Searchbar from './components/Searchbar';
ReactDOM.render(
  <React.StrictMode>

    <Searchbar/>

    <Flightss/>
    
    <ConfirmButton/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
