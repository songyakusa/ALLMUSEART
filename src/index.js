import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import React, { Suspense } from "react";
import "./i18n";
import "./loading.scss";
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <Suspense
    fallback={
      <div>
        <div class="loading"></div>
        <div class="loading2"></div>
      </div>
    }
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
// import React, { Suspense } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import './i18n';

// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//     <Suspense fallback={(<div>Loading</div>)}>
//         <App />
//     </Suspense>
//     , document.getElementById('root'));

// serviceWorker.unregister();
