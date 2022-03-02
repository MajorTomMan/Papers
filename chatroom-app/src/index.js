import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  React.createElement(
    Router,
    null,
    React.createElement(
      App,
      null,
      null
    )
  ),
  document.getElementById('root')
);