import React from 'react';
// import './index.css';

//  const Name = "Aastha";
//  const currentdate = new Date();
//  const year = currentdate.getFullYear();

function Styling(){
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

 return <h1 className='heading' style={customStyle}>{greeting}</h1>

    /* <h1 style = {customStyle}>My name is {Name}</h1>
     <p style= {{color: "blue"}}>Current year is {year}</p>
   */
   
}

export default Styling;