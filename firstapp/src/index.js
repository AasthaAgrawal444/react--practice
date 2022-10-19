 import React from 'react';
 import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App.jsx';
// // import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from "react-router-dom";

// // const root = ReactDOM.createRoot(document.getElementById('root'));
//     ReactDOM.render(

//         <BrowserRouter>
//           <App />
//         </BrowserRouter>
//     ,document.getElementById("root")
//     );

//  const Name = "Aastha";
//  const currentdate = new Date();
//  const year = currentdate.getFullYear();
   
  const customStyle = {
    color : " "
//   color: "red",
//   border: "1px solid black",
  }

const date = new Date();
const currentTime = date.getHours();

let greeting;

if(currentTime < 12){
 greeting = "Good Morning!";
 customStyle.color = "red";
}else if(currentTime<18){
 greeting = "Good Afternoon!";
 customStyle.color = "green";

}else{
  greeting = "Good Night!"
  customStyle.color = "blue";

}

 ReactDOM.render(
   <div>
    {/* <h1 style = {customStyle}>My name is {Name}</h1>
     <p style= {{color: "blue"}}>Current year is {year}</p>
   */}
   <h1 className='heading' style={customStyle}>{greeting}</h1>
   </div>,
   document.getElementById("root")
 );