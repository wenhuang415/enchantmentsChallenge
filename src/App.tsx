import React from 'react';
import logo from './logo.svg';
import './App.css';

fetch('http://jump.javin.io:5000/api/zones')
  .then(response => response.json())
  .then(obj => {
    var zones = obj.data;
    const keys = Object.keys(zones);
    //const zoneID = Object.keys(zones[keys])
    //console.log(zones);
    //console.log(keys);
    const str: String = 'name';
    keys.forEach((key) => {
      var zoneID = Object.keys(zones[key]);
      //console.log(zoneID);
      console.log(zones[key][zoneID.toString()].name);
    })
  });

function App() {  
  return (
    <div className="App">

    </div>
  );
}

export default App;
