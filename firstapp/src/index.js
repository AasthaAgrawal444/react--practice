 import React from 'react';
 import ReactDOM from 'react-dom';
 import {Add, Multiply, Subtract, Divide} from './components/calculator.jsx'
// import './index.css';
//  import App from './App.jsx';
// // import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from "react-router-dom";

// // const root = ReactDOM.createRoot(document.getElementById('root'));
   ReactDOM.render(
    <ul>
      <li>{Add(1, 2)}</li>
      <li>{Multiply(3, 2)}</li>
      <li>{Subtract(6, 2)}</li>
      <li>{Divide(6, 2)}</li>
    </ul>,
    document.getElementById("root")
   // <App /> ,document.getElementById("root")

   );


   
 