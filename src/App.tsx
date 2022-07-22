import './App.css';
import Cards from './Components/Cards';

fetch('http://jump.javin.io:5000/api/zones')
  .then(response => response.json())
  .then(obj => {
    var zones = obj.data;
    const keys = Object.keys(zones);
    //const zoneID = Object.keys(zones[keys])
    //console.log(zones);
    //console.log(keys);
    keys.forEach((key) => {
      var zoneID = Object.keys(zones[key]);
      //console.log(zoneID);
      console.log(zones[key][zoneID.toString()].name);
    })
  });

function App() {  
  return (
    <div className="App">
      <Cards/>
    </div>
  );
}

export default App;
