import React from 'react';
import logo from './logo.svg';
import './App.css';

// fetch('http://jump.javin.io:5000/api/zones')
//   .then(response => response.json())
//   .then(obj => console.log(obj.data[0][1].name));


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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
