import './App.css';
import React, { useState } from 'react';

//Traffic light component 
function Traffic_Light() {
//Variable on used to keep track of the components state.
//on = 1 means green light, on = 0 means red.
 const [on, SetOn] = useState(1);

 //When container is clicked variable change on.
 //Check on and display appropriate content.
 if(on == 0){
   return(
    <div className="traffic_light_container" onClick={() => SetOn(1)}>
      <div className="off_light"></div>
      <div className="green_light"></div>
    </div>
    )
 }else if(on == 1){
  return(
    <div className="traffic_light_container" onClick={() => SetOn(0)}>
      <div className="red_light"></div>
      <div className="off_light"></div>
    </div>
    )
 }  
}

function App() {
  return (
    <div className="App">
       <h1> Simply click the traffic light to change the colour!</h1>
      <header className="App-header">
       
        <Traffic_Light/>
        <Traffic_Light/>
      </header>
    </div>
  );
}

export default App;
