import React from 'react';
import ReactDOM from 'react-dom';
import './SSUMApp.css';
import App from "../../app/containers/App";

chrome.storage.local.get('state', (obj) => {

  ReactDOM.render(
    <App/>,
    document.querySelector('#root')
  );
});
