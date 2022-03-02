import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router} from "react-router-dom"
import Pages from './router/Router';

ReactDOM.render(
  React.createElement(
    Router,
    null,
    React.createElement(
      Pages,
      null,
      null,
    )
  ),
  document.getElementById('root')
);